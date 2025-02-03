// "use client";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const GhostCursor = () => {
//   const ghostRef = useRef(null);

//   useEffect(() => {
//     const moveGhost = (e) => {
//       if (ghostRef.current) {
//         gsap.to(ghostRef.current, {
//           x: e.clientX,
//           y: e.clientY,
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       }
//     };

//     window.addEventListener("mousemove", moveGhost);

//     return () => {
//       window.removeEventListener("mousemove", moveGhost);
//     };
//   }, []);

//   return (
//     <div
//       ref={ghostRef}
//       className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-50"
//       style={{ transform: "translate(-50%, -50%)" }}
//     >
//       <img src="/ghost.png" alt="Ghost Cursor" className="w-full h-full" />
//     </div>
//   );
// };

// export default GhostCursor;
//--------------------------------------------------------------------------------------------------------
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";

// const GhostCursor = () => {
//   const ghostRef = useRef(null);
//   const [hovering, setHovering] = useState(false);

//   useEffect(() => {
//     const moveGhost = (e) => {
//       if (ghostRef.current) {
//         gsap.to(ghostRef.current, {
//           x: e.clientX,
//           y: e.clientY,
//           duration: 0.2,
//           ease: "power2.out",
//         });
//       }
//     };

//     window.addEventListener("mousemove", moveGhost);
//     return () => window.removeEventListener("mousemove", moveGhost);
//   }, []);

//   return (
//     <div
//       ref={ghostRef}
//       className="fixed top-0 left-0 w-16 h-20 flex flex-col items-center justify-center pointer-events-none z-50"
//       style={{ transform: "translate(-50%, -50%)" }}
//     >
//       {/* Ghost Body */}
//       <div
//         className={`relative w-16 h-20 bg-white border border-gray-300 rounded-t-full shadow-lg transition-all 
//           ${hovering ? "scale-110" : "scale-100"}`}
//         onMouseEnter={() => setHovering(true)}
//         onMouseLeave={() => setHovering(false)}
//       >
//         {/* Ghost Eyes */}
//         <div className="absolute top-6 left-4 flex gap-4">
//           <div
//             className={`w-3 h-4 bg-black rounded-full transition-all ${
//               hovering ? "h-3 w-2" : "h-4 w-3"
//             }`}
//           ></div>
//           <div
//             className={`w-3 h-4 bg-black rounded-full transition-all ${
//               hovering ? "h-3 w-2" : "h-4 w-3"
//             }`}
//           ></div>
//         </div>

//         {/* Ghost Mouth */}
//         <div className="absolute top-12 left-[50%] transform -translate-x-1/2">
//           {hovering ? (
//             <div className="w-4 h-2 bg-black rounded-full"></div> // Smiling mouth
//           ) : (
//             <div className="w-3 h-1 bg-black rounded-full"></div> // Neutral mouth
//           )}
//         </div>

//         {/* Ghost Wavy Bottom */}
//         <div className="absolute bottom-0 left-0 flex justify-evenly w-full">
//           <div className="w-4 h-4 bg-white border border-gray-300 rounded-full"></div>
//           <div className="w-4 h-4 bg-white border border-gray-300 rounded-full"></div>
//           <div className="w-4 h-4 bg-white border border-gray-300 rounded-full"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GhostCursor;
//--------------------------------------------------------------------------------------------

"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const GhostCursor = () => {
  const ghostRef = useRef(null);
  const eyesRef = useRef([]);
  const [hovering, setHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const posRef = useRef({ x: 0, y: 0 });

  // Smooth movement with GSAP
  useEffect(() => {
    const updatePosition = (x, y) => {
      posRef.current = { 
        x: x - ghostRef.current.offsetWidth / 2,
        y: y - ghostRef.current.offsetHeight / 2
      };
    };

    const moveGhost = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      gsap.to(posRef.current, {
        x: e.clientX - ghostRef.current.offsetWidth / 2,
        y: e.clientY - ghostRef.current.offsetHeight / 2,
        duration: 0.8,
        ease: "power2.out",
        onUpdate: () => {
          ghostRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
        }
      });
    };

    window.addEventListener("mousemove", moveGhost);
    return () => window.removeEventListener("mousemove", moveGhost);
  }, []);

  // Eye following logic
  useEffect(() => {
    const updateEyes = () => {
      if (!ghostRef.current) return;

      const ghostRect = ghostRef.current.getBoundingClientRect();
      const ghostCenter = {
        x: ghostRect.left + ghostRect.width / 2,
        y: ghostRect.top + ghostRect.height / 2
      };

      eyesRef.current.forEach(eye => {
        const angle = Math.atan2(
          mousePos.y - ghostCenter.y,
          mousePos.x - ghostCenter.x
        );
        
        gsap.to(eye, {
          x: Math.cos(angle) * 4,
          y: Math.sin(angle) * 4,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    };

    gsap.ticker.add(updateEyes);
    return () => gsap.ticker.remove(updateEyes);
  }, [mousePos]);

  // Hover interactions
  useEffect(() => {
    const hoverElements = document.querySelectorAll('a, button, input, [data-hover]');
    
    const handleHoverStart = () => {
      setHovering(true);
      gsap.to(ghostRef.current, { scale: 1.2, duration: 0.3 });
    };
    
    const handleHoverEnd = () => {
      setHovering(false);
      gsap.to(ghostRef.current, { scale: 1, duration: 0.3 });
    };

    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  // Floating animation
  useEffect(() => {
    gsap.to(ghostRef.current, {
      y: "-=10",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <div
      ref={ghostRef}
      className="fixed top-0 left-0 w-12 h-16 pointer-events-none z-50"
      style={{ transform: "translate(0, 0)" }}
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Ghost Body */}
        <div className="relative w-12 h-16 border-gray-300 rounded-t-full shadow-lg transition-all transform origin-bottom">
          {/* Eyes */}
          <div className="absolute top-6 left-1 flex gap-4">
            {[0, 1].map((i) => (
              <div key={i} className="w-4 h-2 bg-transparent overflow-hidden rounded-full">
                <div
                  ref={el => eyesRef.current[i] = el}
                  className="w-3 h-3 bg-black rounded-full relative"
                />
              </div>
            ))}
          </div>

          {/* Mouth */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
            <div className={`w-4 h-2 bg-black rounded-full transition-all duration-300 ${
              hovering ? "scale-125" : "scale-100"
            }`} />
          </div>
          {/* Wavy Bottom */}
          <div className="absolute -bottom-2 left-0 w-full">
            <svg viewBox="0 0 48 12" className="w-full h-4">
              <path 
                d="M0 0 Q12 8 24 0 Q36 8 48 0 L48 12 L0 12 Z" 
                fill="rgba(255,255,255,0.8)"
                className="transition-all duration-500"
              />
            </svg>
          </div>
          {/* Subtle floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="absolute w-1 h-1 bg-white/40 rounded-full"
                style={{
                  top: `${Math.random() * 80}%`,
                  left: `${Math.random() * 90}%`,
                  animation: `float-particle ${3 + i/2}s infinite ease-in-out`
                }}
              />
            ))}
          </div>
        </div>

        {/* Subtle Shadow */}
        <div className="absolute -bottom-4 w-12 h-4 bg-gray-500 blur-lg opacity-50 rounded-full" />
      </div>
    </div>
  );
};

export default GhostCursor;