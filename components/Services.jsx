// "use client";
// import { useEffect, useRef, useState } from "react";
// import { Canvas, useThree } from "@react-three/fiber";
// import { TextureLoader, LinearFilter } from "three";
// import avatar_img from "@/public/avatar_1.jpg";
// import gsap from "gsap";
// import Image from "next/image";

// // Image Data
// const slides = [
//   { image: "/leopard2.jpg", title: "Amur <br> Leopard", status: "Critically Endangered" },
//   { image: "/AI.jpg", title: "Asiatic <br> Lion", status: "Endangered" },
//   { image: "/leopard2.jpg", title: "Siberian <br> Tiger", status: "Endangered" },
//   { image: "/bear2.jpg", title: "Brown <br> Bear", status: "Least Concern" },
// ];

// const vertexShader = `
//   varying vec2 vUv;
//   void main() {
//     vUv = uv;
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//   }
// `;

// const fragmentShader = `
//   varying vec2 vUv;
//   uniform sampler2D currentImage;
//   uniform sampler2D nextImage;
//   uniform float dispFactor;

//   void main() {
//     vec2 uv = vUv;
//     vec4 _currentImage = texture2D(currentImage, uv);
//     vec4 _nextImage = texture2D(nextImage, uv);
//     vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
//     gl_FragColor = finalTexture;
//   }
// `;

// const DisplacementSlider = () => {
//   const [textures, setTextures] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const sliderRef = useRef();
//   const titleRef = useRef();
//   const statusRef = useRef();

//   // Load Images
//   useEffect(() => {
//     const loader = new TextureLoader();
//     const loadedTextures = slides.map((slide) => {
//       const texture = loader.load(slide.image);
//       texture.magFilter = texture.minFilter = LinearFilter;
//       return texture;
//     });
//     setTextures(loadedTextures);
//   }, []);

//   const handleSlideChange = (index) => {
//     if (sliderRef.current && textures.length > 0) {
//       const material = sliderRef.current.material;

//       // Animate displacement transition
//       gsap.to(material.uniforms.dispFactor, {
//         value: 1,
//         duration: 1,
//         ease: "expo.inOut",
//         onComplete: () => {
//           // Force texture update and reset displacement
//           material.uniforms.currentImage.value = textures[index];
//           material.uniforms.nextImage.value = textures[(index + 1) % textures.length]; // Update next image
//           material.uniforms.dispFactor.value = 0; // Reset displacement
//           setCurrentIndex(index);
//         },
//       });

//       // Animate text change
//       gsap.to(titleRef.current, {
//         opacity: 0,
//         y: -20,
//         duration: 0.5,
//         onComplete: () => {
//           titleRef.current.innerHTML = slides[index].title;
//           gsap.to(titleRef.current, { opacity: 1, y: 0, duration: 0.5 });
//         },
//       });

//       gsap.to(statusRef.current, {
//         opacity: 0,
//         y: 10,
//         duration: 0.5,
//         onComplete: () => {
//           statusRef.current.innerText = slides[index].status;
//           gsap.to(statusRef.current, { opacity: 1, y: 0, duration: 0.5 });
//         },
//       });
//     }
//   };


//   return (
//     <div className="relative w-full h-screen bg-gray-900 flex items-center justify-center font-karla">
//       {/* Three.js Canvas */}
//       <Canvas className="absolute w-full h-full">
//         {textures.length > 1 && (
//           <mesh ref={sliderRef}>
//             <planeGeometry args={[2, 2]} />
//             <shaderMaterial
//               uniforms={{
//                 dispFactor: { value: 0 },
//                 currentImage: { value: textures[currentIndex] },
//                 nextImage: { value: textures[(currentIndex + 1) % textures.length] },
//               }}
//               vertexShader={vertexShader}
//               fragmentShader={fragmentShader}
//               transparent={true}
//             />
//           </mesh>
//         )}
//       </Canvas>

