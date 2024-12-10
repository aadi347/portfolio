import React from 'react'
// import Hero from './Hero'
// import Blog from './Blog'
// import Contact from './Contact'
// import About from './About'
// import Projects from './Projects'
// import Skills from './Skills'
import profileImage from "../assets/images/profile-pic (1).png"
import { FaGithub } from 'react-icons/fa';

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
          <p className="text-sm mt-1 text-gray-700">Web Developer | Full-Stack Enthusiast</p>
        </div>
      </div>

      <div className="w-full h-56 bg-blue-900 rounded-3xl col-span-2 flex items-center justify-center text-white text-lg">
        <p>💻 I specialize in building dynamic and responsive web applications using the MERN stack. Let's create something amazing together!</p>
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

      <div className="w-full h-24 bg-blue-600 rounded-3xl flex items-center justify-center text-white text-lg">
        <p>📧 Contact: <span className="font-bold">aditya@example.com</span></p>
      </div>

      <div className="w-full h-24 bg-blue-900 rounded-3xl col-span-2 flex items-center justify-center text-white text-lg">
        <p>🌐 Connect with me: <span className="font-bold">LinkedIn | GitHub | Twitter</span></p>
      </div>
    </div>
  )
}

export default Home;
