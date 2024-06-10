import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className='w-full py-[40px] md:py-[100px] px-6 md:px-10 bg-header-image bg-no-repeat bg-cover'>
     <div className = "flex flex-col items-center justify-center text-navColor my-[6rem] mb-20">
        <h1 className='text-5xl md:text-[4rem] md:w-[750px] text-center leading-4.5rem md:leading-[5rem]'>Where <span className='text-headingColor'>Every Bite</span> is a Little Slice of <span className='text-headingColor'>Happiness</span></h1>
        <p className='mt-5 mb-5 text-center md:text-[1.2rem]'>Discover the Sweet Harmony at <span className = "text-headingColor">Bavarian!</span></p>
        <div className = "flex items-center gap-3">
          <a href = "#menu" className='px-5 py-2 bg-headingColor rounded-3xl text-navColor hover:bg-[#ff5d05c7] transition-all ease-in-out duration-100 cursor-pointer'>Order Now</a>
          <a href = "#explore" className='px-5 py-2 border-2 border-white rounded-3xl text-navColor hover:text-headingColor transition-all ease-in-out duration-100 cursor-pointer '>Explore</a>
        </div>
     </div>
    </header>
  )
}

export default Header