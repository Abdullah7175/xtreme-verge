"use client"
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.style.transform = "translateX(0px)"; // Example of adding inline CSS
    // Example of adding inline CSS
  };
  const hideNavbar = () => {
    // Example of adding inline CSS
    navRef.current.style.transform = "translateX(100%)"; // Example of adding inline CSS
  };
  const NavLink = [
    { link: "/", menu: "Home" },
    { link: "/aboutus", menu: "About" },
    { link: "/contact", menu: "Contact" },
    { link: "/ourservices", menu: "Services" },
  ];
  return (
    <header className="max-w-[80%] mx-auto mt-2 mb-3 flex px-3 text-white items-center justify-between">
      <div className="logo"><img src="/logob.png" alt="" width={70} height={90} /></div>
      <div className="flex items-center justify-center gap-1 w-1/4 relative">
      <input type="text" placeholder="Search" name="search" id="search"
      className="rounded p-1 w-full outline-none placeholder:text-sm border"
      />
       <button type="submit" className="bg-red-500 rounded p-1 absolute right-0">
       <Search color="black"/>
     </button>
      </div>
      <div onClick={showNavbar} className="flex cursor-pointer">
        <Menu color="black"/>
      </div>
      <nav
        className="transform translate-x-[100%] bg-[#6e6e6e] font-bold text-lg transition-transform duration-500 ease-in-out z-10 fixed top-0 right-0 flex flex-col gap-6 w-1/2 md:w-1/3 h-dvh md:translate-x-0"
        ref={navRef}
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
