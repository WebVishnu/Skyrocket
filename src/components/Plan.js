"use client"
import React from "react";
// fonts
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["700"] });

const Plan = (props) => {
  return (
    <div
      onClick={() => {
        window.open(props.url, "_blank");
      }}
      className={`flex cursor-pointer flex-col ${props.bg} items-center border-2 border-black rounded-lg px-12 py-5 w-[100%] min-h-[40em]`}
    >
      <h1 className="text-3xl font-bold text-center">{props.title}</h1>
      <p className="text-center">{props.desc}</p>
      <h1 className="mt-[1em] text-4xl font-bold">${props.price}</h1>
      <h6 className={`${lato.className} text-sm italic text-black`} style={{fontStyle: "italic"}}>{props.pricingDesc}</h6>
      <hr className="w-48 h-[2px] mx-auto my-4 bg-black border-0 rounded md:my-10 dark:bg-black" />
      <h5 className="self-start uppercase font-bold">What&apos;s Included :</h5>
      <ul className="self-start my-5 style">
        {props.features &&
          props.features.map((feature) => (
            <li
              className={`my-2 ms-2 ${lato.className} text-gray-800 text-md`}
              key={feature}
            >
              - {feature}
            </li>
          ))}
      </ul>
      <a
        href={props.url}
        target="_blank"
        className="uppercase font-bold text-black border-2 border-black py-3 px-12 rounded-lg hover:bg-black hover:text-white transition-all mt-auto"
      >
        Select
      </a>
    </div>
  );
};

export default Plan;
