import * as React from 'react'

import Container from './Container'
import SectionBackground from './SectionBackground'

const ProductsSection = () => {
  return (
    <Container className="relative pt-20">
      <SectionBackground />
      <div className="flex flex-col items-center">
        <h2 className="text-gradient w-auto text-4xl font-bold leading-normal">GloryPush</h2>
      </div>
    </Container>
  )
}

export default ProductsSection
