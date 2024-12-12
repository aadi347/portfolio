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


<div className="relative w-full h-72 bg-white shadow-2xl rounded-3xl flex flex-col items-start justify-center text-lg px-6 py-6 overflow-hidden">
  {/* Video Background */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
  <svg
    id="canvas"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 900 512"
    className="w-full h-full object-cover"
    style={{ width: "100%", height: "72%" }}
  >
    <rect width="900" height="512" fill="transparent" />
    <path
      d="M102.2228782313868 294.2513423220988C68.16146095521918 318.00571527703084 31.41030662433127 338.6228098625554 -10.196443808852393 344.3744021233381C-51.80319424203606 350.12599438412076 -107.70035850163544 349.0822115618596 -147.41762436771512 328.7608958867945C-187.1348902337948 308.43958021172944 -216.0720966166401 256.32655886381474 -248.5000390053305 222.44650807294727C-280.9279813940209 188.5664572820798 -326.3788363726236 168.66010519179974 -341.9852786998576 125.48059114158946C-357.5917210270916 82.30107709137917 -341.7905450615714 11.082577999717614 -342.1386929687346 -36.63057622831445C-342.48684087589777 -84.34373045634652 -358.3009232249476 -125.38642260957599 -344.07416614283693 -160.79833422660312C-329.84740906072625 -196.21024584363025 -286.82218349042853 -219.93128629344403 -256.77815047607055 -249.10204593047726C-226.73411746171263 -278.2728055675105 -207.0860432108376 -319.077280702097 -163.8099680566892 -335.8228920488025C-120.5338929025408 -352.56850339550795 -48.607189063545775 -350.0784762241567 2.878300448819857 -349.57571401071016C54.36378996118549 -349.0729517972636 115.68890995881537 -348.9262904932561 145.1029690175045 -332.8063187681234C174.51702807619358 -316.6863470429907 159.77623108934665 -281.9068245753986 179.3626548009546 -252.85588365991384C198.94907851256255 -223.80494274442907 232.41072557705274 -202.4729416335508 262.6215112871523 -158.50067327521478C292.8322969972519 -114.52840491687877 346.5553803139802 -40.999784586058695 360.6273690615524 10.97772649010227C374.69935780912454 62.955237566263236 374.79599530815165 121.55265353114368 347.0534437725852 153.36439318175098C319.3108922370187 185.17613283235835 234.97715410501974 178.36700620368822 194.17205984815337 201.84816439374617C153.366965591287 225.32932258380413 136.28429550755442 270.4969693671668 102.2228782313868 294.2513423220988Z"
      fill="url(#SvgjsLinearGradient1060)"
    />
    <defs>
      <linearGradient
        gradientTransform="matrix(1,0,0,1,0,0)"
        id="SvgjsLinearGradient1060"
      >
        <stop stopColor="#ec4899" offset="0" />
        <stop stopColor="#ec9b48" offset="1" />
      </linearGradient>
    </defs>
  </svg>
</div>


  {/* Content */}
  <h2 className="relative z-10 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-pink-500 to-purple-600">
    My Projects
  </h2>
  <p className="relative z-10 mt-4 text-sm text-gray-400">
    Here are some of the projects I've worked on. Click to explore the repositories!
  </p>

  <div className="relative z-10 mt-6 space-y-4 w-full">
    {/* Project 1 */}
    <div className="flex justify-start items-center w-full">
      <p className="font-semibold text-md text-gray-500">NEST - Online Rental App</p>
      <a
        href="https://github.com/yourusername/project1"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-teal-500 font-semibold py-2 px-2 rounded-full transition-all ml-4"
      >
        <FaGithub />
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
        <FaGithub />
      </a>
    </div>
  </div>
</div>

      

      <div className="w-full h-24 bg-white shadow-2xl rounded-3xl flex flex-col items-center justify-center text-white text-lg p-4">
  <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-pink-500 to-purple-600">
    Contact
  </h2>
  <p className="mt-2 font-semibold text-gray-500">Email: <span className="font-bold">aadi678a@gmail.com</span></p>
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


