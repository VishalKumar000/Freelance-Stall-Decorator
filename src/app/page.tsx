//@ts-nocheck
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

export default function Home() {
  const [email, setEmail] = useState("");
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 14); // Adding two weeks

    const timer = setInterval(() => {
      const currentTime = new Date();
      const difference = endDate - currentTime;

      if (difference <= 0) {
        clearInterval(timer);
        setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setRemainingTime({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e) => {
    //
    e.preventDefault();
    try {
      const res = await fetch("/api/mailContact", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "content-type": "application/json",
        },
      });
      console.log(res);
      if (res.ok) {
        console.log("Yeai!");
        toast.success("Email Send Successfully");
      } else {
        toast.error("Please Try Again Later");
        console.log("Oops! Something is wrong.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Please Try Again Later");
    }
    setEmail("");
  };

  return (
    <section>
      <div className="container">
        <div className="coming_soon">
          {/*Dummy div*/}
          <div />
          <div className="wrapper">
            <div className="header">
              <p className="sm_text">our website is</p>
              <div className="main_text">Coming Soon</div>
              <p className="main_para">
                our website is coming soon. we are currently working on this
                website. Please check again within couple Days or drop your
                email here to notify!
              </p>
              <div className="main_para flex gap-2 justify-center flex-wrap">
                Get in touch with us at
                <Image
                  src={"/comming-soon/whatsapp.png"}
                  width={30}
                  height={30}
                  alt=""
                />
                <a
                  className="font-bold inline-block"
                  href="https://wa.me/+917042535020/?text=Hi"
                >
                  +91 70425 35020
                </a>
              </div>
            </div>
            <form action="#0" className="form">
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" onClick={handleSubmit}>
                <span className="op-send">Send</span>
              </button>
            </form>
            <div className="counter">
              <div className="count">
                <span className="digit" id="days">
                  {remainingTime.days}
                </span>
                <span>Days</span>
              </div>
              <div className="count">
                <span className="digit" id="hours">
                  {remainingTime.hours}
                </span>
                <span>Hours</span>
              </div>
              <div className="count">
                <span className="digit" id="minutes">
                  {remainingTime.minutes}
                </span>
                <span>Minutes</span>
              </div>
              <div className="count">
                <span className="digit" id="seconds">
                  {remainingTime.seconds}
                </span>
                <span>Seconds</span>
              </div>
            </div>
          </div>
          {/*Socials*/}
          <div className="socials">
            <a href="#0">
              <span className="op-facebook" />
            </a>
            <a href="#0">
              <span className="op-twitter" />
            </a>
            <a href="#0">
              <span className="op-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
