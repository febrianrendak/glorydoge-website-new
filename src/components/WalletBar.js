import * as React from 'react'
import { useContext } from 'react'

import { GlobalDispatchContext, GlobalStateContext } from './ContextProvider'

const WalletBarInfo = ({ children }) => {
  return (
    <div className="px-4 py-2 bg-black bg-opacity-30 border border-opacity-5 rounded-lg">
      <p>{children}</p>
    </div>
  )
}

const WalletBar = () => {
  const { connectWallet } = useContext(GlobalDispatchContext)
  const { chain, account, balance } = useContext(GlobalStateContext)

  if (!account)
    return (
      <button className="btn btn-secondary" onClick={connectWallet}>
        <span className="btn-text">Connect wallet</span>
      </button>
    )

  return (
    <div className="flex space-x-3">
      <WalletBarInfo>BSC</WalletBarInfo>
      <WalletBarInfo>{balance} BNB</WalletBarInfo>
      <WalletBarInfo>
        {account.slice(0, 6)}...{account.slice(-4, account.length)}
      </WalletBarInfo>
    </div>
  )
}

export default WalletBar
