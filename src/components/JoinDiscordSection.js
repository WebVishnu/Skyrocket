"use client";
import React from "react";
import { motion } from "framer-motion";
import { BsDiscord } from "react-icons/bs";

const JoinDiscordSection = () => {
  return (
    <div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: "-10px" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ delay: 0.5 }}
        className=" w-full my-12"
      >
        <h1 className={`text-5xl text-center`}>
          Join Our <span className="text-[#FF72AC]">Community</span>
        </h1>
        <h1 className="text-2xl text-center px-4">
          <br /> Join our Discord Server to Explore more Plans
        </h1>
        <a href="https://discord.gg/k43uEbHzbA" target="_blank">
          <button
            className={`mx-auto rounded-lg hover:bg-black hover:text-white mt-12 transition-all bg-transparent md:py-3 py-2 md:px-12 px-8 text-2xl flex items-center whitespace-nowrap border-2 border-black`}
          >
            Join Discord&nbsp;&nbsp;&nbsp;
            <span className="text-xl">
              <BsDiscord />
            </span>
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default JoinDiscordSection;
