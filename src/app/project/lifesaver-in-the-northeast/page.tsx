import ProjectContent from "@/pages/Projects/ProjectContent";
import ProjectGallery from "@/pages/Projects/ProjectGallery";
import React from "react";

const LifeSaverInTheNorthEast = () => {
  return (
    <>
      <ProjectContent
        title="Anchors in the NorthEast"
        challenge="To create a 200-bedded medical facility in the remote and inhospitable terrain of Imphal in a span of 30 days."
        solution="Deployed the concept of Multispeciality Connected Units – MCUs at par with globally accepted medical standards of treatment."
        content="Floating foundation concept was deployed, which overcame both water logging as well as drainage and sanitation issues, even when rains played spoilsport constantly throughout the duration of the project.
Despite lack of skilled labour and language and communication issues, we were able to create a full-fledged, well-equipped hospital, within 1 month's time from start to finish."
      />
      <ProjectGallery data={LIFESAVER_IN_THE_NORTHEAST_DATA} />
    </>
  );
};

export default LifeSaverInTheNorthEast;

const LIFESAVER_IN_THE_NORTHEAST_DATA = [
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "MAKESHIFT COVID HOSPITAL,IMPHAL",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "IMPHAL",
  },
];
