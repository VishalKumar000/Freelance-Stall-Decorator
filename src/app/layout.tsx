import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import AppContext from "@/context/AppContext";
import Header from "@/components/Header";
import SocialIcons from "@/components/SocialIcons";
import "swiper/css";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - MR Unique Decorator",
    default: "MR Unique Decorator",
  },
  description: "for exhibition stall & octornom",
  twitter: {
    title: "MR Unique Decoration",
    description:
      "MR Unique Decoration and Exhibits has pioneered a stream of innovative concepts which have set new benchmarks and raised the bar for operations and logistics in the event industry. Powered by several factors - including a dedicated R&D division that explores futuristic material usage, immense application of mind, unimaginable hard work, thorough technical know-how and great execution capabilities, we have blazed an unbeatable record of delivering products and services relating to events & exhibitions.",
    card: "summary_large_image",
    images:
      "https://scontent.fdel3-3.fna.fbcdn.net/v/t39.30808-6/420174314_1620925182059479_2925260245991065526_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Iw0sTjYgUYMAX86VIjn&_nc_ht=scontent.fdel3-3.fna&oh=00_AfBWA4vOrKSyFbJyTh2l800BwHiqHO-GBSrDSqm0z6WH8w&oe=660F95CF",
  },
  metadataBase: new URL("https://www.mruniquedecoration.in"),
  keywords: [
    "mr unique decoration",
    "mr unique decoration.in",
    "mr unique decoration in",
    "mruniquedecoration",
    "mruniquedecoration.in",
    "mrunique decoration",
    "mrunique decoration.in",
    "mr uniquedecoration",
    "mr uniquedecoration.in",
    "mr unique decoration in",
    "mr unique decoration.in",
    "unique decoration.in",
    "uniquedecoration.in",
    "uniquedecoration . in",
    "stall decoration",
    "stall decoration mr unique decoration",
  ],
  openGraph: {
    title: "MR Unique Decoration",
    description:
      "MR Unique Decoration and Exhibits has pioneered a stream of innovative concepts which have set new benchmarks and raised the bar for operations and logistics in the event industry. Powered by several factors - including a dedicated R&D division that explores futuristic material usage, immense application of mind, unimaginable hard work, thorough technical know-how and great execution capabilities, we have blazed an unbeatable record of delivering products and services relating to events & exhibitions.",
    locale: "en_US",
    url: "https://www.mruniquedecoration.in",
    siteName: "MR Unique Decoration",
    images:
      "https://scontent.fdel3-3.fna.fbcdn.net/v/t39.30808-6/420174314_1620925182059479_2925260245991065526_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Iw0sTjYgUYMAX86VIjn&_nc_ht=scontent.fdel3-3.fna&oh=00_AfBWA4vOrKSyFbJyTh2l800BwHiqHO-GBSrDSqm0z6WH8w&oe=660F95CF",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MR Unique Decoration",
    description:
      "MR Unique Decoration and Exhibits has pioneered a stream of innovative concepts which have set new benchmarks and raised the bar for operations and logistics in the event industry. Powered by several factors - including a dedicated R&D division that explores futuristic material usage, immense application of mind, unimaginable hard work, thorough technical know-how and great execution capabilities, we have blazed an unbeatable record of delivering products and services relating to events & exhibitions.",
    url: "https://www.mruniquedecoration.in",
    sameAs: [
      "https://www.indiamart.in/mr-uniquedecorationnew-delhi/",
      "https://www.facebook.com/mruniquedecoration?mibextid=ZbWKwL",
      "https://www.instagram.com/invites/contact/?i=t2q72vuuiryz&utm_content=tohs576",
    ],
    email: "mruniquedecoration@gmail.com",
    telephone: "+917042535020",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "PROPERTY NUMBER NO-G-12/574, Ground Floor, Gali Number 12, Opposite NTPC Park Lane, Block G, Khadda Colony, Badarpur",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110044",
      addressCountry: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+917042535020",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    publisher: {
      "@type": "Organization",
      name: "MR Unique Decoration and Exhibits",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mruniquedecoration.in/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mruniquedecoration.in/",
    },
    hasPart: [
      {
        "@type": "WebPage",
        "@id": "https://www.mruniquedecoration.in/about-us",
        name: "About Us",
        description:
          "Learn more about MR Unique Decoration and Exhibits, a pioneer in innovative concepts for events and exhibitions.",
      },
      {
        "@type": "WebPage",
        "@id": "https://www.mruniquedecoration.in/blog",
        name: "Blog",
        description:
          "Stay updated with the latest news, trends, and insights in the events and exhibitions industry.",
      },
      {
        "@type": "WebPage",
        "@id": "https://www.mruniquedecoration.in/contact-us",
        name: "Contact",
        description:
          "Get in touch with MR Unique Decoration and Exhibits for inquiries, collaborations, or assistance.",
      },
      {
        "@type": "WebPage",
        "@id": "https://www.mruniquedecoration.in/career",
        name: "Careers",
        description:
          "Explore career opportunities at MR Unique Decoration and Exhibits and join our dynamic team.",
      },
      {
        "@type": "WebPage",
        "@id": "https://www.mruniquedecoration.in/offerings",
        name: "Offerings",
        description:
          "Discover our wide range of services and offerings for events, exhibitions, and more.",
      },
    ],
  };

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AppContext>
          <Toaster />
          <Header />
          {children}
          <Footer />
          <SocialIcons />
        </AppContext>
        <script
          async
          src={`https://www.googletagmanager.in/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <Script
          id="app-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </body>
    </html>
  );
}
