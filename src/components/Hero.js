import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { NewspaperIcon } from '@heroicons/react/solid'
import { ChatAltIcon } from '@heroicons/react/solid'

import Container from './Container'

const Hero = () => {
  return (
    <Container className="flex my-28">
      <div className="flex flex-col items-start justify-center w-5/12 box-border">
        <h1 className="w-11/12 text-2xl font-bold leading-relaxed">
          Building platforms and tools to secure DeFi investors' funds during IDO{' '}
          <span className="text-gradient">private sales</span> &{' '}
          <span className="text-gradient">pre-sales</span>.
        </h1>

        <div className="flex mt-8 w-full space-x-4">
          <a className="btn" href="https://docs.glorydogecoin.com" target="_blank" rel="noreferrer">
            <NewspaperIcon className="btn-icon" />
            <span>Read the White Paper</span>
          </a>
          <a
            className="btn btn-secondary"
            href="https://t.me/GloryDogeCoin"
            target="_blank"
            rel="noreferrer"
          >
            <ChatAltIcon className="btn-icon" />
            <span>Join on Telegram</span>
          </a>
        </div>
      </div>
      <div className="flex-1">
        <StaticImage
          src="../images/glorypush.png"
          alt=""
          quality="90"
          // width={608}
          className=""
          placeholder="none"
        />
      </div>
    </Container>
  )
}

export default Hero
