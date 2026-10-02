"use client"
import React, { useEffect } from "react";

const CalendlyEmbed = () => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head?.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/karan-ascendly/30min"
      style={{ minHeight: "650px", width: "100%" }}
    />
  );
};

export default CalendlyEmbed;