"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./ui/ScrollReveal";

const content = [
  {
    title: "AI-Powered Form Generation",
    description:
      "Customizr harnesses the power of AI to generate forms based on your specific prompts. Simply describe your requirements, and watch as tailored forms are created instantly, saving you time and effort. This intuitive approach ensures high accuracy and customization to meet your exact needs.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Image 01
      </div>
    ),
  },
  {
    title: "Personalize and Edit Forms Effortlessly",
    description:
      "Customization is key, and our platform offers robust tools to personalize and edit forms with ease. Modify fields, adjust layouts, and tailor the design to reflect your brand’s identity. Our user-friendly interface makes it simple for anyone to create professional, polished forms without needing technical expertise.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        Image 02
      </div>
    ),
  },
  {
    title: "Advanced Theme Customization",
    description:
      "Make your forms stand out with advanced theme customization options. Choose from a variety of pre-designed themes or create your own unique look to match your brand’s aesthetic. Our SaaS provides comprehensive design tools, enabling you to craft visually appealing forms that engage users and enhance user experience.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Image 03
      </div>
    ),
  },
  {
    title: "Seamless Export to Excel",
    description:
      "Customizr simplifies data management by allowing you to export all form responses directly into Excel. This feature ensures easy data analysis and reporting, helping you organize and interpret responses efficiently. With just a few clicks, transform your form data into comprehensive spreadsheets, enhancing productivity and decision-making.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Image 04
      </div>
    ),
  },
];
export default function Features() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
