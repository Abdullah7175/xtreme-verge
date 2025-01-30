"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react"; // Using Lucide Icons (or replace with an SVG)

const DownArrow = () => {
  const arrowRef = useRef(null);

  useEffect(() => {
    gsap.to(arrowRef.current, {
      y: 40, // Move down
      repeat: -1, // Infinite loop
      yoyo: true, // Reverse the animation
      duration: 1, // Animation duration
      ease: "power3.inOut",
    });
  }, []);

  return (
    <div className="max-w-[90%] flex justify-end items-center relative">
    <div className="rounded-full border border-slate-400 absolute top-40">
    <ChevronDown 
        ref={arrowRef} 
        size={50} 
        className="animate-bounce cursor-pointer" 
      />
    </div>
    </div>
  );
};

export default DownArrow;
