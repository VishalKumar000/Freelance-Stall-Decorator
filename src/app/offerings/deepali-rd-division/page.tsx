import OfferingsContent from "@/pages/Offerings/OfferingsContent";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Deepali RD division",
};

const DeepaliRdDivision = () => {
  return (
    <>
      <OfferingsContent
        content={[
          "Embark on a transformative journey towards sustainability and a net-zero future by exploring our pioneering R&D initiatives.",
          "Inspired by Prime Minister Shri Narendra Modi's vision to combat climate change, our intensive 3 years of research initiative has yielded ground-breaking results.",
          "Leveraging over three decades of expertise in constructing large-scale infrastructure, we've researched deep and come up with materials for ensuring eco-friendly, self-sustaining, and energy-positive high-altitude structures and all-weather shelters with zero carbon emissions, tailored for challenging climates and terrains.",
          "While our results have been implemented in far-flung terrains – within the country and elsewhere, our dedicated team works hard to constantly improve and innovate upon meticulously crafted modular, easy-to-install shelters that ensure comfort and optimal living conditions, even in sub-zero temperatures.",
          "So why not customize your shelter to suit your unique needs and power it sustainably with thermal heating and solar energy, minimizing your ecological impact?",
          "Intrigued? Click below to delve into our implemented projects, explore detailed technical specs, share your requirements, and join us in shaping a greener, more sustainable tomorrow.",
        ]}
        btnTitle="Deepali R&D"
      />
    </>
  );
};

export default DeepaliRdDivision;
