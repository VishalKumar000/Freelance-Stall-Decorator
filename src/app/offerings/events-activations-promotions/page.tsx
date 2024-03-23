import OfferingsContent from "@/pages/Offerings/OfferingsContent";
import ProjectGallery from "@/pages/Projects/ProjectGallery";
import React from "react";

const EventsActivationsPromotions = () => {
  return (
    <>
      <OfferingsContent
        content={[
          "When it comes to Events or promotions, Deepali believes in taking on challenging projects and implementing them against all odds.",
          "To illustrate with a few examples for the opening ceremony and logistics for National Youth Festival 2017 at the MDU Rohtak - including a 400-artist dance troupe and set, stage, light sound and the entire paraphernalia, implemented within 10 days.",
          "A recent case was the outreach activity done for Ministry of Culture - for schoolchildren for Azadi Ka Amrit Mahotsav in two memorable months of 2021-2022 – through a zoom strategy involving tele-callers and presenters.",
        ]}
      />
      <ProjectGallery data={EVENTS_ACTIVATIONS_PROMOTIONS} />
    </>
  );
};

export default EventsActivationsPromotions;

const EVENTS_ACTIVATIONS_PROMOTIONS = [
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introBHARAT PARV 2024",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introPARYATAN PARV 2019",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introINTERNATIONAL GITA MAHOTSAV IGM 2018_KURUKSHETRA",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introHARYANA CLOSING CEREMONY OF SWARNA JAYANTI_2017",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introBHARAT PARV 2020",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introAZADI KA AMRIT MAHOTSAV",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project intro21ST NATIONAL YOUTH FESTIVAL 2017",
  },
];
