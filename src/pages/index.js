import * as React from 'react'

import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import ProductsSection from '../components/ProductSection'
import TokenSection from '../components/TokenSection'
import RoadmapSection from '../components/RoadmapSection'
import TeamSection from '../components/TeamSection'

const IndexPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="space-y-20">
        <ProductsSection />
        <TokenSection />
        <RoadmapSection />
        <TeamSection />
      </div>
    </>
  )
}

export default IndexPage
