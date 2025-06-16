"use client";
import React, { useRef } from 'react'
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        "service_tvx7vec",
        "template_2bl951i",
        form.current,
        "Umeo74jr07Sb8Cg5w"       
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current?.reset(); 
        },
        (error) => {
          alert("Failed to send message, please try again.");
        }
      );
    }
  };

  return (
    <section id="contact" className='flex flex-col justify-center items-center w-full h-full max-w-4xl mx-auto mb-30 scroll-mt-25'>
        <div style={{ textAlign: 'center' }}>
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <form id="contact-form" ref={form} onSubmit={sendEmail}>
                <input type='email' name="user_email" placeholder='Your Email' required className=' bg-white border border-gray-300 rounded-lg p-2 mt-4 w-full max-w-md' />
                <textarea name="message" placeholder='Your Message' required className=' bg-white border border-gray-300 rounded-lg p-2 mt-4 w-full max-w-md h-32'></textarea>
                <button type='submit' className='bg-gray-700 text-white rounded-lg p-2 mt-4'>Send Message</button>
            </form>
        </div>
    </section>
  )
}
