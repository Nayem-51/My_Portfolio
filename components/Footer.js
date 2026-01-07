"use client"

import Link from 'next/link'
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaPhone, FaArrowUp } from 'react-icons/fa'
import { personalInfo } from '@/data/personal-info'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { contact, social } = personalInfo

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900/95 backdrop-blur-lg border-t border-slate-700/50 relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>

      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                NAYEM <span className="text-cyan-400">TALUKDAR</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Passionate MERN Stack Developer crafting modern web solutions with clean code and exceptional user experiences. Let's build something amazing together!
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-gray-600 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-cyan-500 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-700 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
              >
                <FaEnvelope className="text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{contact.email}</span>
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
              >
                <FaPhone className="text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{contact.phone}</span>
              </a>
              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
                >
                  Let's Work Together
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 flex items-center gap-2 text-sm">
              © {currentYear} Made with <FaHeart className="text-red-500 animate-pulse" /> by Nayem Talukdar. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>MERN Stack Developer</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span>Available for Freelance</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
