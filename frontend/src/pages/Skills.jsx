// src/pages/Skills.jsx
import React from "react";
import Box from "../components/Box";
import { FaReact, FaNode, FaDatabase } from "react-icons/fa"; // Example icons

const Skills = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <Box title="Skills" customClass="max-w-6xl w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Skill 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaReact className="text-blue-500 text-4xl" />
            <p className="mt-2 text-gray-600">React</p>
          </div>
          {/* Skill 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaNode className="text-green-500 text-4xl" />
            <p className="mt-2 text-gray-600">Node.js</p>
          </div>
          {/* Skill 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaDatabase className="text-yellow-500 text-4xl" />
            <p className="mt-2 text-gray-600">MongoDB</p>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Skills;
