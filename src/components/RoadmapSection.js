import * as React from 'react'

import SectionContainer from './SectionContainer'

const List = ({ number, items = [], className }) => {
  return (
    <div className="grid gap-y-4 grid-cols-1 mx-auto my-24 sm:my-32 sm:w-3/4 md:gap-y-0 md:grid-cols-3 md:w-auto lg:grid-cols-2">
      <div className={`flex items-center md:justify-center w-full`}>
        <h3 className="text-4xl font-bold uppercase xl:text-6xl">Phase {number}</h3>
      </div>
      <div
        className={`flex flex-col place-self-start relative pl-6 xl:pl-10 col-span-2 lg:col-auto`}
      >
        <div className="w-[2px] absolute bottom-0 left-0 top-0 bg-gradient-to-b rounded from-secondary to-orange" />
        <ul className="space-y-5">
          {items.map((item, index) => (
            <li className="flex items-center" key={`${number}-${index}`}>
              <div className="w-[20px] h-[20px] min-h-[20px] min-w-[20px] flex items-center justify-center mr-3 bg-black bg-opacity-50 border border-secondary border-opacity-100 rounded-full">
                {item.done && <div className="w-[16px] h-[16px] bg-secondary rounded-full" />}
              </div>
              <p className="text-sm xl:text-base">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const RoadmapSection = () => {
  return (
    <SectionContainer
      id="roadmap"
      title="Roadmap"
      description="List of tasks and steps we plan to take during our successful journey."
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
          { done: true, text: 'Team identity reveal (Doxxing)' },
          { done: true, text: 'Conduct a successful private sale' },
        ]}
      />

      <List
        number="II"
        items={[
          { done: true, text: 'Dessert Finance contract audit' },
          { done: true, text: 'Techrate contract audit' },
          { done: true, text: 'Extensive marketing on multiple channels' },
          { done: true, text: 'Conduct a successful pre-sale' },
          { done: true, text: 'Continuous marketing plans' },
          { done: true, text: 'Official launch & Listing on PancakeSwap' },
          { done: true, text: 'Listing on CoinMarketCap and CoinGecko' },
          { done: false, text: 'CertiK contract audit' },
          { done: false, text: 'Collaborate with "Luna PR" for PR & Marketing' },
        ]}
      />

      <List
        number="III"
        items={[
          { done: false, text: 'Hire more team members' },
          { done: false, text: 'GloryPad security audit' },
          { done: false, text: 'Finalize and release GloryPad to the market' },
          { done: false, text: 'Extensive marketing and user base building' },
          { done: false, text: 'Automate DAPPs revenu distribution to holders' },
          { done: false, text: 'Kick off the development of new features and DAPPs' },
        ]}
      />
    </SectionContainer>
  )
}

export default RoadmapSection