//       {/* Text Overlay */}
//       <div className="absolute text-white text-center top-1/4 w-full px-6">
//         <div className="text-lg uppercase opacity-70">Species</div>
//         <h2
//           ref={titleRef}
//           className="text-6xl font-bold leading-tight"
//           dangerouslySetInnerHTML={{ __html: slides[currentIndex].title }}
//         />
//         <div className="text-lg uppercase mt-4 opacity-70">Status</div>
//         <div ref={statusRef} className="text-2xl font-medium mt-2">
//           {slides[currentIndex].status}
//         </div>
//       </div>

//       {/* Pagination Buttons */}
//       <div className="absolute bottom-10 flex gap-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handleSlideChange(index)}
//             className={`w-4 h-4 rounded-full transition-all ${
//               currentIndex === index ? "bg-white scale-125" : "bg-gray-500"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DisplacementSlider;
'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';

// Data for multiple cards
const cardsData = [
  {
    title: "Osaka",
    image: "https://assets.codepen.io/605876/do-not-copy-osaka-sky.jpeg",
    subImage: "https://assets.codepen.io/605876/do-not-copy-osaka-tower.png",
    description: "Osaka, Japan",
  },
  {
    title: "Kyoto",
    image: "https://assets.codepen.io/605876/do-not-copy-osaka-sky.jpeg",
    subImage: "https://assets.codepen.io/605876/do-not-copy-osaka-tower.png",
    description: "Kyoto, Japan",
  },
];

