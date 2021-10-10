import * as React from 'react'
import { useContext, useState } from 'react'

import NavBar from './NavBar'
import Container from './Container'
import { GlobalDispatchContext, GlobalStateContext } from './ContextProvider'

const ProgressBar = ({ totalContributions = 0, privateSaleCap = 0 }) => {
  const progress = (totalContributions * 100) / privateSaleCap

  return (
    <div className="relative w-full h-4 bg-white bg-opacity-10 rounded-lg">
      <div
        className={`w-[${
          progress || 0
        }%] absolute bottom-0 left-0 top-0 bg-secondary rounded-bl-lg rounded-tl-lg transition`}
      />
    </div>
  )
}

const PrivateSale = ({ location }) => {
  const { privateSaleData, connectionError } = useContext(GlobalStateContext)
  const [contribution, setContribution] = useState(0)

  return (
    <>
      <NavBar location={location} />
      <Container className="flex flex-col items-center py-6 space-y-8">
        <h1 className="text-gradient font-expletus text-4xl font-bold leading-relaxed">
          GloryDoge private sale
        </h1>

        <div className="w-[460px] flex flex-col items-center bg-white bg-opacity-10 rounded-lg shadow-md overflow-hidden">
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
                  totalContributions={privateSaleData.totalContributors}
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
                {!privateSaleData.privateSaleOpen && (
                  <p className="text-center text-orange">Private sale will start shortly</p>
                )}
                <div className="flex flex-col bg-black bg-opacity-20 rounded overflow-hidden focus-within:ring-1">
                  <p className="flex-1 px-4 py-2">Amount to contribute</p>
                  <div className="h-[50px] flex items-center w-full text-xl bg-secondary bg-opacity-20">
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
                  <div className="h-[50px] flex items-center w-full text-xl bg-black bg-opacity-20">
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
                    !privateSaleData.privateSaleOpen
                  }
                >
                  Contribute
                </button>

                <div className="flex flex-col bg-black bg-opacity-20 rounded overflow-hidden focus-within:ring-1">
                  <p className="flex-1 px-4 py-2">Your total contributon & balance</p>
                  <div className="h-[50px] flex items-center w-full text-xl bg-black bg-opacity-20">
                    <input
                      placeholder="0.0"
                      className="px-4 w-full h-full bg-transparent outline-none"
                      readOnly
                      value={privateSaleData.contribution.toLocaleString()}
                    />
                    <p className="pl-0 px-4 py-2">BNB</p>
                  </div>
                  <div className="h-[50px] flex items-center w-full text-xl bg-black bg-opacity-20">
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
                  disabled={!privateSaleData.claimOpen}
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
