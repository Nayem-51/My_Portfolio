import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Portfolio - Full Stack Developer',
  description: 'Professional portfolio showcasing my skills, projects, and experience as a Full Stack Developer',
  keywords: 'portfolio, web developer, full stack developer, react, next.js, node.js',
  authors: [{ name: 'Nayem Talukdar' }],
  openGraph: {
    title: 'My Portfolio - Full Stack Developer',
    description: 'Professional portfolio showcasing my skills, projects, and experience',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
