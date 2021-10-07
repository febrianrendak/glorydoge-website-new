import * as React from 'react'

const SocialLink = ({ url, icon }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center w-8 h-8 bg-black bg-opacity-20 rounded-lg"
    >
      <i className={`${icon} leading-[0] text-base`} />
    </a>
  )
}

export default SocialLink
