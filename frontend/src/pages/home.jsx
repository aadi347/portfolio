import React from 'react'
import Hero from './Hero'
import Blog from './Blog'
import Contact from './Contact'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'


const Home = () => {
  return (
    <div className='bg-red-600'>
        <Hero />
        <Blog />
        <Contact />
        <About />
        <Projects />
        <Skills />
    </div>
  )
}

export default Home