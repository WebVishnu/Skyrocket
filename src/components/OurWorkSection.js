import React from "react";
// fonts
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["700"] });
import { Inter } from "next/font/google";
import SectionHeader from "./SectionHeader";
const inter = Inter({ subsets: ["latin"], weight: ["700"] });

const OurWorkSection = () => {
  return (
    <div>
      <SectionHeader
        title="Our Work"
        desc="Turn your ideas into thriving businesses! At BrandOPT, we specialize in converting your concepts into success stories. From "
      />
      <div className=" pb-12">
        <div className="grid grid-cols-3 grid-rows-1 gap-8">
          <div className="border-2 md:col-span-2 col-span-4 border-black min-h-[15em] rounded-lg"></div>
          <div className="border-2 md:col-span-1 col-span-4 border-black min-h-[15em] rounded-lg"></div>
        </div>
        <div className="grid grid-cols-3 grid-rows-1 gap-8 mt-8">
          <div className="border-2 md:col-span-1 col-span-4 border-black min-h-[15em] rounded-lg"></div>
          <div className="border-2 md:col-span-2 col-span-4 border-black min-h-[15em] rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default OurWorkSection;
