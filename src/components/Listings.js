import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Container from './Container'

const Articles = () => {
  return (
    <Container className="flex flex-col items-center my-16">
      <div className="relative flex items-center mb-12">
        <h2 className="text-xl font-bold sm:text-3xl">Listed on</h2>
        <div className="h-[2px] right-[110%] w-[50px] sm:w-[100px] lg:w-[260px] absolute bg-gradient-to-l rounded from-secondary to-orange" />
        <div className="h-[2px] left-[110%] w-[50px] sm:w-[100px] lg:w-[260px] absolute bg-gradient-to-r rounded from-secondary to-orange" />
      </div>
      <div className="sm:w-[80%] grid gap-4 grid-cols-2 mx-auto sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <a
          className="h-[80px] sm:h-[120px] flex items-center justify-center px-2 w-full bg-white rounded-md hover:shadow-lg overflow-hidden transition"
          href="https://coinmarketcap.com/currencies/glorydoge"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../images/cmc.png"
            alt="GloryDoge Launches a Hub for Sharing, Investing, and Developing Innovative Ideas"
            quality="90"
            placeholder="none"
            className="w-[160px]"
          />
        </a>
        <a
          className="h-[80px] sm:h-[120px] flex items-center justify-center px-2 w-full bg-white rounded-md hover:shadow-lg overflow-hidden transition"
          href="https://www.coingecko.com/en/coins/glorydoge"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../images/coingecko.png"
            alt="GloryDoge Launches a Hub for Sharing, Investing, and Developing Innovative Ideas"
            quality="90"
            placeholder="none"
            className="w-[160px]"
          />
        </a>
        <a
          className="h-[80px] sm:h-[120px] flex items-center justify-center px-2 w-full bg-white rounded-md hover:shadow-lg overflow-hidden transition"
          href="https://nomics.com/assets/gloryd-glorydoge"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../images/nomics.png"
            alt="GloryDoge Launches a Hub for Sharing, Investing, and Developing Innovative Ideas"
            quality="90"
            placeholder="none"
            className="w-[160px]"
          />
        </a>
      </div>
    </Container>
  )
}

export default Articles
