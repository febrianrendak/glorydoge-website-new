import * as React from 'react'
import { DocumentTextIcon } from '@heroicons/react/solid'

import Container from './Container'

const ContractAddress = () => {
  return (
    <Container className="py-5">
      <a
        href="https://bscscan.com/token/0xcc5667333f5e997ac9f0c26d41b7dda65b2b675a"
        target="_blank"
        rel="noreferrer"
        className="w-full h-16 rounded-lg bg-secondary bg-opacity-30 border border-secondary flex items-center justify-between text-sm pr-2 pl-4 hover:bg-opacity-60 transition"
      >
        <p>
          GloryDoge Contract:{' '}
          <span className="font-bold">0xcc5667333f5e997ac9f0c26d41b7dda65b2b675a</span>
        </p>
        <span className="btn-secondary">
          <DocumentTextIcon className="btn-icon" />
          See on BscScan
        </span>
      </a>
    </Container>
  )
}

export default ContractAddress
