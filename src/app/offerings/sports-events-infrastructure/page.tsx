import OfferingsContent from "@/pages/Offerings/OfferingsContent";
import ProjectGallery from "@/pages/Projects/ProjectGallery";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Events Infrastructure",
};

const SportsEventsInfrastructure = () => {
  return (
    <>
      <OfferingsContent
        content={[
          "To showcase the best sporting talent or gamesmanship — there are a lot of factors involved - such as stadium seating,Creative Field of Play, Standard Operating Procedure -  including amenities, crowd management barricades , electricals and facilities for VVIPs such as security and welfare",
          "But for planners, organizing a sports event is a whole different ball game, full of unique considerations and tricky logistics such as barricades, and other paraphernalia",
          "From determining purpose, variables, budgeting, venues, catering, insurance, partnering and sponsors, promotion, emergency planning, medical and legal – there’s a lot of work that goes behind the audiences' claps and cheers.",
          "Deepali has built complete venues and sporting infra from scratch - both for indoor and outdoor events,",
          "We have developed a unique approach to sports event infrastructure development for Commonwealth Games, Lusofonia Games in Goa,, National Games – Kerala, South Asian Games, and other sports events of repute.",
        ]}
      />
      <ProjectGallery data={SPORTS_EVENTS_INFRASTRUCTURE} />
    </>
  );
};

export default SportsEventsInfrastructure;

const SPORTS_EVENTS_INFRASTRUCTURE = [
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introKHELO INDIA PARAGAMES 2023 - 2024",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introKHELO INDIA UNIVERSITY GAMES 2022",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introKHELO INDIA YOUTH GAMES 2022, MP",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introJIND KABADDI 2018",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introBHARAT KESARI DANGAL 2017 AMBALA",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project intro35TH NATIONAL GAMES 2015",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project intro22ND ASIAN ATHLETICS CHAMPIONSHIP 2017",
  },
];
