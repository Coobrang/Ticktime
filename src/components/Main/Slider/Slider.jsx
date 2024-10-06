import React from "react";
import "./Slider.css";
import sliderData from "../../../Data/Slider.json";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

// Images
import slider1 from '../../../assets/watch-slider1.png';
import slider2 from '../../../assets/watch-slider2.png';
import slider4 from '../../../assets/watch-slider4.png';

const images = {
  slider1: slider1,
  slider2: slider2,
  slider4: slider4
};

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper"
      >
        <>
        {sliderData.slides.map((slide, index) => (
            <SwiperSlide key={index}>
            <img src={images[slide.image]} alt={slide.heading} />
            <div className="content">
                <span>{slide.announcement}</span>
                <h1 dangerouslySetInnerHTML={{__html: slide.heading}} />
                <p dangerouslySetInnerHTML={{ __html: slide.description}}></p>
                <a href={slide.buttonLink}>{slide.buttonText}</a>
            </div>
            </SwiperSlide>
        ))}
        </>
      </Swiper>
    </>
  );
}