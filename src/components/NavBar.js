import * as React from 'react'
import { Link } from 'gatsby'
import { CashIcon } from '@heroicons/react/solid'

import Container from './Container'

import logoImage from '../images/logo.svg'

const NavBar = () => {
  return (
    <div className="border-b border-gray-800 border-opacity-30 h-20 w-full sticky top-0 bg-primary z-50">
      <div className="absolute w-full h-px bg-black bg-opacity-30 bottom-0"></div>
      <Container className="h-full flex items-center justify-between">
        <div className="h-full flex items-center">
          <div
            style={{ background: `url(${logoImage}) no-repeat center/contain` }}
            className="h-full w-11 mr-5"
          ></div>
          <h1>
            <Link to="/" className="font-expletus text-2xl">
              GloryDoge
            </Link>
          </h1>
        </div>
        <ul className="flex space-x-6 items-center text-sm">
          <li>
            <Link to="#">GloryPush</Link>
          </li>
          <li>
            <Link to="#">Tokenomics</Link>
          </li>
          <li>
            <Link to="#">Roadmap</Link>
          </li>
          <li>
            <Link to="#">Team</Link>
          </li>
          <li>
            <a href="https://docs.glorydogecoin.com" target="_blank" rel="noreferrer">
              White Paper
            </a>
          </li>
          <li>
            <a href="https://github.com/GloryDoge" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <Link to="/private-sale" className="btn-primary">
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
