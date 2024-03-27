import ProjectContent from "@/pages/Projects/ProjectContent";
import ProjectGallery from "@/pages/Projects/ProjectGallery";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Pandemic vs opportunity",
};

const PandemicVsOpportunity = () => {
  return (
    <>
      <ProjectContent
        title="Temporary COVID Hospitals"
        challenge="As the vaccine was yet to be administered to all age groups, the second COVID wave demanded enormous numbers of hospital beds for emergency treatment and care. And time was running out"
        solution="Creating a lightning-fast rapid makeshift hospital with world-class amenities,750 oxygenated beds, and 250 ICU/HDU Beds in 11 days flat, creating history by turning pandemic into opportunity and saving every life possible. That was the first COVID Makeshift hospital made in India"
        content={`We’ve continued to provide various government departments with several makeshift hospitals for the last year and continue to do so for different state governments.
We had built  9 more hospitals with a total capacity of 5200 beds.
 A case where the nation's pride was at stake, and we needed to match - even exceed global medical standards was sought to be planned and was achieved within timelines. And repeated.`}
      />
      <ProjectGallery data={PANDEMIC_VS_OPPORTUNITY_DATA} />
    </>
  );
};

export default PandemicVsOpportunity;

const PANDEMIC_VS_OPPORTUNITY_DATA = [
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "COVID JUMBO HOSPITAL (800 BEDS) PUNE",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "MAHARASHTRADRDO MAKESHIFT HOSPITAL (250 ICU-BEDS) AT VARANASI",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "UTTAR PRADESHDRDO MAKESHIFT HOSPITAL (400 BEDS) AT RISHIKESH ",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "UTTARAKHANDDRDO MAKESHIFT HOSPITAL (500 BEDS) AT SRINAGAR",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "UT",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title:
      "JAMMU-KASHMIRGURU TEG BAHADUR ANNEX HOSPITAL (500 BEDS) RAM LILA GROUND",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "DELHILOK NAYAK ANNEX HOSPITAL (500 BEDS) RAM LILA GROUND",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title:
      "NEW DELHISARDAR VALLABHBHAI PATEL COVID HOSPITAL (1000 BEDS) AT DELHI CANTT.MCU HOSPITAL - EXTENSION OF SARDAR VALLABHBHAI PATEL COVID HOSPITAL (250 BEDS) AT DELHI CANTT.MCU HOSPITAL - MAKESHIFT COVID HOSPITAL (200 BEDS) AT IMPHALMCU HOSPITAL - MAKESHIFT COVID HOSPITAL (300 BEDS) AT INDIRA GANDHI INDOOR STADIUM",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "GUWAHATI",
  },
  {
    thumbnailURL: "/CaseStudies/image1.JPG",
    title: "ASSAM",
  },
];

