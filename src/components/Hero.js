import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { NewspaperIcon } from '@heroicons/react/solid'
import { ChatAltIcon, CashIcon } from '@heroicons/react/solid'

import Container from './Container'
import SocialLink from './SocialLink'

const Hero = () => {
  return (
    <Container className="flex flex-col my-16 lg:flex-row lg:my-28">
      <div className="top-[90px] absolute left-0 right-0 flex justify-center space-x-2 sm:hidden">
        <SocialLink icon="bi bi-github" url="https://github.com/GloryDoge" />
        <SocialLink icon="bi bi-twitter" url="https://twitter.com/GloryDogeCoin" />
        <SocialLink icon="bi bi-telegram" url="https://t.me/GloryDogeCoin" />
      </div>
      <div className="flex flex-col items-center justify-center text-center box-border space-y-8 sm:space-y-6 lg:items-start lg:w-5/12 lg:text-left">
        <h1 className="text-gradient lg:w-[430px] xl:w-[530px] text-2xl font-bold leading-normal sm:text-5xl sm:leading-tight xl:text-6xl xl:leading-snug">
          Blockchain platforms & tools to kickstart ideas
        </h1>
        <div className="flex flex-1 items-center lg:hidden lg:mt-0">
          <StaticImage src="../images/glorypad.png" alt="" quality="90" placeholder="none" />
        </div>
        <p className="text-sm leading-relaxed sm:w-11/12 sm:text-lg lg:w-11/12 lg:text-sm xl:text-lg">
          Building a secure DeFi ecosystem to help bring creative ideas to life and protect early
          investors' funds.
        </p>

        <div className="flex flex-col justify-center text-sm space-y-3 sm:flex-row sm:w-full sm:space-x-4 sm:space-y-0 lg:justify-start xl:text-base">
          <a className="btn" href="https://docs.glorydogecoin.com" target="_blank" rel="noreferrer">
            <NewspaperIcon className="btn-icon" />
            <span className="btn-text">Read the White Paper</span>
          </a>
          <Link to="/private-sale" className="btn btn-secondary sm:hidden">
            <CashIcon className="btn-icon" />
            <span className="btn-text">Buy GLORYD</span>
          </Link>
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
      <div className="hidden flex-1 items-center mt-12 lg:flex lg:mt-0">
        <StaticImage src="../images/glorypad.png" alt="" quality="90" placeholder="none" />
      </div>
    </Container>
  )
}

export default Hero
