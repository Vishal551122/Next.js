import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blueviolet"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Dominate the Technology
        </h1>
        <p className="mt-5 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
        Explore our comprehensive technology courses and elevate your tech journey today. Whether you're a beginner or looking to sharpen your skills, join us to unlock your full potential in the world of technology
        </p>
        <div className="mt-4">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <Link href={"/courses"}>Explore Courses</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;