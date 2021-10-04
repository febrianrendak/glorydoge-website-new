import * as React from 'react'

import Container from './Container'
import SectionBackground from './SectionBackground'

const SectionContainer = ({ children }) => {
  return (
    <Container className="relative pt-20">
      <SectionBackground />
      {children}
    </Container>
  )
}

export default SectionContainer
