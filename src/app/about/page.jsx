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
        <p className='pt-10 text-lg px-20 text-white text-center md:ml-20 md:mr-20 font-bold'>I’ve finished my Master’s in computer and software engineering at Technical University Sofia. My main focus is programming in javascript. I enjoy tackling challenging and mind bending tasks. </p>
      </div>
      <Image width={10} height={20} src="/border-left.png" className='hidden md:flex absolute pt-[20em] ml-[50%] md:w-2 md:h-[800px]' />
      <div className='flex justify-center pt-16 hover:opacity-80'><Link href="/portfolio"><Image width={200} height={59} src="/btn-portfolio.png" /></Link></div>
      <h1 className='text-white text-center text-3xl font-bold pt-10'>My road so far</h1>
      <div className='pt-5 flex flex-col items-center gap-10 mx-10'>
        <div className='text-white text-center flex flex-col p-8 bg-slate-800 rounded-3xl max-w-[300px] md:ml-[50%]'>
          <h1 className='font-bold text-xl'>Diploma in Information Technology, English and Math</h1>
          <p className='pt-4'><strong>Session:</strong> 2013-2018</p>
        </div>
        <div className='text-white text-center flex flex-col p-8 bg-slate-800 rounded-3xl max-w-[300px] md:mr-[50%]'>
          <h1 className='font-bold text-xl'>Bachelor in Computer and Software Engineering (TU Sofia)</h1>
          <p className='pt-4'><strong>Session:</strong> 2018-2022</p>
        </div>
        <div className='text-white text-center flex flex-col p-8 bg-slate-800 rounded-3xl max-w-[300px] md:ml-[50%]'>
          <h1 className='font-bold text-xl'>Master’s in Computer and Software Engineering (TU Sofia)</h1>
          <p className='pt-4'><strong>Session:</strong> 2022-2023</p>
        </div>
      </div>
      <h1 className='text-white text-center text-3xl font-bold pt-10'>Experience</h1>
      <div className='pt-5 flex flex-col md:flex md:flex-row justify-center items-center gap-10'>
        <div className='text-white text-center flex flex-col p-8 bg-slate-800 rounded-3xl max-w-[300px] max-h-[175px]'>
          <h1 className='font-bold text-xl'>Auxcode Intenrship (University Internship)</h1>
          <p className='pt-4'><strong>Android dev Internship</strong></p>
          <p className='pt-4'><strong>Duration:</strong> 1 month</p>
        </div>
        <div className='text-white text-center flex flex-col p-8 bg-slate-800 rounded-3xl max-w-[300px] max-h-[175px]'>
          <h1 className='font-bold text-xl'>Ipsos</h1>
          <p className='pt-4'><strong>Javascript Survey dev</strong></p>
          <p className='pt-4'><strong>Duration:</strong> 21.10.2021 - Ongoing</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About