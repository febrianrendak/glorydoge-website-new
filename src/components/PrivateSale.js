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
        className={`absolute bottom-0 left-0 top-0 from-[#8A2387] via-[#E94057] to-[#F27121] bg-gradient-to-r rounded-bl-lg rounded-tl-lg transition`}
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
        <h1 className="text-2xl font-bold leading-relaxed sm:text-4xl">GloryDoge private sale</h1>
        <p className="text-center">
          Contribute to our private sale and get{' '}
          <span className="whitespace-nowrap">10 Billion</span> more tokens than pre-sale and
          launch!
        </p>

        <WalletBar className="text-sm sm:hidden" />

        <div className="sm:w-[460px] flex flex-col items-center w-full bg-white bg-opacity-10 rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col items-center p-5 w-full bg-gradient-to-r space-y-4">
            {privateSaleData && account && (
              <>
                <p className="text-2xl font-bold">
                  {privateSaleData.totalContributions} / {privateSaleData.privateSaleCap} BNB
                </p>
                <p className="font-bold">Total contributions</p>
              </>
            )}
          </div>
          <div className="min-h-[124px] flex flex-col items-center justify-center p-5 w-full bg-black bg-opacity-30">
            {privateSaleData && account ? (
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
            {privateSaleData && account && (
              <>
                {sending && <p className="text-center text-secondary">{sending}</p>}
                {!privateSaleData.privateSaleOpen && (
                  <p className="text-center text-orange">
                    Private sale will start today at 8 PM CEST
                  </p>
                )}
                <div>
                  <div className="from-[#8A2387] via-[#E94057] to-[#F27121] flex flex-col bg-gradient-to-r rounded overflow-hidden">
                    <p className="flex-1 px-4 py-2">Amount to contribute</p>
                  </div>

                  <div className="h-[50px] bg-[#0F1921] ring-offset-[#1A2D3A] flex items-center mt-3 w-full text-white text-base bg-opacity-60 rounded shadow-inner focus-within:ring-2 ring-secondary ring-offset-2 sm:text-xl">
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

                  <p className="pt-2 text-center">
                    Min: {privateSaleData.minContribution} BNB - Max:{' '}
                    {privateSaleData.maxContribution} BNB
                  </p>
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
                  <p className="text-center text-secondary text-sm">
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
