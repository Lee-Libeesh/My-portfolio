import React from 'react'
import { skills } from '../data/data'
import {motion} from "framer-motion";

export default function Skills() {
  return (
    <section id='skills' className="scroll-mt-30 mb-50">
        <div style={{ textAlign: 'center' }}>
            <h2 className="text-3xl font-bold mb-4">My Skills</h2>
            <ul className="flex flex-wrap justify-center items-center gap-3 h-50 max-w-100 mt-15 mx-auto">
                {skills.map((skill, idx) => (
                  <li key={idx} className="bg-white px-4 py-2 rounded-lg hover:bg-pink-50">
                    {skill.icon && <span className="mr-2">{skill.icon}</span>}
                    <span>{skill.name}</span>
                  </li>
                ))}
            </ul>
        </div>
    </section>
  )
}
