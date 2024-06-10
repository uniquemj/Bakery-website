import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'
import {MdChevronLeft, MdChevronRight,  } from 'react-icons/md'
import {useStateValue} from '../../context/StateProvider'
import { storage } from '../../../firebase.config'
import { getDownloadURL, ref } from 'firebase/storage'
import {MenuFilter} from '../index'
import egg from '../../assets/icons/filter/All.svg'
import bread from '../../assets/icons/filter/bread.svg'
import cake from '../../assets/icons/filter/cake.svg'
import cookie from '../../assets/icons/filter/cookie.svg'
import croissant from '../../assets/icons/filter/croissant.svg'
import donut from '../../assets/icons/filter/donut.svg'
import Muffin from '../../assets/icons/filter/Muffin.svg'
import pizza from '../../assets/icons/filter/pizza.svg'
import { actionType } from '../../context/reducer'


const Menu = () => {
  
  const [{foodItems, cartItems}, dispatch] = useStateValue()
  const [filter, setFilter] = useState('');

  const [items, setItems] = useState([])

  const addToCart = () =>{
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items
    })

    localStorage.setItem("cartItems", JSON.stringify(items));

  };

  const rowContainer = useRef(null);
  let data;
  if(filter.length > 0){
    data = foodItems?.filter((n)=>n.category === `${filter}`)
  }
  else{
    data = foodItems
  }

  const scroll = (scrollOffset) =>{
    rowContainer.current.scrollLeft += scrollOffset
  }

  useEffect(()=>{

  },[scroll, filter])

  useEffect(()=>{
    addToCart()
  },[items])

  // useEffect(()=>{
  //   rowContainer.current.scrollLeft += scrollValue;
  //   console.log(rowContainer.current.scrollLeft)
  //   a+=scrollValue;
  //   console.log(a)
  // },[scrollValue])

  // useEffect(()=>{

  // },[scrollValue])
  return (
    <div className='w-full py-4 px-20' id = "menu">
      <div className='w-full flex flex-col items-center gap-2 mb-2'>
        <p className = "text-lg font-medium  text-headingColor relative">Menu</p>
        <p className = "text-4xl font-semibold text-center relative">Our Hot Dishes</p>
      </div>
      <div className = "w-full flex items-center justify-start  lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
        <MenuFilter title="All" logo={egg} onClick={() => setFilter('')} />
        <MenuFilter title="Bread" logo={bread} onClick={() => setFilter('bread')} />
        <MenuFilter title="Croissant" logo={croissant} onClick={() => setFilter('croissant')} />
        <MenuFilter title="Pizza" logo={pizza} onClick={() => setFilter('pizza')} />
        <MenuFilter title="Donuts" logo={donut} onClick={() => setFilter('donut')} />
        <MenuFilter title="Muffins" logo={Muffin} onClick={() => setFilter('muffin')} />
        <MenuFilter title="Cake" logo={cake} onClick={() => setFilter('cake')} />
        <MenuFilter title="Cookies" logo={cookie} onClick={() => setFilter('cookies')} />
      </div>
      <div className = "w-full flex items-center justify-end">
        <div className='hidden md:w-[5%] md:flex items-center gap-2'>
          <motion.button whileTap={{scale: 0.75}} className='px-1 py-1 bg-headingColor  rounded-[5px]' onClick={()=>scroll(-300)}><MdChevronLeft className = "text-2xl text-white"/></motion.button>
          <motion.button whileTap={{scale: 0.75}} className='px-1 py-1 bg-headingColor  rounded-[5px]' onClick = {()=>scroll(300)}><MdChevronRight className = "text-2xl text-white"/></motion.button>
        </div>
      </div>

      <div ref = {rowContainer} className={`w-full flex items-center gap-12 my-12 py-3 scroll-smooth overflow-x-scroll scrollbar-none`}>
        {data && data.map(item => (
          <div key = {item.id} className = "w-full min-w-[200px] md:min-w-[240px] md:md:w-[240px] h-auto backdrop-blur-lg flex flex-col items-center justify-center rounded-tr-[610px] rounded-tl-[610px] gap-5">
          <div className = "w-full flex items-center justify-center">
              <img
              src = {item?.imageURL}
              alt = "img"
              className='w-[15rem] h-[17rem] rounded-tr-[610px] rounded-tl-[610px] object-cover'
              />
          </div>
          <div className = "w-full flex flex-col gap-1">
            <h2 className = "text-xl font-medium h-[50px]">{item?.title}</h2>
            <p className='text-lg italic'>Rs. <span>{item?.price}</span></p>
            <div className='w-full flex mt-3'>
              <button className = "text-center w-full border-headingColor border-solid border-[1px] text-headingColor hover:bg-headingColor hover:text-navColor delay-100 transition-all px-4 py-2 rounded-[6px]" onClick={() => setItems([...cartItems, item])}>Add to cart</button>
            </div>
          </div>
      </div>
        ))}
    </div>
    </div>
  )
}

export default Menu