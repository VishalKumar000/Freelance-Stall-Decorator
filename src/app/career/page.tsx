import CareerForm from "@/pages/Career/CareerForm";
import CareerWelcomeBanner from "@/pages/Career/CareerWelcomeBanner";
import ThankIntro from "@/pages/Career/ThankIntro";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Career",
};

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
