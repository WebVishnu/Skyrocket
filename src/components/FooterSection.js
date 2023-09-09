import React from "react";
import {
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsFacebook,
  BsMailbox,
  BsEnvelope,
  BsPhone,
  BsTelephonePlus,
  BsTelegram,
} from "react-icons/bs";
import Link from "next/link";

// fonts
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["700", "900"] });
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["600"] });

const FooterSection = () => {
  return (
    <div className="w-screen text-center md:justify-between justify-start bg-[#FF72AC] pt-8 pb-12 2xl:px-60 lg:px-24 px-8 border-t-2 border-[#000] flex flex-wrap">
      <div className="text-left my-5">
        <h1 className="text-3xl my-3">BrandOPT</h1>
        <p
          className={`${inter.className} xl:max-w-md max-w-[15rem] text-md mb-7`}
        >
          We help businesses grow by creating funnel-based websites that convert
          visitors into leads and customers.
        </p>
        <span className="flex items-center text-xl">
          <a href="https://twitter.com/realbrandopt" target="_blank">
            <BsTwitter />
          </a>{" "}
          <a target="_blank" href="https://www.instagram.com/brandoptreal">
            {" "}
            <BsInstagram className="ms-5" />
          </a>{" "}
          <a
            href="https://www.facebook.com/profile.php?id=61550127535038"
            target="_blank"
          >
            <BsFacebook className="ms-5" />
          </a>
        </span>
      </div>
      <div className="flex flex-wrap">
        <div className="md:mx-5 my-5">
          <h1 className="text-xl my-3 text-left">Policy Pages</h1>
          <ul className={`${inter.className}`}>
            <li className="flex items-center my-1 text-lg">
              {" "}
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="flex items-center my-1 text-lg">
              {" "}
              <Link href="/terms-and-services">Terms and conditions</Link>
            </li>
            <li className="flex items-center my-1 text-lg">
              {" "}
              <Link href="/cancellation"> Cancellation Policy</Link>
            </li>
          </ul>
        </div>
        <div className="md:mx-5 my-5">
          <h1 className="text-xl my-3 text-left">Contact</h1>
          <ul className={`${inter.className}`}>
            <li className="flex items-center my-1 text-lg ">
              <BsEnvelope className="me-3" /> contact@brandopt.in
            </li>
            {/* <li className="flex items-center my-3">
              <BsTelephonePlus className="me-3" /> +91 7500673358
            </li> */}
            <li className="flex items-center my-1 text-lg ">
              <BsTelegram className="me-3" />
              <a href="https://t.me/vishnu_g04" target="_blank">
                @vishnu_g04
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <h1 className="text-3xl my-3">BrandOPT.in</h1>
      <p className="max-w-xl leading-7 mb-7 text-xl">
        We help businesses grow by creating funnel-based websites that convert
        visitors into leads and customers. Our team of experienced professionals
        is dedicated to helping you achieve your business goal
      </p>
      <span className="flex items-center mb-8 text-xl">
        <a href="https://twitter.com/realbrandopt" target="_blank">
          <BsTwitter className="ms-5" />
        </a>{" "}
        <a target="_blank" href="https://www.instagram.com/brandoptreal">
          {" "}
          <BsInstagram className="ms-5" />
        </a>{" "}
        <a
          target="_blank"
          href="https://www.linkedin.com/company/brand-optimizer"
        >
          <BsLinkedin className="ms-5" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61550127535038"
          target="_blank"
        >
          <BsFacebook className="ms-5" />
        </a>
      </span>
      <span className="text-xl">contact@brandopt.in</span> */}
      {/* <span className='flex items-center'>Follow Us  <a href="https://twitter.com/realbrandopt" target="_blank"><BsTwitter className='ms-5'/></a> <a target="_blank" href="https://www.instagram.com/brandoptreal"> <BsInstagram className='ms-5'/></a> <a target="_blank"  href="https://www.linkedin.com/company/brand-optimizer"><BsLinkedin  className='ms-5'/></a><a href="https://www.facebook.com/profile.php?id=61550127535038" target="_blank"><BsFacebook className='ms-5'/></a></span>
        <span  className='flex items-center'>contact@brandopt.in</span> */}
    </div>
  );
};

export default FooterSection;
