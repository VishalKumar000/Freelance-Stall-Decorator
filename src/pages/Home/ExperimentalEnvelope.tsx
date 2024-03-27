import Image from "next/image";
import Link from "next/link";
import React from "react";

import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
import { LuBuilding2 } from "react-icons/lu";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { GiGlobeRing } from "react-icons/gi";

const EXPERIMENTAL_ENVELOPE_DATA = [
  {
    // imgUrl: "/Home/ExperimentalEnvelope/image1.png",
    icons: (
      <HiOutlineSpeakerphone
        className="group-hover:text-white"
        style={{
          fontSize: "50px",
        }}
      />
    ),
    title: "Deepali R&D Division",
    content:
      "Embark on a transformative journey towards sustainability and a net-zero future by exploring our pioneering R&D initiatives.",
    link: "/",
  },
  {
    // imgUrl: "/Home/ExperimentalEnvelope/image2.png",
    icons: (
      <MdOutlineEmojiEvents
        className="group-hover:text-white"
        style={{
          fontSize: "50px",
        }}
      />
    ),
    title: "Events, Activations & Promotions",
    content:
      "When it comes to Events or promotions, Deepali believes in taking on challenging projects and implementing them against all odds.",
    link: "/",
  },
  {
    // imgUrl: "/Home/ExperimentalEnvelope/image3.png",
    icons: (
      <BsShop
        className="group-hover:text-white"
        style={{
          fontSize: "50px",
        }}
      />
    ),
    title: "Exhibits & Tradeshows",
    content:
      "Be it large-scale expositions or big-ticket exhibits we turn them into reality.",
    link: "/",
  },
  {
    // imgUrl: "/Home/ExperimentalEnvelope/image4.png",
    icons: (
      <RiTeamLine
        className="group-hover:text-white"
        style={{
          fontSize: "50px",
        }}
      />
    ),
    title: "Conferences and Seminars",
    content:
      "We are into organizing large format events that include both national level as well as international seminars, symposiums or conferences.",
    link: "/",
  },
  {
    // imgUrl: "/Home/ExperimentalEnvelope/image5.png",
    icons: (
      <MdOutlineSportsBasketball
        className="group-hover:text-white"
        style={{
          fontSize: "50px",
        }}
      />
    ),
    title: "Sports Events & Infrastructure",
    content:
      "To showcase the best sporting talent or gamesmanship — there are a lot of factors involved - such as stadium seating,Creative Field of Play, Standard Operating",
    link: "/",
  },
  {
    // imgUrl: "/Home/ExperimentalEnvelope/image6.png",
    icons: (
      <LuBuilding2
        className="group-hover:text-white"
        style={{
          fontSize: "50px",
        }}
      />
    ),
    title: "Modular Infrastructure",
    content:
      "With 3 decades of fabricating and setting up large-scale Events & Exhibitions, thereby shaping up its edge, know how , infrastructure",
    link: "/",
  },
  {
    // imgUrl: "/Home/ExperimentalEnvelope/image7.png",
    icons: (
      <GiGlobeRing
        className="group-hover:text-white"
        style={{
          fontSize: "50px",
        }}
      />
    ),
    title: "Weddings",
    content:
      "We create authentic wedding experiences with our exquisitely curated wedding banquets, dedicated pandal options, catering services, artist",
    link: "/",
  },
];

const ExperimentalEnvelope = () => {
  return (
    <section className="w-full text-black py-14">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-4 flex flex-col gap-8">
        <div className=" mb-7">
          <div className=" pl-10 lg:pl-20 mb-5 relative">
            <div className="text-[9px] min-[550px]:text-[12px] lg:text-sm heading-highlight uppercase font-semibold tracking-[2px] pl-10 mb-4 relative before:absolute before:left-[-30px] before:w-[5px] before:h-[5px] before:bg-[#07b2ff] before:rounded-full before:top-1/2 before:translate-x-[-50%] before:translate-y-[-50%] after:absolute after:top-1/2 after:left-[-20px] after:h-[1px] after:w-12 after:bg-[#07b2ff]">
              OUR RANGE OF OFFERINGS
            </div>
          </div>
          <h2
            className="text-2xl min-[550px]:text-4xl lg:text-5xl font-bold tracking-[0.01em]"
            style={{ wordBreak: "break-word" }}
          >
            PUSHING THE
          </h2>
          <h2
            className="text-2xl min-[550px]:text-4xl lg:text-5xl font-bold tracking-[0.01em]"
            style={{ wordBreak: "break-word" }}
          >
            EXPERIENTIAL ENVELOPE
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 min-[550px]:grid-cols-2 min-[550px]:gap-4 lg:grid-cols-3 lg:gap-4">
          {EXPERIMENTAL_ENVELOPE_DATA.map((item, index) => {
            return (
              <div
                key={index + Math.random() + item.title + item.link}
                // className={`p-6 ${
                //   index % 2
                //     ? "max-[550px]: bg-[#000]"
                //     : "max-[550px]: bg-[#1c2027]"
                // } ${
                //   (index - 1) % 4 == 0 || (index - 1) % 4 == 1
                //     ? "min-[550px]:bg-[#1c2027]"
                //     : "min-[550px]:bg-[#000]"
                // } ${
                //   index % 2 === 0 ? "lg:bg-[#000]" : "lg:bg-[#1c2027]"
                // } flex flex-col justify-between`}

                className="group border border-[#07b2ff] rounded-lg p-6 relative flex flex-col justify-evenly overflow-hidden before:content-[''] before:absolute before:top-0 before:w-full before:h-full before:bg-[#07b2ff] before:transition-all before:z-[-1] before:left-[-100%] hover:before:left-0"
              >
                <div className="relative w-12 h-12 mt-0 mx-auto mb-5">
                  {/* <Image
                    src={item.imgUrl}
                    alt="image selected by user"
                    fill
                    className=" object-cover"
                  /> */}
                  {item.icons}
                </div>
                <div className="text-white text-lg tracking-[2.5px] font-semibold mb-5 flex items-center justify-center text-center">
                  <h2
                    className="w-3/4 text-[#212529] group-hover:text-white"
                    style={{ wordBreak: "break-word" }}
                  >
                    {item.title}
                  </h2>
                </div>
                <p className="text-[#303030] text-sm relative group-hover:text-[#ffffffb0]">
                  {item.content}
                </p>
                <Link
                  href={item.link}
                  className="w-full heading-highlight mt-2 font-medium flex items-center justify-center group-hover:text-white group-hover:bg-[white]"
                >
                  Read More
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperimentalEnvelope;
