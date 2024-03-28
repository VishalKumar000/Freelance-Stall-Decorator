import AboutOwnerMask from "@/pages/AboutUs/AboutOwnerMask";
import AboutWelcomeBanner from "@/pages/AboutUs/AboutWelcomeBanner";
import WhatWeLiveBy from "@/pages/AboutUs/WhatWeLiveBy";
import OurTeam from "@/pages/Home/OurTeam";
import OutAchievements from "@/pages/Home/OutAchievements";
import Testimonials from "@/pages/Home/Testimonials";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us",
};

const AboutUs = () => {
  return (
    <>
      <AboutWelcomeBanner />
      <AboutOwnerMask />
      <OutAchievements />
      <OurTeam />
      <Testimonials />
      <WhatWeLiveBy />
    </>
  );
};

export default AboutUs;
