import React from "react";

const getTickets = async () => {
  await new Promise((res) => setTimeout(res, 3000));
  return 1;
};

const ContactUs = async () => {
  const ticket = await getTickets();
  return <div>contactus {ticket}</div>;
};

export default ContactUs;
