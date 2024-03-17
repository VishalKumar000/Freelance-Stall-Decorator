import OfferingsContent from "@/pages/Offerings/OfferingsContent";
import ProjectGallery from "@/pages/Projects/ProjectGallery";
import React from "react";

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
    thumbnailURL:
      "https://deepalidesigns.com/img/2021MAKESHIFT%20HOSPITAL.jpeg",
    title: "project introMAKESHIFT HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/67844564DSCN0088.JPG",
    title: "project introTWO TIER STRUCTURE",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/8117100_2322.jpg",
    title: "project introPORTA CABIN",
  },
  {
    thumbnailURL:
      "https://deepalidesigns.com/img/9092pagoda%2020x20Mtr%20(2).jpg",
    title: "project introPORTA CABIN",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/6767golf.jpg",
    title: "project introPAGODA STRUCTURE (20X20)",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/919711.jpg",
    title: "project introPAGODA STRUCTURE (5X5)",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/1917Image-12.jpg",
    title: "project introONION SHAPE STRUCTURE",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/65460X4A0002.jpg",
    title: "project introMULTI-PEAK STRUCTURE",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/73011.jpg",
    title: "project introMCU",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/5930DJI_0011.jpg",
    title: "project introHALF-ROUND STRUCTURE",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/16794.jpg",
    title: "project introDOME STRUCTURE",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/62551.jpg",
    title: "project introCONTAINER STRUCTURE",
  },
];
