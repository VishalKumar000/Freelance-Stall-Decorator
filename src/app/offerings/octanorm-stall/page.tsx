import OfferingsContent from "@/pages/Offerings/OfferingsContent";
import ProjectGallery from "@/pages/Projects/ProjectGallery";
import React from "react";

const OctonormStall = () => {
  return (
    <>
      <OfferingsContent
        content={[
          "In the dynamic exhibition setting, Octanorm-Stall shines as a symbol of versatility and excellence. Exhibitions serve as vital arenas for businesses, addressing challenges such as visibility. Through innovative booth designs and engaging interactions, Octanorm-Stall ensures it stands out amidst competitors. Networking opportunities abound, fostering partnerships that extend beyond the exhibition hall. The company thrives on innovation, refining its offerings based on valuable feedback from industry peers and customers. Workshops and seminars facilitate knowledge exchange, enabling Octanorm-Stall to stay ahead of trends. In essence, exhibitions embody entrepreneurship, innovation, and collaboration, with Octanorm-Stall at the forefront. As a catalyst for transformation, exhibitions spark possibilities, paving the way for a brighter future for Octanorm-Stall and the industry.",
        ]}
      />
      <ProjectGallery data={OCTONORM_STALL} />
    </>
  );
};

export default OctonormStall;

const OCTONORM_STALL = [
  {
    thumbnailURL: "/Offering/Octanorm-Stall/image10.jpg",
    title: "project introBHARAT PARV 2024",
  },
  {
    thumbnailURL: "/Offering/Octanorm-Stall/image37.jpg",
    title: "project introPARYATAN PARV 2019",
  },
  {
    thumbnailURL: "/Offering/Octanorm-Stall/image38.jpg",
    title: "project introINTERNATIONAL GITA MAHOTSAV IGM 2018_KURUKSHETRA",
  },
  {
    thumbnailURL: "/Offering/Octanorm-Stall/image41.jpg",
    title: "project introHARYANA CLOSING CEREMONY OF SWARNA JAYANTI_2017",
  },
  {
    thumbnailURL: "/Offering/Octanorm-Stall/image42.jpg",
    title: "project introBHARAT PARV 2020",
  },
];
