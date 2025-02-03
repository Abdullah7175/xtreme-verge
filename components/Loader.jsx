"use client";
import React from "react";

const Loader = () => {
  return (
    <div className="wrapper fixed inset-0 z-10 bg-black flex items-center justify-center">
      <img
        src="/logo.png"
        alt="Logo"
        className="w-[20%] h-[40vh] animate-pulse"
      />
    </div>
  );
};

export default Loader;
