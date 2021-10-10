import * as React from 'react'
import { useContext, useState } from 'react'

import NavBar from './NavBar'
import Container from './Container'
import WalletBar from './WalletBar'
import { GlobalDispatchContext, GlobalStateContext } from './ContextProvider'

const ProgressBar = ({ totalContributions = 0, privateSaleCap = 0 }) => {
  const progress = (totalContributions * 100) / privateSaleCap

  return (
    <div className="relative w-full h-4 bg-white bg-opacity-10 rounded-lg overflow-hidden">
      <div
        className={`absolute bottom-0 left-0 top-0 bg-secondary rounded-bl-lg rounded-tl-lg transition`}
        style={{ width: `${progress || 0}%` }}
      />
    </div>
  )
}

const PrivateSale = ({ location }) => {
  const { privateSaleData, connectionError, account, sending, claiming } =
    useContext(GlobalStateContext)
  const { contribute, claimTokens } = useContext(GlobalDispatchContext)
  const [contribution, setContribution] = useState(0)

  const onContribute = () => {
    contribute(account, contribution)
  }

  const onClaimTokens = () => claimTokens(account)

  return (
    <>
      <NavBar location={location} />
      <Container className="flex flex-col items-center px-1 py-6 space-y-8">
        <h1 className="text-gradient font-expletus text-2xl font-bold leading-relaxed sm:text-4xl">
          GloryDoge private sale
        </h1>

        <WalletBar className="text-sm sm:hidden" />

        <div className="sm:w-[460px] flex flex-col items-center w-full bg-white bg-opacity-10 rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col items-center p-5 space-y-4">
            {privateSaleData && (
              <>
                <p className="text-2xl font-bold">
                  {privateSaleData.totalContributions} / {privateSaleData.privateSaleCap} BNB
                </p>
                <p>
                  Min: {privateSaleData.minContribution} BNB - Max:{' '}
                  {privateSaleData.maxContribution} BNB
                </p>
              </>
            )}
          </div>
          <div className="min-h-[124px] flex flex-col items-center justify-center p-5 w-full bg-black bg-opacity-30">
            {privateSaleData ? (
              <>
                <div className="py-2 w-full">
                  <p>{privateSaleData.totalContributors} Contributors</p>
                </div>
                <ProgressBar
                  totalContributions={privateSaleData.totalContributions}
                  privateSaleCap={privateSaleData.privateSaleCap}
                />
                <div className="py-2 w-full">
                  <p>{privateSaleData.amountPerBNB?.toLocaleString()} GLORYD / 1 BNB</p>
                </div>
              </>
            ) : (
              <>
                {connectionError ? (
                  <p className="text-center text-orange">
                    There was an issue while trying to connect your wallet. Please make sure you're
                    on the right network (Binance Smart Chain) and try again.
                  </p>
                ) : (
                  <p className="text-center">Connect your wallet to start</p>
                )}
              </>
            )}
          </div>
          <div className="flex flex-1 flex-col p-5 w-full space-y-5">
            {privateSaleData && (
              <>
                {sending && <p className="text-center text-secondary">{sending}</p>}
                {!privateSaleData.privateSaleOpen && (
                  <p className="text-center text-orange">Private sale is closed for now</p>
                )}
                <div className="flex flex-col bg-secondary bg-opacity-40 rounded overflow-hidden focus-within:ring-1">
                  <p className="flex-1 px-4 py-2">Amount to contribute</p>
                  <div className="h-[50px] flex items-center w-full text-gray-800 text-base bg-white sm:text-xl">
                    <input
                      placeholder="0.0"
                      type="number"
                      className="px-4 w-full h-full bg-transparent outline-none"
                      value={contribution || ''}
                      onChange={e => setContribution(e.target.value || 0)}
                      step="0.01"
                    />
                    <p className="pl-0 px-4 py-2">BNB</p>
                  </div>
                </div>

                <div className="flex flex-col bg-black bg-opacity-20 rounded overflow-hidden focus-within:ring-1">
                  <p className="flex-1 px-4 py-2">You will get</p>
                  <div className="h-[50px] flex items-center w-full text-base bg-black bg-opacity-30 sm:text-xl">
                    <input
                      placeholder="0.0"
                      className="px-4 w-full h-full bg-transparent outline-none"
                      readOnly
                      value={(contribution * privateSaleData.amountPerBNB).toLocaleString() || ''}
                    />
                    <p className="pl-0 px-4 py-2">GLORYD</p>
                  </div>
                </div>

                <button
                  className="btn btn-secondary flex justify-center disabled:opacity-40 disabled:pointer-events-none"
                  disabled={
                    Number(contribution) === 0 ||
                    contribution < 0.1 ||
                    contribution > 3 ||
                    !privateSaleData.privateSaleOpen ||
                    sending
                  }
                  onClick={onContribute}
                >
                  Contribute
                </button>

                {claiming && <p className="text-center text-secondary">{claiming}</p>}

                <div className="flex flex-col bg-black bg-opacity-20 rounded overflow-hidden focus-within:ring-1">
                  <p className="flex-1 px-4 py-2">Your contribution & balance</p>
                  <div className="h-[50px] flex items-center w-full text-base bg-black bg-opacity-30 sm:text-xl">
                    <input
                      placeholder="0.0"
                      className="px-4 w-full h-full bg-transparent outline-none"
                      readOnly
                      value={privateSaleData.contribution.toLocaleString()}
                    />
                    <p className="pl-0 px-4 py-2">BNB</p>
                  </div>
                  <div className="h-[50px] flex items-center w-full text-base bg-black bg-opacity-30 sm:text-xl">
                    <input
                      placeholder="0.0"
                      className="px-4 w-full h-full bg-transparent outline-none"
                      readOnly
                      value={(
                        privateSaleData.contribution * privateSaleData.amountPerBNB
                      ).toLocaleString()}
                    />
                    <p className="pl-0 px-4 py-2">GLORYD</p>
                  </div>
                </div>

                <button
                  className="btn flex justify-center disabled:opacity-40 disabled:pointer-events-none"
                  disabled={
                    !privateSaleData.claimOpen || privateSaleData.contribution === 0 || claiming
                  }
                  onClick={onClaimTokens}
                >
                  Claim tokens
                </button>

                {!privateSaleData.claimOpen && (
                  <p className="text-center text-orange text-sm">
                    You can claim your tokens right after PancakeSwap launch
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  )
}

export default PrivateSale
