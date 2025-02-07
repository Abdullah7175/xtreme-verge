import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CopyRight, SocialLinks } from "@/components/SocialLinks";
import { Mail, MapPin, Phone } from "lucide-react";

const footer_data = {
  email: "info@email.com",
  phone: "(406) 555-0120",
  location: "46 JOHN ST TORONTO ON M5V 3W2",
  footer_info:
    "Welcome to our website. We specialize in helping businesses like yours succeed online, from website design to development.",
  links: [
    { title: "HOME", link: "/" },
    { title: "ABOUT", link: "/aboutus" },
    { title: "SERVICES", link: "/ourservices" },
    { title: "PORTFOLIO", link: "/portfolio" },
    { title: "CONTACT US", link: "/contact" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20 pt-14 font-bold">
      <div className="h-36 md:h-16"></div>
      <div className=" max-w-[1320px] mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-5/12">
            <div className="mb-10">
              <Image
                src={"/logo-clean.png"}
                width={150}
                height={150}
                alt="Logo"
              />
              <p className="mb-12 text-xl">{footer_data.footer_info}</p>
              <a
                href={`mailto:${footer_data.email}`}
                className="text-5xl font-extrabold text-white hover:text-red-500 transition"
              >
                {footer_data.email}
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-8">
            <div className="grid grid-cols-3 gap-6 text-white mb-10">
              <SocialLinks />
            </div>
            <div className="h-16 md:h-8"></div>
            <ul className="flex flex-wrap text-white text-sm gap-4">
              <li className="flex items-center gap-2">
                <MapPin /> {footer_data.location}
              </li>
              <li className="flex items-center gap-2">
                <Phone /> {footer_data.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail />{footer_data.email}
              </li>
            </ul>
          </div>
        </div>
        <div className="h-20 md:h-12"></div>
        <ul className="flex flex-wrap justify-center gap-8 text-md uppercase text-white mb-10">
          {footer_data.links.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="hover:text-red-500 transition"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-[#383838] py-8 text-center text-md">
        <div className="container mx-auto">
          <CopyRight />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
