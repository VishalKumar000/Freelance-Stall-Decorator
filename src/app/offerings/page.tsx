import FixedSlider from "@/pages/CaseStudies/FixedSlider";
import OurPricing from "@/pages/Home/OurPricing";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Offerings",
};

const Offerings = () => {
  return (
    <>
      <OurPricing/>
      <FixedSlider data={OFFERINGS_DATA} />
    </>
  );
};

export default Offerings;

const OFFERINGS_DATA = [
  {
    title: "Events, Activations & Promotions",
    type: "MODULAR INFRASTRUCTURE",
    imgUrl: "/CaseStudies/image2.png",
    link: "/offerings/events-activations-promotions",
  },
  {
    title: "Exhibits & Tradeshows",
    type: "OUTREACH PROGRAM",
    imgUrl: "/CaseStudies/image3.JPG",
    link: "/offerings/exhibits-tradeshows",
  },
  {
    title: "Conferences And Seminars",
    type: "EXHIBITION",
    imgUrl: "/CaseStudies/image4.JPG",
    link: "/offerings/conferences-and-seminars",
  },
  {
    title: "Sports Events & Infrastructure",
    type: "EVENT",
    imgUrl: "/CaseStudies/image5.jpg",
    link: "/offerings/sports-events-infrastructure",
  },
  {
    title: "Modular Infrastructure",
    type: "EVENT, EXHIBITION & CONFERENCE",
    imgUrl: "/CaseStudies/image3.JPG",
    link: "/offerings/modular-infrastructure",
  },
  // {
  //   title: "Green Room & Vanity Van",
  //   type: "EVENT, EXHIBITION & CONFERENCE",
  //   imgUrl: "/CaseStudies/image5.jpg",
  //   link: "/offerings/weddings",
  // },
];
