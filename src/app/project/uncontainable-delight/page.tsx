import ProjectContent from "@/pages/Projects/ProjectContent";
import ProjectGallery from "@/pages/Projects/ProjectGallery";
import React from "react";

const UncontainableDelight = () => {
  return (
    <>
      <ProjectContent
        title="Hero MotoCorp wanted an out-of-the-box solution for its event. But time was always at a crunch."
        challenge="We intelligently merged the existing shipping container with the event infrastructure
The shipping container solution became the perfect fit for the experiential marketing event, with lights, trusses, and projections.
We used a hangar format on top of the containers – which was an operational and an engineering feat, never done before."
        solution="For the first time in India, we worked inside a shipping container and integrated an overhead hangar structure with trussing, lighting and our event inside it"
        content={`We were able to redesign and recast the tame, boring shipping container to match and exceed the client's vision.
The possibilities became endless with our customized shipping containers! This was used indoors at a convention centre with individualized segments for seating people and activities, projection mapping, front projection video narrowcasts, and provision for locking security of valuable assets.
Various events from around the world have achieved far less in much more time.`}
      />
      <ProjectGallery data={UNCONTAINABLE_DELIGHT_DATA} />
    </>
  );
};

export default UncontainableDelight;

const UNCONTAINABLE_DELIGHT_DATA = [
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "HERO HONDA 2013",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "HERO HONDA 2013",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "HERO HONDA 2013",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "HERO HONDA 2013",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "HERO HONDA 2013",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "HERO HONDA 2013",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "HERO HONDA 2013",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "HERO HONDA 2013",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "HERO HONDA 2013",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "HERO HONDA 2013",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "HERO HONDA 2013",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "HERO HONDA 2013",
  },
];
