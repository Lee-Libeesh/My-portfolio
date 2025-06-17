import React from 'react'
import { BsArrowBarRight } from 'react-icons/bs'

export default function Projects() {
  return (
    <section id='projects' className='w-1/2 h-full flex flex-col justify-center items-center max-w-4xl mx-auto mb-30 scroll-mt-20'>
        <div style={{ textAlign: 'center' }}>
        <h2 className="text-3xl font-bold mt-20 ">Projects</h2>
        <div className="flex flex-col items-center  mt-20 ">
            <ul>
                <li className="flex items-center h-20  w-3xs px-6 py-3 mt-0 rounded-full transition duration-300  bg-blue-600 text-amber-50 " >
                    <a href="#project1">Object Detection and Measurement
                        <BsArrowBarRight className='ml-25' /> 
                    </a>
                </li>
                <li className="flex items-center h-20 w-3xs px-6 py-3 mt-10 rounded-full transition duration-300  bg-blue-600 text-amber-50  " >
                    <a href="#project2">Day Planner and To-Do List
                        <BsArrowBarRight className='ml-25' />
                    </a>
                </li>

            </ul>
        </div>
        </div>
    </section>
    
  )
}
