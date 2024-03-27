import LetTalkHeader from "@/components/LetTalkHeader";
import ContactUsForm from "@/pages/ContactUs/ContactUsForm";
import ImageFilter from "@/pages/ContactUs/Tab/ImageFilter";
import WhatOurClientSays from "@/pages/Home/WhatOurClientSay";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us",
};

const ContactUs = () => {
  return (
    <>
      <LetTalkHeader />
      <ImageFilter />
      <WhatOurClientSays />
      <ContactUsForm />
    </>
  );
};

export default ContactUs;
