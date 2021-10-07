import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Container from './Container'

const Footer = () => {
  return (
    <div className="mt-64 w-full bg-black bg-opacity-60">
      <Container>
        <div className="pattern h-[100px] flex items-center justify-between">
          <div className="flex flex-1 items-center">
            <StaticImage
              src="../images/logo.svg"
              alt=""
              className="mr-5 w-11"
              quality={100}
              placeholder="none"
            />
            <h1 className="font-expletus text-2xl font-bold">GloryDoge</h1>
          </div>
          <div className="flex flex-1 justify-center">
            <p className="text-sm opacity-60">
              © {new Date().getFullYear()} GloryDoge. All rights reserved.
            </p>
          </div>
          <div className="flex flex-1 justify-end">
            <p className="text-gradient text-sm">Made with love in Sweden.</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
