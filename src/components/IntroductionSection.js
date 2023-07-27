import React from "react";
import Image from "next/image";
// fonts
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["700"] });
import { Inter } from "next/font/google";
import SectionHeader from "./SectionHeader";
const inter = Inter({ subsets: ["latin"], weight: ["700"] });

const IntroductionSection = () => {
  return (
    <div className="mt-[10em]">
      <SectionHeader
        title="Introducing BrandOPT"
        titleDesc="Boost your Business Growth"
        desc="Unlock Your Brand&apos;s Potential with BRAND OPT: Where Identity Meets Ingenuity!"
      />
      <div className="flex justify-around flex-wrap pb-12">
        <a
          href="#pricing-section"
          className="lg:w-1/3 cursor-pointer hover:shadow-[10px_10px_0px_0px_#FF72AC] transition-all w-100 lg:me-5 mt-10 border-2 rounded-lg py-5 px-8 flex flex-col md:items-start items-center  border-black"
        >
          <Image
            src={"/images/branded-workshop.svg"}
            height={120}
            width={120}
            className="mb-3"
            alt="branded"
          />
          <div>
            <h1
              className={`text-3xl ${inter.className} md:text-right text-center`}
            >
              Create A Brand
            </h1>
            <p
              className={`${lato.className} w-100 mt-2 md:text-right text-center font-light text-gray-500 text-sm`}
            >
              Turn your ideas into thriving businesses! At BrandOPT, we
              specialize in converting your concepts into success stories. From
              website building to social media setup and captivating brand
              identity services, we&apos;ve got the tools you need.
            </p>
          </div>
        </a>
        <a
          href="#pricing-section"
          className="lg:w-1/3 cursor-pointer hover:shadow-[10px_10px_0px_0px_#FF72AC] transition-all w-100 lg:me-5 mt-10 border-2 rounded-lg py-5 px-8 flex flex-col md:items-start items-center  border-black"
        >
          <Image
            src={"/images/optimize-icon.svg"}
            height={120}
            width={120}
            className="mb-3"
            alt="branded"
          />
          <h1
            className={`text-3xl ${inter.className} md:text-right text-center w-[100%]`}
          >
            Optimize My Brand
          </h1>
          <p
            className={`${lato.className} w-100 mt-2 md:text-right text-center font-light text-gray-500 text-sm`}
          >
            Elevate your brand and achieve professional success! BrandOPT is the
            ultimate solution for optimizing your landing page and profiles to
            showcase professionalism and boost your sales and fuel your growth.
          </p>
        </a>
      </div>
    </div>
  );
};

export default IntroductionSection;
