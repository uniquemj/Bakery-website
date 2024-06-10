import React from 'react'

const MenuFilter = ({title, logo, onClick = () =>{}}) => {
  return (
    <div onClick = {onClick} className = "group bg-card hover:bg-headingColor hover:text-navColor w-24 min-w-[94px] h-28 cursor-pointer rounded-lg  drop-shadow-xl flex flex-col gap-3 items-center justify-center duration-150 trasition-all ease-in-out">
          <div className='bg-navColor p-2 rounded-[50%]'>
            <img src = {logo} alt = "logo"/>   
          </div>
          <p>{title}</p>
    </div>
  )
}

export default MenuFilter