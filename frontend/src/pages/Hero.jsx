// src/pages/Hero.jsx
import React from "react";
import Box from "../components/Box";

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Box title="Hero Section" customClass="max-w-lg mx-auto text-center">
        <h1 className="text-4xl font-bold text-yellow-500">Aditya Kumar</h1>
        <p className="text-lg text-gray-600 mt-2">MERN Developer</p>
        <p className="text-sm text-gray-500 mt-2">
          Passionate about building dynamic web applications with the MERN stack.
        </p>
      </Box>
    </div>
  );
};

export default Hero;
