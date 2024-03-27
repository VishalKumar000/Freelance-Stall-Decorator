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
    key: "01",
    title: "Lifesaver In The NorthEast",
    type: "MODULAR INFRASTRUCTURE",
    imgUrl: "/CaseStudies/image1.JPG",
    link: "/project/lifesaver-in-the-northeast",
  },
  {
    key: "02",
    title: "Pandemic Vs. Opportunity",
    type: "MODULAR INFRASTRUCTURE",
    imgUrl: "/CaseStudies/image2.png",
    link: "/project/pandemic-vs-opportunity",
  },
  {
    key: "03",
    title: "Outstanding Outreach",
    type: "OUTREACH PROGRAM",
    imgUrl: "/CaseStudies/image3.JPG",
    link: "/project/outstanding-outreach",
  },
  {
    key: "04",
    title: "Green Is The Color Of AgriCommerce",
    type: "EXHIBITION",
    imgUrl: "/CaseStudies/image4.JPG",
    link: "/project/green-is-the-color-of-agricommerce",
  },
  {
    key: "05",
    title: "Uncontainable Delight",
    type: "EVENT",
    imgUrl: "/CaseStudies/image5.jpg",
    link: "/project/uncontainable-delight",
  },
  {
    key: "06",
    title: "Staging It Globally",
    type: "EVENT, EXHIBITION & CONFERENCE",
    imgUrl: "/CaseStudies/image3.JPG",
    link: "/project/staging-it-globally",
  },
];