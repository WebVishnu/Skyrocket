"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsDiscord } from "react-icons/bs";
import { motion } from "framer-motion";

// fonts
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["700"] });

const Navbar = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // useEffect(() => {
  //   if (clientWindowHeight > 10) {
  //     $(".nav-divider").css({ width: "200vw", left: "calc(-70vw - 86px)" });
  //     $(".navbar").addClass("bg-black").removeClass("bg-transparent");
  //   } else {
  //     $(".nav-divider").css({ width: "86px", left: "-14px" });
  //     $(".navbar").addClass("bg-transparent").removeClass("bg-black");
  //   }
  // }, [clientWindowHeight]);

  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: "-100px" }}
      whileInView={{ opacity: 1, y: "0" }}
      transition={{ease: "easeOut"}}
      className={`navbar ${lato.className} 2xl:px-[10em] px-[1em] py-[20px] grid grid-cols-3 place-items-center place-content-center  top-0 left-0 fixed w-[100vw] bg-white  z-30 border-b-2 border-[#000]`}
    >
      <div className="place-self-start">
        <a href="#introduction-section">
          <Image src="/images/logo.svg" alt="logo" height={60} width={60} />
        </a>
        {/* <hr className="nav-divider absolute bottom-[-20px] transition-all left-[-14px] w-[86px] h-[2px] bg-white border-0 rounded"></hr> */}
      </div>
      <ul className="text-md flex md:opacity-100 md:visible invisible opacity-0">
        <li className="me-5 hover:text-[#e0015e]">
          <a href="#services-section"> Services</a>
        </li>
        <li className="mx-5 hover:text-[#e0015e]">
          <a href="#pricing-section">Pricing</a>
        </li>
        <li className="mx-5 text-[#e0015e] hover:text-[#000000]">
          <a href="#review-section">Get&nbsp;Free&nbsp;Review</a>
        </li>
      </ul>
      <div className="place-self-end">
        <a href="https://discord.gg/wChjThXyzh" target="_blank">
          <button
            className={`rounded-lg hover:bg-black hover:text-white transition-all bg-transparent py-3 px-5 text-sm flex items-center whitespace-nowrap border-2 border-black`}
          >
            Join Discord&nbsp;&nbsp;&nbsp;
            <span className="text-xl">
              <BsDiscord />
            </span>
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
