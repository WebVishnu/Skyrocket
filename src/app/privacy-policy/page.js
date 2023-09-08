"use client";
import React from "react";
import { motion } from "framer-motion";
const page = () => {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: "-10px" }}
      whileInView={{ opacity: 1, y: "0" }}
      transition={{ ease: "easeOut" }}
      className="min-h-screen py-12 mt-12"
    >
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
        <p className="mb-4">
          At BrandOPT, we are committed to protecting your privacy and
          ensuring the security of your personal information. This Privacy
          Policy outlines how we collect, use, and protect your data when you
          use our services.
        </p>

        <h3 className="text-xl font-semibold mb-2">Information We Collect</h3>
        <p className="mb-4">
          We may collect various types of information, including but not limited
          to:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Contact information, such as your name and email address.</li>
          <li>
            Information related to your website project, including project
            details and requirements.
          </li>
          <li>
            Technical information, such as your IP address and browser type,
            when you visit our website.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          How We Use Your Information
        </h3>
        <p className="mb-4">
          We use the information we collect for various purposes, including:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Communicating with you about your project and our services.</li>
          <li>Providing you with a personalized experience on our website.</li>
          <li>Improving our services and website functionality.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Data Security</h3>
        <p className="mb-4">
          We take data security seriously and implement industry-standard
          measures to protect your information from unauthorized access,
          disclosure, alteration, or destruction.
        </p>

        <h3 className="text-xl font-semibold mb-2">Your Rights</h3>
        <p className="mb-4">
          You have the right to access, correct, or delete your personal
          information at any time. If you have any concerns or requests
          regarding your data, please contact us.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          Changes to Our Privacy Policy
        </h3>
        <p className="mb-4">
          We may update this Privacy Policy to reflect changes in our practices
          or legal requirements. Any updates will be posted on this page.
        </p>

        <p className="mb-4">
          By using our services, you consent to the terms outlined in this
          Privacy Policy. If you have any questions or concerns, please don&apos;t
          hesitate to contact us.
        </p>
      </div>
    </motion.div>
  );
};

export default page;
