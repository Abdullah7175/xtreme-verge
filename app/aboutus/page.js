// app/aboutus/page.js
"use client";
import Counter from "@/components/Counter";
import Loader from "@/components/Loader";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import avatar_img from "@/public/avatar_1.jpg";
import testimonial_thumb from "@/public/testimonial_thumb_1.jpg";

export default function AboutUs() {
  const [loading, setLoading] = useState(true);
  const testimonial_data = [
    {
      img: avatar_img,
      name: `Delores Olivo`,
      location: `From UK`,
      des: `“Welcome to our digital agency We specialize in helping business most like yours succeed online. From website design and development to digital marketing agency”`,
    },
    {
      img: avatar_img,
      name: `Delores Olivo`,
      location: `From USA`,
      des: `“Welcome to our digital agency We specialize in helping business most like yours succeed online. From website design and development to digital marketing agency”`,
    },
    {
      img: avatar_img,
      name: `Delores Olivo`,
      location: `From Astrolia`,
      des: `“Welcome to our digital agency We specialize in helping business most like yours succeed online. From website design and development to digital marketing agency”`,
    },
  ]

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

    // Process the animated header text if it exists
    const textWrapper = document.querySelector(".animated-header");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='inline-block opacity-0'>$&</span>"
      );
    }
  }, []);
  


  return (
    <>
      {loading && <Loader />}
      <Fade direction="up" triggerOnce duration={1000}>
        <div className="bg-black w-full mt-20 overflow-x-hidden">
          <div className="text-white max-w-[85%] mx-auto py-20">
            <div className="text-center">
              <Fade direction="down" triggerOnce duration={1000}>
                <div className="inline-flex items-center gap-2 px-4 py-1 shadow-ld bg-slate-100 text-black rounded-full text-sm font-medium">
                  <Image
                    src="/icon/magic-black.svg"
                    width={20}
                    height={20}
                    alt="Magic Icon"
                  />
                  About Us
                </div>
              </Fade>
            </div>
            <div className="flex items-center justify-center gap-20 pt-10 mb-20">
              <div className="w-28 h-[2px] bg-red-700"></div>
              <h1 className="text-5xl font-bold">Our Agency Story</h1>
              <div className="w-28 h-[2px] bg-red-700"></div>
            </div>
            <div className="flex">
              <div className="flex-1">
                <Fade direction="left" triggerOnce duration={1200}>
                  <h2 className="text-5xl font-bold w-11/12">
                    How XtremeVerge is Setting New Standards in Online Services
                    and Design
                  </h2>
                </Fade>
              </div>
              <div className="flex-1 text-gray-400 font-bold text-lg">
                <Fade direction="right" triggerOnce duration={1200}>
                  <p className="mb-2">
                    At Xtreme Verge, we strive to push boundaries and create
                    future-ready solutions. Delivering top-notch software
                    development services. With a passion for technology and a
                    commitment to excellence, our team of experts delivers
                    innovative software solutions tailored to meet the unique
                    needs of our clients.
                  </p>
                  <p>
                    Our mission is to empower businesses by providing innovative,
                    reliable, and scalable solutions. We believe in leveraging
                    technology to drive success and make a positive impact in the
                    world. We help businesses achieve their digital transformation
                    goals.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 w-full">
        <div className="text-black max-w-[85%] mx-auto py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1 shadow-md rounded-full text-gray-700 text-sm font-medium">
              <Image
                src="/icon/user-icon.png"
                width={20}
                height={20}
                alt="Magic Icon"
              />
              Our Core Values
            </div>
          </div>
          <div className="flex items-center justify-center gap-20 pt-10 mb-20">
            <Fade direction="down" triggerOnce duration={1200}>
              <h1 className="text-5xl font-bold text-center">
                Our Core Values That <br /> Empower Success
              </h1>
            </Fade>
          </div>
          <Fade direction="left" triggerOnce duration={1200}>
            <div className="flex gap-10 items-center justify-center">
              <div className="relative">
                <div className="relative overflow-hidden rounded-xl before:absolute before:inset-0 before:pointer-events-none before:bg-[linear-gradient(180deg,rgba(12,17,29,0),rgba(12,17,29,0.69)_63.19%,#0c111d)] before:z-[1]">
                  <Image
                    className="hover:scale-110 transition-all duration-300"
                    src="/bg-1.jpg"
                    width={400}
                    height={400}
                    alt="software"
                  />
                </div>
                <h2 className="text-center absolute text-white font-semibold left-5 text-3xl bottom-14 w-11/12 z-[2]">
                  We don’t make empty promises
                </h2>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-xl before:absolute before:inset-0 before:pointer-events-none before:bg-[linear-gradient(180deg,rgba(12,17,29,0),rgba(12,17,29,0.69)_63.19%,#0c111d)] before:z-[1]">
                  <Image
                    className="hover:scale-110 transition-all duration-300"
                    src="/bg-2.jpg"
                    width={400}
                    height={400}
                    alt="software"
                  />
                </div>
                <h2 className="text-center absolute text-white font-semibold left-5 text-3xl bottom-14 w-11/12 z-[2]">
                  Unleashing potential driving success
                </h2>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-xl before:absolute before:inset-0 before:pointer-events-none before:bg-[linear-gradient(180deg,rgba(12,17,29,0),rgba(12,17,29,0.69)_63.19%,#0c111d)] before:z-[1]">
                  <Image
                    className="hover:scale-110 transition-all duration-300"
                    src="/bg-1.jpg"
                    width={400}
                    height={400}
                    alt="software"
                  />
                </div>
                <h2 className="text-center absolute text-white font-semibold left-5 text-3xl bottom-14 w-11/12 z-[2]">
                  Transforming ideas into impact
                </h2>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <Counter />

      <div className="bg-gray-100 w-full py-10">
        <div className="max-w-[85%] mx-auto">
        <div className="text-center flex py-5 mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1 shadow-md rounded-full text-gray-700 text-sm font-medium">
              <Image
                src="/icon/user-icon.png"
                width={20}
                height={20}
                alt="Magic Icon"
              />
              Why Choose Us
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold">Trusted Excellence in Every Solution</h1>
            <p className="text-lg text-gray-500 mt-5 mb-12"> Our commitment to innovation, quality, and customer satisfaction sets us apart. With a team of experts dedicated to delivering tailored solutions, we ensure seamless execution, cutting-edge technology, and unparalleled support.</p>
          </div>
          <div className="flex items-center justify-start gap-10">
            <div className="w-72">
              <div className="mb-6">
                <Image
                  src="/icon/icon-1.svg"
                  width={57}
                  height={57}
                  alt="icon-1"
                />
              </div>
              <div>
                <h1 className="font-bold text-xl mb-2">Deliver results</h1>
                <p className="text-lg pr-6">
                  we focus on delivering quick and efficient solutions.
                </p>
              </div>
            </div>
            <div className="w-72">
              <div className="mb-6">
                <Image
                  src="/icon/icon-2.svg"
                  width={57}
                  height={57}
                  alt="icon-1"
                />
              </div>
              <div>
                <h1 className="font-bold text-xl mb-2">Innovative Solutions</h1>
                <p className="text-lg pr-6">
                  We embrace innovation to deliver state-of-the-art software
                  solutions.
                </p>
              </div>
            </div>
            <div className="w-72">
              <div className="mb-6">
                <Image
                  src="/icon/icon-3.svg"
                  width={57}
                  height={57}
                  alt="icon-1"
                />
              </div>
              <div>
                <h1 className="font-bold text-xl mb-2">
                  Sustainable Growth
                </h1>
                <p className="text-lg pr-6">
                  Sustainable growth means achieving long-term success.
                </p>
              </div>
            </div>
            <div className="w-72">
              <div className="mb-6">
                <Image
                  src="/icon/icon-4.svg"
                  width={57}
                  height={57}
                  alt="icon-1"
                />
              </div>
              <div>
                <h1 className="font-bold text-xl mb-2">Customer Focus</h1>
                <p className="text-lg pr-6">
                  We prioritize your needs and create tailored solutions for
                  success
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
          <Fade direction="up" triggerOnce={false} duration={1500} delay={9}>
            <Link
              href="/contact"
              className="relative px-3 py-3 text-black text-lg border rounded border-red-200 font-bold 
             hover:-translate-y-1 transition-all duration-300 ease-in-out 
             hover:shadow-[inset_-7.5em_0_0_0_theme(colors.red.700),inset_7.5em_0_0_0_theme(colors.red.700)] 
             focus:shadow-[inset_-7.5em_0_0_0_theme(colors.red.700),inset_7.5em_0_0_0_theme(colors.red.700)] 
             hover:text-white 
             inline-block"
            >
             Book a free consultation
            </Link>
          </Fade>
        </div>
        </div>
      </div>
      <section className="relative bg-black cs_shape_wrap_2">
        {/* Shape 1 */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            width="1041"
            height="1005"
            viewBox="0 0 1041 1005"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.3"
              cx="538.5"
              cy="502.5"
              r="501.5"
              stroke="#454545"
              strokeWidth="2"
            />
            <circle
              opacity="0.3"
              cx="501.5"
              cy="526.5"
              r="458.5"
              stroke="#454545"
              strokeWidth="2"
            />
            <circle
              opacity="0.3"
              cx="453"
              cy="570"
              r="424"
              stroke="#454545"
              strokeWidth="2"
            />
            <circle
              opacity="0.3"
              cx="396"
              cy="591"
              r="377"
              stroke="#454545"
              strokeWidth="2"
            />
            <circle
              opacity="0.3"
              cx="330"
              cy="630"
              r="329"
              stroke="#454545"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Shape 2 */}
        <div className="absolute top-0 left-0 pointer-events-none">
          <svg
            width="149"
            height="149"
            viewBox="0 0 149 149"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.23">
              <path
                d="M54.7532 1.16162C47.1932 42.2265 41.0646 48.3548 0 55.9147C41.065 63.4746 47.1932 69.6029 54.7532 110.668C62.3131 69.6029 68.4414 63.4746 109.506 55.9147C68.4414 48.3548 62.3128 42.2265 54.7532 1.16162Z"
                fill="#454545"
              />
              <path
                d="M114.179 78.1968C109.372 104.312 105.474 108.21 79.3584 113.018C105.474 117.825 109.372 121.723 114.179 147.838C118.987 121.723 122.885 117.825 149 113.018C122.884 108.21 118.987 104.312 114.179 78.1968Z"
                fill="#454545"
              />
            </g>
          </svg>
        </div>

        {/* Top spacing */}
        <div className="h-[150px] lg:h-[60px]"></div>

        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-4/12">
              <div>
                <Image
                  src={testimonial_thumb}
                  alt="Testimonial Thumb"
                  width={400}
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
            <div className="w-full lg:w-7/12 lg:ml-8">
              <div className="relative">
                <div className="cs_testimonial cs_style_1 cs_color_1">
                  <h2 className="cs_testimonial_title text-white font-extrabold text-[55px] mb-[30px]">
                    Some Of Our Respected Happy Clients Says
                  </h2>
                  <Swiper
                    loop={true}
                    speed={1000}
                    autoplay={true}
                    modules={[Autoplay]}
                    pagination={{ el: ".cs_pagination", clickable: true }}
                    className="cs_slider cs_slider_4"
                  >
                    {testimonial_data.map((item, index) => (
                      <SwiperSlide key={index} className="swiper-slide">
                        <div className="cs_testimonial_box">
                          <div className="cs_testimonial_quote_icon mb-[30px]">
                            <svg
                              width="61"
                              height="44"
                              viewBox="0 0 61 44"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 26.2855H12.9844L4.32807 43.4283H17.3125L25.9689 26.2855V0.571289H0V26.2855Z"
                                fill="#FF6B00"
                              />
                              <path
                                d="M34.625 0.571289V26.2855H47.6094L38.9531 43.4283H51.9375L60.5939 26.2855V0.571289H34.625Z"
                                fill="#FF6B00"
                              />
                            </svg>
                          </div>
                          <blockquote className="cs_testimonial_text font-medium text-[28px] mb-[25px]">
                            {item.des}
                          </blockquote>
                          <div className="cs_testimonial_meta flex items-center">
                            <div className="cs_testimonial_avatar w-[80px] mr-[25px]">
                              <Image src={item.img} alt="Avatar" width={50} height={50} />
                            </div>
                            <div className="cs_testimonial_meta_right">
                              <h3 className="cs_testimonial_avatar_name text-[22px] mb-[6px] text-white">
                                {item.name}
                              </h3>
                              <div className="cs_testimonial_avatar_designation text-white">
                                {item.location}
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                    <div className="cs_pagination cs_style1"></div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-[150px] lg:h-[60px]"></div>
      </section>
      <div className="h-[115px] lg:h-[60px]"></div>

     
    </>
  );
}
