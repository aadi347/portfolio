import React from 'react'
// import Hero from './Hero'
// import Blog from './Blog'
// import Contact from './Contact'
// import About from './About'
// import Projects from './Projects'
// import Skills from './Skills'


const Home = () => {
  return (
<div className="grid grid-cols-3 xl:grid-cols-3 gap-4 px-16 py-4">
    <div className="w-full h-56 bg-blue-600 rounded-3xl"></div>
    <div className="w-full h-56 bg-blue-900 rounded-3xl col-span-2"></div>
    <div className="w-full h-72 bg-blue-900 rounded-3xl col-span-2"></div>
    <div className="w-full h-72 bg-blue-600 rounded-3xl"></div>
    <div className="w-full h-24 bg-blue-600 rounded-3xl"></div>
    <div className="w-full h-24 bg-blue-900 rounded-3xl col-span-2"></div>
</div>


  )
}

export default Home