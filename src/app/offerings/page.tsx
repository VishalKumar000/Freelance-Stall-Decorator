import FixedSlider from "@/pages/CaseStudies/FixedSlider";
import OurPricing from "@/pages/Home/OurPricing";
import React from "react";

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
    key: "01",
    title: "Deepali R&D Division",
    type: "MODULAR INFRASTRUCTURE",
    imgUrl: "/CaseStudies/image1.JPG",
    link: "/offerings/deepali-rd-division",
  },
  {
    key: "02",
    title: "Events, Activations & Promotions",
    type: "MODULAR INFRASTRUCTURE",
    imgUrl: "/CaseStudies/image2.png",
    link: "/offerings/events-activations-promotions",
  },
  {
    key: "03",
    title: "Exhibits & Tradeshows",
    type: "OUTREACH PROGRAM",
    imgUrl: "/CaseStudies/image3.JPG",
    link: "/offerings/exhibits-tradeshows",
  },
  {
    key: "04",
    title: "Conferences And Seminars",
    type: "EXHIBITION",
    imgUrl: "/CaseStudies/image4.JPG",
    link: "/offerings/conferences-and-seminars",
  },
  {
    key: "05",
    title: "Sports Events & Infrastructure",
    type: "EVENT",
    imgUrl: "/CaseStudies/image5.jpg",
    link: "/offerings/sports-events-infrastructure",
  },
  {
    key: "06",
    title: "Modular Infrastructure",
    type: "EVENT, EXHIBITION & CONFERENCE",
    imgUrl: "/CaseStudies/image3.JPG",
    link: "/offerings/modular-infrastructure",
  },
  {
    key: "07",
    title: "Green Room & Vanity Van",
    type: "EVENT, EXHIBITION & CONFERENCE",
    imgUrl: "/CaseStudies/image5.jpg",
    link: "/offerings/weddings",
  },
];
