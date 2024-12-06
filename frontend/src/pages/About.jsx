// src/pages/About.jsx
import React from "react";
import Box from "../components/Box";

const About = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <Box title="About Me" customClass="max-w-4xl mx-auto">
        <p className="text-lg text-gray-600">
          Hi, I'm Aditya Kumar, a passionate MERN stack developer. I specialize in building dynamic web
          applications and enjoy solving complex problems through code. My key skills include React, Node.js, Express, MongoDB, and more.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          I am always excited to learn new technologies and improve my skills in the ever-evolving tech world.
        </p>
      </Box>
    </div>
  );
};

export default About;
