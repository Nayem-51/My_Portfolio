"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 lg:gap-3 text-xl lg:text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm lg:text-lg">N</span>
            </div>
            <span className="hidden sm:block">
              NAYEM <span className="text-cyan-400">TALUKDAR</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-xs lg:text-sm font-medium tracking-wider transition-all duration-300 relative group ${
                  index === 0 
                    ? 'text-cyan-400 bg-cyan-500/10 px-3 lg:px-4 py-2 rounded-lg border border-cyan-500/20' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                {index !== 0 && (
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl focus:outline-none hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 bg-slate-800/95 backdrop-blur-lg rounded-xl border border-slate-700/50 p-6 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-sm font-medium tracking-wider transition-colors py-3 px-4 rounded-lg ${
                    index === 0 
                      ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20' 
                      : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
