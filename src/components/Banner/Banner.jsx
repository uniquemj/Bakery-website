import React from 'react'

const Banner = () => {
  return (
    <div className = "bg-banner-image bg-cover bg-no-repeat w-full py-1 ">
        <div className='w-full flex flex-col justify-center items-center my-[2rem] gap-5 md:gap-7'>
            <h1 className=' text-2xl md:text-5xl text-center text-navColor'>Customize your cake</h1>
            <p className=' w-3/5 md:w-2/5 text-center text-sm md:text-xl text-navColor'>Our bakery specializes in custom orders. 
                Whether you have a specific design in mind or need help bringing your vision to life, 
                our skilled bakers are here to create something truly unique and delicious just for you.</p>
                <a className='px-5 py-2 bg-headingColor rounded-3xl text-navColor hover:bg-[#ff5d05c7] transition-all ease-in-out duration-100 cursor-pointer'>Enquire Now</a>
        </div>
    </div>
  )
}

export default Banner