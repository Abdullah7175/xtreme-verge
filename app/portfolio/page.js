'use client'
import Loader from '@/components/Loader'
import gsap from 'gsap';
import React, { useEffect, useState } from 'react'

const page = () => {
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

  }, []);
  return (
    <>
      {loading && <Loader />}  {/* Use the Loader component */}

      <section
        className={`relative h-screen transition-opacity duration-700 bg-[url('https://devsaidul.com/html3/new/assets/images/home-1/banner.png')] bg-cover text-white flex justify-center items-center`}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Content (Ensures text and images are above overlay) */}
        <div className="relative z-[1] max-w-[75%] m-20 mx-auto flex items-center justify-center text-center">
          <div className="w-[85%]">
            <h2 className="text-[8vh] font-bold">
              Our Portfolio
            </h2>
            <p className="mt-6 text-[3.5vh] ">
              At Xtreme Verge, we deliver innovative software solutions
              tailored to<br /> meet your business needs.
            </p>
            <div className="mt-14 space-x-4 action-buttons-wrapper flex items-center justify-center">
              <div className="action-buttons flex gap-4">
                <button className="relative px-3 py-2 text-xl text-white border rounded border-blue-200 font-bold hover:-translate-y-1 transition-all duration-300 ease-in-out hover:shadow-[inset_-3.6em_0_0_0_theme(colors.blue.700),inset_3.5em_0_0_0_theme(colors.blue.700)] focus:shadow-[inset_-3.6em_0_0_0_theme(colors.red.700),inset_3.5em_0_0_0_theme(colors.red.700)]">
                  Get started
                </button>

                <button className="relative px-3 py-2 text-xl text-white border rounded border-red-200 font-bold hover:-translate-y-1 transition-all duration-300 ease-in-out hover:shadow-[inset_-3.6em_0_0_0_theme(colors.red.700),inset_3.5em_0_0_0_theme(colors.red.700)] focus:shadow-[inset_-3.6em_0_0_0_theme(colors.red.700),inset_3.5em_0_0_0_theme(colors.red.700)]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
