import OfferingsContent from "@/pages/Offerings/OfferingsContent";
import ProjectGallery from "@/pages/Projects/ProjectGallery";
import React from "react";

const ExhibitionStall = () => {
  return (
    <>
      <OfferingsContent
        content={[
          "In the vibrant exhibition landscape, MR Unique Decoration stands as a beacon of creativity, showcasing its flair for decor and design. Exhibitions serve as a vital platform for businesses, addressing challenges like visibility. Through strategic booth design and engaging interactions, MR Unique Decoration ensures it stands out amidst competitors. Networking opportunities abound, cultivating partnerships that extend beyond the exhibition hall. The company thrives on innovation, refining its offerings based on valuable feedback from industry peers and customers. Workshops and seminars facilitate knowledge exchange, enabling MR Unique Decoration to stay ahead of trends. In essence, exhibitions embody entrepreneurship, innovation, and collaboration, with MR Unique Decoration at the forefront. As a catalyst for transformation, exhibitions spark possibilities, paving the way for a brighter future for MR Unique Decoration and the industry."
        ]}
      />
      <ProjectGallery data={EXHIBITION_STALL} />
    </>
  );
};

export default ExhibitionStall;

const EXHIBITION_STALL = [
  {
    thumbnailURL: "/Offering/Exhibition-Stall/image1.jpeg",
    title: "project intro BHARAT PARV 2024",
  },
  {
    thumbnailURL: "/Offering/Exhibition-Stall/image2.jpeg",
    title: "project intro PARYATAN PARV 2019",
  },
  {
    thumbnailURL: "/Offering/Exhibition-Stall/image3.jpeg",
    title: "project intro INTERNATIONAL GITA MAHOTSAV IGM 2018_KURUKSHETRA",
  },
  {
    thumbnailURL: "/Offering/Exhibition-Stall/image4.jpg",
    title: "project intro HARYANA CLOSING CEREMONY OF SWARNA JAYANTI_2017",
  },
  {
    thumbnailURL: "/Offering/Exhibition-Stall/image5.jpg",
    title: "project intro BHARAT PARV 2020",
  },
  {
    thumbnailURL: "/Offering/Exhibition-Stall/image6.jpg",
    title: "project intro AZADI KA AMRIT MAHOTSAV",
  },
  {
    thumbnailURL: "/Offering/Exhibition-Stall/image7.jpg",
    title: "project intro 21ST NATIONAL YOUTH FESTIVAL 2017",
  },
  {
    thumbnailURL: "/Offering/Exhibition-Stall/image8.jpg",
    title: "project intro 21ST NATIONAL YOUTH FESTIVAL 2017",
  },
  {
    thumbnailURL: "/Offering/Exhibition-Stall/image9.jpg",
    title: "project intro 21ST NATIONAL YOUTH FESTIVAL 2017",
  },
];
