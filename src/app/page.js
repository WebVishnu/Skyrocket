import IntroductionSection from "@/components/IntroductionSection";
import ServicesSection from "@/components/ServicesSection";
import OurWorkSection from "@/components/OurWorkSection";
import ReviewSection from "@/components/ReviewSection";
import PricingSection from "@/components/PricingSection";
import FAQsection from "@/components/FAQsection";
import Navbar from "@/components/Navbar";

// fonts
import { Inter } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import GetStartedSection from "@/components/GetStartedSection";
import FooterSection from "@/components/FooterSection";

const inter = Inter({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  return (
    <main className={` ${inter.className}  flex items-center flex-col `}>
      <HeroSection/>
      <Navbar />
      <IntroductionSection />
      <ServicesSection />
      {/* <OurWorkSection/> */}
      <ReviewSection />
      <GetStartedSection/>
      {/* <PricingSection/> */}
      <FAQsection />
      <FooterSection/>
    </main>
  );
}
