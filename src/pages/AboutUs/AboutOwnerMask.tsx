import Image from "next/image";
import React from "react";

const AboutOwnerMask = () => {
  return (
    <div className="w-full bg-[#f7f8f8] text-[#303030] py-7 lg:hidden">
      {/* <div className="background-mask-bg" /> */}
      <div className="p-6 bg-[#fff] mx-8 mt-[-65px] relative shadow-md">
        <h1 className="text-center text-3xl font-semibold text-[#303030]">
          Meet
        </h1>
        <h1
          className="text-center text-3xl font-semibold text-[#07b2ff]"
          style={{ wordBreak: "normal" }}
        >
          MR Unique Decoration
        </h1>
        {ABOUT_OWNER_MASK_DATA.map((item, index) => {
          return (
            <p key={index + item + Math.random()} className=" pt-4 w-full">
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default AboutOwnerMask;

const ABOUT_OWNER_MASK_DATA = [
  "MR Unique Decoration and Exhibits has pioneered a stream of innovative concepts which have set new benchmarks and raised the bar for operations and logistics in the event industry. Powered by several factors - including a dedicated R&D division that explores futuristic material usage, immense application of mind, unimaginable hard work, thorough technical know-how and great execution capabilities, we have blazed an unbeatable record of delivering products and services relating to events & exhibitions.",
  "To give you a macro snapshot, we have a wide range of capabilities. Be it a quick Rapid Hospital Setup, or creating an immersive for an event or setting up of an exhibition booth - we are quickly off the mark and deliver unexpected results, with blazing fast turnarounds.",
  "We possess the widest range of infrastructure - in the form of our own workshop, an in-house design and execution team and are headquartered in New Delhi with a powerful presence in Mumbai- the commercial and business hub of the country.",
];
