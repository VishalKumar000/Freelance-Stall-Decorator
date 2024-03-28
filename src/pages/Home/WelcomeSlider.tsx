//@ts-nocheck

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

import img1 from "../../../public/Home/WelcomeSlider/1005Khelo-India-University-Games-2022-9.webp";
import img2 from "../../../public/Home/WelcomeSlider/2157Khelo-India-University-Games-2022-2-_1_.webp";
import img3 from "../../../public/Home/WelcomeSlider/3941Khelo-India-University-Games-2022-5.webp";
import img4 from "../../../public/Home/WelcomeSlider/8899Khelo-India-University-Games-2022-7.webp";

const slider = [
  {
    // imgUrl: "/Home/WelcomeSlider/1005Khelo-India-University-Games-2022-9.webp",
    imgUrl: img1,
    link: "",
  },
  {
    /// imgUrl: "/Home/WelcomeSlider/2157Khelo-India-University-Games-2022-2-_1_.webp",
    imgUrl: img2,
    link: "",
  },
  {
    // imgUrl: "/Home/WelcomeSlider/3941Khelo-India-University-Games-2022-5.webp",
    imgUrl: img3,
    link: "",
  },
  {
    // imgUrl: "/Home/WelcomeSlider/8899Khelo-India-University-Games-2022-7.webp",
    imgUrl: img4,
    link: "",
  },
];

const WelcomeSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div
      className="relative w-full h-full bg-black"
      id="welcome-slider"
      style={{
        maxHeight: "calc(100vh - 72px)",
        minHeight: "calc(100vh - 72px)",
      }}
    >
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        thumbs={{
          swiper:
            thumbsSwiper && !thumbsSwiper?.destroyed ? thumbsSwiper : null,
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
              <Image
                src={slide.imgUrl}
                alt=""
                fill
                sizes="100vw"
                placeholder="blur"
                priority
              />
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
              <Image src={slide.imgUrl} alt="" fill sizes="100vw" />
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
