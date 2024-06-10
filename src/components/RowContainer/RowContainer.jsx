import React, { useEffect, useRef } from 'react'
import croissant from '../../assets/croissant.jpg'

const RowContainer = ({flag, data, scrollValue}) => {
  const rowContainer = useRef(null);
  let a = 0;
  useEffect(()=>{
    rowContainer.current.scrollLeft += scrollValue;
    console.log(rowContainer.current.scrollLeft)
    a+=scrollValue;
    console.log(a)
  },[scrollValue])
  
  return (
    <div ref = {rowContainer} className={`w-full flex items-center gap-12 my-12 py-3 scroll-smooth ${flag? `overflow-x-scroll scrollbar-none` : `overflow-x-hidden flex-wrap`}`}>
        {data && data.map(item => (
          <div key = {item.id} className = "w-full min-w-[200px] md:min-w-[240px] md:md:w-[240px] h-auto backdrop-blur-lg flex flex-col items-center justify-center rounded-tr-[610px] rounded-tl-[610px] gap-5">
          <div className = "w-full flex items-center justify-center">
              <img
              src = {item?.image}
              alt = ""
              className='w-[15rem] h-[17rem] rounded-tr-[610px] rounded-tl-[610px] object-cover'
              />
          </div>
          <div className = "w-full flex flex-col gap-1">
            <h2 className = "text-xl font-medium h-[50px]">{item?.title}</h2>
            <p className='text-lg italic'>Rs. <span>{item?.price}</span></p>
            <div className='w-full flex mt-3'>
              <button className = "text-center w-full border-headingColor border-solid border-[1px] text-headingColor hover:bg-headingColor hover:text-navColor delay-100 transition-all px-4 py-2 rounded-[6px]">Add to cart</button>
            </div>
          </div>
      </div>
        ))}
    </div>
  )
}

export default RowContainer