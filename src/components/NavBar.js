import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { CashIcon } from '@heroicons/react/solid'

import Container from './Container'
import SocialLink from './SocialLink'

const NavBar = () => {
  return (
    <div className="sticky z-50 top-0 w-full h-20 bg-primary border-b border-gray-800 border-opacity-30">
      <div className="absolute bottom-0 w-full h-px bg-black bg-opacity-30"></div>
      <Container className="flex items-center justify-center h-full sm:justify-between">
        <div className="h-full">
          <h1 className="h-full">
            <Link to="/" className="flex items-center h-full font-expletus text-2xl">
              <StaticImage
                src="../images/logo.svg"
                alt=""
                className="mr-5 w-11"
                quality={100}
                placeholder="none"
              />
              <span>GloryDoge</span>
            </Link>
          </h1>
        </div>
        <ul className="flex items-center text-sm space-x-6">
          <div className="hidden space-x-6 lg:contents">
            <li>
              <Link to="/#product">GloryPad</Link>
            </li>
            <li>
              <Link to="/#token">Token</Link>
            </li>
            <li>
              <Link to="/#roadmap">Roadmap</Link>
            </li>
            <li>
              <Link to="/#team">Team</Link>
            </li>
            <li>
              <a href="https://docs.glorydogecoin.com" target="_blank" rel="noreferrer">
                White Paper
              </a>
            </li>
          </div>
          <li className="hidden space-x-2 sm:flex">
            <SocialLink icon="bi bi-github" url="https://github.com/GloryDoge" />
            <SocialLink icon="bi bi-twitter" url="https://twitter.com/GloryDogeCoin" />
            <SocialLink icon="bi bi-telegram" url="https://t.me/GloryDogeCoin" />
          </li>
          <li className="hidden sm:block">
            <Link to="/private-sale" className="btn btn-secondary">
              <CashIcon className="btn-icon" />
              <span>Buy GLORYD</span>
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default NavBar
