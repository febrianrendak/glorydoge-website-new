import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { NewspaperIcon } from '@heroicons/react/solid'
import { ChatAltIcon } from '@heroicons/react/solid'

import Container from './Container'

const Hero = () => {
  return (
    <Container className="flex my-28">
      <div className="flex flex-1 flex-col items-center justify-center mr-6">
        <h1 className="text-4xl font-bold leading-relaxed">
          Building platforms & tools to secure DeFi investors' funds during{' '}
          <span className="text-gradient">
            IDO private sales and <span className="whitespace-nowrap">pre-sales.</span>
          </span>
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
          quality="100"
          className="border border-opacity-5 rounded shadow-preview"
        />
      </div>
    </Container>
  )
}

export default Hero
