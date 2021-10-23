import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Container from './Container'

const Audits = () => {
  return (
    <Container className="flex flex-col items-center my-16">
      <div className="relative flex items-center mb-12">
        <h2 className="text-3xl font-bold">Contract audits</h2>
        <div className="h-[2px] right-[110%] sm:w-[100px] lg:w-[260px] absolute bg-gradient-to-l rounded from-secondary to-orange" />
        <div className="h-[2px] left-[110%] sm:w-[100px] lg:w-[260px] absolute bg-gradient-to-r rounded from-secondary to-orange" />
      </div>
      <div className="sm:w-[60%] grid gap-4 grid-cols-2 mx-auto sm:gap-8">
        <a
          className="h-[80px] sm:h-[120px] flex items-center justify-center px-2 w-full bg-white rounded-md hover:shadow-lg overflow-hidden transition"
          href="https://github.com/TechRate/Smart-Contract-Audits/blob/main/October/GloryDoge%20Full%20Smart%20Contract%20Security%20Audit.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../images/techrate.png"
            alt="We aim to build a secure DeFi ecosystem to help bring creative ideas to life and protect early investors' funds, says the Founder of GloryDoge"
            quality="90"
            placeholder="none"
            className="w-[160px]"
          />
        </a>
        <a
          className="h-[80px] sm:h-[120px] flex items-center justify-center px-2 w-full bg-white rounded-md hover:shadow-lg overflow-hidden transition"
          href="https://dessertswap.finance/audits/Glory%20Doge%20Coin%20BSC%20Audit%2011739615.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../images/dessertswap.png"
            alt="We aim to build a secure DeFi ecosystem to help bring creative ideas to life and protect early investors' funds, says the Founder of GloryDoge"
            quality="90"
            placeholder="none"
            className="w-[160px]"
          />
        </a>
      </div>
    </Container>
  )
}

export default Audits
