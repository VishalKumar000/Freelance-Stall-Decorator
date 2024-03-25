"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import "../styles/Header.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { IoMdClose } from "react-icons/io";
// import { useCustomCursor } from "@/context/CustomCursorContext";
import Image from "next/image";

const menuLinks = [
  { label: "Home", path: "/" },
  { label: "Meet Deepali", path: "/about-us" },
  { label: "Our Offerings", path: "/offerings" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Careers", path: "/career" },
  { label: "Blog", path: "/blog" },
  { label: "Reach Us", path: "/contact-us" },
];

const socialLinks = [
  {
    path: "https://www.indiamart.com/mr-uniquedecorationnew-delhi/",
    title: "Indian Mart",
  },
  { path: "https://jsdl.in/DT-23JWAFVGWVS", title: "Just Dial" },
  {
    path: "https://www.facebook.com/mruniquedecoration?mibextid=ZbWKwL",
    title: "Facebook",
  },
  {
    path: "https://www.instagram.com/invites/contact/?i=t2q72vuuiryz&utm_content=tohs576",
    title: "Instagram",
  },
];

const Header = () => {
  // const { customCursorEnter, customCursorLeave } = useCustomCursor();
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl: any = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 74 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) tl.current?.play();
    else tl.current?.reverse();
  }, [isMenuOpen]);

  return (
    <div
      className="header-menu-container bg-white min-h-[74px]"
      ref={container}
    >
      <div className="menu-bar shadow">
        <div
          className="menu-logo cursor-pointer"
          // onMouseEnter={() => customCursorEnter("header_overlay_contrast_text")}
          // onMouseLeave={customCursorLeave}
        >
          <Link href={"/"} className="flex items-center justify-center">
            <h2
              className="text-[#212529] font-bold"
              style={{ wordBreak: "normal" }}
            >
              MR Unique Decoration
            </h2>
            {/* <Image
              src="/footer/3268white logo.png"
              alt="MR Unique Decoration"
              width={70}
              height={50}
              onMouseEnter={() => customCursorEnter("text")}
              onMouseLeave={customCursorLeave}
            /> */}
          </Link>
        </div>
        <div
          className="menu-open  cursor-pointer"
          // onMouseEnter={() => customCursorEnter("header_overlay_contrast_text")}
          // onMouseLeave={customCursorLeave}
          onClick={toggleMenu}
        >
          <p className="text-[#212529]">Menu</p>
        </div>
      </div>
      <div className="menu-overlay z-[9999]">
        <div className="menu-overlay-bar">
          <div
            className="menu-logo cursor-pointer"
            // onMouseEnter={() =>
            //   customCursorEnter("header_overlay_contrast_text")
            // }
            // onMouseLeave={customCursorLeave}
          >
            <Link href={"/"} style={{ wordBreak: "break-word" }}>
              MR Unique Decoration
              {/* <Image
                src="/footer/3268white logo.png"
                alt="MR Unique Decoration"
                width={70}
                height={50}
                onMouseEnter={() => customCursorEnter("text")}
                onMouseLeave={customCursorLeave}
              /> */}
            </Link>
          </div>
          <div
            className="menu-close cursor-pointer"
            // onMouseEnter={() =>
            //   customCursorEnter("header_overlay_contrast_text")
            // }
            // onMouseLeave={customCursorLeave}
            onClick={toggleMenu}
          >
            <p>Close</p>
          </div>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => {
              return (
                <div
                  className="menu-link-item"
                  key={index + Math.random() + link.label + link.path}
                >
                  <div
                    className="menu-link-item-holder cursor-pointer"
                    // onMouseEnter={() =>
                    //   customCursorEnter("header_overlay_text")
                    // }
                    // onMouseLeave={customCursorLeave}
                    onClick={toggleMenu}
                  >
                    <Link href={link.path} className="menu-links">
                      {link.label}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="menu-info">
            <div className="menu-close-icon" onClick={toggleMenu}>
              <p>
                <IoMdClose
                  className="text-[4.5rem] cursor-pointer"
                  // onMouseEnter={() => customCursorEnter("header_overlay_text")}
                  // onMouseLeave={customCursorLeave}
                />
              </p>
            </div>
            <div className="menu-info-col" style={{ flex: "2" }}>
              {socialLinks.map((link, index) => {
                return (
                  <Link
                    key={index + link.path + link.title + Math.random()}
                    href={link.path}
                    className="mb-1 cursor-pointer"
                    target="_blank"
                    // onMouseEnter={() =>
                    //   customCursorEnter("header_overlay_contrast_text")
                    // }
                    // onMouseLeave={customCursorLeave}
                  >
                    {link.title} &#8599;
                  </Link>
                );
              })}
            </div>
            {/* <div
              className="menu-info-col cursor-pointer"
              style={{ flex: "3" }} 
               onMouseEnter={() =>
                 customCursorEnter("header_overlay_contrast_text")
               }
               onMouseLeave={customCursorLeave}
             >
               <p className="text-[10px]">mruniquedecoration@gmail.com</p>
               <p className="text-[10px]">+917042535020</p>
             </div>
            */}
            <div
              className="menu-preview cursor-pointer flex-col text-center items-center"
              // onMouseEnter={() =>
              //   customCursorEnter("header_overlay_contrast_text")
              // }
              // onMouseLeave={customCursorLeave}
            >
              <p className="mb-1">mruniquedecoration@gmail.com</p>
              <p className="">+917042535020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
