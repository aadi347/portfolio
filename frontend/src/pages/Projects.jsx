// src/pages/Projects.jsx
import React from "react";
import Box from "../components/Box";

const Projects = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Box title="Projects" customClass="max-w-6xl w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Project Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Project 1: NEST</h3>
            <p className="mt-2 text-gray-600">An online rental platform built with MERN stack.</p>
            <a href="#" className="text-blue-600 mt-4 block">View Project</a>
          </div>
          {/* Add more projects here */}
        </div>
      </Box>
    </div>
  );
};

export default Projects;
