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
    name: "Logo Designing",
    logo: "cib-adobe-illustrator.svg",
    desc: "We Create a memorable and eye-catching logo that represents your brand"
  },
  {
    name: "Ads Banner Designing",
    logo: "mdi-google-ads.svg",
    desc: "Design effective and engaging ads banners that will help you reach your target audience."
  },
  {
    name: "Social Media Content",
    logo: "heart-in-hand.svg",
    desc: " Create high-quality social media content that will engage your audience."
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
          title="Premium Services, One Place"
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
