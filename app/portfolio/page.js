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
        className={`relative h-screen transition-opacity duration-700 bg-[url('https://img.freepik.com/free-photo/people-working-call-center_23-2149288184.jpg?t=st=1741127066~exp=1741130666~hmac=477cd1567bfc9e1149dcb915e416bbc3053c76169e91882ba6d93f4e2f63cd6e&w=1380')] bg-cover text-white flex justify-center items-center`}
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
          </div>
        </div>
      </section>
    </>
  )
}

export default page
