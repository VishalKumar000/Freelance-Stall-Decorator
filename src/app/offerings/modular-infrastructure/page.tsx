import OfferingsContent from "@/pages/Offerings/OfferingsContent";
import ProjectGallery from "@/pages/Projects/ProjectGallery";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modular Infrastructure",
};

const ModularInfrastructure = () => {
  return (
    <>
      <OfferingsContent
        content={[
          "With 3 decades of fabricating and setting up large-scale Events & Exhibitions, thereby shaping up its",
          "edge, know how , infrastructure we know what it takes to develop/establish Customized Modular & Relocatable Structures.",
          "Our experience & command on building customized modular structures has  resulted in development of structures in various material such as mild steel, aluminium, fiber , other metals & alloys for huge events like Commonwealth Games, customized event venue set up, Rapid Hospitals and many more.",
          "After building such structures for years as described above our future vision is to develop on this strength further and setup modular and rapid structures beyond events and exhibitions",
          "We possess hardcore experience in setting up resilient and reliable structures such as sports amenities, restaurants, resorts, farmhouses and wayside amenities etc",
        ]}
      />
      <ProjectGallery data={MODULAR_INFRASTRUCTURE_DATA} />
    </>
  );
};

export default ModularInfrastructure;

const MODULAR_INFRASTRUCTURE_DATA = [
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introMAKESHIFT HOSPITAL",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introTWO TIER STRUCTURE",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introPORTA CABIN",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introPORTA CABIN",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introPAGODA STRUCTURE (20X20)",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introPAGODA STRUCTURE (5X5)",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introONION SHAPE STRUCTURE",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introMULTI-PEAK STRUCTURE",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introMCU",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introHALF-ROUND STRUCTURE",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introDOME STRUCTURE",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introCONTAINER STRUCTURE",
  },
];
