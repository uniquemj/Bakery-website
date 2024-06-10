
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Review } from '../../container';

const Slider = () => {
  const data = [
    {
      id: 1,
      name: "Yukesh Maharjan",
      review:
        "the cake are really good here. Had ordered kitkat cake hich was really good.",
    },
    {
      id:2,
      name: "Alex Maharjan",
      review: "Really loved the pizza.",
    },
    {
      id:3,
      name: "Rajesh Maharjan",
      review: "Staff Member were really nice.",
    },
    {
      id:4,
      name: "Yuesh Maharjan",
      review: "Really loved donut, Filled with creams. Just love it.",
    },
  ];
  return (
    <div className='flex justify-center items-center w-full h-[600px]'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full"
      >
        {data.map((data) => (
          <SwiperSlide className='text-center' key={data.id}>
            <Review review = {data.review} name = {data.name}/>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
}

export default Slider

