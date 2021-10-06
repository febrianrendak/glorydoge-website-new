import * as React from 'react'
import { Link } from 'gatsby'
import { CashIcon } from '@heroicons/react/solid'

import Container from './Container'

import logoImage from '../images/logo.svg'

const NavBar = () => {
  return (
    <div className="sticky z-50 top-0 w-full h-20 bg-primary border-b border-gray-800 border-opacity-30">
      <div className="absolute bottom-0 w-full h-px bg-black bg-opacity-30"></div>
      <Container className="flex items-center justify-between h-full">
        <div className="flex items-center h-full">
          <div
            style={{ background: `url(${logoImage}) no-repeat center/contain` }}
            className="mr-5 w-11 h-full"
          ></div>
          <h1>
            <Link to="/" className="font-expletus text-2xl">
              GloryDoge
            </Link>
          </h1>
        </div>
        <ul className="flex items-center text-sm space-x-6">
          <li>
            <Link to="#">GloryPad</Link>
          </li>
          <li>
            <Link to="#">Token</Link>
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
