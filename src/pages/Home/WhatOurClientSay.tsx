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
                  overflow: "hidden",
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
      "Absolutely thrilled with the professionalism and creativity showcased by Mr Unique Decoration. Their Octanorm Stall was a game-changer for our recent exhibition. Mr. Muzammil's attention to detail and prompt communication made the entire process seamless. Highly recommend!",
    imgUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjVUrLaqNIoHPE-AmPeB7wexYtZEN6MOZCx9X5u89IBA04s=w45-h45-p-rp-mo-ba2-br100",
    name: "Irshad Gm",
    star: 4,
  },
  {
    content:
      "Being in the event management industry, I've come across many suppliers, but none compare to Mr Unique Decoration. Their commitment to quality and customer satisfaction is commendable. The Octanorm Stall provided by them added the perfect touch of elegance to our trade show. Kudos to the team!",
    imgUrl:
      "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX460_.png",
    name: "Vishal Kumar",
    star: 5,
  },
  {
    content:
      "Mr Unique Decoration truly lives up to its name! Their craftsmanship and attention to detail are unmatched. We recently used their Octanorm Stall for a product launch, and it was the talk of the town. The team's dedication to perfection is evident in every aspect of their work. Definitely our go-to choice for future events.",
    imgUrl:
      "https://lh3.googleusercontent.com/a/ACg8ocIPBCch7ULQcZDIk2WSiLcr3YmMzVTQWiOMWYS-FYSm=w75-h75-p-rp-mo-br100",
    name: "Saeeduzzama Ujala",
    star: 4,
  },
  {
    content:
      "Had a wonderful experience working with Mr Unique Decoration for our corporate event. Their Exhibition Stall design was nothing short of spectacular. The team understood our vision perfectly and delivered beyond our expectations. Will definitely be a returning customer!",
    imgUrl:
      "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX460_.png",
    name: "Vivek Singh",
    star: 5,
  },
];
