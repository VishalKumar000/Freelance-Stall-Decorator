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
    thumbnailURL: "https://deepalidesigns.com/img/74720X4A0002.JPG",
    title: "MAKESHIFT COVID HOSPITAL,IMPHAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/20400X4A0006.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/29040X4A0018.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/74210X4A0026.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/35200X4A0030.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/47730X4A0047.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/37780X4A0053.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/42110X4A0064.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/99420X4A0071.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/59730X4A9964.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/59590X4A9969.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/50830X4A9971.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/40940X4A9974.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/61310X4A9991.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/9831DJI_0345.JPG",
    title: "IMPHAL MAKESHIFT COVID HOSPITAL",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/6795DJI_0359.JPG",
    title: "IMPHAL",
  },
];
