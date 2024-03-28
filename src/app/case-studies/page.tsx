import React from "react";
import FixedSlider from "@/pages/CaseStudies/FixedSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
};

const CaseStudies = () => {
  return (
    <>
      <FixedSlider data={CASE_STUDIES_DATA} />
    </>
  );
};

export default CaseStudies;


const CASE_STUDIES_DATA = [
  {
    title: "Lifesaver In The NorthEast",
    type: "MODULAR INFRASTRUCTURE",
    imgUrl: "/CaseStudies/image1.JPG",
    link: "/project/lifesaver-in-the-northeast",
  },
  {
    title: "Pandemic Vs. Opportunity",
    type: "MODULAR INFRASTRUCTURE",
    imgUrl: "/CaseStudies/image2.png",
    link: "/project/pandemic-vs-opportunity",
  },
  {
    title: "Outstanding Outreach",
    type: "OUTREACH PROGRAM",
    imgUrl: "/CaseStudies/image3.JPG",
    link: "/project/outstanding-outreach",
  },
  {
    title: "Green Is The Color Of AgriCommerce",
    type: "EXHIBITION",
    imgUrl: "/CaseStudies/image4.JPG",
    link: "/project/green-is-the-color-of-agricommerce",
  },
  {
    title: "Uncontainable Delight",
    type: "EVENT",
    imgUrl: "/CaseStudies/image5.jpg",
    link: "/project/uncontainable-delight",
  },
  {
    title: "Staging It Globally",
    type: "EVENT, EXHIBITION & CONFERENCE",
    imgUrl: "/CaseStudies/image3.JPG",
    link: "/project/staging-it-globally",
  },
];