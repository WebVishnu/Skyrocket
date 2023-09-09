"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import $ from "jquery";

// fonts
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["700", "900"] });
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["700"] });

// Schema for form validation
const schema = yup.object().shape({
  website: yup.string().required("Please enter your website"),
});

const ReviewSection = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // handling sign in
  const submitAudit = async (data) => {
    try {
      $(".submitBtn").html("Please wait...").attr("type", "button");
      axios
        .post(`/api/audit`, {
          website: data.website,
        })
        .then((res) => {
          console.log(res);
          $(".submitBtn").html("Submit").attr("type", "submit");
          reset();
        })
        .catch((e) => {
          reset();
          console.log(e);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div
      className={`${lato.className} max-w-[1400px] xl:w-[1400px] px-[1.5em] mt-20`}
      id="review-section"
    >
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: "-10px" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ delay: 0.2 }}
      >
        <SectionHeader title="Is Your Website Due Update?" />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: "-10px" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex lg:flex-row items-center justify-between lg:flex-nowrap flex-wrap flex-col-reverse">
          <Image
            src={"/images/review-img.svg"}
            className="w-auto h-auto"
            height={300}
            width={300}
            alt="review"
          />
          <div className="md:w-1/1 md:mb-0 mb-12">
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
            <form
              onSubmit={handleSubmit(submitAudit)}
              className="flex items-center justify-start relative mt-7"
            >
              <Controller
                name="website"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="www.yoursite.com"
                    className="border border-black py-4 px-5 pe-36 rounded-lg w-full"
                    {...field}
                  />
                )}
              />
              {errors.website && (
                <span className="text-red-700">{errors.website.message}</span>
              )}
              <button className="submitBtn px-8 py-2 border-2 border-black rounded-lg absolute right-2 hover:bg-black hover:text-white transition-all">
                Submit
              </button>
            </form>
          </div>
        </div>
      </motion.div>
      <div
        class="calendly-inline-widget"
        data-url="https://calendly.com/brandoptofficial/30min"
        style={{ height: "700px", minWidth: "320px" }}
      ></div>
    </div>
  );
};

export default ReviewSection;
