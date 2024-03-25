import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import AppContext from "@/context/AppContext";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import SocialIcons from "@/components/SocialIcons";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Mr Unique Decorator",
    default: "Mr Unique Decorator",
  },
  description: "for exhibition stall & octornom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AppContext>
          <Toaster />
          <Header />
          {children}
          <Footer />
          {/* <CustomCursor /> */}
          <SocialIcons />
        </AppContext>
      </body>
    </html>
  );
}
