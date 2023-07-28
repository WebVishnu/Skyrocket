"use client"
import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { motion } from "framer-motion";
// fonts
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["700", "900"] });
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["700"] });

const ReviewSection = () => {
  return (
    <div className={`${lato.className}`} id="review-section">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: "-10px" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{delay:0.2}}
      >
        <SectionHeader title="Need Review" />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: "-10px" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{delay:0.3}}
      >
      <div className="flex md:flex-row items-center justify-between flex-wrap flex-col-reverse">
        <Image
          src={"/images/review-img.svg"}
          className="w-auto h-auto"
          height={300}
          width={300}
          alt="review"
        />
        <div className="md:w-1/2 md:mb-0 mb-12">
          <h1 className="text-3xl" style={{ fontWeight: "900" }}>
            Get a free review for your website in 24Hrs
          </h1>
          <p className="text-gray-500 text-light">
            Unlock Your Website&apos;s Potential with a FREE Expert Review!
          </p>

          <ul>
            <li className="text-gray-700 flex my-2">
              <Image
                src={"/images/tick.svg"}
                height={15}
                width={15}
                alt="review"
                className="me-3"
              />
              Enhance User Experience and Design
            </li>
            <li className="text-gray-700 flex my-2">
              <Image
                src={"/images/tick.svg"}
                height={15}
                width={15}
                alt="review"
                className="me-3"
              />
              Boost Conversion Rates with Our Review
            </li>
            <li className="text-gray-700 flex my-2">
              <Image
                src={"/images/tick.svg"}
                height={15}
                width={15}
                alt="review"
                className="me-3"
              />
              Drive Success with Expert Analysis
            </li>

            <li className="text-gray-700 flex my-2">
              <Image
                src={"/images/tick.svg"}
                height={15}
                width={15}
                alt="review"
                className="me-3"
              />
              Actionable Feedback and Insights
            </li>
          </ul>
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfxMjnLKC8R2IHZquJog2sML34XlHlA2FDnbmNfEoNyxyvgGw/viewform?usp=sf_link"
          >
            <button className="px-8 py-3 border-2 border-black rounded-lg mt-8 hover:bg-black hover:text-white transition-all">
              Get a free review now
            </button>
          </a>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default ReviewSection;
