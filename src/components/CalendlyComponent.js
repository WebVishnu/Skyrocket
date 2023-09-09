"use client";
import React, { useEffect } from "react";
import Script from "next/script";
import SectionHeader from "./SectionHeader";

const CalendlyComponent = () => {
  return (
    <>
      <div id="calendly-widget-container"></div>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
    </>
  );
};

export default CalendlyComponent;
