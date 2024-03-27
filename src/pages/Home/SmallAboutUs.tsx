import Image from "next/image";
import Link from "next/link";
import React from "react";

const SmallAboutUs = () => {
  return (
    <section className="w-full bg-white text-[#303030] py-14">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-4 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2
              className="text-2xl min-[550px]:text-4xl lg:text-5xl font-bold tracking-[0.01em] text-[#212529]"
              style={{ wordBreak: "break-word" }}
            >
              Meet
            </h2>
            <h2
              className="text-2xl min-[550px]:text-4xl lg:text-5xl font-bold tracking-[0.01em] mb-5 text-[#212529]"
              style={{ wordBreak: "break-word" }}
            >
              MR Unique Decoration
            </h2>
            <p className="text-[#303030] text-sm relative mb-5">
              MR Unique Decoration and Exhibits has pioneered a stream of
              innovative concepts which have set new benchmarks and raised the
              bar for operations and logistics in the event industry. Powered by
              several factors - including a dedicated R&D division that explores
              futuristic material usage, immense application of mind,
              unimaginable hard work, thorough technical know-how and great
              execution capabilities, we have blazed an unbeatable record of
              delivering products and services relating to events & exhibitions.
            </p>
            <div className="mb-7 flex justify-between">
              <div className=" pr-10 lg:pr-20 mb-1 relative">
                <div
                  className="text-[9px] min-[550px]:text-[12px] lg:text-sm uppercase font-bold tracking-[2px] pr-10 relative before:absolute before:right-[-30px] before:w-[5px] before:h-[5px] before:bg-white before:rounded-full before:top-1/2 before:translate-x-[-50%] before:translate-y-[-50%] after:absolute after:top-1/2 after:right-[-20px] after:h-[1px] after:w-12 after:bg-[rgba(233, 233, 233, 0.1)]"
                  style={{ wordBreak: "normal" }}
                >
                  24x7 Expert Technical Support
                </div>
              </div>
              <Link
                href={"/about-us"}
                className="heading-highlight"
                style={{ wordBreak: "normal" }}
              >
                Read More
              </Link>
            </div>
            <h1 className="text-[9px] min-[550px]:text-[12px] lg:text-sm uppercase font-bold tracking-[2px]">
              OVER
            </h1>
            <div className="flex gap-4 items-center">
              <h1 className="text-[100px] font-black heading-highlight">
                {new Date().getFullYear() - 2017}
              </h1>
              <div className="flex gap-1 flex-col">
                <h2>YEAR OF HARDCORE,</h2>
                <h2>IMMERSIVE EXPERIENCE</h2>
                <h2>IN SPACE DESIGN</h2>
              </div>
            </div>
          </div>
          <div className="bg-[#1c2027] relative">
            {/*  col-span-2 */}
            <div className="relative overflow-hidden w-full h-full min-h-[300px]">
              <Image
                src="/AboutUs/3319abt-h.png"
                data-dsn-y="30%"
                data-dsn-scale={1}
                layout="fill"
                className=" object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallAboutUs;
