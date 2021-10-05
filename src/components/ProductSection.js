import * as React from 'react'

import SectionContainer from './SectionContainer'

const ProductsSection = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center mx-auto w-2/4 text-center space-y-4">
        <h2 className="text-gradient w-auto text-4xl font-bold leading-normal">GloryPad</h2>
        <p className="text-xl leading-relaxed">
          A Next-Gen private sales launchpad where developers, influencers, and investors gather to
          bring creative ideas to life.
        </p>
      </div>

      {/* div */}
    </SectionContainer>
  )
}

export default ProductsSection
