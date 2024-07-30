import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute  pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="text-center relative z-20 max-w-3xl p-3 md:p-0">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Your prompt, Our form!
          <strong className="font-extrabold text-black sm:block">
            {" "}
            That&apos;s Customizer.{" "}
          </strong>
        </h1>

        <p className="mt-4 sm:text-lg/relaxed text-gray-400">
          Tired of manual form building? Customizr is your solution. Convert
          your thoughts into forms effortlessly with our AI-driven technology.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
