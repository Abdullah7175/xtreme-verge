"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import Link from "next/link";

const Whoarewe = () => {
  const ClickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="px-4 md:px-20 lg:px-40 py-24 bg-gradient-to-r from-gray-50 to-gray-100"
    >
      <div className="container mx-auto">
        {/* Centered Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1 shadow-md rounded-full text-gray-700 text-sm font-medium">
            <Image
              src="/icon/magic.png"
              width={20}
              height={20}
              alt="Magic Icon"
            />
            Who We are ?
          </div>
          <Fade direction="down" triggerOnce duration={1000} delay={9}>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-4">
              Committed to Your Online Success
            </h2>
          </Fade>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Core Values */}
          <div>
            <div >
            <h2 className="text-3xl font-bold text-gray-900 ml-7 mb-1 relative">
              Core Values
              <div className="before:content-[''] before:absolute before:-right-7 before:top-40 before:-translate-y-1/2 before:w-[2px] md:before:min-h-80 before:bg-[rgba(12,17,29,0.1)]"></div>
            </h2>
              {[
                {
                  img: "/icon/airdrop.png",
                  title: "Innovation",
                  desc: "Continuously refining SEO to stay ahead of search engine updates.",
                },
                {
                  img: "/icon/people.png",
                  title: "Client Focus",
                  desc: "Your success drives us; we craft custom Software solutions for impact.",
                },
                {
                  img: "/icon/microphone.png",
                  title: "Transparency",
                  desc: "Clear communication and honest reporting at every step.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-lg text-xl"
                >
                  <Image
                    src={item.img}
                    width={45}
                    height={45}
                    alt={item.title}
                  />
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-900">
                      {item.title}:
                    </span>{" "}
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-0 top-0 h-full w-0.5"></div>
            <div className="space-y-3 pl-6 md:pl-12">
              {[
                {
                  title: "Our Mission",
                  desc: "Our mission is to give you an online presence with cutting-edge techologies, driving organic traffic, increasing visibility, and delivering measurable results.",
                },
                {
                  title: "Our Vision",
                  desc: "Our vision is to be a trusted leader in software solutions, setting the standard for innovative technology .",
                },
              ].map((item, index) => (
                <div key={index} className=" rounded-lg text-xl pb-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-3xl">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whoarewe;
