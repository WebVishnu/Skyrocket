import React from "react";
import SectionHeader from "./SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQsection = () => {
  return (
    <div>
      <SectionHeader
        title="FAQs"
      />
      <div className="md:max-w-[50vw] max-w-[90vw] w-[100vw] mx-auto py-12">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What kind of services does BrandOPT offer?</AccordionTrigger>
            <AccordionContent>
            BrandOPT offers a range of services to enhance your brand's visual presence, including brand identity development, logo design, banner design, and business card design.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How does BrandOPT approach brand identity development?</AccordionTrigger>
            <AccordionContent>
            BrandOPT takes a personalized approach, working closely with you to understand your brand's essence, values, and objectives. We craft customized solutions that align with your brand's identity and resonate with your target audience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can BrandOPT create a logo that represents my brand's personality?</AccordionTrigger>
            <AccordionContent>
            Absolutely! Our talented designers specialize in creating logos that capture the essence of a brand. By understanding your brand's personality and target audience, we can design a logo that truly reflects your brand's identity.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can BrandOPT design banners for specific platforms or campaigns?</AccordionTrigger>
            <AccordionContent>
            Yes! Our creative team can design banners for various platforms, including websites, social media, and advertising campaigns. We ensure that the banners effectively communicate your message and captivate your audience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How does BrandOPT ensure timely delivery of services?</AccordionTrigger>
            <AccordionContent>
            Timely delivery is a priority for us. We value your time and understand the importance of meeting deadlines. Our team is committed to delivering high-quality results within the agreed-upon timelines.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>What sets BrandOPT apart from other brand optimization services?</AccordionTrigger>
            <AccordionContent>
            BrandOPT stands out with its commitment to excellence, attention to detail, and personalized approach. We strive to exceed expectations, build long-term partnerships, and provide exceptional support for your brand's success.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>How can I get started with BrandOPT's services?</AccordionTrigger>
            <AccordionContent>
            Getting started is easy! Simply reach out to us through our website, email, or Discord. We'll be happy to discuss your requirements, provide a quote, and guide you through the process of transforming your brand's visual presence.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQsection;
