import ContactUsForm from "@/pages/ContactUs/ContactUsForm";
import BlogIntro from "@/pages/Home/BlogIntro";
import ExperimentalEnvelope from "@/pages/Home/ExperimentalEnvelope";
import OurClient from "@/pages/Home/OurClient";
import OurPricing from "@/pages/Home/OurPricing";
import OurTeam from "@/pages/Home/OurTeam";
import OutAchievements from "@/pages/Home/OutAchievements";
import SmallAboutUs from "@/pages/Home/SmallAboutUs";
import Testimonials from "@/pages/Home/Testimonials";
import WeAreHiring from "@/pages/Home/WeAreHiring";
import WhatOurClientSays from "@/pages/Home/WhatOurClientSay";
// import WelcomeSlider from "@/pages/Home/WelcomeSlider";
import React from "react";

const Home = () => {
  return (
    <>
      {/* <WelcomeSlider /> */}
      <SmallAboutUs />
      <OutAchievements />
      <OurPricing />
      <ExperimentalEnvelope />
      <OurClient />
      <Testimonials />
      <BlogIntro />
      <OurTeam />
      <WhatOurClientSays />
      <ContactUsForm />
      <WeAreHiring />
    </>
  );
};

export default Home;
