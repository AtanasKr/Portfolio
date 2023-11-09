import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className='text-center font-bold text-white'>
        <h1 className='text-6xl pt-14 text-transparent bg-clip-text bg-gradient-to-b from-violet-400 to-purple-700'>This Is Me</h1>
        <h1 className='text-6xl pt-10'>Atanas Krstev</h1>
        <div className='flex justify-center pt-16 hover:opacity-80'><Image width={197} height={69} src="/btn-portfolio.png" /></div>
        <h1 className='text-6xl pt-14'>Personal Details</h1>
        <p className='pt-10 text-lg px-20'>I’ve finished my Master’s in computer and software engineering at Technical University Sofia. My main focus is programming in javascript. I enjoy tackling challenging and mind bending tasks. </p>
        <div className='flex justify-center pt-16 hover:opacity-80'><Image width={199} height={59} src="/btn-details.png" /></div>
      </div>
      <Footer/>
    </main>
  )
}
