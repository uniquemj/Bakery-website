import React from 'react';
import image from '../../assets/AboutUs.svg';
const AboutUs = () => {
  return (
    <div className = "w-full h-screen py-[40px] md:py-[100px] px-6 md:px-10">
        <div className='w-full h-full flex md:grid-rows-2 justify-center items-center mt-[3rem] py-10'>
            <div className='w-3/5 flex flex-col items-start justify-center'>
                <h2 className = "font-semibold text-headingColor mb-3">About us</h2>
                <h1 className='text-4xl w-2/5 font-light mb-4'>We are <span className='text-headingColor font-semibold'>Bavarian Bakery Cafe</span></h1>
                <p className = "text-justify md:text-left md:w-4/5 mb-10">Where every moment is a sweet celebration. At our cozy corner, we craft artisanal delights with love and care. From our freshly brewed coffee to our decadent pastries, each creation is a testament to our passion for quality and flavor. 
                    Join us for a taste of joy and a warm, welcoming atmosphere that feels like home.</p>
                <div>
                    <a className='px-5 py-2 bg-headingColor rounded-3xl text-navColor hover:bg-[#ff5d05c7] transition-all ease-in-out duration-100 cursor-pointer'>Order Now</a>
                </div>
            </div>
            <div className='hidden md:flex'>
                <img src = {image} alt = "" className=''/>
            </div>
        </div>
    </div>
  )
}

export default AboutUs