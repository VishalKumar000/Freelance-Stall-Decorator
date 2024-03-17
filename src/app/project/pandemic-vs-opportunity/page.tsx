import ProjectContent from "@/pages/Projects/ProjectContent";
import ProjectGallery from "@/pages/Projects/ProjectGallery";
import React from "react";

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
    thumbnailURL:
      "https://deepalidesigns.com/img/2755COVID%20Jumbo%20Hospital%20(800%20Beds)%20Pune,%20Maharashtra.JPG",
    title: "COVID JUMBO HOSPITAL (800 BEDS) PUNE",
  },
  {
    thumbnailURL:
      "https://deepalidesigns.com/img/9138DRDO%20Makeshift%20Hospital%20(250%20ICU-Beds)%20at%20Varanasi,%20Uttar%20Pradesh.jpeg",
    title: "MAHARASHTRADRDO MAKESHIFT HOSPITAL (250 ICU-BEDS) AT VARANASI",
  },
  {
    thumbnailURL:
      "https://deepalidesigns.com/img/3661DRDO%20Makeshift%20Hospital%20(400%20Beds)%20at%20Rishikesh,%20Uttarakhand.jpeg",
    title: "UTTAR PRADESHDRDO MAKESHIFT HOSPITAL (400 BEDS) AT RISHIKESH ",
  },
  {
    thumbnailURL:
      "https://deepalidesigns.com/img/9330DRDO%20Makeshift%20Hospital%20(500%20Beds)%20at%20Srinagar,%20UT%20Jammu%20_%20Kashmir.JPG",
    title: "UTTARAKHANDDRDO MAKESHIFT HOSPITAL (500 BEDS) AT SRINAGAR",
  },
  {
    thumbnailURL:
      "https://deepalidesigns.com/img/5856Guru%20Teg%20Bahadur%20Annex%20Hospital%20(500%20Beds)%20Ram%20Lila%20Ground,%20Delhi.png",
    title: "UT",
  },
  {
    thumbnailURL:
      "https://deepalidesigns.com/img/6069Lok%20Nayak%20Annex%20Hospital%20(500%20Beds)%20Ram%20Lila%20Ground,%20New%20Delhi.png",
    title:
      "JAMMU-KASHMIRGURU TEG BAHADUR ANNEX HOSPITAL (500 BEDS) RAM LILA GROUND",
  },
  {
    thumbnailURL:
      "https://deepalidesigns.com/img/7403Sardar%20Vallabhbhai%20Patel%20COVID%20Hospital%20(1000%20Beds)%20at%20Delhi%20Cantt..jpg",
    title: "DELHILOK NAYAK ANNEX HOSPITAL (500 BEDS) RAM LILA GROUND",
  },
  {
    thumbnailURL:
      "https://deepalidesigns.com/img/9713Extension%20of%20Sardar%20Vallabhbhai%20Patel%20COVID%20Hospital%20(250%20Beds)%20at%20Delhi%20Cantt..jpeg",
    title:
      "NEW DELHISARDAR VALLABHBHAI PATEL COVID HOSPITAL (1000 BEDS) AT DELHI CANTT.MCU HOSPITAL - EXTENSION OF SARDAR VALLABHBHAI PATEL COVID HOSPITAL (250 BEDS) AT DELHI CANTT.MCU HOSPITAL - MAKESHIFT COVID HOSPITAL (200 BEDS) AT IMPHALMCU HOSPITAL - MAKESHIFT COVID HOSPITAL (300 BEDS) AT INDIRA GANDHI INDOOR STADIUM",
  },
  {
    thumbnailURL:
      "https://deepalidesigns.com/img/6575Makeshift%20Covid%20Hospital%20(200%20Beds)%20at%20Imphal.JPG",
    title: "GUWAHATI",
  },
  {
    thumbnailURL:
      "https://deepalidesigns.com/img/4197Makeshift%20COVID%20Hospital%20(300%20Beds)%20at%20Indira%20Gandhi%20Indoor%20Stadium,%20Guwahati,%20Assam.JPG",
    title: "ASSAM",
  },
];

