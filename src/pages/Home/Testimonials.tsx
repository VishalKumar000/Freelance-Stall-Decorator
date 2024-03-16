"use client";

import React from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "./testimonials.css";
import Image from "next/image";

const TESTIMONIAL_DATA = [
  "/Home/Testimonials/testimonial1.jpeg",
  "/Home/Testimonials/testimonial2.jpeg",
  "/Home/Testimonials/testimonial3.jpg",
];

const Testimonials = () => {
  return (
    <section className="w-full bg-black text-white py-10">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-4 flex flex-col gap-8">
        <h2 className="text-2xl min-[550px]:text-4xl lg:text-5xl font-bold tracking-[0.01em]">
          Testimonials
        </h2>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {TESTIMONIAL_DATA.map((item, index) => {
            return (
              <SwiperSlide
                key={index + item + Math.random()}
                className="relative"
              >
                <Image
                  src={item}
                  alt="image selected by user"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
