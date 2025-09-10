import React from 'react'
import Hero from '../components/Hero'
import Products from '../components/Products'

const Home = () => {
   return (
      <div className='w-full h-full min-h-max flex justify-center flex-col items-center bg-blue-400'>
         <Hero />
         <Products />
      </div>
   )
}

export default Home
