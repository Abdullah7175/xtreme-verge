import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a2d4e] text-white flex flex-col">
      {/* Header Section */}
      <header className="flex justify-between items-center p-6 shadow-lg bg-white/10 backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-white">Xtreme Verge</h1>
        <nav className="space-x-4">
          <a href="#services" className="text-white hover:text-gray-300">Services</a>
          <a href="/aboutus" className="text-white hover:text-gray-300">About</a>
          <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center p-8">
        <div className="max-w-xl">
          <img src="/logo.png" alt="Xtreme Verge Logo" className="w-32 mx-auto mb-4" />
          <h2 className="text-4xl font-bold">Pushing Boundaries, Creating Futures</h2>
          <p className="mt-4 text-lg text-gray-300">
            At Xtreme Verge, we deliver innovative software solutions tailored to meet your business needs.
          </p>
          <div className="mt-6 space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            <Button className="bg-gray-700 hover:bg-gray-800">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="p-8 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-6">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-[#1a2d4e] text-white rounded-lg shadow-md">
              <h4 className="text-xl font-bold">Custom Software Development</h4>
              <p className="mt-2 text-gray-300">
                Tailored solutions designed to drive your business forward.
              </p>
            </div>
            <div className="p-4 bg-[#1a2d4e] text-white rounded-lg shadow-md">
              <h4 className="text-xl font-bold">Web & Mobile Apps</h4>
              <p className="mt-2 text-gray-300">
                Seamless user experiences for every platform.
              </p>
            </div>
            <div className="p-4 bg-[#1a2d4e] text-white rounded-lg shadow-md">
              <h4 className="text-xl font-bold">Cloud Solutions</h4>
              <p className="mt-2 text-gray-300">
                Scalable and secure cloud-based infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="p-6 bg-[#1a2d4e] text-center">
        <p className="text-gray-300">&copy; 2025 Xtreme Verge. All rights reserved.</p>
      </footer>
    </div>
  );
}
