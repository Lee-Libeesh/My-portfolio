import React from 'react'
export default function Footer() {
  return (
    <section className='flex flex-col justify-center items-center w-full max-w-4xl mx-auto mb-30 '>
      <div id='footer'>
        <footer>
          <small>
            <p style={{ textAlign: 'center' }}>© 2030 Libeesh Kumar. All rights reserved.<br></br>
              About this website: built with React.js & Next.js along with Typescript, Tailwind CSS, Framer motion and Vercel Hosting.
            </p>
         </small>
        </footer>
      </div>
    </section >
  )
}
