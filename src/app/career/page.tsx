import CareerForm from "@/pages/Career/CareerForm";
import CareerWelcomeBanner from "@/pages/Career/CareerWelcomeBanner";
import ThankIntro from "@/pages/Career/ThankIntro";
import React from "react";

const Career = () => {
  return (
    <>
      <CareerWelcomeBanner />
      <ThankIntro />
      <CareerForm />
    </>
  );
};

export default Career;
