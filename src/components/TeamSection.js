import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import SectionContainer from './SectionContainer'

const TeamSection = () => {
  return (
    <SectionContainer
      id="team"
      title="Team"
      description="A team of highly motivated minds, with years of solid knowledge and experience in Software Engineering, UI/UX Design, and Marketing."
    >
      <div className="grid gap-y-20 grid-cols-1 mx-auto my-24 sm:my-32 sm:w-80 lg:gap-x-14 lg:grid-cols-3 lg:w-10/12">
        <div className="flex flex-col items-center">
          <StaticImage
            src="../images/william.png"
            quality={90}
            className="w-[150px] mb-4"
            alt=""
            placeholder="none"
          />
          <h3 className="text-xl font-bold">@GloryDogeMarketer</h3>
          <p className="text-gradient font-bold">Chief Marketing Officer</p>
          <p className="mt-4 text-center">
            The marketing guy. Done impressive and extensive research and claims to have the best
            marketing recipe to push us beyond earth's orbit. We can't wait to see that happen!
          </p>
        </div>

        <div className="flex flex-col items-center">
          <StaticImage
            src="../images/joey.png"
            quality={90}
            className="w-[150px] mb-4"
            alt=""
            placeholder="none"
          />
          <h3 className="text-xl font-bold">@GloryDogeDev</h3>
          <p className="text-gradient font-bold">CEO & Lead Dev</p>
          <p className="mt-4 text-center">
            Responsible for building, testing, and maintaining code for the contracts and the
            upcoming platforms. Been through a successful career as a software engineer since 2014.
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
          <h3 className="text-xl font-bold">@GloryDogeDesigner</h3>
          <p className="text-gradient font-bold">Chief Design Officer</p>
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
