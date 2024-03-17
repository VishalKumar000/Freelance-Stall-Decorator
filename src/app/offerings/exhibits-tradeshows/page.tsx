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
    thumbnailURL:
      "https://deepalidesigns.com/img/9471WhatsApp%20Image%202024-02-22%20at%2018.26.48%20(2).jpeg",
    title: "project introIHGF DELHI FAIR SPRING 2024",
  },
  {
    thumbnailURL:
      "https://deepalidesigns.com/img/8655International-Textile-Machinery-Exhibition-1.JPG",
    title: "project introINDIA INTERNATIONAL TEXTILE MACHINERY EXHIBITION",
  },
  {
    thumbnailURL:
      "https://deepalidesigns.com/img/3773IHGF-DELHI-FAIR-SPRING-2023-1.JPG",
    title: "project introIHGF DELHI FAIR SPRING 2023",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/54251M9A5463.jpg",
    title: "project introKRISHI UNNATI 2018",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/5953DSC_3480.jpg",
    title: "project introKRISHI UNNATI 2016",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/9935DSC_0025.jpg",
    title: "project introINDIA PAVILION BOOTH, AMBIENTE 2017",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/7291E38A0166.jpg",
    title: "project introIHGF SPRING DELHI FAIR - 2019",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/9931Buyer%20Lounge%20.jpg",
    title: "project introIHGF SPRING DELHI FAIR - 2018",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/75928D3A1791.jpg",
    title: "project introIHGF SPRING DELHI FAIR - 2017",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/8246_38A8204.jpg",
    title: "project introIHGF AUTUMN DELHI FAIR - 2019",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/4440IMG_1713.jpg",
    title: "project introIHGF AUTUMN DELHI FAIR - 2018",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/1729_DSC0091.jpg",
    title: "project introIHGF AUTUMN DELHI FAIR - 2017",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/1403DSC_8634.jpg",
    title: "project introHERO MOTORS AUTO EXPO 2016",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/3854_DSC9439.jpg",
    title: "project intro25TH EDITION MCHI CREDAI PROPERTY EXPO 2015",
  },
];


