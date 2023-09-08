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
        <h2 className="text-2xl font-semibold mb-4">Terms and Services</h2>
        <p className="mb-4">
          Welcome to BrandOPT, your trusted partner in creating custom
          funnel-based websites designed to enhance your customer's conversion
          rates. Please take a moment to review our Terms and Services. By using
          our services, you agree to comply with and be bound by the following
          terms and conditions.
        </p>

        <h3 className="text-xl font-semibold mb-2">1. Services Offered</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <span className="font-bold">Content Generation:</span> Engage your
            audience with compelling and relevant content.
          </li>
          <li>
            <span className="font-bold">UI/UX Designs:</span> Craft visually
            appealing and user-friendly interfaces.
          </li>
          <li>
            <span className="font-bold">
              Custom Funnel Website Development:
            </span>{" "}
            Create tailored websites that guide visitors towards conversion.
          </li>
          <li>
            <span className="font-bold">Unlimited Revisions:</span> We're
            committed to your satisfaction; hence, we offer unlimited revisions
            during the project.
          </li>
          <li>
            <span className="font-bold">Domain and Hosting Connection:</span> We
            facilitate seamless integration with your chosen domain and hosting
            services.
          </li>
          <li>
            <span className="font-bold">1 Month of Free Support:</span> Enjoy a
            month of post-launch support to address any questions or concerns.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          3. Client Responsibilities
        </h3>
        <p className="mb-4">
          We pride ourselves on efficiency. Our typical project timeline is one
          week, ensuring you receive a high-quality, fully functional website
          within a short timeframe.
        </p>
        <h3 className="text-xl font-semibold mb-2">2. Project Timeline</h3>
        <p className="mb-4">
          To ensure the smooth execution of our services, clients are expected
          to provide:
          <ul className="list-disc ml-6 mb-4">
            <li>Prompt and accurate information as requested.</li>
            <li>
              Access to necessary accounts, such as domain and hosting
              credentials.
            </li>
            <li>Clear communication throughout the project.</li>
          </ul>
        </p>
        <h3 className="text-xl font-semibold mb-2">5. Intellectual Property</h3>
        <p className="mb-4">
          Upon completion and final payment, all intellectual property rights
          related to the project, including code, designs, and content, will be
          transferred to the client.
        </p>
        <h3 className="text-xl font-semibold mb-2">6. Confidentiality</h3>
        <p>
          We respect the confidentiality of our clients and their projects. We
          do not share or disclose any sensitive information to third parties.
        </p>

        <h3 className="text-xl font-semibold mb-2">7. Termination</h3>
        <p>
          Either party has the right to terminate the project at any time with
          written notice. Fees for services rendered up to the termination date
          will apply.
        </p>
        <h3 className="text-xl font-semibold mb-2">
          8. Changes to Terms and Services
        </h3>
        <p className="mb-4">
          By engaging our services, you acknowledge that you have read,
          understood, and agreed to these Terms and Services. If you have any
          questions or concerns, please don't hesitate to contact us.
        </p>
        <p className="text-gray-600">
          Thank you for choosing BrandOPT as your partner in achieving online
          success.
        </p>
      </div>
    </motion.div>
  );
};

export default page;
