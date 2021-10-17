import * as React from 'react'
import { Link } from 'gatsby'

import Container from './Container'

const Announcement = () => {
  return (
    <Container>
      <div className="mt-12 p-5 w-full bg-secondary bg-opacity-30 border border-secondary rounded-lg space-y-2">
        <p>
          Private sale is concluded! You will be able to claim your tokens right after the launch on
          PancakeSwap{' '}
          <Link to="/private-sale" className="inline-block underline font-bold">
            here.
          </Link>
        </p>
        <p>
          Presale whitelist contest is live{' '}
          <a
            className="underline font-bold"
            href="https://sweepwidget.com/view/36473-vx3r5t9l"
            target="_blank"
            rel="noreferrer"
          >
            here.
          </a>
        </p>
      </div>
    </Container>
  )
}

export default Announcement
