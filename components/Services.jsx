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
import React from 'react'

const Services = () => {
  return (
    <div>
      
    </div>
  )
}

export default Services
