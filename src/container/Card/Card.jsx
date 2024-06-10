import React from 'react'



const Card = ({img, title, body}) => {
  return (
    <div className='flex flex-col gap-2 items-center justify-center'>
        <div className='flex flex-col items-center'>
            <img src = {img} alt = "icon"/>
        </div>
        <div className='flex flex-col items-center w-4/5 gap-3'>
            <h1 className='text-center font-semibold'>{title}</h1>
            <p className='text-center'>{body}</p>
        </div>
    </div>
  )
}

export default Card