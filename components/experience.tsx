"use client";
import React from 'react'
import { experiences, Experiences } from '../data/data'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { BsBriefcase } from 'react-icons/bs';
import 'react-vertical-timeline-component/style.min.css';



export default function Experience() {
  return (
     <section id='experience' className='w-full h-full flex flex-col justify-center items-center max-w-4xl mx-auto mb-70 scroll-mt-25'>
        <div style={{ textAlign: 'center' }}>
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <VerticalTimeline>
                {experiences.map((experience, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        date={experience.duration}
                        iconStyle={{ background: 'rgb(0, 0, 255)', color: '#fff', textAlign: 'justify' }}
                        icon={<BsBriefcase />}>
                    
                        <h3 className="vertical-timeline-element-title  font-bold text-lg">{experience.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle font-semibold italic">{experience.company}</h4>
                        <h5 style={{ fontFamily: 'sans-serif' }}>{experience.description}</h5>
                    </VerticalTimelineElement>
                ))}

            </VerticalTimeline>
        </div>
    </section>
  )
}
