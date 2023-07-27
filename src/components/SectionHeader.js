import React from "react";
// fonts
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["700"] });
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["700"] });

const SectionHeader = (props) => {
  const title = props.title.split(" ");
  return (
    <div className="flex justify-between items-center flex-wrap my-12">
      <h1 className={`${inter.className} text-3xl`}>
        {title.slice(0,title.length - 1)} <span className="before:h-[10px] relative before:w-[100%] before:bg-[#FF72AC] before:absolute before:bottom-0 before:z-[-1]">{title[title.length - 1]}</span> <br />{" "}
        {props.titleDesc && (
          <span className="text-2xl text-gray-500">{props.titleDesc}</span>
        )}
      </h1>
      <p
        className={`${lato.className} md:w-1/3 w-100 md:mt-0 mt-7 md:text-right text-left font-light text-gray-500 text-sm`}
      >
        {props.desc}
      </p>
    </div>
  );
};

export default SectionHeader;
