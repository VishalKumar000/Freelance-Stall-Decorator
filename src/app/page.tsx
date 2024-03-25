import ExperimentalEnvelope from "@/pages/Home/ExperimentalEnvelope";
import OurClient from "@/pages/Home/OurClient";
import OurPricing from "@/pages/Home/OurPricing";
import SmallAboutUs from "@/pages/Home/SmallAboutUs";
import Testimonials from "@/pages/Home/Testimonials";
import WeAreHiring from "@/pages/Home/WeAreHiring";
// import WelcomeSlider from "@/pages/Home/WelcomeSlider";
import React from "react";

const Home = () => {
  return (
    <>
      {/* <WelcomeSlider /> */}
      <SmallAboutUs />
      <OurPricing />
      <ExperimentalEnvelope />
      <OurClient />
      <Testimonials />
      <WeAreHiring />
    </>
  );
};

export default Home;
