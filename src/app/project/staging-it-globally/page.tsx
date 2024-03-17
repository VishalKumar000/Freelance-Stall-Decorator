import ProjectContent from '@/pages/Projects/ProjectContent';
import ProjectGallery from '@/pages/Projects/ProjectGallery';
import React from 'react'

const StagingItGlobally = () => {
  return (
    <>
      <ProjectContent
        title="COP14"
        challenge="For COP14 which was a United Nations Convention, the stage was global, and the occasion demand a larger-than-life setting, surroundings, facilities, and a memorable experience for all senses. Deepali rose to the occasion as it does always! All executed - from start to finish in just 13 days."
        solution={`The United Nations Convention to Combat Desertification had participation from 200 countries, 100 ministers, and some 8000 delegates.
Since it was a high-stakes event, the Prime Minister, environment minister of the country and UN delegates were expected to grace the occasion.
No stone was left unturned as the prestige of the country was at stake.
From the creation of 26 sound-proof halls, an India Pavilion, food court, and signage to branding and visually appealing aesthetics – everything was meticulously planned and implemented.
Evenings were enlivened by music and dance from member countries and indeed from the rich and lesser-known heritage of the host country as well
Flawless conception, planning down to the last detail, and execution that took care of world-class needs. From transport to security needs for VVIPs, sound and light and high-tech IT systems, webcasts and décor
Simultaneous interpretation services in multiple world languages, catering sensitivities, global outlook, networking, and sound-proof breakout sessions were planned and implemented to the optimum levels.`}
        content={`We were able to ensure the highest participation ever – among the last three COPs – a tribute to the calling teams, hospitality, and the back-end personnel who worked tirelessly to make it all come together as one.`}
      />
      <ProjectGallery data={STAGING_IT_GLOBALLY} />
    </>
  );
}

export default StagingItGlobally

const STAGING_IT_GLOBALLY = [
  { thumbnailURL: "https://deepalidesigns.com/img/29463.png", title: "COP-14" },
  {
    thumbnailURL: "https://deepalidesigns.com/img/7044E38A3144.JPG",
    title: "COP-14",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/9820IMG_3879.JPG",
    title: "COP-14",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/3114IMG_4345.JPG",
    title: "COP-14",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/5281IMG_4445.JPG",
    title: "COP-14",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/7243IMG_4532.JPG",
    title: "COP-14",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/6762IMG_5911.JPG",
    title: "COP-14",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/8319IMG_5916.JPG",
    title: "COP-14",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/6866IMG_6037.JPG",
    title: "COP-14",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/7475IMG_6094.JPG",
    title: "COP-14",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/9563IMG_6634.JPG",
    title: "COP-14",
  },
  {
    thumbnailURL: "https://deepalidesigns.com/img/2901IMG_7097.JPG",
    title: "COP-14",
  },
];
