import * as d3 from 'd3'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useCallback, useEffect, useState } from 'react'

import Container from './Container'

const ReflectionTracker = () => {
  const initValues = {
    balance: 0,
    totalReflection: 0,
    purchased: 0,
    sold: 0,
  }
  const [token, setToken] = useState('')
  const [values, setValues] = useState(initValues)

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  })

  useEffect(() => {
    drawChart()
  }, [])

  const fetchBalance = () => {
    if (!token.length) return
    //this will be moved to backend side
    const apiKey = '58RXIVWFS2KV86K8G677Q5JD63ISB7AZM4'
    const dummyURL = `https://api.bscscan.com/api?module=account&action=balance&address=${token}&apikey=${apiKey}`
    fetch(dummyURL)
      .then(response => response.json())
      .then(resultData => {
        setValues({ ...values, balance: resultData.result })
      })
      .catch(error => console.log('error : ', error))
  }

  const handleKeyDown = useCallback(
    e => {
      if (e.which === 13) {
        e.preventDefault()
        e.stopPropagation()
        if (!token.length) {
          setValues(initValues)
          return
        }
        fetchBalance()
      }
    },
    [token]
  )

  const drawChart = () => {
    const width = 280
    const height = 280

    const svg = d3
      .select('#pie-container')
      .append('svg')
      .attr('width', width)
      .attr('height', height)

    let gradient = svg
      .append('svg:defs')
      .append('svg:linearGradient')
      .attr('id', 'gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '100%')
      .attr('spreadMethod', 'pad')

    gradient
      .append('svg:stop')
      .attr('offset', '50%')
      .attr('stop-color', '#0C7FEC')
      .attr('stop-opacity', 1)

    gradient
      .append('svg:stop')
      .attr('offset', '91%')
      .attr('stop-color', '#49BEFF')
      .attr('stop-opacity', 1)

    const circle = svg
      .append('circle')
      .attr('cx', width / 2)
      .attr('cy', height / 2)
      .attr('r', height / 3)
      .attr('fill', 'url(#gradient)')
  }

  const Input = ({ title, value, onChange }) => {
    return (
      <div className="relative m-5">
        <p className="mb-5 text-base">{title}</p>
        <div className="flex">
          <input
            placeholder="0.00000"
            type="text"
            className="h-[40px] w-[240px] bg-[#041622] px-4 w-full text-2xl rounded-lg truncate"
            value={value}
            onChange={onChange}
          />
          <span className="bg-[#041622] ml-[-10px] w-[137px] relative text-2xl rounded-lg">
            <p className="absolute right-5 top-1 text-2xl">GLORYD</p>
          </span>
        </div>
      </div>
    )
  }

  return (
    <>
      <Container className="flex flex-col items-center px-1 py-6 bg-primary space-y-8">
        <h1 className="text-2xl font-bold leading-relaxed sm:text-4xl">Check your reflections</h1>
        <p className="text-center">Find out how much reflections you got so far</p>

        <div className="sm:w-[1014px] relative flex flex-col items-center w-full bg-darkBlue rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col items-center p-5 w-full">
            <p className="text-center">Past your GLORYD tokens holding wallet below</p>
          </div>
          <div className="w-[600px] flex flex-col items-center">
            <input
              placeholder="0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
              className="placeholder-[#3A6D8D] focus:placeholder-transparent h-[40px] text-[#3A6D8D] w-full text-center bg-white rounded-md focus:outline-none transition duration-500"
              value={token || ''}
              onChange={e => setToken(e.target.value || '')}
            />
          </div>
          <div className="grid gap-x-24 grid-cols-2 mt-5">
            <Input
              title="Your balance"
              value={values.balance}
              onChange={e => setValues({ ...values, balance: e.target.value })}
            />
            <Input
              title="Total reflections"
              value={values.totalReflection}
              onChange={e => setValues({ ...values, totalReflection: e.target.value })}
            />
            <Input
              title="# of GLORYD purchased"
              value={values.purchased}
              onChange={e => setValues({ ...values, purchased: e.target.value })}
            />
            <Input
              title="# of GLORYD sold ( 0 = Diamond hands )"
              value={values.sold}
              onChange={e => setValues({ ...values, sold: e.target.value })}
            />
          </div>
          <div className="relative flex items-center justify-center w-full">
            <div className="absolute z-10">
              <div id="pie-container" />
            </div>

            <StaticImage
              src="../images/vector.png"
              alt="GloryDoge Launches a Hub for Sharing, Investing, and Developing Innovative Ideas"
              quality="90"
              placeholder="none"
              className="h-[320px] w-full"
            />
          </div>
        </div>
      </Container>
    </>
  )
}

export default ReflectionTracker
