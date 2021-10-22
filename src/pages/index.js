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

const IndexPage = () => {
  return (
    <>
      <SEO />
      <NavBar />
      <Announcement />
      <Hero />
      <NewsBox
        title="As featured on"
        description="Read more about us on financial news websites"
        type="articles"
      />
      <div className="space-y-20">
        <ProductsSection />
        <TokenSection />
        <RoadmapSection />
        <TeamSection />
      </div>
      <NewsBox
        title="Stay up to date"
        description="Follow us on Twitter to stay updated with our latest announcements and news"
        type="twitter"
      />
      <Footer />
    </>
  )
}

export default IndexPage
