import Axios from 'axios'
import * as d3 from 'd3'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Web3 from 'web3'

import Container from './Container'

const ReflectionTracker = () => {
  const initValues = {
    balance: { value: 0, usd: 0 },
    reflections: { value: 0, usd: 0 },
    purchased: { value: 0, usd: 0 },
    sold: { value: 0, usd: 0 },
  }
  const [token, setToken] = useState('')
  const [values, setValues] = useState(initValues)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  })

  useEffect(() => {
    drawChart(values)
  }, [values])

  useEffect(() => {
    if (Web3.utils.isAddress(token)) {
      fetchBalance()
    }
  }, [token])

  const fetchBalance = async () => {
    setLoading(true)
    if (!token.length) {
      return setLoading(false)
    }
    Axios.get('https://api.glorydogecoin.com/api/v1/bscscan/reflections', { params: { token } })
      .then(result => {
        setValues(result.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
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
    [token] // eslint-disable-line react-hooks/exhaustive-deps
  )

  const drawChart = values => {
    const width = 280
    const height = 280
    const radius = height / 2
    const data = [values.reflections.value, values.purchased.value || 1]

    const pie = d3.pie().value(d => d)
    const arc = d3.arc().innerRadius(0).outerRadius(radius)
    const data_ready = pie(data)

    d3.select('#pie-container svg').remove()

    const svg = d3
      .select('#pie-container')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`)

    let gradient1 = svg
      .append('svg:defs')
      .append('svg:linearGradient')
      .attr('id', 'gradient1')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '100%')
      .attr('spreadMethod', 'pad')

    gradient1
      .append('svg:stop')
      .attr('offset', '50%')
      .attr('stop-color', '#0C7FEC')
      .attr('stop-opacity', 1)

    gradient1
      .append('svg:stop')
      .attr('offset', '91%')
      .attr('stop-color', '#49BEFF')
      .attr('stop-opacity', 1)

    let gradient2 = svg
      .append('svg:defs')
      .append('svg:linearGradient')
      .attr('id', 'gradient2')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '100%')
      .attr('spreadMethod', 'pad')

    gradient2
      .append('svg:stop')
      .attr('offset', '50%')
      .attr('stop-color', '#F16C28')
      .attr('stop-opacity', 1)

    gradient2
      .append('svg:stop')
      .attr('offset', '91%')
      .attr('stop-color', '#8C2485')
      .attr('stop-opacity', 1)

    svg.append('g').attr('class', 'slices')
    svg.append('g').attr('class', 'labels')
    svg.append('g').attr('class', 'lines')

    svg.append('g').classed('labels', true)
    svg.append('g').classed('lines', true)

    svg
      .selectAll('chart')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => {
        return i === 0 ? `url(#gradient2)` : `url(#gradient1)`
      })
  }

  const calcPro = useMemo(() => {
    if (!values.purchased.value) return 0
    const percentage =
      Math.round((values.reflections.value / values.purchased.value) * 100 * 1000) / 1000
    return percentage
  }, [values])

  function numberCommaSeparator(value) {
    return value.toLocaleString('en-US', {maximumFractionDigits: 15})
  }

  const Input = ({ title, value, onChange, usd }) => {
    return (
      <div className="relative m-1 sm:m-5">
        <div className="flex">
          <p className="mb-2 text-base">{title}</p>
          {token && !loading && (
            <>
              <p className="w-[180px] ml-1 truncate">({numberCommaSeparator(parseFloat(usd).toFixed(2))} USD)</p>
            </>
          )}
        </div>
        <div className="flex">
          <input
            placeholder="0.00000"
            type="text"
            className="h-[40px] bg-[#041622] disabled px-4 w-full text-2xl rounded-lg outline-none opacity-100 truncate"
            value={numberCommaSeparator(value)}
            onChange={onChange}
          />
        </div>
      </div>
    )
  }

  return (
    <>
      <Container className="flex flex-col items-center px-1 py-6 bg-primary space-y-8">
        <h1 className="text-2xl font-bold leading-relaxed sm:text-4xl">Check your reflections</h1>
        <div className="md:w-[1014px] relative flex flex-col items-center w-full bg-darkBlue rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col items-center p-1 w-full sm:p-5">
            <p className="text-center">Paste your GLORYD tokens holding wallet below</p>
          </div>
          <div className="md:w-[600px] flex items-center p-1 w-full sm:p-10 md:p-0">
            <input
              placeholder="0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
              className="placeholder-[#3A6D8D] focus:placeholder-transparent h-[40px] text-[#3A6D8D] w-full text-center bg-white rounded-md focus:outline-none transition duration-500"
              value={token || ''}
              onChange={e => setToken(e.target.value || '')}
            />
          </div>
          {loading && <div className="text-center">Loading ...</div>}
          <div className="grid gap-x-24 grid-cols-1 mt-5 sm:grid-cols-1 md:grid-cols-2">
            <Input
              title="Your balance"
              value={values.balance.value}
              usd={values.balance.usd}
              onChange={e => setValues({ ...values, balance: { value: e.target.value } })}
            />
            <Input
              title="Total reflections"
              value={values.reflections.value}
              usd={values.reflections.usd}
              onChange={e => setValues({ ...values, reflections: { value: e.target.value } })}
            />
            <Input
              title="# of GLORYD purchased"
              value={values.purchased.value}
              usd={values.purchased.usd}
              onChange={e => setValues({ ...values, purchased: { value: e.target.value } })}
            />
            <Input
              title="# of GLORYD sold"
              value={values.sold.value}
              usd={values.sold.usd}
              onChange={e => setValues({ ...values, sold: { value: e.target.value } })}
            />
          </div>
          <div className="relative flex items-center justify-center w-full">
            <div className="absolute z-10 flex flex-col items-center justify-center mt-10 sm:flex-col md:flex-row md:mt-0">
              {calcPro !== 0 && (
                <div className="md:mr-10">
                  <p className="font-extrabold">{calcPro}%</p>
                  <p className="from-[#F16C28] to-[#8C2485] text-transparent bg-gradient-to-r bg-clip-text border-t-2 border-white">
                    reflections
                  </p>
                </div>
              )}
              <div id="pie-container" />
              {calcPro !== 0 && (
                <div className="md:ml-10">
                  <p className="from-[#0C7FEC] to-[#49BEFF] text-transparent bg-gradient-to-r bg-clip-text">
                    Total GLORYD
                  </p>
                  <p className="from-[#0C7FEC] to-[#49BEFF] text-transparent bg-gradient-to-r bg-clip-text border-t-2 border-white">
                    purchased
                  </p>
                </div>
              )}
            </div>

            <StaticImage
              src="../images/vector.png"
              alt="GloryDoge Launches a Hub for Sharing, Investing, and Developing Innovative Ideas"
              quality="90"
              placeholder="none"
              className="h-[320px] mt-32 w-full md:mt-0"
            />
          </div>
        </div>
      </Container>
    </>
  )
}

export default ReflectionTracker
