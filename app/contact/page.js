// app/contact/page.js
import React from "react";

export default function ContactUs() {
  return (
    <div className="bg-[#1a2d4e] w-full">
        <div className=" text-white min-h-screen max-w-[85%] mx-auto">
      <div className="container mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out to us for any inquiries or collaborations.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 w-full rounded-md bg-[#282c35] text-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-2 w-full rounded-md bg-[#282c35] text-white"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 p-2 w-full rounded-md bg-[#282c35] text-white"
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Our Location</h2>
            <div className="bg-[#282c35] p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 mb-4">
                123 Tech Street, Innovation City, IC 12345
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.95373531531615!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6a32f7f1f8e!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1625063004479!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
  );
}