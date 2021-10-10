import * as React from 'react'
import { createContext, useReducer, useEffect, useCallback, useRef } from 'react'
import Web3 from 'web3'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'

import abi from '../abi/GloryDogePrivateSale.json'

const CONTRACT_ADDRESS = '0x5583B2Bc7D5DF910d6c237aB7D4764d07CC99C90'
const CHAIN_ID = [56, 1]

const providerOptions =
  typeof window !== undefined
    ? {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            rpc: {
              1: 'https://bsc-dataseed1.binance.org',
              56: 'https://bsc-dataseed1.binance.org',
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
  sending: '',
  claiming: '',
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

    case 'SET_SENDING':
      return {
        ...state,
        sending: action.value,
      }

    case 'SET_CLAIMING':
      return {
        ...state,
        claiming: action.value,
      }

    case 'RESET':
      return {
        ...initialState,
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

  const listenToContractEvent = useCallback(
    account => {
      if (!contract.current) return

      contract.current.events.allEvents(() => fetchDataFromContract(account))
    },
    [fetchDataFromContract]
  )

  const setProviderEvents = useCallback(
    newProvider => {
      newProvider.on('accountsChanged', accounts => {
        if (accounts.length === 0) {
          web3Modal.clearCachedProvider()
          return dispatch({ type: 'RESET' })
        }
        getBalance(accounts[0])
        dispatch({ type: 'SET_ACCOUNT', value: accounts[0] || null })
        fetchDataFromContract(accounts[0])
      })

      newProvider.on('chainChanged', chainId => {
        const account = provider.current.selectedAddress || provider.current.accounts[0]
        getBalance(account)
        dispatch({ type: 'SET_CHAIN', value: Number(chainId) })
        fetchDataFromContract(account)
      })

      newProvider.on('disconnect', () => {
        web3Modal.clearCachedProvider()
        dispatch({ type: 'RESET' })
      })
    },
    [getBalance, fetchDataFromContract]
  )

  const connectWallet = useCallback(async () => {
    try {
      provider.current = await web3Modal.connect()
      web3.current = new Web3(provider.current)

      const chainId = provider.current.chainId
      const account = provider.current.selectedAddress || provider.current.accounts[0]

      if (provider.current instanceof WalletConnectProvider && !CHAIN_ID.includes(Number(chainId)))
        throw new Error('Wrong network')

      contract.current = new web3.current.eth.Contract(abi, CONTRACT_ADDRESS)

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
  }, [getBalance, setProviderEvents, fetchDataFromContract, listenToContractEvent])

  const contribute = (from, amount) => {
    try {
      web3.current.eth
        .sendTransaction({
          from,
          to: CONTRACT_ADDRESS,
          value: web3.current.utils.toWei(amount),
        })
        .once('sent', () => {
          dispatch({ type: 'SET_SENDING', value: 'Please confirm on your wallet...' })
        })
        .once('transactionHash', () => {
          dispatch({ type: 'SET_SENDING', value: 'Receiving your contribution...' })
        })
        .once('receipt', () => {
          dispatch({ type: 'SET_SENDING', value: 'Contribution successful!' })

          setTimeout(() => {
            dispatch({ type: 'SET_SENDING', value: '' })
          }, 2000)
        })
        .on('error', () => {
          dispatch({ type: 'SET_SENDING', value: 'Contribution failed. Please try again...' })

          setTimeout(() => {
            dispatch({ type: 'SET_SENDING', value: '' })
          }, 2000)
        })
    } catch (error) {
      console.error(error)
      dispatch({ type: 'SET_SENDING', value: 'Contribution failed. Please try again...' })
      setTimeout(() => {
        dispatch({ type: 'SET_SENDING', value: '' })
      }, 2000)
    }
  }

  const claimTokens = from => {
    try {
      contract.current.methods
        .claimTokens()
        .send({
          from,
        })
        .once('sent', () => {
          dispatch({ type: 'SET_CLAIMING', value: 'Please confirm on your wallet...' })
        })
        .once('transactionHash', () => {
          dispatch({ type: 'SET_CLAIMING', value: 'Claiming your tokens...' })
        })
        .once('receipt', () => {
          dispatch({ type: 'SET_CLAIMING', value: 'Tokens claimed!' })

          setTimeout(() => {
            dispatch({ type: 'SET_CLAIMING', value: '' })
          }, 2000)
        })
        .on('error', () => {
          dispatch({ type: 'SET_CLAIMING', value: 'Claiming failed. Please try again...' })

          setTimeout(() => {
            dispatch({ type: 'SET_CLAIMING', value: '' })
          }, 2000)
        })
    } catch (error) {
      console.error(error)
      dispatch({ type: 'SET_CLAIMING', value: 'Claiming failed. Please try again...' })
      setTimeout(() => {
        dispatch({ type: 'SET_CLAIMING', value: '' })
      }, 2000)
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (web3Modal.cachedProvider) {
      connectWallet()
    }
  }, [connectWallet])

  if (typeof window === 'undefined') return <>{children}</>

  return (
    <GlobalDispatchContext.Provider value={{ dispatch, connectWallet, contribute, claimTokens }}>
      <GlobalStateContext.Provider value={state}>{children}</GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

export default ContextProvider
