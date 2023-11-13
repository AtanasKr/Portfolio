import Link from 'next/link'
import React from 'react'
import Hamburger from './Hamburger'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex-row'>
        {/* Link holder */}
        <div className="hidden md:flex md:flex-row justify-between px-40 pt-10 lg:px-80 text-white">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
        </div>
            {/* Hamburger */}
            <div className='p-7 md:hidden'>
                <Hamburger/>
            </div>
            {/* Theme button */}
            <div className=' absolute top-8 right-4 h-16 w-16'>
                <Image width={50} height={50} src="/theme-light-button.png"/>
            </div>
    </div>
  )
}

export default Navbar