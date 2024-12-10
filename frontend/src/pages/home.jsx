import React from 'react'
// import Hero from './Hero'
// import Blog from './Blog'
// import Contact from './Contact'
// import About from './About'
// import Projects from './Projects'
// import Skills from './Skills'
import profileImage from "../assets/images/profile-pic (1).png"
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="grid grid-cols-3 xl:grid-cols-3 gap-4 px-16 py-4">
      {/* profile section */}
      <div className="w-full h-56 rounded-3xl flex items-center text-white p-4 bg-white shadow-2xl">
        <img 
          src={profileImage} 
          alt="Aditya Kumar" 
          className="w-36 h-36 rounded-full border-1 border-white mr-4"
        />
        <div>
          <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-pink-500 to-purple-600">Aditya Kumar</h1>
          <p className="text-sm text-gray-400">Welcome to My Portfolio!</p>
          <p className="text-sm mt-1 text-gray-700">Web Developer | Full-Stack </p>
        </div>
      </div>

      <div className="w-full h-56 bg-white shadow-2xl rounded-3xl col-span-2 flex flex-col items-center justify-center text-gray-700 text-lg px-4">
  <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-pink-500 to-purple-600">
    About Us
  </h2>
  <p className="mt-4 mx-4 text-sm text-left text-gray-500">
    Back in 2012, I got my first computer solely to play games. That experience sparked a deep fascination with computers, and ever since, I've dreamed of developing my own game.
  </p>
  <p className="my-4 mx-4 text-sm text-left text-gray-500">
    Hey there, This is Aditya Kumar. I am passionate about creating websites that meet and exceed my clients' expectations. My technical expertise includes JavaScript, Node.js, Express.js, React.js, MongoDB, and PostgreSQL. I have comprehensive experience in all stages of the development cycle for modern, dynamic website designs, ensuring that I deliver high-quality results tailored to each client's needs.
  </p>
</div>


      <div className="w-full h-72 bg-white shadow-2xl rounded-3xl col-span-2 flex flex-col items-center justify-center px-4 text-center">
       <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-pink-500 to-purple-600 mb-4">
       Skills & Expertise
       </h2>
  <ul className="flex justify-center space-x-4 text-md">
    <li>Full-Stack Development (MERN)</li>
    <li className='text-gray-300'>|</li>
    <li>Blockchain & Smart Contracts</li>
    <li className='text-gray-300'>|</li>
    <li>Responsive Design & UI/UX</li>
  </ul>

  <div className="mt-4 flex flex-wrap justify-center space-x-4">
    <span className="px-4 py-2 text-sm font-medium text-white shadow-xl bg-purple-600 rounded-full">JavaScript</span>
    <span className="px-4 py-2 text-sm font-medium text-white shadow-xl bg-purple-600 rounded-full">React</span>
    <span className="px-4 py-2 text-sm font-medium text-white shadow-xl bg-purple-600 rounded-full">Node.js</span>
    <span className="px-4 py-2 text-sm font-medium text-white shadow-xl bg-purple-600 rounded-full">Express</span>
    <span className="px-4 py-2 text-sm font-medium text-white shadow-xl bg-purple-600 rounded-full">MongoDB</span>
    <span className="px-4 py-2 text-sm font-medium text-white shadow-xl bg-purple-600 rounded-full">Git</span>
    <span className="px-4 py-2 text-sm font-medium text-white shadow-xl bg-purple-600 rounded-full">Blockchain</span>
  </div>
</div>


      <div className="w-full h-72 bg-white shadow-2xl rounded-3xl flex flex-col items-start justify-center text-lg px-6 py-6">
        <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-pink-500 to-purple-600">
          My Projects
        </h2>
        <p className="mt-4 text-sm text-gray-400">Here are some of the projects I've worked on. Click to explore the repositories!</p>

        <div className="mt-6 space-y-4 w-full">
          {/* Project 1 */}
          <div className="flex justify-start items-center w-full">
            <p className="font-semibold text-md text-gray-500">NEST - Online Rental App</p>
            <a
              href="https://github.com/yourusername/project1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-teal-500 font-semibold py-2 px-2 rounded-full transition-all ml-4"
            >
              <FaGithub className="" />
            </a>
          </div>

          {/* Project 2 */}
          <div className="flex justify-start items-center w-full">
            <p className="font-semibold text-md text-gray-500">Portfolio</p>
            <a
              href="https://github.com/yourusername/project2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-teal-500 font-semibold py-2 px-2 rounded-full transition-all ml-4"
            >
              <FaGithub className="" />
            </a>
          </div>

          {/* Add more projects as needed */}
        </div>
      </div>

      <div className="w-full h-24 bg-white shadow-2xl rounded-3xl flex flex-col items-center justify-center text-white text-lg p-4">
  <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-pink-500 to-purple-600">
    Contact
  </h2>
  <p className="mt-2 font-semibold text-gray-500">Email: <span className="font-bold">aditya@example.com</span></p>
</div>



<div className="w-full h-24 bg-white shadow-2xl rounded-3xl col-span-2 flex items-center justify-center text-white text-lg">
  {/* <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-pink-500 to-purple-600">
    Connect with me:
  </h2> */}
  <div className="flex items-center space-x-10 mt-2">
    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
        <FaTwitter className="text-white text-2xl" />
      </div>
    </a>
    <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
        <FaInstagram className="text-white text-2xl" />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
        <FaLinkedin className="text-white text-2xl" />
      </div>
    </a>
  </div>
</div>


    </div>
  )
}

export default Home;


