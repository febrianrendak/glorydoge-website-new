import * as React from 'react'
import ContractAddress from './ContractAddress'

import SectionContainer from './SectionContainer'

const Feature = ({ header, title, description, link }) => {
  return (
    <div className="flex flex-col items-center w-9/12">
      <span className="text-center font-expletus text-9xl font-bold">{header}</span>
      <h3 className="text-gradient mb-4 text-2xl font-bold">{title}</h3>
      <p className="text-center">{description}</p>
      {link}
    </div>
  )
}

const TokenSection = () => {
  return (
    <SectionContainer
      title="GLORYD"
      description="The backbone of our projects, and the golden bridge connecting our DAPPs to our inverstors. Backed by a solid economic model."
    >
      <div className="grid gap-y-32 grid-cols-2 justify-items-center mx-auto my-32 w-9/12">
        <Feature
          header="4%"
          title="Holder rewards tax"
          description="4% of every transaction is instantly distributed to all holders."
        />
        <Feature
          header="2%"
          title="Marketing tax"
          description="2% of every transaction is collected for marketing to spread the word to founders and investors out there."
          link={
            <a
              className="block mt-2 text-secondary"
              href="https://bscscan.com/address/0xe2149C2E2A9e664E9AD5f20eb90db575bcb95F18"
              target="_blank"
              rel="noreferrer"
            >
              (Marketing wallet)
            </a>
          }
        />
        <Feature
          header="4%"
          title="Team & devs tax"
          description="4% of every transaction is dedicated to keep the project going by covering team expenses."
          link={
            <a
              className="block mt-2 text-secondary"
              href="https://bscscan.com/address/0xdc4340b73a388863590476ef7d450bc316d87712"
              target="_blank"
              rel="noreferrer"
            >
              (Team wallet)
            </a>
          }
        />
        <Feature
          header="0%"
          title="Wallet transfer tax"
          description="Normal transfers from wallet to wallet are not subject to any fees or taxes."
        />

        <ContractAddress className="col-span-2" />

        <Feature
          header="50%"
          title="DAPPs revenue distribution"
          description="50% of the revenue from our DAPPs is distributed back to our investors in GLORYD."
        />
        <Feature
          header="10%"
          title="Token liquidity from DAPPs"
          description="10% of the revenue from our DAPPs is added as locked liquidity for GLORYD on PancakeSwap."
        />
      </div>
    </SectionContainer>
  )
}

export default TokenSection
