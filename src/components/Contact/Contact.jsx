import React from 'react'
import { MdOutlinePhone,MdAlternateEmail,MdOutlinePersonOutline, MdOutlineMessage } from "react-icons/md";

const Contact = () => {
  return (
    <div className='w-full'>
        <div className='w-full flex flex-col items-center justify-center py-[40px] md:py-[100px] px-6 md:px-10  text-navColor bg-contact-image bg-no-repeat bg-cover'>
            <h1 className='text-4xl font-semibold mt-10 mb-9'>Contact US</h1>
            <p className='text-center'>Have any queries? Let's guide you till our doors</p>
        </div>
    
        <div className='md:h-[700px] my-5 md:flex md:grid-rows-2 md:justify-around p-10'>
            <div className='h-full flex flex-col md:justify-start md:gap-10 mb-7 md:mb-0'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-3xl font-semibold text-center md:text-left'>Get in touch</h1>
                    <p className='text-center md:text-left'>Contact us for any help, request and join the team.</p>
                </div>

                <div className = "hidden md:flex flex-col items-center md:items-start mt-10 md:mt-0">
                    <div>
                        <h1 className='font-medium'>Contact Information</h1>
                        <div className="w-[3.5rem] h-1 bg-[rgba(0,0,0,0.6)] border-0 rounded-xl"></div>
                    </div>
                    <div className='w-4/5 flex flex-col my-5 gap-2'>
                        <div className='flex items-center gap-3'><MdOutlinePhone  className='text-xl'/> <span>+977-9812356478</span></div>
                        <div className='flex items-center gap-3'><MdAlternateEmail className='text-xl'/> <span>bavarian.cafe@gmail.com</span></div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-start md:justify-end'>
                <div className='bg-[#FFFCFC] shadow-2xl border-solid border-[rgba(0,0,0,0.4)] border-2 rounded-xl py-10 px-[3.5rem] flex flex-col'>
                    <div className='md:flex gap-[4rem] mb-7'>
                        <div className='flex flex-col gap-2 mb-7 md:mb-0'>
                            <label for = "first_name" className='flex items-center gap-2'><MdOutlinePersonOutline className='text-xl'/> First Name</label>
                            <input type = "text" id = "first_name" className = 'border-[rgba(0,0,0,0.4)] border-solid border-2 rounded-[3px] px-3 py-1' placeholder='First Name'/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label for = "last_name" className='flex items-center gap-2'> <MdOutlinePersonOutline className='text-xl'/> Last Name</label>
                            <input type = "text" id = "last_name" className = 'border-[rgba(0,0,0,0.4)] border-solid border-2 rounded-[3px] px-3 py-1' placeholder='Last Name'/>
                        </div>
                    </div>
                    <div className='md:flex gap-[4rem] mb-7'>
                        <div className='flex flex-col gap-2 mb-7 md:mb-0'>
                            <label for = "mobile_number" className='flex items-center gap-2'><MdOutlinePhone className='text-xl'/> Mobile Number</label>
                            <input type = "text" id = "mobile_number" className = 'border-[rgba(0,0,0,0.4)] border-solid border-2 rounded-[3px] px-3 py-1' placeholder='Mobile Number'/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label for = "email" className='flex items-center gap-2'> <MdOutlinePersonOutline className='text-xl'/> Email</label>
                            <input type = "email" id = "email" className = 'border-[rgba(0,0,0,0.4)] border-solid border-2 rounded-[3px] px-3 py-1' placeholder='Email'/>
                        </div>
                    </div>
                    <div className='flex mb-7'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label for = "email" className='flex items-center gap-2'> <MdOutlineMessage className='text-xl'/> Message</label>
                            <textarea className='h-[250px] border-[rgba(0,0,0,0.4)] border-solid border-2 rounded-[3px] px-3 py-1' placeholder='Write Message Here . . .'></textarea>
                        </div>
                    </div>
                    <div className='w-full'>
                        <button className='bg-headingColor text-white w-full py-3 rounded-xl'>Send Message</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact