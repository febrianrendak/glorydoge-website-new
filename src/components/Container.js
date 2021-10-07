import * as React from 'react'

const Container = ({ children, className = '', id = '' }) => {
  return (
    <div id={id} className={`container ${className}`}>
      {children}
    </div>
  )
}

export default Container
