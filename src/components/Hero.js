import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { NewspaperIcon } from '@heroicons/react/solid'
import { ChatAltIcon } from '@heroicons/react/solid'

import Container from './Container'

const Hero = () => {
  return (
    <Container className="flex flex-col my-28 lg:flex-row">
      <div className="flex flex-col items-center justify-center text-center box-border space-y-3 sm:space-y-6 lg:items-start lg:w-5/12 lg:text-left">
        <h1 className="text-gradient lg:w-[430px] xl:w-[530px] text-2xl font-bold leading-normal sm:text-5xl sm:leading-tight xl:text-6xl xl:leading-snug">
          Blockchain platforms & tools to kickstart ideas
        </h1>
        <p className="w-11/12 text-sm leading-relaxed sm:text-lg lg:w-11/12 lg:text-sm xl:text-lg">
          Building a secure DeFi ecosystem to help bring creative ideas to life and protect early
          investors' funds.
        </p>

        <div className="flex flex-col justify-center text-sm space-y-3 sm:flex-row sm:w-full sm:space-x-4 sm:space-y-0 lg:justify-start xl:text-base">
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
            <span className="btn-text">Join on Telegram</span>
          </a>
        </div>
      </div>
      <div className="flex flex-1 items-center mt-12 lg:mt-0">
        <StaticImage src="../images/glorypad.png" alt="" quality="90" placeholder="none" />
      </div>
    </Container>
  )
}

export default Hero
