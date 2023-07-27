import React from "react";
// fonts
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["700"] });


const Plan = (props) => {
  return (
    <div className={`flex flex-col ${props.bg} items-center border-2 border-black rounded-lg px-12 py-10 w-[100%] h-[40em]`}>
      <h1 className="text-2xl font-bold">{props.title}</h1>
      <p className="text-center">{props.desc}</p>
      <h1 className="mt-[2em] text-4xl font-bold">${props.price}</h1>
      <h6 className="uppercase font-bold text-black">{props.pricingDesc}</h6>
      <hr className="w-48 h-[2px] mx-auto my-4 bg-black border-0 rounded md:my-10 dark:bg-black" />
      <h5 className="self-start uppercase font-bold">What&apos;s Included :</h5>
      <ul className="self-start my-5">
        {props.features && props.features.map((feature) => (
          <li className={`my-2 ${lato.className} text-gray-800`} key={feature}>{feature}</li>
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
