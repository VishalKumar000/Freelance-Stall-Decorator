import AboutOwnerMask from "@/pages/AboutUs/AboutOwnerMask";
import AboutWelcomeBanner from "@/pages/AboutUs/AboutWelcomeBanner";
import WhatWeLiveBy from "@/pages/AboutUs/WhatWeLiveBy";
import OurTeam from "@/pages/Home/OurTeam";
import OutAchievements from "@/pages/Home/OutAchievements";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <AboutWelcomeBanner />
      <AboutOwnerMask />
      <OutAchievements />
      <OurTeam />
      <WhatWeLiveBy />
    </>
  );
};

export default AboutUs;
