import * as React from 'react'

import NavBar from '../components/NavBar'
import ContractAddress from '../components/ContractAddress'
import Hero from '../components/Hero'
import ProductsSection from '../components/ProductsSection'

const IndexPage = () => {
  return (
    <>
      <NavBar />
      <ContractAddress />
      <Hero />
      <div className="space-y-20">
        <ProductsSection />
      </div>
    </>
  )
}

export default IndexPage
