import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Container from './Container'

const Twitter = () => {
  return (
    <a
      className="twitter-timeline"
      data-theme="light"
      href="https://twitter.com/GloryDogeCoin?ref_src=twsrc%5Etfw"
    >
      Tweets by GloryDogeCoin
    </a>
  )
}

const Articles = () => {
  return (
    <div className="grid gap-4 grid-cols-1 p-1 w-full bg-primary lg:grid-cols-2">
      <a
        className="h-[120px] flex items-center justify-center px-10 w-full bg-white rounded-md hover:shadow-lg overflow-hidden transition"
        href="https://bitcourier.co.uk/news/glorydoge-interview"
        target="_blank"
        rel="noreferrer"
      >
        <StaticImage
          src="../images/bitcourier.png"
          alt="We aim to build a secure DeFi ecosystem to help bring creative ideas to life and protect early investors' funds, says the Founder of GloryDoge"
          quality="90"
          placeholder="none"
          className="w-[200px]"
        />
      </a>
      <a
        className="h-[120px] flex items-center justify-center px-10 w-full bg-white rounded-md hover:shadow-lg overflow-hidden transition"
        target="_blank"
        rel="noreferrer"
      >
        <StaticImage
          src="../images/yahoo.png"
          alt="We aim to build a secure DeFi ecosystem to help bring creative ideas to life and protect early investors' funds, says the Founder of GloryDoge"
          quality="90"
          placeholder="none"
          className="w-[200px]"
        />
      </a>
      <a
        className="h-[120px] flex items-center justify-center px-10 w-full bg-white rounded-md hover:shadow-lg overflow-hidden transition"
        target="_blank"
        rel="noreferrer"
      >
        <StaticImage
          src="../images/yahoo-money.png"
          alt="We aim to build a secure DeFi ecosystem to help bring creative ideas to life and protect early investors' funds, says the Founder of GloryDoge"
          quality="90"
          placeholder="none"
          className="w-[200px]"
        />
      </a>
      <a
        className="h-[120px] flex items-center justify-center px-10 w-full bg-white rounded-md hover:shadow-lg overflow-hidden transition"
        target="_blank"
        rel="noreferrer"
      >
        <StaticImage
          src="../images/marketwatch.png"
          alt="We aim to build a secure DeFi ecosystem to help bring creative ideas to life and protect early investors' funds, says the Founder of GloryDoge"
          quality="90"
          placeholder="none"
          className="w-[200px]"
        />
      </a>
      <a
        className="h-[120px] flex items-center justify-center px-10 w-full bg-white rounded-md hover:shadow-lg overflow-hidden transition"
        target="_blank"
        rel="noreferrer"
      >
        <StaticImage
          src="../images/digital-journal.png"
          alt="We aim to build a secure DeFi ecosystem to help bring creative ideas to life and protect early investors' funds, says the Founder of GloryDoge"
          quality="90"
          placeholder="none"
          className="w-[200px]"
        />
      </a>
      <a
        className="h-[120px] flex items-center justify-center px-10 w-full bg-white rounded-md hover:shadow-lg overflow-hidden transition"
        target="_blank"
        rel="noreferrer"
      >
        <StaticImage
          src="../images/big-news-network.png"
          alt="We aim to build a secure DeFi ecosystem to help bring creative ideas to life and protect early investors' funds, says the Founder of GloryDoge"
          quality="90"
          placeholder="none"
          className="w-[200px]"
        />
      </a>
    </div>
  )
}

const NewsBox = ({ title, description, type }) => {
  return (
    <Container className="my-16">
      <div className="h-[400px] relative z-0 w-full bg-black bg-opacity-30 rounded-lg shadow-inner overflow-hidden">
        <div className="t-0 z-[-1] md:w-[45%] absolute flex flex-col items-center justify-center px-6 w-full h-32 text-center pointer-events-none space-y-3 sm:px-20 md:h-full">
          <h3 className="text-gradient line-height-normal text-xl font-bold lg:text-4xl xl:text-5xl">
            {title}
          </h3>
          <p className="text-sm lg:text-base">{description}</p>
        </div>
        <div className="md:pr-[5%] md:pl-[50%] pb-8 pt-32 w-full h-full overflow-y-auto">
          {type === 'twitter' && <Twitter />}
          {type === 'articles' && <Articles />}
        </div>
      </div>
    </Container>
  )
}

export default NewsBox
