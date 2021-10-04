import * as React from 'react'

import NavBar from '../components/NavBar'
import ContractAddress from '../components/ContractAddress'
import Jumbotron from '../components/Jumbotron'
import ProductsSection from '../components/ProductsSection'

const IndexPage = () => {
  return (
    <>
      <NavBar />
      <ContractAddress />
      <Jumbotron />
      <ProductsSection />
    </>
  )
}

export default IndexPage
