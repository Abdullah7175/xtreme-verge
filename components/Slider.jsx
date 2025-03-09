"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
  useGSAP(() => {
    gsap.from(".marque", {
      x: "-100%",
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        start: "top bottom",
        end: "bottom+=200% top",
        scrub: true,
      },
    });
  });

  return (
    <div className="container overflow-hidden h-[200vh]">
      <div className="deg15">
        <div id="font" className="flex overflow-hidden py-4 bg-red-500">
          <div className="stroke text-nowrap move px-2 marque">
            Empowering Your Vision With Xtreme Verge
          </div>
          <div className="stroke text-nowrap move px-2 marque">
            Empowering Your Vision With Xtreme Verge
          </div>
          <div className="stroke text-nowrap move px-2 marque">
            Empowering Your Vision With Xtreme Verge
          </div>
          <div className="stroke text-nowrap move px-2 marque">
            Empowering Your Vision With Xtreme Verge
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
