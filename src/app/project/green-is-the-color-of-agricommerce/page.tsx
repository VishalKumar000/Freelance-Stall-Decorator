import ProjectContent from "@/pages/Projects/ProjectContent";
import ProjectGallery from "@/pages/Projects/ProjectGallery";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Green is the color of agriculture",
};

const GreenIsTheColorOfAgricommerce = () => {
  return (
    <>
      <ProjectContent
        title="IHGF"
        challenge="The International Handicraft and Gift Fair was one of the largest exhibitions being held every year. The challenge was to scale up the visual appeal and to take the intellectual property to a global  level and endear it to the audiences and widen its appeal as a talking point - both online and offline"
        solution={`Starting with 2017 IHGF, we chose one symbol for each of nature's five elements: earth, water, air, fire, and space, as the foundation for our design ideas.
The installations, which were larger than life in scale and very detailed, were created from 30 different forms of non-biodegradable municipal and industrial garbage.
The theme was changed - and that year on - on each consecutive edition, we had different installations as well as design language to surprise and delight audiences.
`}
        content={`Much appreciation was received from organizers and visitors alike. Celebrated in social media with the widest amplifications, shares, and likes.
Never before was such a gigantic attempt made to create an Expo and exhibition out of completely recycled materials and industrial waste at this scale.
Various larger than life, eye-popping installations, and upcycled materials were repurposed as lucrative, high-value and desirable gifts and handicraft items by various stakeholders.`}
      />
      <ProjectGallery data={GREEN_IS_THE_COLOR_OF_AGRICOMMERCE} />
    </>
  );
};

export default GreenIsTheColorOfAgricommerce;

const GREEN_IS_THE_COLOR_OF_AGRICOMMERCE = [
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "KRISHI KUMBH INTERNATIONAL CONFERENCE 2018",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "KRISHI KUMBH INTERNATIONAL CONFERENCE 2018",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "KRISHI KUMBH INTERNATIONAL CONFERENCE 2018",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "KRISHI KUMBH INTERNATIONAL CONFERENCE 2018",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "KRISHI KUMBH INTERNATIONAL CONFERENCE 2018",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "KRISHI KUMBH INTERNATIONAL CONFERENCE 2018",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "KRISHI KUMBH INTERNATIONAL CONFERENCE 2018",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "KRISHI KUMBH INTERNATIONAL CONFERENCE 2018",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "KRISHI KUMBH INTERNATIONAL CONFERENCE 2018",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "KRISHI KUMBH INTERNATIONAL CONFERENCE 2018",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "KRISHI KUMBH INTERNATIONAL CONFERENCE 2018",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "KRISHI KUMBH INTERNATIONAL CONFERENCE 2018",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "KRISHI KUMBH INTERNATIONAL CONFERENCE 2018",
  },
];
