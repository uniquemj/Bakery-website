import React from 'react'
import { Card } from '../../container'
import plant from '../../assets/icons/plant.svg'
import flavour from '../../assets/icons/flavour.svg'
import handheart from '../../assets/icons/handHeart.svg'
import leaf from '../../assets/icons/leaf.svg'

const Why = () => {
  return (
    <div className = "w-screen flex flex-col py-8 mb-10 gap-[3.5rem] justify-center items-center" id="explore">
        <div className='flex flex-col items-center gap-2'>
            <h1 className='text-headingColor font-medium'>Why us?</h1>
            <h2 className='font-semibold text-4xl'>We value you.</h2>
        </div>
        <div className='w-full flex flex-col md:flex-row gap-10 md:gap-0 justify-evenly'>
            <Card img = {handheart} title = {"Handcrafted Excellence"} body = {"Meticulously handcrafted by our skilled artisans, ensuring every creation is a masterpiece."}/>
            <Card img = {plant} title = {"Premium Ingredients"} body = {"Meticulously handcrafted by our skilled artisans, ensuring every creation is a masterpiece."}/>
            <Card img = {leaf} title = {"Freshness Guaranteed "} body = {"Meticulously handcrafted by our skilled artisans, ensuring every creation is a masterpiece."}/>
            <Card img = {flavour} title = {"Unique Flavors"} body = {"Meticulously handcrafted by our skilled artisans, ensuring every creation is a masterpiece."}/>
        </div>
    </div>
  )
}

export default Why