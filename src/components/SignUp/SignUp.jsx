import React from 'react'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <div className='w-full h-screen py-[40px] md:py-[100px] px-6 md:px-10 mt-20'>
      <div className='w-full h-full flex justify-center items-center '>
        <div className ="md:w-[50%] flex shadow-2xl rounded-xl">
          <div className = " w-full flex flex-col justify-center items-center md:gap-6 py-8 px-10 md:py-10 md:px-20">
            <div className = "flex flex-col items-center gap-2">
              <h1 className='text-2xl font-semibold text-center mb-3'>Create your Account!</h1>
            </div>
            <div className='w-full flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label for = "full_name" className='flex items-center gap-2'>Full Name</label>
                <input type = "text" id = "full_name" className = 'w-full border-[rgba(0,0,0,0.4)] border-solid border-2 rounded-[3px] px-3 py-1' placeholder='Enter your fullname'/>
              </div>
              <div className='flex flex-col gap-2'>
                <label for = "email" className='flex items-center gap-2'>Email</label>
                <input type = "text" id = "email" className = 'border-[rgba(0,0,0,0.4)] border-solid border-2 rounded-[3px] px-3 py-1' placeholder='Enter your email'/>
              </div>
              <div className='flex flex-col gap-2'>
                <label for = "mobile_number" className='flex items-center gap-2'>Mobile Number</label>
                <input type = "text" id = "mobile_number" className = 'border-[rgba(0,0,0,0.4)] border-solid border-2 rounded-[3px] px-3 py-1' placeholder='Enter your Mobile Number'/>
              </div>
              <div className='flex flex-col gap-2'>
                <label for = "password" className='flex items-center gap-2'>Password</label>
                <input type = "password" id = "password" className = 'border-[rgba(0,0,0,0.4)] border-solid border-2 rounded-[3px] px-3 py-1' placeholder='Enter your password'/>
              </div>
              <div className='flex flex-col gap-2'>
                <label for = "password" className='flex items-center gap-2'>Confirm Password</label>
                <input type = "password" id = "password" className = 'border-[rgba(0,0,0,0.4)] border-solid border-2 rounded-[3px] px-3 py-1' placeholder='Enter your password'/>
              </div>
              <button className = "bg-headingColor py-2 text-navColor rounded-[3px]">SignUp</button>
              <div>
                <p className='text-[12px] text-center'>Already have account? <Link to = "/login/" className='text-headingColor underline'>click here</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp