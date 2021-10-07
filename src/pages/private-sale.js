import * as React from 'react'

import NavBar from '../components/NavBar'

const PrivateSalePage = () => {
  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center mt-60 px-10 w-full">
        <h1 className="text-gradient text-4xl font-bold leading-normal">
          Private sale will begin soon. <br />
          <br />
          Join us on Telegram to stay updated.
        </h1>
      </div>
    </>
  )
}

export default PrivateSalePage
