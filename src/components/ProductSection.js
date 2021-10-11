import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import SectionContainer from './SectionContainer'

const Feature = ({ title, picture, children, reverse = false }) => {
  return (
    <div className="grid gap-y-8 grid-cols-1 place-items-center lg:gap-y-24 lg:grid-cols-2">
      <div className="flex flex-col items-center text-center lg:w-4/6 lg:text-left xl:w-10/12">
        <h3 className="mb-5 whitespace-pre-line text-xl font-bold leading-snug sm:w-3/4 sm:text-2xl md:w-3/6 lg:w-auto xl:text-4xl">
          {title}
        </h3>
        <div className="text-sm leading-relaxed space-y-2 sm:w-3/4 md:w-4/6 lg:w-auto xl:text-base">
          {children}
        </div>
      </div>

      <div className={`sm:w-[400px] order-[-1]  ${reverse ? 'lg:order-[-1]' : 'lg:order-none'}`}>
        {picture}
      </div>
    </div>
  )
}

const ProductsSection = () => {
  return (
    <SectionContainer
      id="product"
      title="GloryPad"
      description="The next-gen IDO Launchpad where developers, influencers, and investors gather to bring
    innovative ideas to life. (Under development)"
    >
      <div className="my-24 space-y-20 sm:my-32 lg:space-y-32">
        <Feature
          title="Home for innovative projects and next big things"
          picture={
            <StaticImage src="../images/project.png" alt="" quality="100" placeholder="none" />
          }
        >
          <p>
            Got an awesome crypto project idea? GloryPad helps Founders raise funds and pave the way
            to success.
          </p>
          <p>
            GloryPad is also the best place for investors to take part in great opportunities and
            promising projects at their earliest stages.
          </p>
        </Feature>

        <Feature
          title="Founders take the lead, investors get stuff done"
          picture={<StaticImage src="../images/task.png" alt="" quality="100" placeholder="none" />}
          reverse
        >
          <p>
            It's not just about raising funds. It's about how they will be used. Automatically pay
            for services your project needs by defining tasks that investors can fund.
          </p>
          <p>
            The more tasks added, the more trust you gain from investor, and the more they will help
            push your project forward.
          </p>
        </Feature>

        <Feature
          title="Uncertain? Get a quick glimpse of what's going on"
          picture={
            <StaticImage src="../images/activities.png" alt="" quality="100" placeholder="none" />
          }
        >
          <p>
            The recent activities feed shows what everyone are doing on the platform. Use it to know
            which sales are the most active, but don't use it as financial advice.
          </p>
        </Feature>

        <Feature
          title={`Project on another chain? We got you covered`}
          picture={
            <StaticImage src="../images/networks.png" alt="" quality="100" placeholder="none" />
          }
          reverse
        >
          <p>
            GloryPad initially supports all major blockchains. If your favorite blockchain is not on
            the selector, we may already have plans to add it there in the near future.
          </p>
        </Feature>
      </div>
    </SectionContainer>
  )
}

export default ProductsSection
