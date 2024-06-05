import React from 'react'
import { Card } from '../../container'

const Why = () => {
  return (
    <div className = "w-screen flex flex-col py-8 gap-[3.5rem] justify-center items-center">
        <div className='flex flex-col items-center'>
            <h1 className='text-headingColor'>Why us?</h1>
            <h2 className='font-semibold text-4xl'>We value you.</h2>
        </div>
        <div className='w-full flex justify-evenly'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Why