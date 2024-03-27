"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";

const WhatOurClientSays = () => {
  return (
    <section className="w-full bg-[#f7f8f8] text-[#303030] py-14">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-4 flex flex-col gap-8">
        <div className=" mb-7">
          <div className=" pl-10 lg:pl-20 mb-5 relative">
            <div className="text-[9px] min-[550px]:text-[12px] lg:text-sm heading-highlight uppercase font-semibold tracking-[2px] pl-10 mb-4 relative before:absolute before:left-[-30px] before:w-[5px] before:h-[5px] before:bg-[#07b2ff] before:rounded-full before:top-1/2 before:translate-x-[-50%] before:translate-y-[-50%] after:absolute after:top-1/2 after:left-[-20px] after:h-[1px] after:w-12 after:bg-[#07b2ff]">
              reviews
            </div>
          </div>
          <h2 className="text-xl min-[550px]:text-4xl lg:text-5xl font-bold tracking-[0.01em]">
            What Our Client Says
          </h2>
        </div>
        <Swiper
          slidesPerView={3}
          modules={[Autoplay]}
          className="w-full m-0 min-w-full"
          breakpoints={{
            1000: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            10: {
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
          {WHAT_OUR_CLIENT_SAYS.map((item, index) => {
            return (
              <SwiperSlide
                key={item.content + index + Math.random()}
                style={{
                  background: "transparent",
                  borderRadius: "15px",
                  overflow: "hidden"
                }}
              >
                <div className="relative w-full min-h-min overflow-hidden rounded-sm px-6 py-14 shadow-md bg-white text-black">
                  <div className="flex justify-center mb-3 min-w-min">
                    {Array.from({ length: item.star }, (_, index) => index).map(
                      (item) => {
                        return (
                          <MdOutlineStar
                            key={Math.random() + item}
                            className="text-[#FFCE39]"
                          />
                        );
                      }
                    )}
                    {Array.from(
                      { length: 5 - item.star },
                      (_, index) => index
                    ).map((item) => {
                      return (
                        <MdOutlineStarBorder
                          key={Math.random() + item}
                          className="text-[#FFCE39]"
                        />
                      );
                    })}
                  </div>
                  <p className="text-sm font-normal">{item.content}</p>
                  <Image
                    src={item.imgUrl}
                    alt=""
                    width={70}
                    height={70}
                    className=" rounded-full mx-auto my-4 shadow-md"
                    // className="w-full object-contain rounded-md"
                  />
                  <h3 className="mx-auto my-0 font-normal text-center text-lg">
                    {item.name}
                  </h3>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default WhatOurClientSays;

const WHAT_OUR_CLIENT_SAYS = [
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ullam corporis nulla, incidunt deserunt libero voluptatibus unde veritatis consequatur esse voluptatem temporibus fugiat, optio iure nesciunt ad sequi repellendus sunt.",
    imgUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Vishal Kumar",
    star: 4,
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ullam corporis nulla, incidunt deserunt libero voluptatibus unde veritatis consequatur esse voluptatem temporibus fugiat, optio iure nesciunt ad sequi repellendus sunt.",
    imgUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Vishal Kumar 1",
    star: 4,
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ullam corporis nulla, incidunt deserunt libero voluptatibus unde veritatis consequatur esse voluptatem temporibus fugiat, optio iure nesciunt ad sequi repellendus sunt.",
    imgUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Vishal Kumar2 ",
    star: 4,
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ullam corporis nulla, incidunt deserunt libero voluptatibus unde veritatis consequatur esse voluptatem temporibus fugiat, optio iure nesciunt ad sequi repellendus sunt.",
    imgUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Vishal Kumar3",
    star: 4,
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ullam corporis nulla, incidunt deserunt libero voluptatibus unde veritatis consequatur esse voluptatem temporibus fugiat, optio iure nesciunt ad sequi repellendus sunt.",
    imgUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Vishal Kumar4",
    star: 4,
  },
];
