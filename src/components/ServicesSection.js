"use client"
import React from "react";
import { motion } from "framer-motion"
import Image from "next/image";
import {SiMaterialdesignicons} from "react-icons/si"
// fonts
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["700"] });
import { Inter } from "next/font/google";
import SectionHeader from "./SectionHeader";
const inter = Inter({ subsets: ["latin"], weight: ["700"] });

const services = [
  {
    name: "Website Development",
    logo: "asset-management.svg",
    desc: "Get a professional and user-friendly website that will help you grow your business."
  },
  {
    name: "UI/UX Designing",
    logo: "design.svg",
    desc: "We Design intuitive and user-friendly interfaces that will make your website or app easy to use."
  },
  {
    name: "SEO Optimization",
    logo: "ph-eye-bold.svg",
    desc: "Improve your website's search engine ranking so that more people can find you online."
  },
  {
    name: "Content & Copywriting",
    logo: "lucide-pencil-line.svg",
    desc: "We'll write content and copy for up to 20 pages, including your website's core pages."
  },
  {
    name: "Google Analytics ",
    logo: "mdi-google-ads.svg",
    desc: "We'll set up Google Analytics for you so you can track your website traffic."
  },
  {
    name: "Google Business Setup",
    logo: "heart-in-hand.svg",
    desc: "We'll set up and optimize your Google My Business listing, complete with all details."
  },
]


const ServicesSection = () => {
  return (
    <div id="services-section" className="max-w-[1400px] px-[1.5em]">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: "-10px" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ delay: 0.2 }}
        className="mt-28"
      >
        <SectionHeader
          title="Everything You Need"
        />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: "-10px" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ delay: 0.3 }}
      >
        <div className="grid md:grid-cols-3 grid-rows-2  pb-12 gap-8">
          {services.map((service,index) => {
            return <div key={index} className="lg:me-5 hover:shadow-[10px_10px_0px_0px_#FF72AC] transition-all cursor-pointer mt-10 border-2 rounded-lg py-5 px-8  border-black">
              <Image
                src={`/images/${service.logo}`}
                height={40}
                width={40}
                className="mb-3"
                alt="branded"
              />
              <h1 className={`text-2xl ${inter.className}`}>{service.name}</h1>
              <p
                className={`${lato.className} w-100 mt-2 font-light text-gray-900 text-md`}
              >
               {service.desc}
              </p>
            </div>
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesSection;
