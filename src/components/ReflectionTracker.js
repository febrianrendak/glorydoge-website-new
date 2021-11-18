import Axios from 'axios'
import * as d3 from 'd3'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Web3 from 'web3'

import Container from './Container'

const ReflectionTracker = () => {
  const initValues = {
    balance: 0,
    reflections: 0,
    purchased: 0,
    sold: 0,
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
    const data = [values.reflections, values.purchased || 1]

    const pie = d3.pie().value(d => d)
    const arc = d3.arc().innerRadius(0).outerRadius(radius)
    const data_ready = pie(data)
    // const midAngle = d => {
    //   return d.startAngle + (d.endAngle - d.startAngle) / 2
    // }
    // const outerArc = d3.arc().innerRadius(radius).outerRadius(radius)

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

    if (data[0]) {
      // var polyline = svg
      //   .select('.lines')
      //   .selectAll('polyline')
      //   .data(data_ready)
      //   .enter()
      //   .append('polyline')
      //   .attr('points', function (d) {
      //     // see label transform function for explanations of these three lines.
      //     var pos = outerArc.centroid(d)
      //     pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1)
      //     return [arc.centroid(d), outerArc.centroid(d), pos]
      //   })
      //   .attr('stroke', 'white')
      //   .attr('storke-width', '1px')
      //   .attr('fill', 'none')
      // svg
      //   .select('.labels')
      //   .selectAll('text')
      //   .data(data_ready)
      //   .enter()
      //   .append('text')
      //   .attr('dy', '.35em')
      //   .html(function (d) {
      //     return d.data
      //   })
      //   .attr('transform', function (d) {
      //     var pos = outerArc.centroid(d)
      //     pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1)
      //     return 'translate(' + pos + ')'
      //   })
      //   .style('text-anchor', function (d) {
      //     return midAngle(d) < Math.PI ? 'start' : 'end'
      //   })
    }

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
    if (!values.purchased) return 0
    const percentage = Math.round((values.reflections / values.purchased) * 100 * 1000) / 1000
    return percentage
  }, [values])

  const Input = ({ title, value, onChange }) => {
    return (
      <div className="relative m-5">
        <p className="mb-5 text-base">{title}</p>
        <div className="flex">
          <input
            placeholder="0.00000"
            type="text"
            className="h-[40px] w-[240px] bg-[#041622] disabled px-4 w-full text-2xl rounded-lg outline-none opacity-100 truncate"
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

        <div className="md:w-[1014px] relative flex flex-col items-center w-full bg-darkBlue rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col items-center p-5 w-full">
            <p className="text-center">Paste your GLORYD tokens holding wallet below</p>
          </div>
          <div className="flex flex-col items-center">
            <input
              placeholder="0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
              className="placeholder-[#3A6D8D] focus:placeholder-transparent h-[40px] text-[#3A6D8D] w-[300px] sm:w-[400px] md:w-[600px] text-center bg-white rounded-md focus:outline-none transition duration-500"
              value={token || ''}
              onChange={e => setToken(e.target.value || '')}
            />
          </div>
          {loading && <div className="text-center">Loading ...</div>}
          <div className="grid gap-x-24 grid-cols-1 mt-5 sm:grid-cols-1 md:grid-cols-2">
            <Input
              title="Your balance"
              value={values.balance}
              onChange={e => setValues({ ...values, balance: e.target.value })}
            />
            <Input
              title="Total reflections"
              value={values.reflections}
              onChange={e => setValues({ ...values, reflections: e.target.value })}
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
