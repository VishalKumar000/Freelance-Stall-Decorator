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
    thumbnailURL:
      "https://deepalidesigns.com/img/3610WhatsApp%20Image%202024-02-15%20at%2012.59.07.jpeg",
    title: "project introBHARAT PARV 2024",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/6001E38A1389.jpg",
    title: "project introPARYATAN PARV 2019",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/2703_38A4945.jpg",
    title: "project introINTERNATIONAL GITA MAHOTSAV IGM 2018_KURUKSHETRA",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/1462E38A0687.jpg",
    title: "project introHARYANA CLOSING CEREMONY OF SWARNA JAYANTI_2017",
  },
  {
    thumbnailURL:
      "https://deepalidesigns.com/img/5681Bharat%20Parv%20_%20Paryatan%20Parv_Cover%20Page.JPG",
    title: "project introBHARAT PARV 2020",
  },
  {
    thumbnailURL:
      "https://deepalidesigns.com/img/1535Azadi%20Ka%20Amrit%20Mohatsav%20Cover%20page.png",
    title: "project introAZADI KA AMRIT MAHOTSAV",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/1111Cover%20Page.JPG",
    title: "project intro21ST NATIONAL YOUTH FESTIVAL 2017",
  },
];
