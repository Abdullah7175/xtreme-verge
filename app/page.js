"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loaderTimeline = gsap.timeline({
      onComplete: () => setLoading(false),
    });
  
    loaderTimeline
      .fromTo(
        ".loader",
        { scaleY: 0, transformOrigin: "50% 100%" },
        {
          scaleY: 1,
          duration: 1.8,
          ease: "power2.inOut",
        }
      )
      .to(".loader", {
        scaleY: 0,
        transformOrigin: "0% -100%",
        duration: 1.8,
        ease: "power2.inOut",
      })
      .to(".wrapper", { y: "-100%", ease: "power4.inOut", duration: 1.5 }, "-=1.2");
  
    const textWrapper = document.querySelector(".animated-header");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='inline-block opacity-0'>$&</span>"
    );
  
    gsap.timeline({ delay: 3.5 })
      .fromTo(
        ".animated-header span",
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          stagger: 0.07,
        }
      );
  
    gsap.fromTo(
      ".action-buttons button",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.25,
        delay: 4.5,
      }
    );
  
    gsap.fromTo(
      ".header-image",
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.8, ease: "power2.out", delay: 3.8 }
    );
  }, []);
  

  return (
    <>
      {/* Loader */}
      {loading && (
        <div className="wrapper fixed inset-0 z-50 bg-black flex items-center justify-center">
          <div className="loader w-[8%] h-[20vh] bg-white"></div>
        </div>
      )}

      {/* Main Section */}
      <section className={`transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`}>
        <div className="max-w-[75%] mx-auto flex flex-row-reverse gap-3 items-center justify-between">
          {/* Animated Image */}
          <div>
            <img
              src="/icon-header.png"
              width={300}
              alt="Xtreme Verge Logo"
              className="header-image mb-4"
            />
          </div>

          {/* Text Content */}
          <div>
            <div className="w-[85%]">
              <h2 className="animated-header text-4xl font-bold">
                Pushing Boundaries, Creating Futures
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                At Xtreme Verge, we deliver innovative software solutions tailored to meet your business needs.
              </p>

              {/* Animated Buttons */}
              <div className="mt-6 space-x-4 action-buttons">
                <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
                <Button className="bg-gray-700 hover:bg-gray-800">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
