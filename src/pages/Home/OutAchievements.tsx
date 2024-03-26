"use client";

import React from "react";
import CountUp from "react-countup";

const OUR_ACHIEVEMENTS_DATA: {
  title: string;
  value: number;
}[] = [
  {
    title: "Years of Experience",
    value: 7,
  },
  {
    title: "Complete Project",
    value: 100,
  },
  {
    title: "Working Employees",
    value: 10,
  },
  {
    title: "Happy Customers",
    value: 3000,
  },
];

const OutAchievements = () => {
  return (
    <section className="w-full bg-[url(/Home/Accountability/banner-bg.jpg)] bg-cover bg-no-repeat bg-fixed text-black py-14">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-4 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-4 min-[550px]:grid-cols-2 min-[550px]:gap-4 lg:grid-cols-4 lg:gap-4">
          {OUR_ACHIEVEMENTS_DATA.map((item, index) => {
            return (
              <div
                className="rounded-lg p-6 flex flex-col items-center"
                key={index + (item?.title ?? "") + Math.random()}
              >
                <div className="flex gap-2 items-center">
                  <CountUp
                    className="text-white text-3xl text-center font-semibold tracking-wide"
                    start={0}
                    end={item?.value}
                    duration={5}
                    separator=","
                  />
                  <h2
                    className="text-white text-xl text-center font-semibold tracking-wide"
                    style={{ wordBreak: "normal" }}
                  >
                    +
                  </h2>
                </div>
                <h2
                  className="text-white text-xl text-center font-semibold tracking-wide"
                  style={{ wordBreak: "normal" }}
                >
                  {item.title}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OutAchievements;
