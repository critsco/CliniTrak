import { NoFooter } from '@/components/Layout';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CliniTrak',
  description: 'A brand new Campus Clinic Records Tracker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NoFooter>
          {children}
        </NoFooter>
      </body>
    </html>
  )
}
