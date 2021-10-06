import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { NewspaperIcon } from '@heroicons/react/solid'
import { ChatAltIcon } from '@heroicons/react/solid'

import Container from './Container'

const Hero = () => {
  return (
    <Container className="flex my-28">
      <div className="flex flex-col items-start justify-center w-5/12 box-border space-y-6">
        <h1 className="text-gradient w-[530px] text-6xl font-bold leading-tight">
          Blockchain platforms & tools to kickstart ideas
        </h1>
        <p className="w-11/12 text-lg leading-relaxed">
          Building a secure DeFi ecosystem to help bring creative ideas to life and protect early
          investors' funds.
        </p>

        <div className="flex w-full space-x-4">
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
      <div className="flex flex-1 items-center">
        <StaticImage src="../images/glorypad.png" alt="" quality="90" placeholder="none" />
      </div>
    </Container>
  )
}

export default Hero
