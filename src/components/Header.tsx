"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import "../styles/Header.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { IoMdClose } from "react-icons/io";
import { useCustomCursor } from "@/context/CustomCursorContext";
import Image from "next/image";

const menuLinks = [
  { label: "Home", path: "/" },
  { label: "Meet Deepali", path: "/about-us" },
  { label: "Our Offerings", path: "/offerings" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Careers", path: "/career" },
  { label: "Blog", path: "https://blog.www.mruniquedecoration.in/" },
  { label: "Reach Us", path: "/contact-us" },
];

const socialLinks = [
  { path: "/", title: "X" },
  { path: "/", title: "Instagram" },
  { path: "/", title: "LinkedIn" },
  { path: "/", title: "Bechance" },
  { path: "/", title: "Dribble" },
];

const Header = () => {
  const { customCursorEnter, customCursorLeave } = useCustomCursor();
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl: any = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });

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
    <div className="header-menu-container bg-[#090909]" ref={container}>
      <div className="menu-bar">
        <div
          className="menu-logo cursor-pointer"
          onMouseEnter={() => customCursorEnter("header_overlay_contrast_text")}
          onMouseLeave={customCursorLeave}
        >
          <Link href={"/"}>
            <Image
              src="/footer/3268white logo.png"
              alt="MR Unique Decoration"
              width={70}
              height={50}
              onMouseEnter={() => customCursorEnter("text")}
              onMouseLeave={customCursorLeave}
            />
          </Link>
        </div>
        <div
          className="menu-open  cursor-pointer"
          onMouseEnter={() => customCursorEnter("header_overlay_contrast_text")}
          onMouseLeave={customCursorLeave}
          onClick={toggleMenu}
        >
          <p>Menu</p>
        </div>
      </div>
      <div className="menu-overlay z-[9999]">
        <div className="menu-overlay-bar">
          <div
            className="menu-logo cursor-pointer"
            onMouseEnter={() =>
              customCursorEnter("header_overlay_contrast_text")
            }
            onMouseLeave={customCursorLeave}
          >
            <Link href={"/"}>
              <Image
                src="/footer/3268white logo.png"
                alt="MR Unique Decoration"
                width={70}
                height={50}
                onMouseEnter={() => customCursorEnter("text")}
                onMouseLeave={customCursorLeave}
              />
            </Link>
          </div>
          <div
            className="menu-close cursor-pointer"
            onMouseEnter={() =>
              customCursorEnter("header_overlay_contrast_text")
            }
            onMouseLeave={customCursorLeave}
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
                    onMouseEnter={() =>
                      customCursorEnter("header_overlay_text")
                    }
                    onMouseLeave={customCursorLeave}
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
                  onMouseEnter={() => customCursorEnter("header_overlay_text")}
                  onMouseLeave={customCursorLeave}
                />
              </p>
            </div>
            <div className="menu-info-col">
              {socialLinks.map((link, index) => {
                return (
                  <Link
                    key={index + link.path + link.title + Math.random()}
                    href={link.path}
                    className=" cursor-pointer"
                    onMouseEnter={() =>
                      customCursorEnter("header_overlay_contrast_text")
                    }
                    onMouseLeave={customCursorLeave}
                  >
                    {link.title} &#8599;
                  </Link>
                );
              })}
            </div>
            <div
              className="menu-info-col cursor-pointer"
              onMouseEnter={() =>
                customCursorEnter("header_overlay_contrast_text")
              }
              onMouseLeave={customCursorLeave}
            >
              <p>mruniquedecoration@gmail.com</p>
              <p>+917042535020</p>
            </div>
            <div
              className="menu-preview cursor-pointer"
              onMouseEnter={() =>
                customCursorEnter("header_overlay_contrast_text")
              }
              onMouseLeave={customCursorLeave}
            >
              <p>View Showreel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
