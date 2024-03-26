import Image from "next/image";
import React from "react";

const OurTeam = () => {
  return (
    <section className="w-full bg-[#fff] text-black py-14">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-4 flex flex-col gap-8">
        <div className=" mb-7">
          <div className=" pl-10 lg:pl-20 mb-5 relative">
            <div className="text-[9px] min-[550px]:text-[12px] lg:text-sm heading-highlight uppercase font-semibold tracking-[2px] pl-10 mb-4 relative before:absolute before:left-[-30px] before:w-[5px] before:h-[5px] before:bg-[#07b2ff] before:rounded-full before:top-1/2 before:translate-x-[-50%] before:translate-y-[-50%] after:absolute after:top-1/2 after:left-[-20px] after:h-[1px] after:w-12 after:bg-[#07b2ff]">
              Team Member
            </div>
          </div>
          <h2
            className="text-2xl min-[550px]:text-4xl lg:text-5xl font-bold tracking-[0.01em]"
            style={{ wordBreak: "break-word" }}
          >
            OUR TEAM
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 min-[550px]:grid-cols-2 min-[550px]:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {OUR_TEAM_DATA.map((item, index) => {
            return (
              <div key={index + Math.random()}>
                <Image
                  src={item.imgUrl}
                  alt={item.name}
                  width={400}
                  height={400}
                  className="object-contain shadow-md"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-xl">{item.name}</h3>
                  <p className="text-gray-500">{item.designation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

const OUR_TEAM_DATA = [
  {
    imgUrl: "https://cutesolution.com/html/techvolt/assets/img/team/team-2.jpg",
    name: "Vishal Kumar",
    designation: "Developer",
  },
  {
    imgUrl: "https://cutesolution.com/html/techvolt/assets/img/team/team-2.jpg",
    name: "Vishal Kumar",
    designation: "Developer",
  },
  {
    imgUrl: "https://cutesolution.com/html/techvolt/assets/img/team/team-2.jpg",
    name: "Vishal Kumar",
    designation: "Developer",
  },
  {
    imgUrl: "https://cutesolution.com/html/techvolt/assets/img/team/team-2.jpg",
    name: "Vishal Kumar",
    designation: "Developer",
  },
];
