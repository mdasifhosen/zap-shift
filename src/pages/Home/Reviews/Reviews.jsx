import React, { use } from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from './ReviewCard';

const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);
    console.log(reviews)
    return (
      <div>
        <div className="text-center">
          <h3 className="text-3xl text-center">Review</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            deserunt, quae, cumque tenetur, obcaecati quia voluptates sint
            recusandae fugiat labore voluptatem. Laboriosam ad eum aspernatur
            quasi obcaecati eius asperiores temporibus.
          </p>
        </div>
        <>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {reviews.map((review) => (
              <SwiperSlide>
                <ReviewCard></ReviewCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    );
};

export default Reviews;