"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsClock, BsDiscord } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

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

  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: "-10px" }}
      whileInView={{ opacity: 1, y: "0" }}
      transition={{ ease: "easeOut" }}
      style={{ backgroundColor: "#fff" }}
      className={`navbar ${lato.className} 2xl:px-[10em] px-[1em] py-[10px] grid grid-cols-3 place-items-center place-content-center  top-0 left-0 fixed w-[100vw] bg-black  z-30 border-b-2 border-[#000]`}
    >
      <div className="place-self-start">
        <Link href="/">
          <Image src="/images/logo.svg" alt="logo" height={40} width={40} />
        </Link>
        {/* <hr className="nav-divider absolute bottom-[-20px] transition-all left-[-14px] w-[86px] h-[2px] bg-white border-0 rounded"></hr> */}
      </div>
      <ul className="text-md flex md:opacity-100 md:visible invisible opacity-0">
        <li className="me-5 hover:text-[#e0015e]">
          <Link href="/"> Home</Link>
        </li>
        <li className="mx-5 hover:text-[#e0015e]">
          <Link href="/#services-section">Services</Link>
        </li>
        <li className="mx-5 hover:text-[#e0015e]">
          <Link href="/#review-section">Free Audit</Link>
        </li>
        <li className="mx-5 text-[#e0015e] hover:text-[#000000]">
          <Link href="/contact">Place&nbsp;Order</Link>
        </li>
      </ul>
      <div className="place-self-end justify-self-end">
        <Link href="https://calendly.com/brandoptofficial/30min" target="_blank">
          <button
            className={`rounded-lg border-2 border-black hover:bg-black transition-all hover:text-white py-2 px-8 text-lg flex items-center whitespace-nowrap`}
          >
            Schedule a Call&nbsp;&nbsp;&nbsp;
            <span className="text-xl">
              <BsClock />
            </span>
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
