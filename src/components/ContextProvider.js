import * as React from 'react'
import { createContext, useReducer, useEffect, useCallback, useRef } from 'react'
import Web3 from 'web3'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'

import abi from '../abi/GloryDogePrivateSale.json'

const providerOptions =
  typeof window !== undefined
    ? {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            rpc: {
              4: 'http://localhost:8545',
            },
          },
        },
      }
    : null

const web3Modal =
  typeof window !== 'undefined'
    ? new Web3Modal({
        providerOptions,
        theme: 'dark',
        cacheProvider: true,
      })
    : null

export const GlobalStateContext = createContext()
export const GlobalDispatchContext = createContext()

const initialState = {
  chain: null,
  account: null,
  balance: null,
  privateSaleData: null,
  connectionError: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CHAIN':
      return {
        ...state,
        chain: action.value,
      }

    case 'SET_ACCOUNT':
      return {
        ...state,
        account: action.value,
      }

    case 'SET_BALANCE':
      return {
        ...state,
        balance: action.value,
      }

    case 'SET_PRIVATE_SALE_DATA':
      return {
        ...state,
        privateSaleData: action.value,
      }

    case 'SET_CONNECTION_ERROR':
      return {
        ...state,
        connectionError: action.value,
      }

    default:
      throw new Error('Invalid action type')
  }
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const provider = useRef()
  const web3 = useRef()
  const contract = useRef()

  const getBalance = useCallback(async account => {
    try {
      const balance = await web3.current.eth.getBalance(account)
      dispatch({ type: 'SET_BALANCE', value: (balance / 10 ** 18).toFixed(2) })
    } catch (error) {}
  }, [])

  const fetchDataFromContract = useCallback(async account => {
    if (!contract.current) return

    try {
      const privateSaleOpen = await contract.current.methods.privateSaleOpen().call()
      const claimOpen = await contract.current.methods.claimOpen().call()
      const privateSaleCap = await contract.current.methods.privateSaleCap().call()
      const minContribution = await contract.current.methods.minContribution().call()
      const maxContribution = await contract.current.methods.maxContribution().call()
      const amountPerBNB = await contract.current.methods.amountPerBNB().call()
      const totalContributions = await contract.current.methods.totalContributions().call()
      const totalContributors = await contract.current.methods.totalContributors().call()
      const contribution = await contract.current.methods.contribution(account).call()

      dispatch({
        type: 'SET_PRIVATE_SALE_DATA',
        value: {
          privateSaleOpen,
          claimOpen,
          privateSaleCap: privateSaleCap / 10 ** 18,
          minContribution: minContribution / 10 ** 18,
          maxContribution: maxContribution / 10 ** 18,
          amountPerBNB: amountPerBNB / 10 ** 18,
          totalContributions: totalContributions / 10 ** 18,
          totalContributors,
          contribution: contribution / 10 ** 18,
        },
      })
    } catch (error) {
      console.error(error)
    }
  }, [])

  const listenToContractEvent = account => {
    if (!contract.current) return

    contract.current.events.allEvents(() => fetchDataFromContract(account))
  }

  const setProviderEvents = useCallback(
    newProvider => {
      newProvider.on('accountsChanged', accounts => {
        dispatch({ type: 'SET_ACCOUNT', value: accounts[0] || null })
        fetchDataFromContract(accounts[0])
      })

      newProvider.on('chainChanged', chainId => {
        const account = provider.current.selectedAddress || provider.current.accounts[0]
        getBalance(account)
        dispatch({ type: 'SET_CHAIN', value: Number(chainId) })
        fetchDataFromContract(account)
      })
    },
    [getBalance]
  )

  const connectWallet = useCallback(async () => {
    try {
      provider.current = await web3Modal.connect()
      web3.current = new Web3(provider.current)

      const chainId = provider.current.chainId
      const account = provider.current.selectedAddress || provider.current.accounts[0]

      if (provider.current instanceof WalletConnectProvider && Number(chainId) !== 4)
        throw new Error('Wrong network')

      contract.current = new web3.current.eth.Contract(
        abi,
        '0x7a6f4EBB2ADaB5670777845dA639C4242982F2c9'
      )

      setProviderEvents(provider.current)
      dispatch({ type: 'SET_CHAIN', value: Number(chainId) })
      dispatch({ type: 'SET_ACCOUNT', value: account })
      getBalance(account)
      fetchDataFromContract(account)
      listenToContractEvent(account)
    } catch (error) {
      console.error(error)
      provider.current?.disconnect && provider.current.disconnect()
      web3Modal.clearCachedProvider()
      dispatch({ type: 'SET_CONNECTION_ERROR', value: true })
    }
  }, [getBalance, setProviderEvents])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (web3Modal.cachedProvider) {
      connectWallet()
    }
  }, [connectWallet])

  if (typeof window === 'undefined') return <>{children}</>

  return (
    <GlobalDispatchContext.Provider value={{ dispatch, connectWallet }}>
      <GlobalStateContext.Provider value={state}>{children}</GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

export default ContextProvider
