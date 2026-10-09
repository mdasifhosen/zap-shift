import React from 'react';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from '../../../assets/brands/amazon.png'
import amazon_vector from '../../../assets/brands/amazon_vector.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import { Autoplay } from 'swiper/modules';


const brandLogos=[amazon,amazon_vector,casio, moonstar,randstad,star]

const Brands = () => {
    return (
      <div className="mt-[50px]">
        <div>
          <h1 className='text-center font-extrabold p-5 text-[28px]'>We've helped thousands of sales teams</h1>
        </div>
        <Swiper
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
        >
          {brandLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img src={logo} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
};

export default Brands;