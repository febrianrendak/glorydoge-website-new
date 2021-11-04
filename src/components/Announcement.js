import * as React from 'react'
import { Link } from 'gatsby'

import Container from './Container'

const Announcement = () => {
  return (
    <Container>
      <div className="mt-16 p-5 w-full text-sm bg-secondary bg-opacity-30 border border-secondary rounded-lg space-y-2 sm:text-base">
        <p>
          We're airdroping $20,000 BUSD to 4 winners.{' '}
          <a
            className="underline"
            href="https://twitter.com/GloryDogeCoin/status/1456036296162529288"
            target="_blank"
            rel="noreferrer"
          >
            Participate here!
          </a>{' '}
          🏆
        </p>
      </div>
    </Container>
  )
}

export default Announcement
