"use client"

import Image from 'next/image'
import { FaDownload } from 'react-icons/fa'
import SocialLinks from './SocialLinks'
import { personalInfo } from '@/data/personal-info'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {/* Left side - Text content */}
          <div className="space-y-6 text-center md:text-left md:flex-1 max-w-lg">
            <div className="space-y-2">
              <p className="text-primary-400 text-lg md:text-xl">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                {personalInfo.name}
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-gradient">
                {personalInfo.designation}
              </h2>
              <p className="text-xl text-white/80 mt-4">
                {personalInfo.tagline}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={personalInfo.resume}
                download
                className="btn-primary inline-flex items-center gap-2 justify-center"
              >
                <FaDownload />
                Download Resume
              </a>
              <a
                href="#contact"
                className="btn-outline inline-flex items-center gap-2 justify-center"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <SocialLinks className="justify-center md:justify-start" />
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center md:flex-1 md:justify-center">
            <div className="relative group">
              {/* Glowing ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20">
                <Image
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
