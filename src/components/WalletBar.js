import * as React from 'react'
import { useContext } from 'react'

import { GlobalDispatchContext, GlobalStateContext } from './ContextProvider'

const CHAIN_ID = [56]

const WalletBarInfo = ({ children }) => {
  return (
    <div className="px-4 py-2 bg-black bg-opacity-30 border border-opacity-5 rounded-lg">
      <p>{children}</p>
    </div>
  )
}

const WalletBar = ({ className }) => {
  const { connectWallet } = useContext(GlobalDispatchContext)
  const { chain, account, balance } = useContext(GlobalStateContext)

  if (!account)
    return (
      <button className={`btn btn-secondary ${className}`} onClick={connectWallet}>
        <span className="btn-text">Connect wallet</span>
      </button>
    )

  if (!CHAIN_ID.includes(chain)) {
    return (
      <div
        className={`px-4 py-2 bg-orange bg-opacity-30 border border-orange border-opacity-60 rounded-lg ${className}`}
      >
        <p>Wrong network! Please switch to BSC.</p>
      </div>
    )
  }

  return (
    <div className={`flex space-x-1 sm:space-x-3 ${className}`}>
      <WalletBarInfo>BSC</WalletBarInfo>
      <WalletBarInfo>{balance} BNB</WalletBarInfo>
      <WalletBarInfo>
        {account.slice(0, 6)}...{account.slice(-4, account.length)}
      </WalletBarInfo>
    </div>
  )
}

export default WalletBar
