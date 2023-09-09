"use client";
import React from "react";
import { motion } from "framer-motion";

// fonts
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["700"] });
import { Inter } from "next/font/google";
import Link from "next/link";
import { BsArrowRight, BsClock } from "react-icons/bs";
const inter = Inter({ subsets: ["latin"], weight: ["500"] });

const WhyChooseUs = () => {
  return (
    <div className="max-w-[1000px] xl:w-[1000px] px-[1.5em] ">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: "-10px" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-center w-full my-12">
          <h1 className={`text-3xl text-center`}>
            🤔 Does This Sound Like Your Website?
          </h1>
        </div>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: "-10px" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ delay: 0.2 }}
      >
        <ul>
          <li>
            <span className={`text-[#000] text-2xl`}>
              <span>1. </span>Outdated design:{" "}
            </span>{" "}
            <p className={`${inter.className} ms-6`}>
              Your website looks like it's from the 1990s.
            </p>
          </li>
          <hr className="my-4" />
          <li>
            <span className={`text-[#000] text-2xl`}>
              <span>2. </span>Built with a drag-and-drop website builder:{" "}
            </span>{" "}
            <p className={`${inter.className} ms-6`}>
              It's clear that your website was built with a generic website
              builder, like GoDaddy, Squarespace, Wix, Weebly, Yellowpages, or
              Townsquare.
            </p>
          </li>
          <hr className="my-4" />
          {/* <li>
            <span className={`text-[#000] text-2xl`}>
              <span>3.</span>Embarrassing to show customers:{" "}
            </span>{" "}
            <p className={`${inter.className} ms-6`}>
            You're embarrassed to show your website to potential customers.
            </p>
          </li>
          <hr className="my-4"/> */}
          <li>
            <span className={`text-[#000] text-2xl`}>
              <span>3. </span>Bad content:{" "}
            </span>{" "}
            <p className={`${inter.className} ms-6`}>
              Your content is boring, generic, and doesn't say anything
              different than your competition.
            </p>
          </li>
          <hr className="my-4" />
          {/* <li>
            <span className={`text-[#000] text-2xl`}>
              <span>5.</span>Outdated project photos:{" "}
            </span>{" "}
            <p className={`${inter.className} ms-6`}>
            You haven't updated your project photos in months or even years.
            </p>
          </li>
          <hr className="my-4"/> */}
          <li>
            <span className={`text-[#000] text-2xl`}>
              <span>4. </span>No customer feedback:{" "}
            </span>{" "}
            <p className={`${inter.className} ms-6`}>
              Your customers never mention your website or how helpful it was.
            </p>
          </li>
          <hr className="my-4" />
          <li>
            <span className={`text-[#000] text-2xl`}>
              <span>5. </span>No website traffic data:{" "}
            </span>{" "}
            <p className={`${inter.className} ms-6`}>
              You have no idea how much traffic your website is receiving.
            </p>
          </li>
          <hr className="my-4" />
          <li>
            <span className={`text-[#000] text-2xl`}>
              <span>6. </span>No search engine traffic:{" "}
            </span>{" "}
            <p className={`${inter.className} ms-6`}>
              You have no idea if anyone even finds your website in search
              engines.
            </p>
          </li>
          <hr className="my-4" />
        </ul>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: "-10px" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ delay: 0.2 }}
        className="flex w-full items-center justify-center mt-20 mb-10 pe-5"
      >
        <Link
          href="https://calendly.com/brandoptofficial/30min"
          target="_blank"
        >
          <button
            className={`rounded-lg bg-black transition-all text-white py-3 px-12 text-lg flex items-center whitespace-nowrap`}
          >
            Schedule a Call&nbsp;&nbsp;&nbsp;
            <span className="text-xl">
              <BsClock />
            </span>
          </button>
        </Link>
      </motion.div>

      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: "-10px" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-center flex flex-col items-center w-full my-12">
          <h1 className={`text-3xl`}>
            🎉 Your website can generate better leads
          </h1>
          <p className="mt-4 text-lg">
            A well-designed website can help convert leads into customers by
            providing clear information, using high-quality images and videos,
            using clear and persuasive calls to action, and tracking website
            analytics.
          </p>
          <p className="mt-5 capitalize py-2 text-xl w-fit text-left">
            ✅ Generate better leads <br /> ✅ book more inspections <br /> ✅
            Sell with More Trust
          </p>
        </div>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: "-10px" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ delay: 0.2 }}
        className="flex w-full items-center justify-center mt-18 mb-10 pe-5"
      >
        <Link
          href="https://calendly.com/brandoptofficial/30min"
          target="_blank"
        >
          <button
            className={`rounded-lg bg-black transition-all text-white py-3 px-12 text-lg flex items-center whitespace-nowrap`}
          >
            Schedule a Call&nbsp;&nbsp;&nbsp;
            <span className="text-xl">
              <BsClock />
            </span>
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;
