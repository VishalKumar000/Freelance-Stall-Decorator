import OfferingsContent from "@/pages/Offerings/OfferingsContent";
import ProjectGallery from "@/pages/Projects/ProjectGallery";
import React from "react";

const ExhibitsTradeShows = () => {
  return (
    <>
      <OfferingsContent
        content={[
          "Every great storyteller works on a trigger or a back story or a theme – around which an exhibits or a booth design revolves.",
          "Be it large-scale expositions or big-ticket exhibits we turn them into reality.",
          "Weaving stories into every thread of delivering an event and exhibits - and conceptualizing engagement activities that ensure a result-oriented exhibits and tradeshow.",
          "We are capable of handling both small and large-scale projects - including setting up an individual exhibits booth, a customised or a modular pavilion, or end-to-end setup such as hangar, modular and shell set-ups,entire turnkey infra-structures whether indoor or outdoor, branding & signages, electrical connections and circuitry and airconditioning - we can take care of it all.",
        ]}
      />
      <ProjectGallery data={EXHIBITS_TRADESHOWS_DATA} />
    </>
  );
};

export default ExhibitsTradeShows;

const EXHIBITS_TRADESHOWS_DATA = [
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introIHGF DELHI FAIR SPRING 2024",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introINDIA INTERNATIONAL TEXTILE MACHINERY EXHIBITION",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introIHGF DELHI FAIR SPRING 2023",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introKRISHI UNNATI 2018",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introKRISHI UNNATI 2016",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introINDIA PAVILION BOOTH, AMBIENTE 2017",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introIHGF SPRING DELHI FAIR - 2019",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introIHGF SPRING DELHI FAIR - 2018",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introIHGF SPRING DELHI FAIR - 2017",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introIHGF AUTUMN DELHI FAIR - 2019",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introIHGF AUTUMN DELHI FAIR - 2018",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introIHGF AUTUMN DELHI FAIR - 2017",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introHERO MOTORS AUTO EXPO 2016",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project intro25TH EDITION MCHI CREDAI PROPERTY EXPO 2015",
  },
];
