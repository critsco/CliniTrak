// Use the client directive for using usePathname hook.
'use client'

// Use usePathname for catching route name.
import { usePathname } from 'next/navigation';
import Footer from './Footer';

export const NoFooter = ({ 
  children 
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  return (
    <main className='flex-col flex'>
      {children}
      {pathname === "/" && <Footer />}
    </main>
  )
};