import OfferingsContent from "@/pages/Offerings/OfferingsContent";
import ProjectGallery from "@/pages/Projects/ProjectGallery";
import React from "react";

const ConferencesAndSeminars = () => {
  return (
    <>
      <OfferingsContent
        content={[
          "We are into organizing large format events that include both national level as well as international seminars, symposiums or conferences. Be it medical, international or technical conferences, we conceptualize, plan and implement all aspects involved.",
          "We ensure all forms of conception, meticulous planning, and execution that meet and exceed world-class requirements.",
          "For a prestigious event like the COP14 - we looked into all aspects -from transportation to VVIP security, sound and light systems, and décor that reflect the event's prestige, to simultaneous interpretation services in multiple world languages, catering sensitivities, global outlook, networking, and sound-proof breakout sessions, everything was planned and implemented with meticulous attention to detail.",
        ]}
      />
      <ProjectGallery data={CONFERENCES_AND_SEMINARS} />
    </>
  );
};

export default ConferencesAndSeminars;

const CONFERENCES_AND_SEMINARS = [
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introG20 UTTRAKHAND SUMMIT 2022",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introUTTAR PRADESH GLOBAL INVESTORS SUMMIT 2023",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introPEDICON 2019",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introGLOBAL CONFERENCE ON CYBER SPACE 2017",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introCOP - 14",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "project introADVANTAGE ASSAM GLOBAL INVESTORS SUMMIT 2018",
  },
];

