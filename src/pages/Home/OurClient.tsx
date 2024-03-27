"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const OUR_CLIENT_DATA = [
  "/Home/Client/image1.jpg",
  "/Home/Client/image2.jpg",
  "/Home/Client/image3.jpg",
  "/Home/Client/image4.jpg",
  "/Home/Client/image5.jpg",
  "/Home/Client/image6.jpg",
  "/Home/Client/image7.jpg",
  "/Home/Client/image8.jpg",
  "/Home/Client/image9.jpg",
  "/Home/Client/image10.jpg",
  "/Home/Client/image11.jpg",
];

const OurClient = () => {
  return (
    <section className="w-full bg-[#f7f8f8] text-[#303030] py-14">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-4 flex flex-col gap-8">
        <div className=" mb-7">
          <div className=" pl-10 lg:pl-20 mb-5 relative">
            <div className="text-[9px] min-[550px]:text-[12px] lg:text-sm heading-highlight uppercase font-semibold tracking-[2px] pl-10 mb-4 relative before:absolute before:left-[-30px] before:w-[5px] before:h-[5px] before:bg-[#07b2ff] before:rounded-full before:top-1/2 before:translate-x-[-50%] before:translate-y-[-50%] after:absolute after:top-1/2 after:left-[-20px] after:h-[1px] after:w-12 after:bg-[#07b2ff]">
              our clients
            </div>
          </div>
          <h2 className="text-xl min-[550px]:text-4xl lg:text-5xl font-bold tracking-[0.01em]">
            Our Client
          </h2>
        </div>
        <Swiper
          slidesPerView={3}
          modules={[Autoplay]}
          className="w-full m-0 min-w-full min-h-[150px] max-h-[150px] "
          breakpoints={{
            1000: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            100: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {OUR_CLIENT_DATA.map((item, index) => {
            return (
              <SwiperSlide key={index + item + index + Math.random()}>
                <div className="relative w-full h-full min-h-[170px] max-h-[150px] overflow-hidden rounded-md p-6 shadow-md bg-white">
                  <Image
                    src={item}
                    alt="image selected by user"
                    fill
                    className=" transition-all hover:scale-110 object-contain"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default OurClient;
