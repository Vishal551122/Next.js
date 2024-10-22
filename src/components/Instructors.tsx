"use client";
import React from "react";

import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
  {
    id: 1,
    name: "Vishal Chaudhary",
    designation: "MERN Developer",
    image: "https://images.unsplash.com/photo-1728018784189-367661af8d22?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
     
  },
  {
    id: 2,
    name: "Shivam Saini",
    designation: "DevOps Expert",
    image:
      "https://images.unsplash.com/photo-1728017680050-27a7c62c2bf9?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Sahil Patyal",
    designation: "Python Developer",
    image:
      "https://images.unsplash.com/photo-1728017613750-425fa234d466?q=80&w=1983&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Satyam Barnwal",
    designation: "Angular Expert",
    image:
      "https://images.unsplash.com/photo-1727892510478-c98eac8bdb5d?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Saurabh Lodhi",
    designation: "C# Instructor",
    image: "https://images.unsplash.com/photo-1727894138930-97a4a3634d97?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Taranpreet Sidhana",
    designation: "DSA Expert",
    image: "https://images.unsplash.com/photo-1727893079634-ffd34cf5ba64?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
 
  {
    id: 7,
    name: "Vishal Barnwal",
    designation: "Php Developer",
    image: "https://images.unsplash.com/photo-1728017841704-66610ecc773a?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  
];

function Instructors() {
  return (
  
  
 <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto pb-40 flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
        Discover the talented professionals who will guide your journey in mastering technology.
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;