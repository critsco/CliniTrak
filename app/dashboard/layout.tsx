import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CliniTrak - Dashboard',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='relative overflow-hidden flex'>
      <Navbar />
      <main className='flex-col flex gap-6 relative ml-[15rem]'>
      {children}
      <Footer />
      </main>
    </section>
  )
}
