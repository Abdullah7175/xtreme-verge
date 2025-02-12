"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);
  const linksRef = useRef([]);

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

  const NavLinks = [
    { href: "/", text: "Home" },
    { href: "/aboutus", text: "About" },
    { href: "/courses", text: "Courses" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <>
	<div className="max-w-[90%] mx-auto flex justify-between items-center">
	  <div>
	  <img src="/logob.png" alt="" width={70} height={90} />
	  </div>
	  <div></div>
      <div className="cs_toolbox">
        <span
          className={`cs_icon_btn ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
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
    </>
  );
};

export default Navbar;
