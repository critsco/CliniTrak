'use client'

import { Link } from '@nextui-org/react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='flex bg-blue-900 sidenav-container overflow-hidden fixed'>
      <div className='bg-blue-500 sidenav-column'>
        <Link href='/dashboard' className='test'>
          <Image src="/images/layout-dashboard.svg" alt='dashboard' width={40} height={40} className='p-[6px]' />
          <p className={`${pathname === "/dashboard" ? "active" : "inactive"}`}>Dashboard</p>
        </Link>
        <Link href='/dashboard/messages' className='test'>
          <Image src="/images/mail.svg" alt='messages' width={40} height={40} className='p-[6px]' />
          <p className={`${pathname === "/dashboard/messages" ? "active" : "inactive"}`}>Messages</p>
        </Link>
        <Link href='/dashboard/records' className='test'>
          <Image src="/images/database.svg" alt='records' width={40} height={40} className='p-[6px]' />
          <p className={`${pathname === "/dashboard/records" ? "active" : "inactive"}`}>Records</p>
        </Link>
        {/* <Link href='/dashboard/analytics' className='test'>
          <Image src="/images/chart-histogram-2.svg" alt='analytics' width={40} height={40} className='p-[6px]' />
          <p className={`${pathname === "/dashboard/analytics" ? "active" : "inactive"}`}>Analytics</p>
        </Link> */}
        <Link href='/' className='test mt-[526px]'>
          <Image src="/images/logout-2.svg" alt='logout' width={40} height={40} className='p-[6px]' />
          <p className={`inactive`}>Logout</p>
        </Link>
      </div>
      <div className='sidenav-base'>
        <div className='mt-[2rem] relative left-[27%] font-semibold text-[20px]'>
          <a href="/dashboard" className="text-white">
            CliniTrak
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar