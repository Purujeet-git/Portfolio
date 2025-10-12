import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-20' id='projects'>
      <h1 className='heading text-center text-4xl lg:text-7xl font-bold'>
        Kind Words from
        <span className='text-purple-200'> satisfied clients</span>
      </h1>
      <div className='flex flex-col items-center '>
        <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />

        </div>
        
      </div>
    </div>
  )
}

export default Clients
