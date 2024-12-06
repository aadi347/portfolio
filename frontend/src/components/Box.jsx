// src/components/Box.jsx
import React from "react";

const Box = ({ title, children, customClass }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg ${customClass}`}>
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default Box;
