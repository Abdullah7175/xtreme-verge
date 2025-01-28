"use client"
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";

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
      <div className="logo"><img src="/logo-clean.png" alt="" width={70} height={90} /></div>
      <div onClick={showNavbar} className="flex cursor-pointer md:hidden">
        <Menu />
      </div>
      <nav
        className="transform translate-x-[100%] font-bold text-lg md:transition-none transition-transform duration-500 ease-in-out z-8 fixed top-0 right-0 flex flex-col gap-6 w-1/2 bg-white h-dvh md:translate-x-0 md:w-auto md:h-auto md:bg-transparent md:static md:flex-row md:gap-4"
        ref={navRef}
      >
        <div>
          <div className="md:hidden float-end m-10 cursor-pointer">
            <X onClick={hideNavbar} />
          </div>
        </div>
        {NavLink.map((loop) => (
          <ul className="relative" key={loop.menu}>
            <Link
              to={loop.link}
              className="px-5 inline-block w-full after:bg-white after:absolute after:top-6 after:left-5 after:h-1 after:w-0 after:hover:w-7 transition-all ease-in-out duration after:transition-all after:ease-linear after:duration-300 md:hover:bg-transparent"
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
