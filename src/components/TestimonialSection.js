"use client";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    name: "Samuel",
    quote: "We're getting more positive feedback on our new website, all thanks to their hard work.",
  },
  {
    name: "Khurram",
    quote: "We're so glad we partnered with them. Our website is now getting more leads.",
  },
  {
    name: "Lee Ping",
    quote: "They completed their task quickly and efficiently, no complaints. Happy with the work",
  },
  {
    name: "Brett F",
    quote: "We've gotten so many more leads since they redesigned our website.",
  },
  {
    name: "Alexei",
    quote: "Great audit, very good understanding of our business",
  },
  {
    name: "Ishan",
    quote: "Great work! Will definitely reach out in the future for additional projects",
  },
  // Add more testimonials here
];

const TestimonialSection = () => {
  return (
    <div className="max-w-[1400px] xl:w-[1400px] px-[1.5em]">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: "-10px" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex justify-center w-full my-12">
          <h1 className={`text-3xl text-center`}>
            Our Goal is the help{" "}
            <span className="text-[#FF72AC] md:text-3xl text-2xl">
              Founders&nbsp;and&nbsp;Entrepreneurs
            </span>{" "}
            <br /> Improve their Businesses
          </h1>
        </div>
      </motion.div>
      <div className="flex flex-wrap justify-center">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 + index / 20 }}
            key={index}
            className="hover:shadow-[10px_10px_0px_0px_#FF72AC] m-3 transition-all cursor-pointer border-2 rounded-lg py-5 px-8 md:w-1/3 w-full border-black"
          >
            <h1 className={`text-2xl`}>{testimonial.name}</h1>
            <p className={`w-100 mt-2 font-light text-gray-600 text-lg`}>
              {testimonial.quote}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
