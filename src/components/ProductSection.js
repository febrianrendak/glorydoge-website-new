import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import SectionContainer from './SectionContainer'

const Feature = ({ title, picture, children, reverse = false }) => {
  return (
    <div className="grid gap-y-24 grid-cols-2 place-items-center">
      <div className="w-10/12">
        <h3 className="mb-5 whitespace-pre-line text-4xl font-bold leading-snug">{title}</h3>
        <div className="leading-relaxed space-y-2">{children}</div>
      </div>

      <div className={`w-[400px] ${reverse ? 'order-[-1]' : ''}`}>{picture}</div>
    </div>
  )
}

const ProductsSection = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center mx-auto w-2/4 text-center space-y-4">
        <h2 className="text-gradient w-auto text-5xl font-bold leading-normal">GloryPad</h2>
        <p className="text-lg leading-relaxed">
          A next-gen IDO Launchpad where developers, influencers, and investors gather to bring
          creative ideas to life. (Coming soon)
        </p>
      </div>

      <div className="my-24 space-y-24">
        <Feature
          title="Home for innovative projects and next big things"
          picture={
            <StaticImage src="../images/project.png" alt="" quality="100" placeholder="none" />
          }
        >
          <p>
            Got an awesome crypto project idea? GloryPad helps makers raise the initial funds and
            pave the way to success.
          </p>
          <p>
            GloryPad is also the best place for investors to take part in great opportunities and
            promising projects at their earliest stages.
          </p>
        </Feature>

        <Feature
          title="Makers take the lead, investors get stuff done"
          picture={<StaticImage src="../images/task.png" alt="" quality="100" placeholder="none" />}
          reverse
        >
          <p>It's not just about raising funds. It's about how they will be used.</p>
          <p>
            Automatically pay for services your project needs by defining tasks that investors can
            fund. If the sale timer ends before a task is completed, investors will be able to get a
            refund.
          </p>
          <p>
            The more tasks added, the more trust you gain from investor, and the more they will be
            willing to push your project forward.
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
          title={`Multi-Chain investor?\nWe got you covered`}
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
