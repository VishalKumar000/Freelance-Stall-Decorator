"use client";

import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import {
  CONTACT_DATA,
  NAVIGATION_DATA,
  OUR_OFFERINGS_DATA,
  SOCIAL_MEDIA_DATA,
} from "@/constants/footer.constant";
// import { useCustomCursor } from "@/context/CustomCursorContext";
import GsapMagnetic from "./GsapMagnetic";

const Footer = () => {
  // const { customCursorEnter, customCursorLeave } = useCustomCursor();

  return (
    <>
      <footer className={`${styles.footer} px-2 sm:px-4 md:px-6`}>
        <div className={styles.container}>
          <div className={`${styles.footer_links} ${styles.p_relative}`}>
            <div
              className={`grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${styles.row}`}
            >
              <div className="col-md-3 dsn-col-footer">
                <div className="footer-block">
                  <div className="footer-logo">
                    <Link
                      href="/"
                      className="text-xl font-semibold text-[#07b2ff]"
                      style={{ wordBreak: "normal" }}
                    >
                      Mr Unique Decoration
                      {/* <Image
                        src="/footer/3268white logo.png"
                        alt="MR Unique Decoration"
                        width={200}
                        height={160}
                         onMouseEnter={() => customCursorEnter("text")}
                         onMouseLeave={customCursorLeave}
                      /> */}
                    </Link>
                  </div>
                  <p
                    style={{ textAlign: "left", margin: "10px 0" }}
                    className="font-medium capitalize leading-[1.6] mb-4 mt-8 block cursor-pointer"
                    // onMouseEnter={() => customCursorEnter("contrast_text")}
                    // onMouseLeave={customCursorLeave}
                  >
                    We&apos;re All About Passion, And Creativity Is At The Heart
                    Of Our DNA, Fusing Into Brands To Create One-Of-A-Kind
                    Experiences For Customers.
                  </p>
                  <div className={styles.footer__social}>
                    <ul className="flex gap-5 flex-wrap w-full my-3 min-h-min">
                      {SOCIAL_MEDIA_DATA.map((item) => {
                        return (
                          <li
                            key={item.link + item.title + Math.random()}
                            className="text-white capitalize leading-[1] w-9 h-9 max-w-9 max-h-9 border rounded-full flex items-center justify-center"
                            style={{
                              borderColor: "rgba(255, 255, 255, 0.07)",
                            }}
                          >
                            <Link
                              href={item.link}
                              target="_blank"
                              // onMouseEnter={() => customCursorEnter("text")}
                              // onMouseLeave={customCursorLeave}
                              className="cursor-pointer"
                            >
                              {item.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 dsn-col-footer">
                <div className="footer-block col-menu">
                  <h4
                    className={`${styles.footer__title} cursor-pointer`}
                    // onMouseEnter={() => customCursorEnter("contrast_text")}
                    // onMouseLeave={customCursorLeave}
                  >
                    Navigation
                  </h4>
                  <nav>
                    <ul>
                      {NAVIGATION_DATA.map((item) => {
                        return (
                          <Link
                            key={item.link + item.title + Math.random()}
                            href={item.link}
                            // onMouseEnter={() => customCursorEnter("text")}
                            // onMouseLeave={customCursorLeave}
                            className="cursor-pointer"
                          >
                            <li className="mb-3 font-medium capitalize leading-[1] my-1 hover:underline-offset-2 hover:underline">
                              {item.title}
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-md-3 dsn-col-footer fu_sndb">
                <div className="footer-block col-menu">
                  <h4
                    className={`${styles.footer__title} cursor-pointer`}
                    // onMouseEnter={() => customCursorEnter("contrast_text")}
                    // onMouseLeave={customCursorLeave}
                  >
                    Our Offerings
                  </h4>
                  <nav>
                    <ul>
                      {OUR_OFFERINGS_DATA.map((item) => {
                        return (
                          <Link
                            key={item.link + item.title + Math.random()}
                            href={item.link}
                            // onMouseEnter={() => customCursorEnter("text")}
                            // onMouseLeave={customCursorLeave}
                            className="cursor-pointer"
                          >
                            <li className=" mb-3 font-medium capitalize leading-[1.6] my-1 hover:underline-offset-2 hover:underline">
                              {item.title}
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  </nav>
                </div>
              </div>
              <div
                className="col-md-3 dsn-col-footer cursor-pointer"
                // onMouseEnter={() => customCursorEnter("contrast_text")}
                // onMouseLeave={customCursorLeave}
              >
                <div className="col-address">
                  <h4 className={`${styles.footer__title} cursor-pointer`}>
                    Contact
                  </h4>
                  <div className="font-medium capitalize leading-[1.6] my-3">
                    <div>
                      <strong className="inline-block heading-highlight">
                        Head Office
                      </strong>
                      <span className="inline-block heading-highlight">
                        &nbsp;:&nbsp;
                      </span>
                      <p className="mb-2">{CONTACT_DATA.address}</p>
                    </div>
                    <div>
                      <strong className="inline-block heading-highlight">
                        Phone
                      </strong>
                      <span className="inline-block heading-highlight">
                        &nbsp;:&nbsp;
                      </span>
                      <Link
                        className="font-bold inline-block mb-3"
                        href="tel:+91-7042535020"
                      >
                        {CONTACT_DATA.phone}
                      </Link>
                    </div>
                    <div>
                      <strong className="inline-block heading-highlight">
                        Email
                      </strong>
                      <span className="inline-block heading-highlight">
                        &nbsp;:&nbsp;
                      </span>
                      <Link
                        className="link-hover lowercase"
                        href={`mailto:${CONTACT_DATA.email}`}
                        target="_blank"
                      >
                        {CONTACT_DATA.email}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            <div className=" text-left">
              <p
                className="font-medium capitalize leading-[1.6] my-3 cursor-pointer"
                // onMouseEnter={() => customCursorEnter("contrast_text")}
                // onMouseLeave={customCursorLeave}
              >
                © {new Date().getFullYear()} {CONTACT_DATA.brand_name}
              </p>
            </div>
            <div className=" text-left">
              <Link href={"https://github.com/VKumar786"}>
                <div
                  className="font-medium capitalize leading-[1.6] my-3 cursor-pointer flex"
                  // onMouseEnter={() => customCursorEnter("contrast_text")}
                  // onMouseLeave={customCursorLeave}
                >
                  Made By&nbsp;
                  <p className="heading-highlight">Vishal</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
