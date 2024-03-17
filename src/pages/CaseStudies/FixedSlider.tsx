//@ts-nocheck

"use client";

import React, { useRef } from "react";
import "./fixedslider.css";
import Image from "next/image";

const CASE_STUDIES_DATA = [
  {
    key: "01",
    title: "Lifesaver In The NorthEast",
    type: "MODULAR INFRASTRUCTURE",
    imgUrl: "/CaseStudies/image1.JPG",
  },
  {
    key: "02",
    title: "Pandemic Vs. Opportunity",
    type: "MODULAR INFRASTRUCTURE",
    imgUrl: "/CaseStudies/image2.png",
  },
  {
    key: "03",
    title: "Outstanding Outreach",
    type: "OUTREACH PROGRAM",
    imgUrl: "/CaseStudies/image3.JPG",
  },
  {
    key: "04",
    title: "Green Is The Color Of AgriCommerce",
    type: "EXHIBITION",
    imgUrl: "/CaseStudies/image4.JPG",
  },
  {
    key: "05",
    title: "Uncontainable Delight",
    type: "EVENT",
    imgUrl: "/CaseStudies/image5.jpg",
  },
  {
    key: "06",
    title: "Staging It Globally",
    type: "EVENT, EXHIBITION & CONFERENCE",
    imgUrl: "/CaseStudies/image3.JPG",
  },
  {
    key: "07",
    title: "Green Is The Color Of AgriCommerce",
    type: "EXHIBITIONS & TRADESHOWS",
    imgUrl: "/CaseStudies/image4.JPG",
  },
];

const FixedSlider = () => {
  const thumbnailImgContainer = useRef(null);
  const thumbnailImg = useRef(null);

  return (
    <section
      className="w-full bg-black text-white py-2"
      id="fixed-slider-case-studies"
    >
      <div className="w-full max-w-[1200px] my-0 mx-auto px-12 lg:px-4 flex flex-col gap-8">
        <div className=" w-full h-full min-h-screen bg-[#090909] text-white relative py-[4vw]">
          {CASE_STUDIES_DATA.map((item, index) => {
            return (
              <div
                className="elem"
                key={index + item.title + item.key + item.title + Math.random()}
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
                    thumbnailImg.current.src = null;
                    thumbnailImg.current.style.display = "none";
                  }
                }}
              >
                <div className="overlay"></div>
                <div className=" flex justify-between w-full z-[2]">
                  <div>
                    <h1>{item.title}</h1> 
                    <p className="text-[9px] min-[550px]:text-[12px] lg:text-sm text-[#ffffffb0] uppercase font-semibold tracking-[2px] mb-4">
                      {item.type}
                    </p>
                  </div>
                  <h3
                    className="text-5xl font-black text-transparent tracking-[4px]"
                    style={{ WebkitTextStroke: "1px white" }}
                  >
                    {item.key}
                  </h3>
                </div>
              </div>
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
