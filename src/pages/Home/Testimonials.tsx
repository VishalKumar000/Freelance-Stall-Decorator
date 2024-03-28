"use client";

import React from "react";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "./testimonials.css";
import Image from "next/image";

const TESTIMONIAL_DATA = [
  "/Home/Testimonials/testimonial1.jpg",
  "/Home/Testimonials/testimonial.jpg",
  // "/Home/Testimonials/testimonial2.jpeg",
  // "/Home/Testimonials/testimonial3.jpg",
];

const Testimonials = () => {
  return (
    <section className="w-full bg-white text-[#303030] py-10">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-4 flex flex-col gap-8">
        <div className=" mb-7">
          <div className=" pl-10 lg:pl-20 mb-5 relative">
            <div className="text-[9px] min-[550px]:text-[12px] lg:text-sm heading-highlight uppercase font-semibold tracking-[2px] pl-10 mb-4 relative before:absolute before:left-[-30px] before:w-[5px] before:h-[5px] before:bg-[#07b2ff] before:rounded-full before:top-1/2 before:translate-x-[-50%] before:translate-y-[-50%] after:absolute after:top-1/2 after:left-[-20px] after:h-[1px] after:w-12 after:bg-[#07b2ff]">
              Our Achievements
            </div>
          </div>
          <h2 className="text-2xl min-[550px]:text-4xl lg:text-5xl font-bold tracking-[0.01em] text-[#212529]">
            Certifications
          </h2>
        </div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper min-w-full mx-2 md:min-w-[450px]"
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
                  className=" object-cover"
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
