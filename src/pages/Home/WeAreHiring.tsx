import Link from "next/link";
import React from "react";

const WeAreHiring = () => {
  return (
    <section className="w-full bg-[#f7f7f8] text-[#303030] py-10 relative before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:overflow-hidden before:bg-[#f7f7f8] before:transition-all hover:before:w-[101%] hover:before:h=[150%] group">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-4 flex flex-col gap-8">
        <div className=" mb-7 z-[1]">
          <div className=" pl-10 lg:pl-20 mb-5 relative">
            <div className="text-[9px] min-[550px]:text-[12px] lg:text-sm heading-highlight uppercase font-semibold tracking-[2px] pl-10 mb-4 relative before:absolute before:left-[-30px] before:w-[5px] before:h-[5px] before:bg-[#07b2ff] before:rounded-full before:top-1/2 before:translate-x-[-50%] before:translate-y-[-50%] after:absolute after:top-1/2 after:left-[-20px] after:h-[1px] after:w-12 after:bg-[#07b2ff]">
              Careers
            </div>
          </div>
          <div className="flex justify-between items-center flex-wrap">
            <Link href={"/career"}>
              <h2
                className=" text-transparent text-2xl min-[550px]:text-4xl lg:text-5xl font-bold tracking-[0.01em] uppercase font-decrease relative before:absolute before:content-['WE_ARE_HIRING'] before:w-0 before:h-full before:overflow-hidden before:text-[#212529] before:border-r before:border-[#07b2ff] before:transition-all group-hover:before:w-[101%]"
                style={{ WebkitTextStroke: "1px #212529" }}
              >
                We are hiring
              </h2>
            </Link>
            <Link href={"/career"}>
              <h2
                className="text-md font-bold tracking-[0.01em] mt-3"
                style={{ wordBreak: "break-word" }}
              >
                Express your internet - Get a great start to your career
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAreHiring;
