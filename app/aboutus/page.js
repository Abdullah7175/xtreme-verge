// app/aboutus/page.js
import Counter from "@/components/Counter";
import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <>
      <div className="bg-black w-full mt-20">
        <div className=" text-white max-w-[85%] mx-auto py-20 ">
        <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1 shadow-ld bg-slate-100 text-black rounded-full text-sm font-medium">
              <Image
                src="/icon/magic-black.svg"
                width={20}
                height={20}
                alt="Magic Icon"
              />
              About Us
            </div>
          </div>
          <div className="flex items-center justify-center gap-20 pt-10 mb-20">
            <div className="w-28 h-[2px] bg-red-700"></div>
            <h1 className="text-5xl font-bold">Our Agency Story</h1>
            <div className="w-28 h-[2px] bg-red-700"></div>
          </div>
          <div className="flex">
            <div className="flex-1">
              <h2 className="text-5xl font-bold w-11/12">
              How XtremeVerge is Setting New Standards in Online Services and Design
              </h2>
            </div>
            <div className="flex-1 text-gray-400 font-bold text-lg">
              <p className="mb-2">
              At Xtreme Verge, we strive to push boundaries and create future-ready solutions.
              Delivering top-notch software development services. With a
              passion for technology and a commitment to excellenceOur team of experts delivers innovative
              software solutions tailored to meet the unique needs of our clients.
              </p>
              <p>
              Our mission is to empower businesses by providing innovative,
                  reliable, and scalable solutions. We believe in leveraging
                  technology to drive success and make a positive impact in the
                  world.We help
                  businesses achieve their digital transformation goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 w-full">
        <div className=" text-black max-w-[85%] mx-auto py-20 ">
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
            <h1 className="text-5xl font-bold text-center">
            Our Core Values That  <br/>  Empower Success
            </h1>
          </div>
          <div className="flex gap-10 items-center justify-center">
           <div className="relative">
           <div className="relative overflow-hidden rounded-xl before:absolute before:inset-0 before:pointer-events-none before:bg-[linear-gradient(180deg,rgba(12,17,29,0),rgba(12,17,29,0.69)_63.19%,#0c111d)] before:z-[1]">
            <Image className="hover:scale-110 transition-all duration-300" src="/bg-1.jpg" width={400} height={400} alt="software"/>
          </div>
            <h2 className="text-center absolute text-white font-semibold left-5 text-3xl bottom-14 w-11/12 z-[2]">We don’t make empty promises</h2>
           </div>
           <div className="relative">
           <div className="relative overflow-hidden rounded-xl before:absolute before:inset-0 before:pointer-events-none before:bg-[linear-gradient(180deg,rgba(12,17,29,0),rgba(12,17,29,0.69)_63.19%,#0c111d)] before:z-[1]">
            <Image className="hover:scale-110 transition-all duration-300" src="/bg-1.jpg" width={400} height={400} alt="software"/>
          </div>
            <h2 className="text-center absolute text-white font-semibold left-5 text-3xl bottom-14 w-11/12 z-[2]">Unleashing potential driving success</h2>
           </div>
           <div className="relative">
           <div className="relative overflow-hidden rounded-xl before:absolute before:inset-0 before:pointer-events-none before:bg-[linear-gradient(180deg,rgba(12,17,29,0),rgba(12,17,29,0.69)_63.19%,#0c111d)] before:z-[1]">
            <Image className="hover:scale-110 transition-all duration-300" src="/bg-1.jpg" width={400} height={400} alt="software"/>
          </div>
            <h2 className="text-center absolute text-white font-semibold left-5 text-3xl bottom-14 w-11/12 z-[2]"> Transforming ideas into impact</h2>
           </div>
          </div>
        </div>
      </div>
      <Counter />
      <div className="bg-white w-full">
      <div className="max-w-[85%] mx-auto">
      <div>
        <h1>Why Choose Us?</h1>
      </div>
      <div className="flex items-center justify-start gap-10">
          <div className="w-72">
            <div className="mb-6">
              <Image src={'/icon/icon-1.svg'} width={57} height={57} alt="icon-1"/>
            </div>
            <div>
              <h1 className="font-bold text-xl mb-2">Deliver results</h1>
              <p className="text-lg pr-6">At Innomax, delivering results means achieving success.</p>
            </div> 
          </div>
          <div className="w-72">
            <div className="mb-6">
              <Image src={'/icon/icon-2.svg'} width={57} height={57} alt="icon-1"/>
            </div>
            <div>
              <h1 className="font-bold text-xl mb-2">Being proactive</h1>
              <p className="text-lg pr-6">At Innomax, being proactive means anticipating challenges.</p>
            </div> 
          </div>
          <div className="w-72">
            <div className="mb-6">
              <Image src={'/icon/icon-3.svg'} width={57} height={57} alt="icon-1"/>
            </div>
            <div>
              <h1 className="font-bold text-xl mb-2">Sustainable Growth</h1>
              <p className="text-lg pr-6">Sustainable growth means achieving long-term success.</p>
            </div> 
          </div>
          <div className="w-72">
            <div className="mb-6">
              <Image src={'/icon/icon-4.svg'} width={57} height={57} alt="icon-1"/>
            </div>
            <div>
              <h1 className="font-bold text-xl mb-2">Maximize Speed</h1>
              <p className="text-lg pr-6">we focus on delivering quick and efficient solutions.</p>
            </div> 
          </div>
        </div>
      </div>
      </div>
      <div className="bg-[#1a2d4e] w-full">
        <div className=" text-white min-h-screen max-w-[85%] mx-auto">
          <div className="container mx-auto px-6 py-12">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">About Us</h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              </p>
            </header>

            <section className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/logo2.jpg"
                  alt="Our Team"
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                 
                </p>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed">
                 .
                </p>
              </div>
            </section>

            <section className="mt-16">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose Us?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-[#282c35] p-6 rounded-lg shadow-lg text-center">
                  <h3 className="text-xl font-bold">Expert Team</h3>
                  <p className="text-gray-300 mt-2">
                    Our team consists of experienced professionals passionate
                    about delivering excellence.
                  </p>
                </div>
                <div className="bg-[#282c35] p-6 rounded-lg shadow-lg text-center">
                  <h3 className="text-xl font-bold">Customer Focus</h3>
                  <p className="text-gray-300 mt-2">
                    We prioritize your needs and tailor our solutions to help
                    your business thrive.
                  </p>
                </div>
                <div className="bg-[#282c35] p-6 rounded-lg shadow-lg text-center">
                  <h3 className="text-xl font-bold">Innovative Solutions</h3>
                  <p className="text-gray-300 mt-2">
                    We embrace innovation to deliver state-of-the-art software
                    solutions.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
