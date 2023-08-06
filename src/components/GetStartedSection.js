"use client";
import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import axios from "axios";
import $ from "jquery";
// fonts
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["700", "900"] });
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"], weight: ["600"] });

// Schema for form validation
const schema = yup.object().shape({
  name: yup.string().required("name is required"),
  email: yup.string().required("email is required"),
  budget: yup.string(),
  category: yup.string().required("Please Select Category"),
  companyName: yup.string().required("company name is required"),
  description: yup.string().required("description name is required"),
});

const GetStartedSection = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // handling sign in
  const contactUs = async (data) => {
    try {
      // console.log(`${(hostname == "localhost")?`http://localhost:3000`:`https://${hostname}`}/api/contact`)
      $(".submitBtn").html("Please wait...").attr("type", "button");
      axios
        .post(`https:/brandopt.in/api/contact`, {
          Name: data.name,
          Email: data.email,
          Budget: data.budget,
          Category: data.category,
          CompanyName: data.companyName,
          Description: data.description,
        })
        .then((res) => {
          $(".submitBtn").html("Send us a Message").attr("type", "submit");
          reset()
        })
        .catch((e) => {
          $(".submitBtn").html("Send us a Message").attr("type", "submit");
          reset()
          console.log(e);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div
      className={`${inter.className} ${lato.className}  max-w-[1400px] xl:w-[1400px] px-[1.5em]`}
    >
      <SectionHeader
        title="Get Started"
      />
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: "20px" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ ease: "easeOut" }}
        className=" flex justify-center"
      >
        <form
          onSubmit={handleSubmit(contactUs)}
          className="max-w-[700px] xl:w-[700px] px-[.5em]"
        >
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="text"
                className={`${inter.className} my-2 border-2  border-black w-full rounded-md py-3 px-5 text-[#7e7e7e]`}
                placeholder="Name"
                {...field}
              />
            )}
          />
          {errors.name && (
            <span className="text-red-700">{errors.name.message}</span>
          )}
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="text"
                className={`${inter.className} my-2 border-2  border-black w-full rounded-md py-3 px-5 text-[#7e7e7e]`}
                placeholder="Email"
                {...field}
              />
            )}
          />
          {errors.email && (
            <span className="text-red-700">{errors.email.message}</span>
          )}
          <Controller
            name="budget"
            control={control}
            defaultValue="null"
            render={({ field }) => (
              <select
                className=" my-2 border-2 border-black w-full rounded-md py-3 px-5 text-[#7e7e7e]"
                {...field}
              >
                <option value="Null">Budget (Optional)</option>
                <option value="1000">Less than $1,000</option>
                <option value="$1000 - $5000">$1,000 - $5,000</option>
                <option value="$5000 - $1000">$5,000 - $10,000</option>
                <option value="$10000 - $20000">$10,000 - $20,000</option>
                <option value="$20,000 +">$20,000 +</option>
              </select>
            )}
          />
          {errors.budget && (
            <span className="text-red-700">{errors.budget.message}</span>
          )}
          <Controller
            name="category"
            control={control}
            defaultValue="Start a new Brand"
            render={({ field }) => (
              <select
                className=" my-2 border-2 border-black w-full rounded-md py-3 px-5 text-[#7e7e7e]"
                {...field}
              >
                <option value="Start a new Brand">Start a new Brand</option>
                <option value="Optimise my brand">Optimise my brand</option>
              </select>
            )}
          />
          {errors.category && (
            <span className="text-red-700">{errors.category.message}</span>
          )}
          <Controller
            name="companyName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="text"
                className={`${inter.className} my-2 border-2  border-black w-full rounded-md py-3 px-5 text-[#7e7e7e]`}
                placeholder="Company name"
                {...field}
              />
            )}
          />
          {errors.companyName && (
            <span className="text-red-700">{errors.companyName.message}</span>
          )}
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <textarea
                className={`${inter.className} my-2 border-2  border-black w-full rounded-md py-3 px-5 text-[#7e7e7e]`}
                rows={4}
                placeholder="Type your text here..."
                {...field}
              />
            )}
          />
          {errors.description && (
            <span className="text-red-700">{errors.description.message}</span>
          )}
          <button
            type="submit"
            className={`${inter.className} submitBtn my-2 border-2 hover:bg-[#f35d9c] transition-all  border-black bg-[#FF72AC] w-full rounded-md py-3 px-5 text-[#000]`}
          >
            Send Us a message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default GetStartedSection;
