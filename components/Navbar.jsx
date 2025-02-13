"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const navbarRef = useRef(null);
  let lastScrollY = useRef(0);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        height: "100vh",
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(linksRef.current, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
      });
    } else {
      gsap.to(menuRef.current, { height: 0, duration: 0.5, ease: "power3.in" });
      gsap.to(linksRef.current, { y: -20, opacity: 0, duration: 0.3 });
    }
  }, [isOpen]);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 5) {
        setIsHidden(true); // Hide navbar when scrolling down
      } else {
        setIsHidden(false); // Show navbar when scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = [
    { href: "/", text: "Home" },
    { href: "/aboutus", text: "About" },
    { href: "/ourservices", text: "Services" },
    { href: "/contact", text: "Contact" },
    { href: "/portfolio", text: "Portfolio" },
  ];

  return (
    <>
      <header
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full z-10 transition-transform duration-300 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        } ${isScrolled ? "bg-white shadow-lg" : "bg-white"}`}
      >
        <div className="max-w-[90%] mx-auto flex justify-between items-center py-4">
          <div>
            <img src="/logob.png" alt="Logo" width={70} height={90} />
          </div>
          <nav>
            <ul className="flex gap-10 font-semibold">
              {NavLinks.map((loop) => (
                <li key={loop.href}>
                  <Link href={loop.href} className="transition-colors">
                    {loop.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="cs_toolbox">
            <span className="cs_icon_btn" onClick={() => setIsOpen(!isOpen)}>
              <span className="cs_icon_btn_in">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </span>
          </div>
		  <div
        ref={menuRef}
        className="fixed inset-0 bg-black h-0 overflow-hidden flex flex-col items-center justify-center z-50 transition-all"
      >
        {/* Top Section with Logo & Close Button */}
        <div className="w-full flex justify-between items-center px-10 py-6">
          <h1 className="text-3xl font-extrabold text-red-600 opacity-0 transform -translate-x-8 transition-all duration-300">
            LB.
          </h1>
          <button
            onClick={() => setIsOpen(false)}
            className="text-black opacity-100 transform translate-x-8 transition-all duration-300"
          >
            <X />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center gap-6">
          {NavLinks.map((link, index) => (
            <Link
              key={link.text}
              href={link.href}
              ref={(el) => (linksRef.current[index] = el)}
              className={`text-5xl font-bold text-white opacity-0 transform -translate-y-5 transition-all duration-300 relative after:content-[attr(data-menu)] after:fixed after:left-1/2 after:top-1/2 after:-translate-x-[calc(50%+100px)] after:-translate-y-1/2 after:text-[200px] after:font-extrabold after:uppercase after:opacity-0 after:pointer-events-none hover:after:opacity-10 hover:after:-translate-x-1/2`}
              data-menu={link.text}
            >
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
