import React from 'react'
import {Header, Menu, Banner, Why} from '../index'

const Home = () => {
  return (
    <div className='w-full'>
        <Header/>
        <Menu/>
        <Why/>
        <Banner/>
    </div>
  )
}

export default Home