"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./welcomeslider.css";

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

const slider = [
  {
    imgUrl: "/Home/WelcomeSlider/1005Khelo-India-University-Games-2022-9.webp",
    link: "",
  },
  {
    imgUrl:
      "/Home/WelcomeSlider/2157Khelo-India-University-Games-2022-2-_1_.webp",
    link: "",
  },
  {
    imgUrl: "/Home/WelcomeSlider/3941Khelo-India-University-Games-2022-5.webp",
    link: "",
  },
  {
    imgUrl: "/Home/WelcomeSlider/8899Khelo-India-University-Games-2022-7.webp",
    link: "",
  },
];

const WelcomeSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div
      className="relative w-full h-full"
      style={{
        maxHeight: "calc(100vh - 72px)",
        minHeight: "calc(100vh - 72px)",
      }}
    >
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {slider.map((slide, index) => {
          return (
            <SwiperSlide
              key={
                index +
                slide.imgUrl +
                Math.random() +
                slide.link +
                Math.random()
              }
            >
              <Image src={slide.imgUrl} alt="" fill />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={2}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        breakpoints={{
          400: {
            slidesPerView: 2,
          },
          550: {
            slidesPerView: 3,
          },
          850: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {slider.map((slide, index) => {
          return (
            <SwiperSlide
              key={
                index +
                slide.imgUrl +
                Math.random() +
                slide.link +
                Math.random()
              }
            >
              <Image src={slide.imgUrl} alt="" fill />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default WelcomeSlider;

const WELCOME_SLIDER_DATA = [
  { imgUrl: "/Home/1005Khelo-India-University-Games-2022-9.webp", title: "" },
  {
    imgUrl: "/Home/2157Khelo-India-University-Games-2022-2-_1_.webp",
    title: "",
  },
  { imgUrl: "/Home/3941Khelo-India-University-Games-2022-5.webp", title: "" },
  { imgUrl: "/Home/8899Khelo-India-University-Games-2022-7.webp", title: "" },
];
