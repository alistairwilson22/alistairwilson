import type { Metadata } from 'next'
import { Roboto_Slab, Roboto } from 'next/font/google'
import './globals.css'
import Header from '../components/layout/Header';
import NextHeader from '../components/layout/NextHeader';
import Footer from '../components/layout/Footer';

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

const roboto_slab = Roboto_Slab({ 
  weight: ['500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Alistair Wilson',
  description: 'Professional full stack developer & project manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${roboto_slab.variable}`}>
      <NextHeader />
      {children}
      <Footer />
      </body>
    </html>
  )
}
