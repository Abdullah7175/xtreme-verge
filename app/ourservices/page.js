"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaCode, FaMobileAlt, FaCloud, FaCogs, FaChartLine, FaShieldAlt, FaDatabase, FaRobot } from "react-icons/fa";
import { FcClapperboard } from "react-icons/fc";
import gsap from "gsap";
import Loader from "@/components/Loader";

export default function Services() {
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

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => card.addEventListener("click", onCardClick));
    return () => cards.forEach((card) => card.removeEventListener("click", onCardClick));
  }, []);

  const toggleExpansion = (element, to, duration = 350) => {
    return new Promise((res) => {
      element.animate(
        [
          {
            top: to.top,
            left: to.left,
            width: to.width,
            height: to.height,
          },
        ],
        { duration, fill: "forwards", easing: "ease-in-out" }
      );
      setTimeout(res, duration);
    });
  };

  const onCardClick = async (e) => {
    const card = e.currentTarget;
    const cardClone = card.cloneNode(true);
    const { top, left, width, height } = card.getBoundingClientRect();
  
    // Extract gradient class from the original card
    const gradientClass = card.classList.value.split(" ").find(cls => cls.startsWith("from-"));
  
    // Extract service details
    const title = card.querySelector("h2")?.innerText || "";
    const description = card.querySelector("p")?.innerText || "";
    const iconHTML = card.querySelector("div.text-6xl")?.innerHTML || "";
  
    cardClone.style.position = "fixed";
    cardClone.style.top = top + "px";
    cardClone.style.left = left + "px";
    cardClone.style.width = width + "px";
    cardClone.style.height = height + "px";
    card.style.opacity = "0";
  
    document.body.appendChild(cardClone);
  
    // Wait for expansion animation
    await toggleExpansion(cardClone, { top: "0px", left: "0px", width: "100vw", height: "100vh" });
  
    // Apply dynamic gradient and styles
    cardClone.classList.add("bg-gradient-to-br", gradientClass);
    cardClone.style.zIndex = "50";
    cardClone.style.overflow = "auto";
    cardClone.style.padding = "40px";
    cardClone.style.borderRadius = "0px";
  
    // Clear old content and add new content
    cardClone.innerHTML = `
      <div class="flex flex-col items-center text-center h-full justify-center p-8">
        <div class="text-7xl mb-6">${iconHTML}</div>
        <h2 class="text-4xl font-bold mb-4">${title}</h2>
        <p class="text-lg text-gray-200 max-w-2xl">${description}</p>
      </div>
    `;
  
    // Create and add close button
    const closeButton = document.createElement("button");
    closeButton.innerText = "X";
    closeButton.style = `
      position: fixed;
      z-index: 10000;
      top: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: black;
      color: white;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      cursor: pointer;
    `;
  
    closeButton.addEventListener("click", async () => {
      closeButton.remove();
      cardClone.style.removeProperty("display");
      cardClone.style.removeProperty("padding");
  
      await toggleExpansion(cardClone, { top: `${top}px`, left: `${left}px`, width: `${width}px`, height: `${height}px` }, 300);
  
      card.style.removeProperty("opacity");
      cardClone.remove();
    });
  
    cardClone.appendChild(closeButton);
  };
  
  
  const services = [
    { title: "Custom Software Development", description: "Tailored solutions to drive your business forward.", icon: <FaCode />, gradient: "from-orange-400 to-red-500" },
    { title: "Web & Mobile Apps", description: "Seamless user experiences for every platform.", icon: <FaMobileAlt />, gradient: "from-green-400 to-blue-500" },
    { title: "Cloud Solutions", description: "Scalable and secure cloud-based infrastructure.", icon: <FaCloud />, gradient: "from-purple-400 to-pink-500" },
    { title: "AI & Machine Learning", description: "Intelligent systems to automate and optimize processes.", icon: <FaRobot />, gradient: "from-yellow-400 to-orange-500" },
    { title: "Data Analytics", description: "Actionable insights from your business data.", icon: <FaChartLine />, gradient: "from-red-400 to-purple-500" },
    { title: "Cybersecurity", description: "Protect your business from digital threats.", icon: <FaShieldAlt />, gradient: "from-blue-400 to-indigo-500" },
    { title: "DevOps & Automation", description: "Streamline development and operations workflows.", icon: <FaCogs />, gradient: "from-teal-400 to-green-500" },
    { title: "Database Management", description: "Efficient and reliable data storage solutions.", icon: <FaDatabase />, gradient: "from-indigo-400 to-blue-500" },
    { title: "Social Media", description: "Engage with your audience effectively.", icon: <FcClapperboard />, gradient: "from-pink-400 to-red-500" },
  ];
 
  
  return (
    <>
      {loading && <Loader />}
      <div className="w-full py-12 mt-20">
        <div className="text-gray-900 max-w-[90%] mx-auto">
          <header className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          </header>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            autoplay={false}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`h-[600px] p-6 rounded-lg shadow-lg transition-all duration-300 relative overflow-hidden bg-gradient-to-br ${service.gradient} bg-opacity-100 card`}
                >
                  <div className="flex flex-col items-center text-center h-full justify-center">
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
