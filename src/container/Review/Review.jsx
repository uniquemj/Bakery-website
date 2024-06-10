import React from 'react'
import reviewComma from '../../assets/icons/review.svg'

const Review = ({review, name}) => {
  return (
    <div className='h-[400px] bg-white flex flex-col items-center justify-center my-20 gap-10'>
        <div className='w-3/5 flex items-center justify-center my-3'>
            <img src = {reviewComma} alt = ""/>
        </div>
        <div className='w-4/5 flex flex-col gap-5 items-center justify-center'>
            <p className = "text-center">{review}</p>
            <h1 className = "text-center text-headingColor font-medium">{name}</h1>
        </div>
    </div>
  )
}

export default Review