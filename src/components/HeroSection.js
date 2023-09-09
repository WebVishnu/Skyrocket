"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import RandomShapeAnimation from "./RandomShapeAnimation";
import PercentageCounter from "./PercentageCounter";
// import video from "/video/HeroSection.mp4"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"], weight: ["400"] });

const HeroSection = () => {
  return (
    <div
      className="h-screen  w-screen relative bg-black flex flex-col"
      id="hero-section"
    >
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: "20px" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-full "
      >
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-30"
        >
          <source src={"/video/heroSection.mp4"} type="video/mp4" />
          <source src={"/video/heroSection.avi"} type="video/avi" />
          <source src={"/video/heroSection.flv"} type="video/flv" />
          <source src={"/video/heroSection.mkv"} type="video/mkv" />
          <source src={"/video/heroSection.mov"} type="video/mov" />
          <source src={"/video/heroSection.webm"} type="video/webm" />
          <source src={"/video/heroSection.wmv"} type="video/wmv" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      <div className="flex justify-around items-center h-full pt-[4em] lg:flex-nowrap flex-wrap text-white lg:px-[3em] px-[1.5em]">
        <div>
          {/* <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: "20px" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <Link href="/contact">
              <h2
                className={`mb-5 hover:bg-white hover:text-black transition-all text-[#B4B4B4] px-3 py-2 text-center ${inter.className} rounded-full border border-white inline-block mx-auto`}
              >
                Connnect with Our Team
              </h2>
            </Link>
          </motion.div> */}
          <h1 className="mb-5 md:text-6xl text-4xl text-center">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: "20px" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ ease: "easeOut", delay: 0.2 }}
            >
              We Create{" "}
              <span className="text-[#FF72AC]"> funnel websites <br /> </span> for
               business owners <br />
              {/* <PercentageCounter targetPercentage={1} duration={3000} /> */}
            </motion.div>
          </h1>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: "20px" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ ease: "easeOut", delay: 0.3 }}
            className="text-center"
          >
            <p
              className={`mb-8 md:text-lg text-sm md:max-w-[60%] mx-auto ${inter.className}`}
            >
              We design and develop websites that help you increase your leads,
              conversions, and sales.
            </p>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: "20px" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ ease: "easeOut", delay: 0.4 }}
            className="flex sm:flex-no-wrap flex-wrap justify-center w-full"
          >
            <Link href="#review-section">
              <button className="border-2 border-white md:px-15 px-10 py-3 rounded-lg hover:bg-white hover:text-black transition-all">
                Get Free Audit
              </button>
            </Link>

            <Link href="/contact">
              <button className="md:px-10 px-5 py-3">Place Order</button>
            </Link>
          </motion.div>
        </div>
        {/* <RandomShapeAnimation/> */}
      </div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: "20px" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ ease: "easeOut", delay: 0.3 }}
        id="introduction-section"
        className="w-screen bg-[#FF72AC] flex justify-center py-3 md:visible invisible"
      >
        <span className="mx-12 flex">
          {" "}
          <Image
            src={"/images/tick.svg"}
            alt="image"
            className="mx-2"
            height={20}
            width={20}
          />{" "}
          No&nbsp;hiring&nbsp;headaches
        </span>
        <span className="mx-12 flex">
          {" "}
          <Image
            src={"/images/tick.svg"}
            alt="image"
            className="mx-2"
            height={20}
            width={20}
          />{" "}
          Increased&nbsp;Customer&nbsp;Engagement
        </span>
        <span className="mx-12 flex">
          {" "}
          <Image
            src={"/images/tick.svg"}
            alt="image"
            className="mx-2"
            height={20}
            width={20}
          />{" "}
          On&nbsp;Time&nbsp;Delivery
        </span>
      </motion.div>
    </div>
  );
};

export default HeroSection;
