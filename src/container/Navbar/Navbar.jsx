import React, { useState } from 'react'
import logo from '../../assets/LOGO.png'
import { MdShoppingCart, MdOutlineMenu, MdLogout, MdClose } from "react-icons/md";
import Avatar from '../../assets/icons/ph_user-light.svg'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
const Navbar = () => {

    const [isMenu, setIsMenu] = useState(false);
    const [isOption, setIsOption] = useState(false);

    const displayMenu = () =>{
        setIsMenu(!isMenu)
    }
    const displayOption = () =>{
        setIsOption(!isOption)
    }
  return (
    <>
        {/* Desktop and tablet */}
        <div className = "absolute z-50 hidden md:flex grid-row-3 justify-between items-center w-full py-4 px-[3.5rem] ">
            <Link to ='/' className = "flex items-center">
                <img src = {logo} alt = "logo" className='w-30 object-contain'/>
            </Link>
            <motion.ul initial = {{opacity: 0, x : 200}}
             animate = {{opacity: 1, x: 0}}
             exit = {{opacity: 0, x:200}}
             className = "hidden md:flex  items-center md:gap-8 lg:gap-15">
                <Link to = "" className ="text-base text-navColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</Link>
                <Link to = "#menu" className ="text-base text-navColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</Link>
                <Link to = "#" className ="text-base text-navColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About us</Link>
                <Link to = "#" className ="text-base text-navColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Contact</Link>
            </motion.ul>
            <div className = "hidden md:flex gap-8">
                <Link to = "#" className='relative flex'>
                    <p className = "flex items-center gap-2 text-navColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Cart <MdShoppingCart className = "text-navColor text-2xl"/></p>
                    <div className = "absolute -top-1 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                        <p className = "text-xs text-white font-semibold">2</p>
                    </div>
                </Link>
                <div className ="cursor-pointer">
                    <motion.img whileTap={{scale:0.6}} src={Avatar} alt="userprofile" className = "drop-shadow-xl" onClick = {displayMenu}/>
                    {
                        isMenu && (
                            <motion.div initial = {{opacity: 0, scale: 0.6}} animate = {{opacity: 1, scale: 1}} exit = {{opacity: 0, scale: 0.6}}className='w-40 right-12 bg-primary shadow-xl rounded-lg flex flex-col absolute top-[4.5rem] px-4 py-2'>
                                <Link to = "#Order">
                                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>Orders</p>
                                </Link>
                                <Link to = "#Order">
                                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>Login</p>
                                </Link>
                                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>Logout <MdLogout/></p>
                            </motion.div>
                        )
                    }
                </div>
            </div>
        </div>
        {/* Mobile */}
        <div className = "absolute z-50 flex md:hidden justify-between items-center w-full py-4 px-6">
            <Link to ='/' className = "flex items-center">
                <img src = {logo} alt = "logo" className='w-3/5 object-contain'/>
            </Link>
            <div className='flex md:hidden'>
                {isOption
                ? 
                <MdClose className = "text-navColor text-3xl" onClick = {displayOption}/>
                :
                <MdOutlineMenu className = "text-navColor text-3xl" onClick={displayOption}/>
                }
            </div>
            {isOption && 
            <motion.div initial = {{opacity: 0, scale: 0.6}} animate = {{opacity: 1, scale: 1}} exit = {{opacity: 0, scale: 0.6}} className='absolute bg-[rgba(0,0,0,0.9)] w-full h-[40rem] left-0 top-[4rem] text-black flex justify-center items-center flex-col'>
                <ul className = "flex flex-col justify-center items-center gap-4 md:gap-8 lg:gap-15 text-black">
                    <Link to = "" className ="text-base text-navColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</Link>
                    <Link to = "#menu" className ="text-base text-navColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</Link>
                    <Link to = "#" className ="text-base text-navColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About us</Link>
                    <Link to = "#" className ="text-base text-navColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Contact</Link>
                    <Link to = "#" className ="text-base text-navColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Cart</Link>
                </ul>
                <div className="w-48 h-1 my-4 bg-navColor border-0"></div>

                <Link to = "#Order">
                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>Orders</p>
                </Link>
                <Link to = "#Order">
                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>Login</p>
                </Link>
                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>Logout <MdLogout/></p>
            </motion.div>
            }
            
        </div>
    </>
  )
}

export default Navbar