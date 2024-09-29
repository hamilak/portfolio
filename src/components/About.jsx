import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen text-white leading-8 p-10 bg-black'>
      <div>
        <div className='flex justify-center border-b mb-4 pb-4'>
          <h3>WHO IS <span className='text-pink-300'>SHE?</span></h3>
        </div>
        <div className='float-left mr-2'>
          <Image src="/mypicture.png" alt="My Picture" className="object-cover w-72 rounded-md" width={1000} height={1000} />
        </div>
        <div>
          <p className='font-semibold'>Once upon a time, in a world full of endless possibilities, I discovered my love for crafting digital experiences. I&apos;m a full-stack developer with a passion for crafting intuitive and efficient applications. I specialize in NestJS, React, Node.js, and Next.js, enabling me to create robust backends and dynamic user interfaces.
          </p>
          <p className='font-semibold'>
            My experience includes working with MongoDB, PostgreSQL, and Docker, and I&apos;m continually exploring new frameworks and technologies to elevate my projects. I also have a keen interest in data science, which drives me to integrate data-driven insights into my development work.
          </p>
          <p className='font-semibold'>
            With a foundational experience in UI design, I strive to ensure that the user experience is both engaging and accessible. I believe in creating solutions that are not only functional but also visually appealing and user-friendly.
          </p>
          <p className='font-semibold'>Let&apos;s collaborate to build something innovative together!</p>
        </div>
      </div>
      <div className='mx-auto w-1/2 text-center mt-10'>
        <a href="/CV.pdf" download>
          <button className='px-4 py-2 rounded-md bg-white text-black hover:bg-pink-300 hover:text-white font-bold'>
            Download CV
          </button>
        </a>
      </div>
    </div>
  )
}

export default About