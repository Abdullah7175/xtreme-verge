import React from "react";

const Services = () => {
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
            <div className="p-4 bg-[#1a2d4e] text-white rounded-lg shadow-md">
              <h4 className="text-xl font-bold">Cloud Solutions</h4>
              <p className="mt-2 text-gray-300">
                Scalable and secure cloud-based infrastructure.
              </p>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Services;
