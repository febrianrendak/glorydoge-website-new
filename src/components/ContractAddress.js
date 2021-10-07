import * as React from 'react'
import { DocumentTextIcon } from '@heroicons/react/solid'

const ContractAddress = ({ className }) => {
  return (
    <a
      href="https://bscscan.com/token/0xcc5667333f5e997ac9f0c26d41b7dda65b2b675a"
      target="_blank"
      rel="noreferrer"
      className={`flex items-center justify-center sm:justify-between sm:pl-4 sm:pr-2 w-full sm:h-16 text-sm sm:bg-secondary sm:bg-opacity-30 hover:bg-opacity-60 sm:border border-secondary rounded-lg transition ${className}`}
    >
      <p className="hidden font-bold sm:inline-block lg:font-normal">
        GLORYD Contract<span className="hidden lg:inline-block">:</span>{' '}
        <span className="hidden font-bold lg:inline-block">
          0xcc5667333f5e997ac9f0c26d41b7dda65b2b675a
        </span>
      </p>
      <span className="btn btn-secondary">
        <DocumentTextIcon className="btn-icon" />
        See on BscScan
      </span>
    </a>
  )
}

export default ContractAddress
