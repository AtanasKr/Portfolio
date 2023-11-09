import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Image width={8} height={2} src="/border-left.png" className='hidden md:flex absolute pt-36 ml-40' />
      <div className='text-center font-bold text-white md:pt-20'>
        <div className='md:flex flex-row justify-between md:px-40 md:bg-slate-800 mx-20 pt-10 pb-20 rounded-xl'>
          <div className='flex flex-col'>
            <h1 className='text-6xl pt-14 text-transparent bg-clip-text bg-gradient-to-b from-violet-400 to-purple-700 md:text-left'>This Is Me</h1>
            <h1 className='text-6xl pt-10 md:text-left'>Atanas Krstev</h1>
          </div>
          <div className='flex justify-center pt-16 hover:opacity-80 md:w-auto md:h-5/6 md:pt-24'><Image width={197} height={69} src="/btn-portfolio.png" /></div>
        </div>
        <h1 className='text-6xl pt-14'>Personal Details</h1>
        <p className='pt-10 text-lg px-20'>I’ve finished my Master’s in computer and software engineering at Technical University Sofia. My main focus is programming in javascript. I enjoy tackling challenging and mind bending tasks. </p>
        <div className='flex justify-center pt-16 hover:opacity-80'><Image width={199} height={59} src="/btn-details.png" /></div>
      </div>
      <Footer />
    </main>
  )
}
