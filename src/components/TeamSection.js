import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import SectionContainer from './SectionContainer'

const TeamSection = () => {
  return (
    <SectionContainer
      title="Team"
      description="A team of highly motivated minds, with years of solid knowledge and experience in Software Engineering, UI/UX Design, and Marketing."
    >
      <div className="grid gap-x-14 grid-cols-3 mx-auto my-32 w-10/12">
        <div className="flex flex-col items-center">
          <StaticImage
            src="../images/joey.png"
            quality={90}
            className="w-[150px] mb-4"
            alt=""
            placeholder="none"
          />
          <h3 className="text-xl font-bold">Mr. Joey</h3>
          <h3 className="text-gradient text-2xl font-bold">CEO & Lead Dev</h3>
          <p className="mt-4 text-center">
            Responsible for building, testing, and maintaining code for the contracts and the
            upcoming platforms. Has been working professionally and successfully as a software
            engineer since 2014.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <StaticImage
            src="../images/william.png"
            quality={90}
            className="w-[150px] mb-4"
            alt=""
            placeholder="none"
          />
          <h3 className="text-xl font-bold">Mr. William</h3>
          <h3 className="text-gradient text-2xl font-bold">Chief Marketing Officer</h3>
          <p className="mt-4 text-center">
            The marketing guy. Done impressive and extensive research and claims to have the best
            marketing recipe to push us beyond earth's orbit. We can't wait to see that happen!
          </p>
        </div>

        <div className="flex flex-col items-center">
          <StaticImage
            src="../images/light.png"
            quality={90}
            className="w-[150px] mb-4"
            alt=""
            placeholder="none"
          />
          <h3 className="text-xl font-bold">Mr. Light</h3>
          <h3 className="text-gradient text-2xl font-bold">Chief Design Officer</h3>
          <p className="mt-4 text-center">
            The lead designer. Responsible for making everything we build look like candy to the
            user eyes. His set of skills are one of the best in the market.
          </p>
        </div>
      </div>
    </SectionContainer>
  )
}

export default TeamSection
