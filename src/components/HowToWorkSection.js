"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { delay, motion } from "framer-motion";

import { Inter, Lato } from "next/font/google";
import {  BsPlus } from "react-icons/bs";
import {  FaEquals } from "react-icons/fa";
const inter = Inter({ subsets: ["latin"], weight: ["600"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });

export const HowToWorkSection = () => {
  return (
    <div className="my-[5em] max-w-[1400px] xl:w-[1400px] px-[1.5em]">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: "-10px" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ delay: 0.2 }}
      >
        <SectionHeader title="Level Up your Business" />
      </motion.div>

      <div className="flex items-center md:flex-nowrap flex-wrap">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="hover:shadow-[10px_10px_0px_0px_#FF72AC] md:mb-0 mb-5 transition-all cursor-pointer border-2 rounded-lg py-5 px-8 w-full border-black"
        >
          <span className="flex items-center mb-5">Step 1</span>
          <h1 className={`text-4xl ${inter.className}`}>Your Business</h1>
          <p
            className={`${lato.className} w-100 mt-2 font-light text-gray-600 text-lg`}
          >
            Pick the perfect package to match your project&apos;s needs!
          </p>
        </motion.div>
        <BsPlus className="text-8xl m-3 md:w-auto w-full"/>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="hover:shadow-[10px_10px_0px_0px_#FF72AC] md:mb-0 mb-5 transition-all cursor-pointer border-2 rounded-lg py-5 px-8 w-full border-black"
        >
          <span className="flex items-center mb-5">Step 2</span>
          <h1 className={`text-4xl ${inter.className}`}>BrandOPT</h1>
          <p
            className={`${lato.className} w-100 mt-2 font-light text-gray-600 text-lg`}
          >
            Tell us more about what products or services you offer to your
            clients.
          </p>
        </motion.div>
        <FaEquals className="text-5xl m-3 md:w-auto w-full"/>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="hover:shadow-[10px_10px_0px_0px_#FF72AC] md:mb-0 mb-5 transition-all cursor-pointer border-2 rounded-lg py-5 px-8 w-full border-black"
        >
          <span className="flex items-center mb-5">Step 3</span>
          <h1 className={`text-4xl ${inter.className}`}>Brand</h1>
          <p
            className={`${lato.className} w-100 mt-2 font-light text-gray-600 text-lg`}
          >
            Receive your work within 5 days turnaround time with the option for
            iterations.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
