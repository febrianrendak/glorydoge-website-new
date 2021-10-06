import * as React from 'react'

import Container from './Container'
import SectionBackground from './SectionBackground'

const SectionContainer = ({ title, description, children }) => {
  return (
    <Container className="relative pt-20">
      <SectionBackground />
      <div className="flex flex-col items-center mx-auto w-2/4 text-center space-y-4">
        <h2 className="text-gradient w-auto text-5xl font-bold leading-normal">{title}</h2>
        <p className="text-lg leading-relaxed">{description}</p>
      </div>
      {children}
    </Container>
  )
}

export default SectionContainer
