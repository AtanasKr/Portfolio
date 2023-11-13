'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import Link from 'next/link';

const Hamburger = () => {
    const [open, setOpen] = useState(false);
  return (
    <div>
        {!open?<Image src="/open-burger.png" width={50} height={50} onClick={()=>setOpen(true)}/>:<Image src="/close-burger.png" width={50} height={50} onClick={()=>setOpen(false)}/>}
        {open&&
        <div className='flex flex-col absolute justify-center items-center text-white p-2 bg-stone-600 rounded-md'>
            <Link className='py-1' href="/">Home</Link>
            <Link className='py-1' href="/about">About</Link>
            <Link className='py-1' href="/portfolio">Portfolio</Link>
            <Link className='py-1' href="/contact">Contact</Link>    
        </div>}
    </div>
  )
}

export default Hamburger