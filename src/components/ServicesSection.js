import React from "react";
import Image from "next/image";
// fonts
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["700"] });
import { Inter } from "next/font/google";
import SectionHeader from "./SectionHeader";
const inter = Inter({ subsets: ["latin"], weight: ["700"] });

const ServicesSection = () => {
  return (
    <div id="services-section">
      <SectionHeader
        title="Our Services"
        desc="Discover Our Diverse Range of Tailored Identity Services for Every Business"
      />
      <div className="grid md:grid-cols-3 grid-rows-2  pb-12 gap-8">
        <div className="lg:me-5 hover:shadow-[10px_10px_0px_0px_#FF72AC] transition-all cursor-pointer mt-10 border-2 rounded-lg py-5 px-8  border-black">
          <Image
            src={"/images/cib-adobe-illustrator.svg"}
            height={40}
            width={40}
            className="mb-3"
            alt="branded"
          />
          <h1 className={`text-2xl ${inter.className}`}>Logo designing</h1>
          <p
            className={`${lato.className} w-100 mt-2 font-light text-gray-500 text-sm`}
          >
            Create Something Iconic! Elevate Your Brand with Our Expert Logo Designing Services for a Lasting, Unique Impression
          </p>
        </div>
        <div className="lg:me-5 hover:shadow-[10px_10px_0px_0px_#FF72AC] transition-all cursor-pointer mt-10 border-2 rounded-lg py-5 px-8  border-black">
          <Image
            src={"/images/mdi-company.svg"}
            height={40}
            width={40}
            className="mb-3"
            alt="branded"
          />
          <h1 className={`text-2xl ${inter.className}`}>Brand Identity</h1>
          <p
            className={`${lato.className} w-100 mt-2 font-light text-gray-500 text-sm`}
          >
            Unleash Your Brand&apos;s True Essence! Discover Our Awesome Brand Identity Services, Tailored to Captivate and Inspire Your Audience
          </p>
        </div>
        <div className="lg:me-5 hover:shadow-[10px_10px_0px_0px_#FF72AC] transition-all cursor-pointer mt-10 border-2 rounded-lg py-5 px-8  border-black">
          <Image
            src={"/images/mdi-google-ads.svg"}
            height={40}
            width={40}
            className="mb-3"
            alt="branded"
          />
          <h1 className={`text-2xl ${inter.className}`}>Ads Banner</h1>
          <p
            className={`${lato.className} w-100 mt-2 font-light text-gray-500 text-sm`}
          >
            Wow Your Audience! Elevate Your Brand with Our Engaging Ads Banners, Designed to Attract and Convert Your Target Market.
          </p>
        </div>
        <div className="lg:me-5 hover:shadow-[10px_10px_0px_0px_#FF72AC] transition-all cursor-pointer mt-10 border-2 rounded-lg py-5 px-8  border-black">
          <Image
            src={
              "/images/streamline-interface-favorite-give-heart-reward-social-rating-media-heart-hand.svg"
            }
            height={40}
            width={40}
            className="mb-3"
            alt="branded"
          />
          <h1 className={`text-2xl ${inter.className}`}>Social Media Setup</h1>
          <p
            className={`${lato.className} w-100 mt-2 font-light text-gray-500 text-sm`}
          >
             Sit Back and Relax and Let Us Handle Your Social Media Setup, Making Your Brand Shine on All Platforms
          </p>
        </div>
        <div className="lg:me-5 hover:shadow-[10px_10px_0px_0px_#FF72AC] transition-all cursor-pointer mt-10 border-2 rounded-lg py-5 px-8  border-black">
          <Image
            src={"/images/ph-eye-bold.svg"}
            height={40}
            width={40}
            className="mb-3"
            alt="branded"
          />
          <h1 className={`text-2xl ${inter.className}`}>Brand&apos;s Vision</h1>
          <p
            className={`${lato.className} w-100 mt-2 font-light text-gray-500 text-sm`}
          >
            Imagine the Possibilities for Your Brand! With Our Brand Vision Service, We&apos;ll Create a Clear Roadmap to Turn Your Business Dreams into Reality
          </p>
        </div>
        <div className="lg:me-5 hover:shadow-[10px_10px_0px_0px_#FF72AC] transition-all cursor-pointer mt-10 border-2 rounded-lg py-5 px-8  border-black">
          <Image
            src={"/images/asset-management.svg"}
            height={40}
            width={40}
            className="mb-3"
            alt="branded"
          />
          <h1 className={`text-2xl ${inter.className}`}>Corporate Assets</h1>
          <p
            className={`${lato.className} w-100 mt-2 font-light text-gray-500 text-sm`}
          >
            Your All-in-One Brand Solution! Elevate Your Brand with Names, Logos, Taglines, Websites, and More - Unleash Your Full Potential!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
