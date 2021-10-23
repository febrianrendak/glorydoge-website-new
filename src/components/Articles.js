import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Container from './Container'

const Articles = () => {
  return (
    <Container className="flex flex-col items-center my-16">
      <div className="relative flex items-center mb-12">
        <h2 className="text-3xl font-bold">As featured in</h2>
        <div className="h-[2px] right-[110%] sm:w-[100px] lg:w-[260px] absolute bg-gradient-to-l rounded from-secondary to-orange" />
        <div className="h-[2px] left-[110%] sm:w-[100px] lg:w-[260px] absolute bg-gradient-to-r rounded from-secondary to-orange" />
      </div>
      <div className="sm:w-[80%] grid gap-4 grid-cols-2 mx-auto sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
          className="h-[80px] disabled sm:h-[120px] flex items-center justify-center px-2 w-full bg-white rounded-md hover:shadow-lg overflow-hidden transition"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../images/yahoo.png"
            alt="We aim to build a secure DeFi ecosystem to help bring creative ideas to life and protect early investors' funds, says the Founder of GloryDoge"
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
            src="../images/yahoo-money.png"
            alt="We aim to build a secure DeFi ecosystem to help bring creative ideas to life and protect early investors' funds, says the Founder of GloryDoge"
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
            alt="We aim to build a secure DeFi ecosystem to help bring creative ideas to life and protect early investors' funds, says the Founder of GloryDoge"
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
            src="../images/digital-journal.png"
            alt="We aim to build a secure DeFi ecosystem to help bring creative ideas to life and protect early investors' funds, says the Founder of GloryDoge"
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
            src="../images/big-news-network.png"
            alt="We aim to build a secure DeFi ecosystem to help bring creative ideas to life and protect early investors' funds, says the Founder of GloryDoge"
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
            src="../images/menafn.jpeg"
            alt="We aim to build a secure DeFi ecosystem to help bring creative ideas to life and protect early investors' funds, says the Founder of GloryDoge"
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
            src="../images/finanznachrichten.png"
            alt="We aim to build a secure DeFi ecosystem to help bring creative ideas to life and protect early investors' funds, says the Founder of GloryDoge"
            quality="90"
            placeholder="none"
            className="w-[200px]"
          />
        </a>
      </div>
    </Container>
  )
}

export default Articles
