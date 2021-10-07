import * as React from 'react'

import Container from './Container'

const NewsBox = () => {
  return (
    <Container className="pt-32">
      <div className="h-[400px] relative w-full bg-black bg-opacity-30 rounded-lg shadow-inner overflow-hidden">
        <div className="t-0 w-[45%] absolute flex flex-col items-center justify-center px-20 h-full text-center pointer-events-none space-y-3">
          <h3 className="text-gradient text-5xl font-bold leading-normal">Stay up to date</h3>
          <p>Follow us on Twitter to stay updated with our latest announcements and news</p>
        </div>
        <div className="pl-[50%] pr-[5%] pb-8 pt-32 w-full h-full overflow-y-auto">
          <a
            className="twitter-timeline"
            data-theme="light"
            href="https://twitter.com/GloryDogeCoin?ref_src=twsrc%5Etfw"
          >
            Tweets by GloryDogeCoin
          </a>
        </div>
      </div>
    </Container>
  )
}

export default NewsBox
