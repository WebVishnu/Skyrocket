import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brand OPT - UI & UX, and Funnel Websites",
  description:
    "We help businesses grow by creating funnel-based websites that convert visitors into leads and customers. We also offer a wide range of other services, including logo design, ad banner design, social media content creation, website development, UI/UX design, and SEO. Our team of experienced professionals is dedicated to helping you achieve your business goals. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Analytics />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
