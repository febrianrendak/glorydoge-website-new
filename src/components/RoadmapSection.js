import * as React from 'react'

import SectionContainer from './SectionContainer'

const List = ({ number, items = [], className }) => {
  return (
    <div className="grid grid-cols-2 my-32">
      <div className={`flex items-center justify-center w-full`}>
        <h3 className="text-6xl font-bold uppercase">Phase {number}</h3>
      </div>
      <div className={`flex flex-col place-self-start relative pl-10`}>
        <div className="w-[2px] absolute bottom-0 left-0 top-0 bg-gradient-to-b rounded from-secondary to-orange" />
        <ul className="space-y-5">
          {items.map(item => (
            <>
              <li className="flex items-center">
                <div className="w-[20px] h-[20px] flex items-center justify-center mr-3 bg-black bg-opacity-50 border border-secondary border-opacity-100 rounded-full">
                  {item.done && <div className="w-[16px] h-[16px] bg-secondary rounded-full" />}
                </div>
                {item.text}
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  )
}

const RoadmapSection = () => {
  return (
    <SectionContainer
      title="Roadmap"
      description="List of the tasks and steps we plan to take during our successful journey."
    >
      <List
        number="I"
        items={[
          { done: true, text: 'Deploy token contract on BSC' },
          { done: true, text: 'Deploy distribution contract on BSC' },
          { done: true, text: 'Deploy private sale contract on BSC' },
          { done: true, text: 'White Paper release' },
          { done: true, text: 'New website release' },
          { done: true, text: 'Pre-sale whitelist contest' },
        ]}
      />

      <List
        number="II"
        items={[
          { done: false, text: 'Conduct a successful private sale' },
          { done: false, text: 'Extensive marketing on multiple channels' },
          { done: false, text: 'Conduct a successful pre-sale' },
          { done: false, text: 'Official launch & Listing on PancakeSwap' },
          { done: false, text: 'Private sale contest prize distribution to winners' },
          { done: false, text: 'Listing on CoinMarketCap and CoinGecko' },
        ]}
      />

      <List
        number="III"
        items={[
          { done: false, text: 'Finalize and release GloryPad to the market' },
          { done: false, text: 'Extensive marketing and user base building' },
          { done: false, text: 'Hire more team members: Developers, marketers, designers...' },
          { done: false, text: 'Kick off the development of new features and DAPPs' },
        ]}
      />
    </SectionContainer>
  )
}

export default RoadmapSection
