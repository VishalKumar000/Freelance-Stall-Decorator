import LetTalkHeader from "@/components/LetTalkHeader";
import ContactAddress from "@/pages/ContactUs/ContactAddress";
import ContactUsForm from "@/pages/ContactUs/ContactUsForm";
import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-black">
      <LetTalkHeader />
      <ContactAddress />
      <ContactUsForm />
    </div>
  );
};

export default ContactUs;
