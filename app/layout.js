import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nayem Talukdar - MERN Stack Developer | Full Stack Web Developer Portfolio',
  description: 'Professional portfolio of Nayem Talukdar, a passionate MERN Stack Developer from Bangladesh. Specializing in React, Next.js, Node.js, MongoDB, and modern web technologies. Available for freelance projects and full-time opportunities.',
  keywords: [
    'Nayem Talukdar',
    'MERN Stack Developer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'MongoDB Developer',
    'JavaScript Developer',
    'Web Developer Bangladesh',
    'Freelance Developer',
    'Portfolio',
    'Web Development',
    'Frontend Developer',
    'Backend Developer'
  ].join(', '),
  authors: [{ name: 'Nayem Talukdar', url: 'https://github.com/Nayem-51' }],
  creator: 'Nayem Talukdar',
  publisher: 'Nayem Talukdar',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nayem-portfolio.vercel.app',
    title: 'Nayem Talukdar - MERN Stack Developer Portfolio',
    description: 'Professional portfolio showcasing my expertise in MERN stack development, featuring innovative projects and modern web solutions.',
    siteName: 'Nayem Talukdar Portfolio',
    images: [
      {
        url: '/nayem.jpg',
        width: 1200,
        height: 630,
        alt: 'Nayem Talukdar - MERN Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nayem Talukdar - MERN Stack Developer',
    description: 'Professional MERN Stack Developer creating modern web solutions with React, Next.js, Node.js, and MongoDB.',
    images: ['/nayem.jpg'],
    creator: '@yourusername',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#06b6d4' },
    { media: '(prefers-color-scheme: dark)', color: '#0891b2' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
