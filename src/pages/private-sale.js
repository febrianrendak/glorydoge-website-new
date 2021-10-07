import * as React from 'react'

import NavBar from '../components/NavBar'

const PrivateSalePage = () => {
  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center mt-60 w-full">
        <h1 className="text-gradient text-4xl font-bold leading-normal">
          Private sale will begin soon. <br />
          Join us on Telegram to keep updated.
        </h1>
      </div>
    </>
  )
}

export default PrivateSalePage
