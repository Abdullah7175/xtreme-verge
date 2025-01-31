// app/ourservices/page.js
"use client"; // Mark this component as a Client Component
import React from "react";
import { Tilt } from "react-tilt";
import { FaCode, FaMobileAlt, FaCloud, FaCogs, FaChartLine, FaShieldAlt, FaDatabase, FaRobot } from "react-icons/fa"; // Import icons

export default function OurServices() {
  const defaultOptions = {
    reverse: false,
    max: 15, // Reduced max tilt for a more professional look
    perspective: 1000,
    scale: 1.05, // Slightly reduced scale for subtlety
    speed: 500, // Faster transition
    transition: true,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored solutions to drive your business forward.",
      icon: <FaCode className="w-16 h-16 mb-4 text-blue-500" />,
    },
    {
      title: "Web & Mobile Apps",
      description: "Seamless user experiences for every platform.",
      icon: <FaMobileAlt className="w-16 h-16 mb-4 text-green-500" />,
    },
    {
      title: "Cloud Solutions",
      description: "Scalable and secure cloud-based infrastructure.",
      icon: <FaCloud className="w-16 h-16 mb-4 text-purple-500" />,
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent systems to automate and optimize processes.",
      icon: <FaRobot className="w-16 h-16 mb-4 text-orange-500" />,
    },
    {
      title: "Data Analytics",
      description: "Actionable insights from your business data.",
      icon: <FaChartLine className="w-16 h-16 mb-4 text-red-500" />,
    },
    {
      title: "Cybersecurity",
      description: "Protect your business from digital threats.",
      icon: <FaShieldAlt className="w-16 h-16 mb-4 text-yellow-500" />,
    },
    {
      title: "DevOps & Automation",
      description: "Streamline development and operations workflows.",
      icon: <FaCogs className="w-16 h-16 mb-4 text-teal-500" />,
    },
    {
      title: "Database Management",
      description: "Efficient and reliable data storage solutions.",
      icon: <FaDatabase className="w-16 h-16 mb-4 text-indigo-500" />,
    },
  ];

  return (
    <div className="bg-[#1a2d4e] text-white min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We offer a wide range of services to help your business grow and
            succeed in the digital world.
          </p>
        </header>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Tilt
              key={index}
              options={defaultOptions}
              className="p-6 bg-[#282c35] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-[#3a3f4b]"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </Tilt>
          ))}
        </section>
      </div>
    </div>
  );
}