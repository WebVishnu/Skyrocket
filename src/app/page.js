import Image from "next/image";

// fonts
import { Inter } from "next/font/google";
import IntroductionSection from "@/components/IntroductionSection";
import ServicesSection from "@/components/ServicesSection";
import OurWorkSection from "@/components/OurWorkSection";
import ReviewSection from "@/components/ReviewSection";
import PricingSection from "@/components/PricingSection";
import FAQsection from "@/components/FAQsection";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ['latin'] , weight:['700'] });

export default function Home() {
  return (
    <main className={` ${inter.className}`}>
      {/* <div className="h-screen w-screen relative bg-black">
        <Image
          src={"/images/hero image.svg"}
          height={200}
          width={200}
          alt="rocket"
          className="w-[100%] absolute lg:bottom-[-10em] bottom-0 opacity-50"
        />
        <div className="absolute lg:top-36 md:top-20 top-32 lg:left-10 md:left-20 left-4 flex flex-col items-end">
          <Image
            src={"/images/skyrocket-your-business-with-us-text.svg"}
            height={500}
            width={500}
            alt="rocket"
            className="lg:h-auto lg:w-auto h-[23em] w-[23em]"
          />
          <button className="rounded-lg bg-white px-[7em] py-2 mt-7">How ?</button>
        </div>
      </div> */}
      <Navbar/>
      <IntroductionSection/>
      <ServicesSection/>
      {/* <OurWorkSection/> */}
      <ReviewSection/>
      <PricingSection/>
      <FAQsection/>
    </main>
  );
}
