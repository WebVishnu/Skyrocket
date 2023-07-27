import React from "react";
import SectionHeader from "./SectionHeader";
import Plan from "./Plan";

const PricingSection = () => {
  return (
    <div id="pricing-section">
      <SectionHeader
        title="Our Pricing"
        titleDesc="Business Plans"
        desc="We offer a variety of Services. We offer a variety of Services We offer a variety of Services"
      />
      <div className="grid lg:grid-cols-3 grid-col-1 gap-16 place-items-center py-12">
        <Plan features={["Professional Logo","Professional Banner","Landing Page"]} bg="bg-[#fff]" price="600" pricingDesc="(Price May Vary)" title="Small" desc="Best for personal brands" url="https://docs.google.com/forms/d/e/1FAIpQLSeLgunSQUUtHQEBkoyyY7EYBcu3X6xBZK8xeAnzwWnpsW49wg/viewform?usp=sf_link"/>
        <Plan features={["Professional Logo","Ads Banner","Social Media Setup","Custom Website (5-10 Pages)"]} bg="bg-[#FF72AC]" price="3000" title="Medium" desc="Best for Ecommerce" url="https://docs.google.com/forms/d/e/1FAIpQLSezPMqWWFTao64M-mhm55f4wyad6Yh5wMdQbAXXbmzTndWRnQ/viewform?usp=sf_link"/>
        <Plan features={["Brand Identity","Brand Vision","Professional Logo","Ads Banner","Social Media Setup","Custom Website (10+ Pages)"]} bg="bg-[#fff]" price="8000" title="Large" desc="Best for Large Scale Companies" url="https://docs.google.com/forms/d/e/1FAIpQLSdm5Nkr616z6E29Gs0eZZfLz_E2Ui3xETI2mASWMZCcmlOq9g/viewform?usp=sf_link"/>
      </div>
    </div>
  );
};

export default PricingSection;
