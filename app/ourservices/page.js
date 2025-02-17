"use client";
import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
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
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        </header>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="pb-12"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <Tilt
                options={{ max: 15, scale: 1.05, speed: 500 }}
                className={`h-[600px] p-6 rounded-lg shadow-lg transition-all duration-300 relative overflow-hidden bg-gradient-to-br ${service.gradient} bg-opacity-100`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex flex-col items-center text-center h-full justify-center">
                  {/* Icon */}
                  <div className={`text-6xl mb-4 transition-transform duration-300 ${hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-80'}`}>
                    {service.icon}
                  </div>
                  {/* Title */}
                  <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                  {/* Description */}
                  <p className={`text-gray-700 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-80'}`}>
                    {service.description}
                  </p>
                </div>
              </Tilt>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </>
  );
}
