import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='text-white pt-7'>
        <hr className='h-1 bg-white'/>
        <p className='text-xl font-bold text-center pt-3'>Follow Me</p>
        <p className='text-lg text-gray-500 font-bold text-center pt-1'>Let us be social!</p>
        <div className='flex flex-row justify-center gap-3 pt-2 pb-3'>
            <Link href="https://www.facebook.com/atanas.krstev.9"><Image width={35} height={35} src="/facebook-white.png"/></Link>
            <Link href="https://github.com/AtanasKr"><Image width={35} height={35} src="/github-white.png"/></Link>
            <Link href="https://www.instagram.com/atanas.krstev.9/"><Image width={35} height={35} src="/instagram-white.png"/></Link>
        </div>
    </div>
  )
}

export default Footer