import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdPhone } from "react-icons/md";

const SocialIcons = () => {
  return (
    <div className="fixed right-5 bottom-10">
      <Link
        href={
          "https://api.whatsapp.com/send?phone=+917042535020&text=Hi, I visited your website and interested in your offerings. So please coordinate ASAP with me. "
        }
        className="p-2 text-white bg-green-500 relative flex items-center justify-center rounded-full"
      >
        <FaWhatsapp className=" rounded-full min-w-[30px] min-h-[30px] w-full h-full" />
      </Link>
      <Link
        href={"tel:+91-7042535020"}
        className="p-2 text-white bg-sky-500 relative flex items-center justify-center rounded-full mt-3"
      >
        <MdPhone className=" rounded-full min-w-[30px] min-h-[30px] w-full h-full" />
      </Link>
    </div>
  );
};

export default SocialIcons;
