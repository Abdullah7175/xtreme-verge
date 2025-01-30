import React from "react";
import { Tilt } from 'react-tilt'

const Services = () => {
  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  
  return (
    <>
      <section id="services" className="p-8 text-black">
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
            <Tilt options={defaultOptions} className="p-4 bg-white text-black rounded-lg shadow-md hover:bg-red-700 hover:transition-all hover:ease-in-out hover:delay-45 hover:duration-45">
              <h4 className="text-xl font-bold">Cloud Solutions</h4>
              <p className="mt-2 text-gray-300">
                Scalable and secure cloud-based infrastructure.
              </p>
            </Tilt>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
