import AboutOwnerMask from "@/pages/AboutUs/AboutOwnerMask";
import AboutWelcomeBanner from "@/pages/AboutUs/AboutWelcomeBanner";
import WhatWeLiveBy from "@/pages/AboutUs/WhatWeLiveBy";
import OutAchievements from "@/pages/Home/OutAchievements";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <AboutWelcomeBanner />
      <AboutOwnerMask />
      <OutAchievements />
      <WhatWeLiveBy />
    </>
  );
};

export default AboutUs;
