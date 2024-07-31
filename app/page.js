import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto max-w-7xl min-h-screen">
      <Hero />
      <Features />
    </div>
  );
};

export default page;
