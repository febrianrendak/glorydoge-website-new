import './brower-globals'
import * as React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './src/styles/global.css'
import ContextProvider from './src/components/ContextProvider'

export const wrapPageElement = ({ element, props }) => {
  return <ContextProvider {...props}>{element}</ContextProvider>
}
