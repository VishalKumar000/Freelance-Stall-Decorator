// Icons
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export const NAVIGATION_DATA = [
  { link: "/", title: "Home" },
  { link: "/about-us", title: "About Us" },
  { link: "/offerings", title: "Our Offerings" },
  { link: "/blog", title: "Blog" },
  { link: "/case-studies", title: "Case Studies" },
  { link: "/career", title: "Careers" },
  { link: "/contact-us", title: "Reach Us" },
];

export const OUR_OFFERINGS_DATA = [
  {
    link: "/offerings/events-activations-promotions",
    title: "Events, Activations & Promotions",
  },
  {
    link: "/offerings/exhibits-tradeshows",
    title: "Exhibits & Tradeshows",
  },
  {
    link: "/offerings/conferences-and-seminars",
    title: "Conferences and Seminars",
  },
  {
    link: "/offerings/sports-events-infrastructure",
    title: "Sports Events & Infrastructure",
  },
  {
    link: "/offerings/modular-infrastructure",
    title: "Modular Infrastructure",
  },
  { link: "/offerings/weddings", title: "Weddings" },
];

export const SOCIAL_MEDIA_DATA = [
  {
    link: "/",
    title: <FaFacebookSquare />,
  },
  {
    link: "https://api.whatsapp.com/send?phone=+917042535020&text=Hi, I visited your website and interested in your offerings. So please coordinate ASAP with me. ",
    title: <FaWhatsapp />,
  },
  {
    link: "/",
    title: <FaInstagram />,
  },
  { link: "/", title: <FaXTwitter /> },
  {
    link: "/",
    title: <FaYoutube />,
  },
  {
    link: "/",
    title: <FaLinkedinIn />,
  },
];

export const CONTACT_DATA = {
  email: "mruniquedecoration@gmail.com",
  phone: "+91-7042535020",
  address:
    "PROPERTY NUMBER NO-G-12/574, Ground Floor, Gali Number 12, opposite NTPC Park Lane, Block G, Khadda Colony, Badarpur, New Delhi, Delhi 110044",
  brand_name: "MR Unique Decoration",
};
