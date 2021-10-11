import * as React from 'react'
import { Link } from 'gatsby'

import Container from './Container'

const Announcement = () => {
  return (
    <Container>
      <div className="mt-12 p-5 w-full bg-secondary bg-opacity-30 border border-secondary rounded-lg">
        Private sale is live! Secure your spot as one of our early investors now:{' '}
        <Link to="/private-sale" className="inline-block underline font-bold">
          Contribute to the private sale
        </Link>
      </div>
    </Container>
  )
}

export default Announcement
