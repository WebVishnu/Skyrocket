"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import Plan from "./Plan";
import { motion } from "framer-motion";

const PricingSection = () => {
  return (
    <div id="pricing-section" className="max-w-[1400px] xl:w-[1400px] px-[1.5em]">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: "-10px" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ delay: 0.5 }}
        className="mt-28"
      >
        <SectionHeader
          title="Explore Our Pricing Plans"
        />
      </motion.div>
      <div className="grid lg:grid-cols-3 grid-col-1 gap-16 place-items-center py-12">
        <motion.div
        className=" w-[100%]"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: "-10px" }}
          whileInView={{ opacity: 1, y: "0" }}
          transition={{ delay: 0.3 }}
        >
          <Plan
            features={[
              "Logo & Banner",
              "Website Landing Page",
              "Improved SEO",
              "3 Revisions",
              "1 month Free Maintenance"
            ]}
            bg="bg-[#fff]"
            price="1500+"
            pricingDesc="Price May Vary"
            title="Small"
            desc="Best for personal brands"
            url="https://docs.google.com/forms/d/e/1FAIpQLSeLgunSQUUtHQEBkoyyY7EYBcu3X6xBZK8xeAnzwWnpsW49wg/viewform?usp=sf_link"
          />
        </motion.div>
        <motion.div
        className=" w-[100%]"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: "-10px" }}
          whileInView={{ opacity: 1, y: "0" }}
          transition={{ delay: 0.35 }}
        >
        <Plan
          features={[
            "Website + Landing Page",
            "Improved SEO",
            "Brand Identity",
            "Advertising Graphics",
            "5 Revisions",
            "2 month Free Maintenance"
          ]}
          bg="bg-[#FF72AC]"
          price="3000+"
          pricingDesc="Price May Vary"
          title="Medium"
          desc="Best for Ecommerce"
          url="https://docs.google.com/forms/d/e/1FAIpQLSezPMqWWFTao64M-mhm55f4wyad6Yh5wMdQbAXXbmzTndWRnQ/viewform?usp=sf_link"
        /></motion.div>
        <motion.div
        className=" w-[100%]"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: "-10px" }}
          whileInView={{ opacity: 1, y: "0" }}
          transition={{ delay: 0.4 }}
        >
        <Plan
          features={[
            "Website + Landing Page",
            "Improved SEO",
            "Brand Identity",
            "Advertising Graphics",
            "Corporate Assets",
            "Unlimited Revisions",
            "3 month Free Maintenance"
          ]}
          bg="bg-[#fff]"
          price="4500+"
          pricingDesc="Price May Vary"
          title="Large"
          desc="Best for Large Scale Companies"
          url="https://docs.google.com/forms/d/e/1FAIpQLSdm5Nkr616z6E29Gs0eZZfLz_E2Ui3xETI2mASWMZCcmlOq9g/viewform?usp=sf_link"
        /></motion.div>
      </div>
    </div>
  );
};

export default PricingSection;
