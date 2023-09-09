import IntroductionSection from "@/components/IntroductionSection";
import ServicesSection from "@/components/ServicesSection";
import OurWorkSection from "@/components/OurWorkSection";
import ReviewSection from "@/components/ReviewSection";
import PricingSection from "@/components/PricingSection";
import FAQsection from "@/components/FAQsection";
import Navbar from "@/components/Navbar";
import { HowToWorkSection } from "@/components/HowToWorkSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import GetStartedSection from "@/components/GetStartedSection";

// fonts
import { Inter } from "next/font/google";
import TestimonialSection from "@/components/TestimonialSection";
import JoinDiscordSection from "@/components/JoinDiscordSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CalendlyComponent from "@/components/CalendlyComponent";
const inter = Inter({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  return (
    <main className={` ${inter.className}  flex items-center flex-col `}>
      <HeroSection />
      <WhyChooseUs />
      {/* <HowToWorkSection /> */}
      <ServicesSection />
      <TestimonialSection />
      {/* <IntroductionSection /> */}
      {/* <OurWorkSection/> */}
      <ReviewSection />
      {/* <GetStartedSection /> */}
      {/* <PricingSection/> */}
      {/* <JoinDiscordSection/> */}
      {/* <FAQsection /> */}
      <CalendlyComponent />
      <FooterSection />
    </main>
  );
}