const ParallaxEffect = () => {
  // Function to handle parallax effect for each card
  const updateParallax = (cardRef, x, y) => {
    if (cardRef.current) {
      gsap.set(cardRef.current, {
        '--x': gsap.utils.mapRange(0, cardRef.current.clientWidth, -1, 1, x),
        '--y': gsap.utils.mapRange(0, cardRef.current.clientHeight, -1, 1, y),
      });
    }
  };

  return (
    <>
      <div className="text-center mb-8  my-10">
        <div className="inline-flex items-center gap-2 px-4 py-1 shadow-md rounded-full text-gray-700 text-sm font-medium">
          <Image
            src="/icon/magic.png"
            width={20}
            height={20}
            alt="Magic Icon"
          />
          Who We are ?
        </div>
        <Fade direction="down" triggerOnce duration={1000} delay={9}>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-4">
            Our Services
          </h2>
        </Fade>
      </div>
      <div className="flex gap-20 justify-center">
        {cardsData.map((card, index) => {
          const cardRef = useRef();

          useEffect(() => {
            const update = ({ clientX: x, clientY: y }) => updateParallax(cardRef, x, y);

            const handleMouseEnter = () => {
              window.addEventListener('pointermove', update);
            };

            const handleMouseLeave = () => {
              window.removeEventListener('pointermove', update);
            };

            const cardElement = cardRef.current;
            cardElement.addEventListener('mouseenter', handleMouseEnter);
            cardElement.addEventListener('mouseleave', handleMouseLeave);

            return () => {
              cardElement.removeEventListener('mouseenter', handleMouseEnter);
              cardElement.removeEventListener('mouseleave', handleMouseLeave);
            };
          }, []);

          return (
            <div
              ref={cardRef}
              key={index}
              className="relative w-[600px] max-w-[calc(100%-2rem)] aspect-[2/1.1] min-h-[330px] overflow-hidden rounded-[4em]"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[680px] object-cover saturate-[1.5] brightness-[0.9] pointer-events-none select-none"
                style={{
                  objectPosition: `calc(50% + (var(--x) * 0px)) calc(43% + (var(--y) * -20px))`,
                }}
              />
              <h3
                className="absolute left-1/2 top-[6%] text-[8rem] uppercase font-['Bebas_Neue'] text-white pointer-events-none select-none"
                style={{
                  transform: 'translate(calc(-50% + (var(--x) * -30px)), calc(var(--y) * -20px))',
                }}
              >
                {card.title}
              </h3>
              <img
                src={card.subImage}
                alt={`${card.title} Sub Image`}
                className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[660px] object-cover pointer-events-none select-none"
                style={{
                  objectPosition: `calc(-50% + (var(--x) * 40px)) calc(43% + (var(--y) * -40px))`,
                }}
              />
              <div className="absolute inset-[60%_0_-26%_0] overflow-hidden blur-[20px]">
                <img
                  src={card.image}
                  alt="Blurred"
                  className="absolute bottom-[25%] left-1/2 h-[330px] w-[660px] -translate-x-1/2 object-cover saturate-[1.5] brightness-[0.8]"
                  style={{
                    objectPosition: `calc(-50% + (var(--x) * 40px)) calc(47.5% + (var(--y) * -40px))`,
                    maskImage: 'radial-gradient(50% 100% at 50% 90%, white 50%, transparent)',
                    WebkitMaskImage: 'radial-gradient(50% 100% at 50% 90%, white 50%, transparent)',
                  }}
                />
              </div>
              <div className="absolute bottom-0 grid min-h-[32%] w-full place-items-center content-center gap-1 pb-2 text-white">
                <span className="absolute top-4 left-1/2 h-0.5 w-[6ch] -translate-x-1/2 bg-white" />
                <p className="relative m-0 flex items-center gap-2 text-[1.2rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
                    />
                  </svg>
                  <span>{card.description}</span>
                </p>
                <p className="m-0 opacity-80">{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-20 justify-center my-20">
        {cardsData.map((card, index) => {
          const cardRef = useRef();

          useEffect(() => {
            const update = ({ clientX: x, clientY: y }) => updateParallax(cardRef, x, y);

            const handleMouseEnter = () => {
              window.addEventListener('pointermove', update);
            };

            const handleMouseLeave = () => {
              window.removeEventListener('pointermove', update);
            };

            const cardElement = cardRef.current;
            cardElement.addEventListener('mouseenter', handleMouseEnter);
            cardElement.addEventListener('mouseleave', handleMouseLeave);

            return () => {
              cardElement.removeEventListener('mouseenter', handleMouseEnter);
              cardElement.removeEventListener('mouseleave', handleMouseLeave);
            };
          }, []);

          return (
            <div
              ref={cardRef}
              key={index}
              className="relative w-[600px] max-w-[calc(100%-2rem)] aspect-[2/1.1] min-h-[330px] overflow-hidden rounded-[4em]"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[680px] object-cover saturate-[1.5] brightness-[0.9] pointer-events-none select-none"
                style={{
                  objectPosition: `calc(50% + (var(--x) * 0px)) calc(43% + (var(--y) * -20px))`,
                }}
              />
              <h3
                className="absolute left-1/2 top-[6%] text-[8rem] uppercase font-['Bebas_Neue'] text-white pointer-events-none select-none"
                style={{
                  transform: 'translate(calc(-50% + (var(--x) * -30px)), calc(var(--y) * -20px))',
                }}
              >
                {card.title}
              </h3>
              <img
                src={card.subImage}
                alt={`${card.title} Sub Image`}
                className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[660px] object-cover pointer-events-none select-none"
                style={{
                  objectPosition: `calc(-50% + (var(--x) * 40px)) calc(43% + (var(--y) * -40px))`,
                }}
              />
              <div className="absolute inset-[60%_0_-26%_0] overflow-hidden blur-[20px]">
                <img
                  src={card.image}
                  alt="Blurred"
                  className="absolute bottom-[25%] left-1/2 h-[330px] w-[660px] -translate-x-1/2 object-cover saturate-[1.5] brightness-[0.8]"
                  style={{
                    objectPosition: `calc(-50% + (var(--x) * 40px)) calc(47.5% + (var(--y) * -40px))`,
                    maskImage: 'radial-gradient(50% 100% at 50% 90%, white 50%, transparent)',
                    WebkitMaskImage: 'radial-gradient(50% 100% at 50% 90%, white 50%, transparent)',
                  }}
                />
              </div>
              <div className="absolute bottom-0 grid min-h-[32%] w-full place-items-center content-center gap-1 pb-2 text-white">
                <span className="absolute top-4 left-1/2 h-0.5 w-[6ch] -translate-x-1/2 bg-white" />
                <p className="relative m-0 flex items-center gap-2 text-[1.2rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
                    />
                  </svg>
                  <span>{card.description}</span>
                </p>
                <p className="m-0 opacity-80">{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ParallaxEffect;


