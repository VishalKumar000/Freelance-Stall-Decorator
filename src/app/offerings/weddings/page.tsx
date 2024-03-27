import OfferingsContent from "@/pages/Offerings/OfferingsContent";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding",
};

const Weddings = () => {
  return (
    <>
      <OfferingsContent
        content={[
          `We create authentic wedding experiences with our exquisitely curated wedding banquets, dedicated pandal options, catering services, artist performances, international class themes & décor.`,
        ]}
      />
    </>
  );
};

export default Weddings;
