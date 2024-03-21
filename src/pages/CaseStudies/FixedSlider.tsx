//@ts-nocheck

"use client";

import React, { useRef } from "react";
import "./fixedslider.css";
import Image from "next/image";
import Link from "next/link";

const FixedSlider = (props: { data: any[] }) => {
  const { data } = props;
  const thumbnailImgContainer = useRef(null);
  const thumbnailImg = useRef(null);

  return (
    <section
      className="w-full bg-black text-white py-2"
      id="fixed-slider-case-studies"
    >
      <div className="w-full max-w-[1200px] my-0 mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-8">
        <div className=" w-full h-full min-h-screen bg-[#000] text-white relative py-[4vw]">
          {data?.map((item, index) => {
            return (
              <Link
                key={
                  index +
                  item.title +
                  item.key +
                  item.title +
                  Math.random() +
                  item.link
                }
                href={item.link}
              >
                <div
                  className="elem"
                  onMouseEnter={() => {
                    if (thumbnailImgContainer.current) {
                      thumbnailImgContainer.current.style.opacity = "1";
                    }
                    if (thumbnailImg.current) {
                      thumbnailImg.current.src = item.imgUrl;
                      thumbnailImg.current.style.display = "flex";
                    }
                  }}
                  onMouseLeave={() => {
                    if (thumbnailImgContainer.current) {
                      thumbnailImgContainer.current.style.opacity = "0";
                    }
                    if (thumbnailImg.current) {
                      thumbnailImg.current.src =
                        "https://assets-global.website-files.com/5a9ee6416e90d20001b20038/6289f46b136f6168de9fd58a_orange-gradient.png";
                      thumbnailImg.current.style.display = "none";
                    }
                  }}
                >
                  <div className="overlay"></div>
                  <div className=" flex justify-between w-full z-[2]">
                    <div>
                      <h2 className="text-[15px] font-semibold mb-2 md:text-[25px] heading-highlight">{item.title}</h2>
                      <p className="text-[9px] min-[550px]:text-[12px] lg:text-sm text-[#ffffffb0] uppercase font-semibold tracking-[2px] mb-4">
                        {item.type}
                      </p>
                    </div>
                    <h3
                      className="hidden text-5xl font-black text-transparent tracking-[4px] md:block"
                      style={{ WebkitTextStroke: "1px white" }}
                    >
                      {item.key}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div
          className="fixed top-1/4 left-1/2 h-[28vw] w-[23vw] bg-gradient-to-r from-orange-500 to-yellow-500 z-[2] rounded-2xl overflow-hidden opacity-0"
          ref={thumbnailImgContainer}
        >
          <Image
            src={""}
            fill
            alt="thumbnail-case-studies"
            ref={thumbnailImg}
            className=" object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FixedSlider;
