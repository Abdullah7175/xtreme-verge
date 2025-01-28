import React from 'react';

export default function AboutUs() {
  return (
    <div className="bg-[#1a2d4e] text-white min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            At Xtreme Verge, we strive to push boundaries and create future-ready solutions. 
            Our team of experts delivers innovative software solutions tailored to meet the unique needs of our clients.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/images/about-us-team.jpg"
              alt="Our Team"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Xtreme Verge is a cutting-edge software house dedicated to delivering top-notch 
              software development services. With a passion for technology and a commitment to excellence, 
              we help businesses achieve their digital transformation goals.
            </p>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              Our mission is to empower businesses by providing innovative, reliable, and scalable solutions. 
              We believe in leveraging technology to drive success and make a positive impact in the world.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#282c35] p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold">Expert Team</h3>
              <p className="text-gray-300 mt-2">
                Our team consists of experienced professionals passionate about delivering excellence.
              </p>
            </div>
            <div className="bg-[#282c35] p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold">Customer Focus</h3>
              <p className="text-gray-300 mt-2">
                We prioritize your needs and tailor our solutions to help your business thrive.
              </p>
            </div>
            <div className="bg-[#282c35] p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold">Innovative Solutions</h3>
              <p className="text-gray-300 mt-2">
                We embrace innovation to deliver state-of-the-art software solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Integrity', 'Innovation', 'Collaboration', 'Excellence'].map((value) => (
              <div key={value} className="bg-[#282c35] p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">{value}</h3>
              </div>
            ))}
          </div>
        </section>
         {/* Footer Section */}
      </div>

      <footer className="p-6 bg-[#1a2d4e] text-center">
        <p className="text-gray-300">&copy; 2025 Xtreme Verge. All rights reserved.</p>
      </footer>
    </div>
  );
}
