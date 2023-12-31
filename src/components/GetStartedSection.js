"use client";
import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import axios from "axios";
import $ from "jquery";
import { BsFacebook, BsInstagram, BsLinkedin, BsTelegram, BsTwitter } from "react-icons/bs";
import Link from "next/link";
// fonts
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["700", "900"] });
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["600"] });

// Schema for form validation
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  budget: yup.string(),
  category: yup.string(),
  companyName: yup.string(),
  description: yup.string().required("Description name is required"),
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
      $(".submitBtn").html("Please wait...").attr("type", "button");
      axios
        .post(`/api/contact`, {
          Name: data.name,
          Email: data.email,
          Phone: data.phone,
          Budget: "",
          Category: "",
          CompanyName: "",
          Description: data.description,
        })
        .then((res) => {
          $(".form").addClass("hidden");
          $(".video-div").removeClass("hidden").addClass("flex flex-col items-center justify-center");
          $(".video").trigger("play");
          reset();
        })
        .catch((e) => {
          $(".form").addClass("hidden");
          $(".video-div").removeClass("hidden").addClass("flex flex-col items-center justify-center");
          $(".video").trigger("play")
          reset();
          console.log(e);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div
      className={`${inter.className} ${lato.className}  max-w-[1400px] xl:w-[1400px] px-[1.5em] mt-28`}
    >
      <div className="hidden  justify-center video-div">
        <video muted className="video user-select-none h-[19rem] w-96">
          <source src={"/video/formSubmitted.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Link href="/" className={`${inter.className} cursor-pointer my-2 border-2 text-center hover:bg-[#f35d9c] transition-all  border-black bg-[#FF72AC] rounded-md py-3 px-5 text-[#000]`}>
          Back to Home
        </Link>
      </div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: "-50px" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className=" flex justify-between form lg:flex-nowrap flex-wrap"
      >
        <div>
          <h1 className="text-7xl">
            Let&apos;s Work <br /> Together
          </h1>
          <p className="lg:w-1/2 mt-5">
            We&apos;re excited to hear from you and learn more about how we can help you with your business needs. Contact us today to get started.
          </p>
          <div className="flex lg:flex-col flex-row lg:items-start items-center lg:my-0 my-5">
            <h6 className=" lg:mt-5 lg:mb-3">Connect with us:</h6>
            <p className="flex justify-between w-32 lg:ms-0 ms-3">
              {" "}
              <a target="_blank" href="https://twitter.com/realbrandopt"><BsTwitter className="cursor-pointer hover:text-[#FF72AC] text-xl transition-all " /></a>
              <a target="_blank" href="https://www.instagram.com/brandoptreal"> <BsInstagram className="cursor-pointer hover:text-[#FF72AC] text-xl transition-all " /></a>
              <a target="_blank" href="https://www.facebook.com/vishnu.g05"> <BsFacebook className="cursor-pointer hover:text-[#FF72AC] text-xl transition-all " /></a>
              <a target="_blank" href="https://t.me/vishnu_g04"> <BsTelegram className="cursor-pointer hover:text-[#FF72AC] text-xl transition-all " /></a>
            </p>
          </div>
        </div>
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
            name="phone"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="text"
                className={`${inter.className} my-2 border-2  border-black w-full rounded-md py-3 px-5 text-[#7e7e7e]`}
                placeholder="Mobile"
                {...field}
              />
            )}
          />
          {errors.phone && (
            <span className="text-red-700">{errors.phone.message}</span>
          )}
          {/* <Controller
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
          )} */}
          {/* <Controller
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
          )} */}
          {/* <Controller
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
          )} */}
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <textarea
                className={`${inter.className} my-2 border-2  border-black w-full rounded-md py-3 px-5 text-[#7e7e7e]`}
                rows={4}
                placeholder="Describe your project"
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
      <div></div>
    </div >
  );
};

export default GetStartedSection;
