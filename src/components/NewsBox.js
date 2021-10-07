import * as React from 'react'

import Container from './Container'

const NewsBox = () => {
  return (
    <Container className="pt-32">
      <div className="h-[400px] relative z-0 w-full bg-black bg-opacity-30 rounded-lg shadow-inner overflow-hidden">
        <div className="t-0 z-[-1] md:w-[45%] absolute flex flex-col items-center justify-center px-6 h-32 text-center pointer-events-none space-y-3 sm:px-20 md:h-full">
          <h3 className="text-gradient text-xl font-bold leading-normal lg:text-4xl xl:text-5xl">
            Stay up to date
          </h3>
          <p className="text-sm lg:text-base">
            Follow us on Twitter to stay updated with our latest announcements and news
          </p>
        </div>
        <div className="md:pr-[5%] md:pl-[50%] pb-8 pt-32 w-full h-full overflow-y-auto">
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
