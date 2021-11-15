import * as React from 'react'
import NavBar from '../components/NavBar'

import ReflectionTracker from '../components/ReflectionTracker'
import SEO from '../components/seo'

const ReflectionTrackerPage = ({ location }) => {
  if (typeof window === 'undefined') return null

  return (
    <>
      <SEO
        title="Check your reflections"
        description="Find out how much reflections you got so far"
      />
      <NavBar />
      <ReflectionTracker location={location} />
    </>
  )
}

export default ReflectionTrackerPage
