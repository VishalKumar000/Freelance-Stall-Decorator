import ProjectContent from "@/pages/Projects/ProjectContent";
import ProjectGallery from "@/pages/Projects/ProjectGallery";
import React from "react";

const OutstandingOutreach = () => {
  return (
    <>
      <ProjectContent
        title="Azadi Ka Amrit Mahotsav"
        challenge={`The Prime Minister had announced the  ‘Azadi Ka Amrit Mahotsav’ an initiative of the Government of India to celebrate and commemorate 75 years of India’s independence - and this included competitions in three categories .
The challenge was to encourage and maximise participation among school children to participate in – and ensure a great turnout.`}
        solution={`Deepali conceptualised, planned a mammoth  team comprising highly motivated presenters, trained and mentored by Deepali personnel interacted with children and by appealing to their patriotic instincts – and requested them for their participation in 3 specific competitions for AZADI KA AMRIT MAHOTSAV.

The outreach achieved new heights by hosting more than 18000 Zoom meetings in 62 days with a screen time of 94 lakh minutes for meetings in the middle of a COVID stricken season`}
        content={`A 400 strong team of tele-callers, Presenters & Data miners went off the script and beyond the call of duty, in less than a total of 120 days – to school management and Heads of Institutions on behalf of the Ministry of Culture.
More than 19 lakh students nationwide were contacted and total participation of 5,16,328 was achieved.
Extensive documentation, paper, and electronic trails, and all footage as well as behind the scenes were documented and archived for creating future templates.
 Logistics, training, documentation, and carefully screened and scrubbed data analytics went hand-in-hand and the project increased in magnitude, and so did the team rise to the occasion.`}
      />
      <ProjectGallery data={OUTSTANDING_OUTREACH_DATA} />
    </>
  );
};

export default OutstandingOutreach;

const OUTSTANDING_OUTREACH_DATA = [
  {
    title: "AZADI KA AMRIT MOHATSAV",
    thumbnailURL: "https://deepalidesigns.com/img/43060F5A8947.JPG",
  },
  {
    title: "AZADI KA AMRIT MOHATSAV",
    thumbnailURL: "https://deepalidesigns.com/img/11700F5A9013.JPG",
  },
  {
    title: "AZADI KA AMRIT MOHATSAV",
    thumbnailURL: "https://deepalidesigns.com/img/66520F5A9246.JPG",
  },
  {
    title: "AZADI KA AMRIT MOHATSAV",
    thumbnailURL: "https://deepalidesigns.com/img/138901.JPG",
  },
  {
    title: "AZADI KA AMRIT MOHATSAV",
    thumbnailURL: "https://deepalidesigns.com/img/1745IMG_0727.JPG",
  },
  {
    title: "AZADI KA AMRIT MOHATSAV",
    thumbnailURL: "https://deepalidesigns.com/img/5337IMG_0735.JPG",
  },
  {
    title: "AZADI KA AMRIT MOHATSAV",
    thumbnailURL: "https://deepalidesigns.com/img/4659IMG_0754.JPG",
  },
  {
    title: "AZADI KA AMRIT MOHATSA",
    thumbnailURL: "https://deepalidesigns.com/img/4179IMG_0757.JPG",
  },
];
