import * as React from 'react'

import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import ProductsSection from '../components/ProductSection'
import TokenSection from '../components/TokenSection'
import RoadmapSection from '../components/RoadmapSection'
import TeamSection from '../components/TeamSection'
import NewsBox from '../components/NewsBox'
import Footer from '../components/Footer'
import SEO from '../components/seo'
import Announcement from '../components/Announcement'
import Articles from '../components/Articles'
import Audits from '../components/Audits'
import Listings from '../components/Listings'

const IndexPage = () => {
  return (
    <>
      <SEO />
      <NavBar />
      {/* <Announcement /> */}
      <Hero />
      <Audits />
      <Listings />
      <Articles />
      <div className="space-y-20">
        <ProductsSection />
        <TokenSection />
        <RoadmapSection />
        <TeamSection />
      </div>
      <NewsBox />
      <Footer />
    </>
  )
}

export default IndexPage
