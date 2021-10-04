import * as React from 'react'

import Container from './Container'
import SectionBackground from './SectionBackground'

const ProductsSection = () => {
  return (
    <Container className="relative mt-36 pt-20">
      <SectionBackground />
      <div className="flex flex-col items-center">
        <h2 className="text-4xl leading-normal w-auto font-bold text-gradient">GloryPush</h2>
      </div>
    </Container>
  )
}

export default ProductsSection
