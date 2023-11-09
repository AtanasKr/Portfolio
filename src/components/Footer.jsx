import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='text-white pt-7'>
        <hr className='h-1 bg-white'/>
        <p className='text-xl font-bold text-center pt-3'>Follow Me</p>
        <p className='text-lg text-gray-500 font-bold text-center pt-1'>Let us be social!</p>
        <div className='flex flex-row justify-center gap-3 pt-2 pb-3'>
            <Image width={35} height={35} src="/facebook-white.png"/>
            <Image width={35} height={35} src="/github-white.png"/>
            <Image width={35} height={35} src="/instagram-white.png"/>
        </div>
    </div>
  )
}

export default Footer