import Link from 'next/link'
import React from 'react'
import Hamburger from './Hamburger'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex'>
        {/* Link holder */}
        <div className="hidden md:flex px-40 justify-between text-white">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Portfolio</Link>
            <Link href="/">Contact</Link>
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