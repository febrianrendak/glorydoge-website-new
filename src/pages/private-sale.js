import * as React from 'react'

import PrivateSale from '../components/PrivateSale'

const PrivateSalePage = ({ location }) => {
  if (typeof window === 'undefined') return null

  return <PrivateSale location={location} />
}

export default PrivateSalePage
