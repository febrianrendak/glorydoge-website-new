import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Container from './Container'

const Articles = () => {
  return (
    <Container className="flex flex-col items-center my-16">
      <div className="relative flex items-center mb-12">
        <h2 className="text-xl font-bold sm:text-3xl">As featured in</h2>
        <div className="h-[2px] right-[110%] w-[50px] sm:w-[100px] lg:w-[260px] absolute bg-gradient-to-l rounded from-secondary to-orange" />
        <div className="h-[2px] left-[110%] w-[50px] sm:w-[100px] lg:w-[260px] absolute bg-gradient-to-r rounded from-secondary to-orange" />
      </div>
      <div className="sm:w-[80%] grid gap-4 grid-cols-2 mx-auto sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <a
          className="h-[80px] sm:h-[120px] flex items-center justify-center px-2 w-full bg-white rounded-md hover:shadow-lg overflow-hidden transition"
          href="https://finance.yahoo.com/news/glorydoge-launches-hub-sharing-investing-085900976.html"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../images/yahoo.png"
            alt="GloryDoge Launches a Hub for Sharing, Investing, and Developing Innovative Ideas"
            quality="90"
            placeholder="none"
            className="w-[160px]"
          />
        </a>
        <a
          className="h-[80px] disabled sm:h-[120px] flex items-center justify-center px-2 w-full bg-white rounded-md hover:shadow-lg overflow-hidden transition"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../images/marketwatch.png"
            alt="GloryDoge Launches a Hub for Sharing, Investing, and Developing Innovative Ideas"
            quality="90"
            placeholder="none"
            className="w-[160px]"
          />
        </a>
        <a
          className="h-[80px] sm:h-[120px] flex items-center justify-center px-2 w-full bg-white rounded-md hover:shadow-lg overflow-hidden transition"
          href="https://www.benzinga.com/pressreleases/21/10/g23523862/glorydoge-launches-a-hub-for-sharing-investing-and-developing-innovative-ideas"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../images/benzinga.png"
            alt="GloryDoge Launches a Hub for Sharing, Investing, and Developing Innovative Ideas"
            quality="90"
            placeholder="none"
            className="w-[160px]"
          />
        </a>
        <a
          className="h-[80px] sm:h-[120px] flex items-center justify-center px-2 w-full bg-white rounded-md hover:shadow-lg overflow-hidden transition"
          href="https://menafn.com/1103029077/GloryDoge-Launches-a-Hub-for-Sharing-Investing-and-Developing-Innovative-Ideas"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../images/menafn.jpeg"
            alt="GloryDoge Launches a Hub for Sharing, Investing, and Developing Innovative Ideas"
            quality="90"
            placeholder="none"
            className="w-[160px]"
          />
        </a>
        <a
          className="h-[80px] sm:h-[120px] flex items-center justify-center px-2 w-full bg-white rounded-md hover:shadow-lg overflow-hidden transition"
          href="https://bitcourier.co.uk/news/glorydoge-interview"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../images/bitcourier.png"
            alt="We aim to build a secure DeFi ecosystem to help bring creative ideas to life and protect early investors' funds, says the Founder of GloryDoge"
            quality="90"
            placeholder="none"
            className="w-[160px]"
          />
        </a>
        <a
          className="h-[80px] sm:h-[120px] flex items-center justify-center px-2 w-full bg-white rounded-md hover:shadow-lg overflow-hidden transition"
          href="https://www.crypto-reporter.com/newsfeed/glorydoge-launches-a-hub-for-sharing-investing-and-developing-innovative-ideas-19720"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../images/crypto-reporter.png"
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
