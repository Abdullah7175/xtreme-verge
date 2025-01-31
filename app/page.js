"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import Services from "@/components/Services";
import { TypeAnimation } from "react-type-animation";

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
        { scaleY: 1, duration: 0.5, ease: "power2.inOut" }
      )
      .to(".loader", {
        scaleY: 0,
        transformOrigin: "0% -100%",
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(
        ".wrapper",
        { y: "-100%", ease: "power4.inOut", duration: 1 },
        "-=0.8"
      );

    const textWrapper = document.querySelector(".animated-header");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='inline-block opacity-0'>$&</span>"
    );

    gsap
      .timeline({ delay: 1.8 })
      .fromTo(
        ".animated-header span",
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1, ease: "power2.out", stagger: 0.05 }
      );

    gsap.fromTo(
      ".action-buttons-wrapper",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 2.3,
        onComplete: () => {
          gsap.set(".action-buttons button", { clearProps: "all" }); // Reset inline styles after animation
        },
      }
    );

    gsap.fromTo(
      ".header-image",
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power2.out", delay: 1.5 }
    );
  }, []);

  return (
    <>
      {loading && (
        <div className="wrapper fixed inset-0 z-10 bg-black flex items-center justify-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-[20%] h-[40vh] animate-pulse"
          />
        </div>
      )}

      <section
        className={`transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        } h-screen`}
      >
        <div className="max-w-[75%] mx-auto flex flex-col md:flex-row-reverse gap-3 items-center justify-between">
          <div className="">
            <img
              src="/icon-header.png"
              width={400}
              alt="Xtreme Verge Logo"
              className="header-image mb-4"
            />
          </div>

          <div>
            <div className="w-[85%]">
              <h2 className="animated-header text-nowrap text-4xl font-bold">
                Pushing Boundaries, Creating Futures
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                At Xtreme Verge, we deliver innovative software solutions
                tailored to meet your business needs.
              </p>
              <p className="mt-4 text-bold text-lg text-gray-500">
              <TypeAnimation
                  sequence={[
                    "Transforming your vision into powerful software solutions.",
                    3000, 
                    "From custom applications to enterprise automation, we do it all...",
                    3000,
                    "Building high-performance web and mobile app...",
                    3000,
                    "Optimizing your infrastructure with cloud and DevOps solutions...",
                    3000,
                    "Enhancing user engagement with cutting-edge UI/UX design...",
                    3000,
                  ]}
                  wrapper="span"
                  speed={20}
                  deletionSpeed={40}
                  repeat={Infinity}
                />
              </p>

              <div className="mt-6 space-x-4 action-buttons-wrapper">
                <div className="action-buttons flex gap-4">
                  <button
                    className="relative px-3 py-2 text-black border rounded-full border-blue-200 font-base hover:-translate-y-1 transition-all duration-300 ease-in-out 
                    hover:shadow-[inset_-3.6em_0_0_0_theme(colors.blue.700),inset_3.5em_0_0_0_theme(colors.blue.700)] 
                    focus:shadow-[inset_-3.6em_0_0_0_theme(colors.red.700),inset_3.5em_0_0_0_theme(colors.red.700)] 
                   hover:text-white"
                  >
                    Get started
                  </button>

                  <button
                    className="relative px-3 py-2 text-black border rounded-full border-red-200 font-base hover:-translate-y-1 transition-all duration-300 ease-in-out 
                    hover:shadow-[inset_-3.6em_0_0_0_theme(colors.red.700),inset_3.5em_0_0_0_theme(colors.red.700)] 
                    focus:shadow-[inset_-3.6em_0_0_0_theme(colors.red.700),inset_3.5em_0_0_0_theme(colors.red.700)] 
                   hover:text-white"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <DownArrow /> */}
      </section>

      <Services />
    </>
  );
}
