import React from 'react'
// import Hero from './Hero'
// import Blog from './Blog'
// import Contact from './Contact'
// import About from './About'
// import Projects from './Projects'
// import Skills from './Skills'
import profileImage from "../assets/images/profile-pic (1).png"
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import AnimationBg from "../assets/images/Animation - 1733897788342.webm"
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="grid grid-cols-3 xl:grid-cols-3 gap-4 px-16 py-4">
      {/* profile section */}
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-56 rounded-3xl flex items-center text-white p-4 bg-white shadow-2xl"
    >
      <img
        src={profileImage}
        alt="Aditya Kumar"
        className="w-36 h-36 rounded-full border-1 border-white mr-4"
      />
      <div>
        <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-pink-500 to-purple-600">
          Aditya Kumar
        </h1>
        <p className="text-sm text-gray-400">Welcome to My Portfolio!</p>
        <p className="text-sm mt-1 text-gray-700">Web Developer | Full-Stack</p>
      </div>
    </motion.div>

    <motion.div
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      whileHover={{ scale: 1.02, rotate: 1 }}
      transition={{ type: "spring", stiffness: 50, damping: 10 }}
      className="w-full h-56 bg-white shadow-2xl rounded-3xl col-span-2 flex flex-col items-center justify-center text-gray-700 text-lg px-4"
    >
      <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-pink-500 to-purple-600">
        About Us
      </h2>
      <p className="mt-4 mx-4 text-sm text-left text-gray-500">
        Back in 2012, I got my first computer solely to play games. That
        experience sparked a deep fascination with computers, and ever since,
        I've dreamed of developing my own game.
      </p>
      <p className="my-4 mx-4 text-sm text-left text-gray-500">
        Hey there, This is Aditya Kumar. I am passionate about creating websites
        that meet and exceed my clients' expectations. My technical expertise
        includes JavaScript, Node.js, Express.js, React.js, MongoDB, and
        PostgreSQL. I have comprehensive experience in all stages of the
        development cycle for modern, dynamic website designs, ensuring that I
        deliver high-quality results tailored to each client's needs.
      </p>
    </motion.div>


    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, damping: 10 }}
      className="w-full h-72 bg-white shadow-2xl rounded-3xl col-span-2 flex flex-col items-center justify-center px-4 text-center"
    >
      <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-pink-500 to-purple-600 mb-4">
        Skills & Expertise
      </h2>
      <ul className="flex justify-center space-x-4 text-md">
        <li>Full-Stack Development (MERN)</li>
        <li className="text-gray-300">|</li>
        <li>Blockchain & Smart Contracts</li>
        <li className="text-gray-300">|</li>
        <li>Responsive Design & UI/UX</li>
      </ul>

      <div className="mt-4 flex flex-wrap justify-center space-x-4">
        {["JavaScript", "React", "Node.js", "Express", "MongoDB", "Git", "Blockchain"].map(
          (skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 50 }}
              whileHover={{ scale: 1.2 }}
              className="px-4 py-2 text-sm font-medium text-white shadow-xl bg-purple-600 rounded-full"
            >
              {skill}
            </motion.span>
          )
        )}
      </div>
    </motion.div>


    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full h-72 bg-white shadow-xl rounded-3xl flex flex-col items-start justify-center text-lg px-6 py-6 overflow-hidden"
    >
      {/* Animated SVG Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
      >
        <svg
          id="canvas"
          height="auto"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 900 512"
          width="auto"
          style={{ width: "auto", height: "100%" }}
        >
          {/* Add rotation animation for each shape */}
          <motion.g
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            transform="matrix(0.8,0,0,0.8,120.39999999999998,31.120001220703116)"
          >
            <path
              d="M291 448.5L369.5 2L2 448.5H291Z"
              fill="url(#SvgjsLinearGradient1016)"
              transform="matrix(1,0,0,1,600,153.59999999999997)"
            />
            <path
              d="M290.5 448L370 2.5L708.5 448H290.5Z"
              fill="url(#SvgjsLinearGradient1017)"
              transform="matrix(1,0,0,1,600,153.59999999999997)"
            />
          </motion.g>
        </svg>
      </motion.div>

      {/* Content */}
      <h2 className="relative z-10 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-pink-500 to-purple-600">
        My Projects
      </h2>
      <p className="relative z-10 mt-4 text-sm text-gray-400">
        Here are some of the projects I've worked on. 
        <br></br>Click to explore the repositories!
      </p>

      <div className="relative z-10 mt-6 space-y-4 w-full">
        {/* Project 1 */}
        <div className="flex justify-start items-center w-full">
          <motion.p
            whileHover={{ color: "#06b6d4", scale: 1.05 }}
            className="font-semibold text-md text-gray-500 transition-all"
          >
            NEST - Online Rental App
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 15 }}
            href="https://github.com/yourusername/project1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-teal-500 font-semibold py-2 px-2 rounded-full transition-all ml-4"
          >
            <FaGithub />
          </motion.a>
        </div>

        {/* Project 2 */}
        <div className="flex justify-start items-center w-full">
          <motion.p
            whileHover={{ color: "#06b6d4", scale: 1.05 }}
            className="font-semibold text-md text-gray-500 transition-all"
          >
            Portfolio
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 15 }}
            href="https://github.com/yourusername/project2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-teal-500 font-semibold py-2 px-2 rounded-full transition-all ml-4"
          >
            <FaGithub />
          </motion.a>
        </div>
      </div>
    </motion.div>

      
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
      }}
      className="w-full h-24 bg-white shadow-2xl rounded-3xl flex flex-col items-center justify-center text-white text-lg p-4 transition-transform duration-300"
    >
      <motion.h2
        whileHover={{
          textShadow: "0px 0px 8px rgba(236, 72, 153, 0.6)",
        }}
        className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-pink-500 to-purple-600"
      >
        Contact
      </motion.h2>
      <motion.p
        whileHover={{
          scale: 1.1,
          color: "#06b6d4",
        }}
        className="mt-2 font-semibold text-gray-500"
      >
        Email: <span className="font-bold">aadi678a@gmail.com</span>
      </motion.p>
    </motion.div>


    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full h-24 bg-white shadow-2xl rounded-3xl col-span-2 flex items-center justify-center text-white text-lg"
    >
      <div className="flex items-center space-x-10 mt-2">
        <motion.a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 15 }}
        >
          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center transition-all">
            <FaTwitter className="text-white text-2xl" />
          </div>
        </motion.a>

        <motion.a
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: -15 }}
        >
          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center transition-all">
            <FaInstagram className="text-white text-2xl" />
          </div>
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 10 }}
        >
          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center transition-all">
            <FaLinkedin className="text-white text-2xl" />
          </div>
        </motion.a>
      </div>
    </motion.div>



    </div>
  )
}

export default Home;


