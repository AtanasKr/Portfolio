import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='text-center text-white font-bold'>
        <h1 className='text-6xl pt-14 text-transparent bg-clip-text bg-gradient-to-b from-violet-400 to-purple-700'>About Me</h1>
        <h1 className='text-6xl pt-10'>Personal Details</h1>
      </div>
      <div>
        <div className='flex justify-center pt-14 text-white'>
          <Image src="/prof-picture.png" width={200} height={200} />
        </div>
        <p className='pt-10 text-lg px-20 text-white text-center'>I’ve finished my Master’s in computer and software engineering at Technical University Sofia. My main focus is programming in javascript. I enjoy tackling challenging and mind bending tasks. </p>
      </div>
      <div className='flex justify-center pt-16 hover:opacity-80'><Link href="/about"><Image width={199} height={59} src="/btn-portfolio.png" /></Link></div>
      <div className='pt-5'>
        <div className='text-white text-center flex flex-col mt-5 ml-5 mr-5 p-10 bg-slate-800 rounded-3xl '>
          <h1 className='font-bold text-xl'>Diploma in Information Technology, English and Math</h1>
          <p className='pt-4'><strong>Session:</strong> 2013-2018</p>
        </div>
        <div className='text-white text-center flex flex-col mt-5 ml-5 mr-5 p-10 bg-slate-800 rounded-3xl '>
          <h1 className='font-bold text-xl'>Diploma in Information Technology, English and Math</h1>
          <p className='pt-4'><strong>Session:</strong> 2013-2018</p>
        </div>
        <div className='text-white text-center flex flex-col mt-5 ml-5 mr-5 p-10 bg-slate-800 rounded-3xl '>
          <h1 className='font-bold text-xl'>Diploma in Information Technology, English and Math</h1>
          <p className='pt-4'><strong>Session:</strong> 2013-2018</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About