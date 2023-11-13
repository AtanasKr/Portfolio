import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <div className='text-center text-white font-bold'>
        <h1 className='text-6xl pt-14 text-transparent bg-clip-text bg-gradient-to-b from-violet-400 to-purple-700'>Portfolio</h1>
        <h1 className='text-6xl pt-10'>Latest Projects</h1>
      </div>
      <div className='pt-5'>
        <div className='flex flex-row text-white bg-slate-800 justify-center mt-5 gap-20 mx-10 rounded-xl py-10 md:mx-[20%] md:gap-52 xl:gap-96'>
          <div className='flex flex-col gap-7 justify-center'>
            <h1 className='text-xl font-bold mb-4'>Project name</h1>
            <p>Project desc</p>
          </div>
          <Image src="/img-placeholder.png" height={100} width={100} className='w-[100px] h-[100px]'/>
        </div>
      </div>
      <div>
        <div className='flex flex-row text-white bg-slate-800 justify-center mt-5 gap-20 mx-10 rounded-xl py-10 md:mx-[20%] md:gap-52 xl:gap-96'>
          <div className='flex flex-col gap-7 justify-center'>
            <h1 className='text-xl font-bold mb-4'>Project name</h1>
            <p>Project desc</p>
          </div>
          <Image src="/img-placeholder.png" height={100} width={100} className='w-[100px] h-[100px]'/>
        </div>
      </div>
      <div>
      <div className='flex flex-row text-white bg-slate-800 justify-center mt-5 gap-20 mx-10 rounded-xl py-10 md:mx-[20%] md:gap-52 xl:gap-96'>
        <div className='flex flex-col gap-7 justify-center'>
          <h1 className='text-xl font-bold mb-4'>Project name</h1>
          <p>Project desc</p>
        </div>
        <Image src="/img-placeholder.png" height={100} width={100} className='w-[100px] h-[100px]'/>
      </div>
    </div>
      <Footer />
    </div>
  )
}

export default Portfolio