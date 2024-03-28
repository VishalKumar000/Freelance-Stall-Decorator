import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { IoMail } from "react-icons/io5";

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
                <div className="relative group max-w-xl mx-auto mt-3 min-h-[224px] overflow-hidden">
                  <Image
                    src={item.imgUrl}
                    alt={item.name}
                    fill
                    // className="object-contain shadow-md"
                    className="w-full object-cover rounded-md"
                  />
                  <div className="hidden absolute inset-0 bg-gray-700 opacity-60 rounded-md group-hover:block"></div>
                  <div className="hidden absolute bottom-4 inset-0 items-center justify-end flex-col group-hover:flex">
                    <div className="flex gap-4">
                      {item.instagram && (
                        <Link href={item.instagram}>
                          <FaInstagram className="bg-white rounded-md w-7 h-7 p-[3px] text-[#07b2ff] text-2xl hover:bg-[#07b2ff] hover:text-white" />
                        </Link>
                      )}
                      {item.twitter && (
                        <Link href={item.twitter}>
                          <FaTwitter className="bg-white rounded-md w-7 h-7 p-[3px] text-[#07b2ff] text-2xl hover:bg-[#07b2ff] hover:text-white" />
                        </Link>
                      )}
                      {item.facebook && (
                        <Link href={item.facebook}>
                          <FaFacebookF className="bg-white rounded-md w-7 h-7 p-[3px] text-[#07b2ff] text-2xl hover:bg-[#07b2ff] hover:text-white" />
                        </Link>
                      )}
                      {item.linkedIn && (
                        <Link href={item.linkedIn}>
                          <FaLinkedin className="bg-white rounded-md w-7 h-7 p-[3px] text-[#07b2ff] text-2xl hover:bg-[#07b2ff] hover:text-white" />
                        </Link>
                      )}
                      {item.phone && (
                        <Link href={item.phone}>
                          <MdLocalPhone className="bg-white rounded-md w-7 h-7 p-[3px] text-[#07b2ff] text-2xl hover:bg-[#07b2ff] hover:text-white" />
                        </Link>
                      )}
                      {item.mail && (
                        <Link href={item.mail}>
                          <IoMail className="bg-white rounded-md w-7 h-7 p-[3px] text-[#07b2ff] text-2xl hover:bg-[#07b2ff] hover:text-white" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-[14px]">{item.name}</h3>
                  {item.designation && <p className="text-gray-500">{item.designation}</p>}
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
    imgUrl: "/Home/OurTeam/member01.png",
    name: "Mohammad Muzammil",
    designation: "CEO",
    phone: "tel:+91-7042535020",
    mail: "mdmuzmmil797@gmail.com",
    linkedIn: "",
    instagram: "",
    twitter: "",
    facebook: "",
  },
  {
    imgUrl: "/Home/OurTeam/member04.png",
    name: "Mohd Ragib",
    designation: "",
    phone: "tel:+91-9990162919",
    mail: "ragibmd9016@gmail.com",
    linkedIn: "",
    instagram: "",
    twitter: "",
    facebook: "",
  },
  {
    imgUrl: "/Home/OurTeam/member05.png",
    name: "Shaukat Ali",
    designation: "",
    phone: "tel:+91-8084905068",
    mail: "shaukatm563@gmail.com",
    linkedIn: "",
    instagram: "",
    twitter: "",
    facebook: "",
  },
  {
    imgUrl: "/Home/OurTeam/member02.png",
    name: "Md Saqib",
    designation: "",
    phone: "tel:+91-9534681585",
    mail: "saqibb0786@gmail.com",
    linkedIn: "",
    instagram: "",
    twitter: "",
    facebook: "",
  },
];
