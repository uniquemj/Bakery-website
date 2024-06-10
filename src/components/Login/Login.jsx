import React from 'react'
import cookie from '../../assets/login.svg'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='w-full h-screen py-[40px] md:py-[100px] px-6 md:px-10 mt-10'>
      <div className='w-full h-full flex justify-center items-center'>
        <div className ="flex shadow-2xl rounded-xl">
          <div className = "hidden md:flex ">
            <img src = {cookie} alt = "image" className='object-cover rounded-tl-2xl rounded-bl-2xl'/>
          </div>
          <div className = " w-full md:w-[70%] flex flex-col gap-6 py-10 px-20">
            <div className = "flex flex-col items-center gap-2">
              <h1 className='text-2xl font-semibold'>Welcome!</h1>
              <p className='text-sm'>Let's Order Food.</p>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label for = "email" className='flex items-center gap-2'>Email</label>
                <input type = "text" id = "email" className = ' border-[rgba(0,0,0,0.2)] border-solid border-2 rounded-[12px] pr-[100px] pl-[14px] py-2' placeholder='Enter your email'/>
              </div>
              <div className='flex flex-col gap-2'>
                <label for = "password" className='flex items-center gap-2'>Password</label>
                <input type = "password" id = "password" className = 'border-[rgba(0,0,0,0.2)] border-solid border-2 rounded-[12px] pr-[100px] pl-[14px] py-2' placeholder='Enter your password'/>
              </div>
              <div>
                <a href = "#" className='flex justify-end text-[12px] underline text-headingColor'>Forgot Password?</a>
              </div>
              <button className = "bg-headingColor py-2 text-navColor rounded-[3px]">LogIn</button>
              <div>
                <p className='text-[12px] text-center'>Don't have account? <Link to = "/signup/" className='text-headingColor underline'>click here</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login