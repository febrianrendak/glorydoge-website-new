import * as React from 'react'

import PrivateSale from '../components/PrivateSale'
import SEO from '../components/seo'

const PrivateSalePage = ({ location }) => {
  if (typeof window === 'undefined') return null

  return (
    <>
      <SEO title="GloryDoge Private Sale" />
      <PrivateSale location={location} />
    </>
  )
}

export default PrivateSalePage
