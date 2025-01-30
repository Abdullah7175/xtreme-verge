"use client";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  // Using state to toggle the navbar visibility
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const showNavbar = () => {
    setIsNavbarVisible(true); // Set the navbar to visible
  };

  const hideNavbar = () => {
    setIsNavbarVisible(false); // Set the navbar to hidden
  };

  const NavLink = [
    { link: "/", menu: "Home" },
    { link: "/aboutus", menu: "About" },
    { link: "/contact", menu: "Contact" },
    { link: "/ourservices", menu: "Services" },
  ];

  return (
    <header className="max-w-[80%] mx-auto mt-10 mb-3 flex px-3 text-white items-center justify-between">
      <div className="logo">
        <img src="/logob.png" alt="" width={70} height={90} />
      </div>
      <div className="flex items-center justify-center gap-1 w-1/4 relative">
        <input
          type="text"
          placeholder="Search"
          name="search"
          id="search"
          className="rounded p-1 w-full outline-none placeholder:text-sm border"
        />
        <button
          type="submit"
          className="bg-red-500 rounded p-1 absolute right-0"
        >
          <Search color="black" />
        </button>
      </div>
      <div
        onClick={showNavbar}
        className="cursor-pointer relative w-10 h-10 group transition-all duration-300 ease-in-out"
      >
        <span className="absolute top-2 left-1/2 transform -translate-x-1/2 block w-8 h-[3px] bg-black rounded transition-all duration-300 ease-in-out group-hover:rotate-90 group-hover:translate-y-2"></span>
        <span className="absolute top-4 left-1/2 transform -translate-x-1/2 block w-8 h-[3px] bg-black rounded transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:-translate-y-0"></span>
        <span className="absolute top-6 left-1/2 transform -translate-x-1/2 block w-8 h-[3px] bg-black rounded transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-0"></span>
      </div>
      <nav
        className={`transform ${isNavbarVisible ? "translate-x-0" : "translate-x-[100%]"} bg-[#6e6e6e] font-bold text-lg transition-transform duration-500 ease-in-out z-10 fixed top-0 right-0 flex flex-col gap-6 w-1/2 md:w-1/4 h-dvh`}
      >
        <div>
          <div className="float-end m-10 cursor-pointer">
            <X onClick={hideNavbar} />
          </div>
        </div>
        {NavLink.map((loop) => (
          <ul className="pl-3 relative" key={loop.menu}>
            <Link
              to={loop.link}
              className="ml-5 inline-block w-full md:w-auto after:bg-white after:absolute after:top-6 after:left-8 after:h-1 after:w-0 after:hover:w-7 transition-all ease-in-out duration after:transition-all after:ease-linear after:duration-300"
              href={loop.link}
            >
              {loop.menu}
            </Link>
          </ul>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
