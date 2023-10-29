import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typography } from '@mui/material';
import Page4_box from './Page4_box';
import 'swiper/css';

const Page4 = () => {
  return (
    <div data-aos-duration="4000" >
      <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center', marginTop:'5vh', marginBottom:'5vh' }}>
        SPECIALISTS AVAILABLE
      </Typography>
      <Swiper
        spaceBetween={8}
        slidesPerView={5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><Page4_box /></SwiperSlide>
        <SwiperSlide><Page4_box /></SwiperSlide>
        <SwiperSlide><Page4_box /></SwiperSlide>
        <SwiperSlide><Page4_box /></SwiperSlide>
        <SwiperSlide><Page4_box /></SwiperSlide>
        <SwiperSlide><Page4_box /></SwiperSlide>
        <SwiperSlide><Page4_box /></SwiperSlide>
        <SwiperSlide><Page4_box /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Page4;
