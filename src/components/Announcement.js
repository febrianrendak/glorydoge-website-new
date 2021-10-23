import * as React from 'react'
import { Link } from 'gatsby'

import Container from './Container'

const Announcement = () => {
  return (
    <Container>
      <div className="mt-16 p-5 w-full text-sm bg-secondary bg-opacity-30 border border-secondary rounded-lg space-y-2 sm:text-base">
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
          </a>{' '}
          The presale will take place on the 28th October at 4 PM UTC on{' '}
          <a
            className="underline font-bold"
            href="https://www.pinksale.finance/#/launchpad/0x1c5dd98f9518F755eEeB6af0F162638b756D5771?chain=BSC"
            target="_blank"
            rel="noreferrer"
          >
            PinkSale.
          </a>
        </p>
      </div>
    </Container>
  )
}

export default Announcement
