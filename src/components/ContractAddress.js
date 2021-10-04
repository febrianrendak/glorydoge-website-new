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
        className="flex items-center justify-between pl-4 pr-2 w-full h-16 text-sm bg-secondary bg-opacity-30 hover:bg-opacity-60 border border-secondary rounded-lg transition"
      >
        <p>
          GloryDoge Contract:{' '}
          <span className="font-bold">0xcc5667333f5e997ac9f0c26d41b7dda65b2b675a</span>
        </p>
        <span className="btn btn-secondary">
          <DocumentTextIcon className="btn-icon" />
          See on BscScan
        </span>
      </a>
    </Container>
  )
}

export default ContractAddress
