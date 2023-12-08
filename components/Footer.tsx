import { FOOTER_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flexCenter h-[3rem] bg-gray-200 w-[100%]'>
      <div className='flexEnd'>
        <Image 
          src="/logo.png"
          alt="logo"
          width={40}
          height={40}
        />
        <p className='pl-1 text-xs items-end'>© 2023 CliniTrak</p>
        <ul className='items-end'>
          {FOOTER_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className='text-xs text-gray-700 cursor-pointer ml-2 pb-1.5 transition-all hover:font-medium'>
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer