import React from 'react'
import { BsArrowBarRight } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'

export default function Intro() {
  return (
    <section id="home" className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen scroll-mt-10 mb-30">
      <img src="/car.jfif"  className="rounded-full w-45 h-45 mb-6 shadow-lg" />

      <h1 className="text-3xl font-bold mb-2">Hello, I&apos;m Mr.Lee</h1>
      <p className="text-lg text-center mb-4">
        A passionate frontend developer specializing in React and Next.js.
        <br />
        Crafting beautiful and functional web experiences.
      </p>

      <a href="#contact" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 mb-4">
        Contact Me Here <BsArrowBarRight className="ml-2" />
      </a>
      <div>
        <a
          href="/resume.pdf"
          download
          className='inline-flex items-center bg-gray-600 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition duration-300'
        >
          Download Resume <HiDownload className="ml-2"/>
        </a>
      </div>
    </section>
    
  )
}