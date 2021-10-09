import * as React from 'react'
import { createContext, useReducer, useEffect, useCallback, useRef } from 'react'
import Web3 from 'web3'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'

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

    default:
      throw new Error('Invalid action type')
  }
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const provider = useRef()
  const web3 = useRef()

  const getBalance = useCallback(async account => {
    try {
      const balance = await web3.current.eth.getBalance(account)
      dispatch({ type: 'SET_BALANCE', value: (balance / 10 ** 18).toFixed(2) })
    } catch (error) {}
  }, [])

  const setProviderEvents = useCallback(
    newProvider => {
      newProvider.on('accountsChanged', accounts => {
        dispatch({ type: 'SET_ACCOUNT', value: accounts[0] || null })
      })

      newProvider.on('chainChanged', chainId => {
        const account = provider.current.selectedAddress || provider.current.accounts[0]
        getBalance(account)
        dispatch({ type: 'SET_CHAIN', value: Number(chainId) })
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

      if (Number(chainId) !== 4) throw new Error('Wrong network')

      setProviderEvents(provider.current)
      dispatch({ type: 'SET_CHAIN', value: Number(chainId) })
      dispatch({ type: 'SET_ACCOUNT', value: account })
      getBalance(account)
    } catch (error) {
      provider.current.disconnect && provider.current.disconnect()
      web3Modal.clearCachedProvider()
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
