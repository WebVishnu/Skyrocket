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
        <h2 className="text-2xl font-semibold mb-4">
          Cancellation & Refund Policy
        </h2>
        <p className="mb-4">
          At BrandOPT, we are committed to providing high-quality
          custom funnel-based website design and development services. We value
          your trust and satisfaction with our services. Please take a moment to
          review our Cancellation & Refund Policy.
        </p>

        <h3 className="text-xl font-semibold mb-2">Cancellation</h3>
        <p className="mb-4">
          Once a project has been initiated and the upfront payment of 30% has
          been made, it is considered non-refundable. This upfront payment is
          required to secure our services and initiate the project.
        </p>

        <h3 className="text-xl font-semibold mb-2">Refund</h3>
        <p className="mb-4">
          As mentioned above, the upfront payment of 30% is non-refundable. Once
          this payment has been made, there will be no refunds issued,
          regardless of the project&apos;s status or circumstances.
        </p>

        <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
        <p className="mb-4">
          If you have any questions or concerns about our Cancellation & Refund
          Policy, please don&apos;t hesitate to contact us. We are here to assist you
          and provide clarity on our policies.
        </p>
      </div>
    </motion.div>
  );
};

export default page;
