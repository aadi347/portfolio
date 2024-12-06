// src/pages/Blog.jsx
import React from "react";
import Box from "../components/Box";

const Blog = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Box title="Blog" customClass="max-w-4xl mx-auto">
        <p className="text-center text-lg text-gray-600">
          Here, I share my insights and experiences about web development, tech trends, and more.
        </p>
        <p className="text-center text-lg text-gray-600 mt-4">
          Stay tuned for articles!
        </p>
      </Box>
    </div>
  );
};

export default Blog;
