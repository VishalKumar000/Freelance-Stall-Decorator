import ExperimentalEnvelope from "@/pages/Home/ExperimentalEnvelope";
import OurClient from "@/pages/Home/OurClient";
import Testimonials from "@/pages/Home/Testimonials";
import WeAreHiring from "@/pages/Home/WeAreHiring";
import WelcomeSlider from "@/pages/Home/WelcomeSlider";
import React from "react";

const Home = () => {
  return (
    <>
      <WelcomeSlider />
      <ExperimentalEnvelope />
      <OurClient />
      <Testimonials />
      <WeAreHiring />
    </>
  );
};

export default Home;
