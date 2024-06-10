import React from 'react'
import {Header, Menu, Banner, Why, Testimonial} from '../index'

const Home = () => {
  return (
    <div className='w-full'>
        <Header/>
        <Menu/>
        <Why/>
        <Banner/>
        <Testimonial/>
    </div>
  )
}

export default Home