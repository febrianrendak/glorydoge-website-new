import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { NewspaperIcon } from '@heroicons/react/solid'
import { ChatAltIcon } from '@heroicons/react/solid'

import Container from './Container'

const Jumbotron = () => {
  return (
    <Container className="flex mt-28">
      <div className="flex flex-col flex-1 items-center justify-center mr-6">
        <h1 className="text-4xl leading-relaxed font-bold">
          Building platforms & tools to secure DeFi investors' funds during{' '}
          <span className="text-gradient">
            IDO private sales and <span className="whitespace-nowrap">pre-sales.</span>
          </span>
        </h1>

        <div className="flex w-full space-x-4 mt-8">
          <a
            className="btn-primary"
            href="https://docs.glorydogecoin.com"
            target="_blank"
            rel="noreferrer"
          >
            <NewspaperIcon className="btn-icon" />
            <span>Read the White Paper</span>
          </a>
          <a
            className="btn-secondary"
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
          className="shadow-preview border border-opacity-5 rounded"
        />
      </div>
    </Container>
  )
}

export default Jumbotron
