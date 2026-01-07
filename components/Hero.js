"use client"

import Image from 'next/image'
import { FaDownload, FaReact, FaNodeJs, FaJs } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import SocialLinks from './SocialLinks'
import { personalInfo } from '@/data/personal-info'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900">
      <div className="container mx-auto px-6 lg:px-8 relative z-10 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20 min-h-[80vh]">
          {/* Left side - Text content */}
          <div className="flex-1 space-y-8 text-center lg:text-left max-w-2xl order-2 lg:order-1">
            {/* Available for hire badge */}
            {/* Available for hire badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-2.5 bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 hover:border-green-500/40 backdrop-blur-md rounded-full text-green-400 lg:text-[15px] font-medium transition-all duration-300 animate-fade-in-up cursor-default hover:shadow-[0_0_20px_rgba(74,222,128,0.2)] group">
              <span className="relative flex h-2.5 w-2.5 lg:h-3 lg:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 lg:h-3 lg:w-3 bg-green-500 group-hover:bg-green-400 transition-colors"></span>
              </span>
              {/* <span className="tracking-wide group-hover:text-green-300 transition-colors"></span> */}
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight animate-fade-in-up delay-100">
                Hello, I'm
              </h1>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight animate-fade-in-up delay-200">
                {personalInfo.name}
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-cyan-400 leading-tight animate-fade-in-up delay-300">
                {personalInfo.designation}
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl lg:max-w-2xl leading-relaxed mx-auto lg:mx-0 animate-fade-in-up delay-400">
                {personalInfo.tagline}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-500">
              <a
                href="#contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 text-center"
              >
                Work With Me
              </a>
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-500 hover:bg-cyan-500 text-cyan-400 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center"
              >
                <FaDownload />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="animate-fade-in-up delay-700">
              <SocialLinks className="justify-center lg:justify-start" />
            </div>
          </div>

          {/* Right side - Professional Image & Orbiting Icons */}
          <div className="flex-1 flex justify-center lg:justify-end relative order-1 lg:order-2">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] flex items-center justify-center">
              
              {/* Circular Orbit Path (Optional Visual Guide) */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/20 border-dashed animate-spin-slow"></div>

              {/* Central Image Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700 border-4 border-slate-600 z-20 shadow-2xl shadow-cyan-500/20">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-sm opacity-50"></div>
                <Image
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-center relative z-10"
                  priority
                />
                
                {/* Status indicator inside image */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-900/90 backdrop-blur-sm border border-cyan-500/30 rounded-full px-4 py-1.5 flex items-center gap-2 z-30 shadow-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
                  <span className="text-white text-xs font-bold tracking-wider">SYSTEM: ONLINE</span>
                </div>
              </div>

              {/* Orbiting Icons */}
              {/* React - Top Left (-60 degrees) */}
              <div className="absolute top-10 left-4 sm:top-16 sm:left-10 bg-slate-800 p-3 sm:p-4 rounded-xl border border-slate-700 shadow-xl shadow-cyan-500/10 animate-float z-30">
                <FaReact className="text-3xl sm:text-4xl text-cyan-400" />
              </div>

              {/* JS - Top Center (0 degrees) */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-slate-800 p-3 sm:p-4 rounded-xl border border-slate-700 shadow-xl shadow-yellow-500/10 animate-float delay-700 z-30">
                <FaJs className="text-3xl sm:text-4xl text-yellow-400" />
              </div>

              {/* Next.js - Top Right (60 degrees) */}
              <div className="absolute top-10 right-4 sm:top-16 sm:right-10 bg-slate-800 p-3 sm:p-4 rounded-xl border border-slate-700 shadow-xl shadow-gray-500/10 animate-float delay-1000 z-30">
                <SiNextdotjs className="text-3xl sm:text-4xl text-white" />
              </div>

              {/* MongoDB - Bottom Right (120 degrees) */}
              <div className="absolute bottom-12 right-0 sm:bottom-20 sm:right-4 bg-slate-800 p-3 sm:p-4 rounded-xl border border-slate-700 shadow-xl shadow-green-500/10 animate-float delay-1500 z-30">
                <SiMongodb className="text-3xl sm:text-4xl text-green-500" />
              </div>

              {/* Tailwind - Bottom Center (180 degrees) */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-800 p-3 sm:p-4 rounded-xl border border-slate-700 shadow-xl shadow-cyan-400/10 animate-float delay-2000 z-30">
                <SiTailwindcss className="text-3xl sm:text-4xl text-cyan-400" />
              </div>

              {/* Node.js - Bottom Left (240 degrees) */}
              <div className="absolute bottom-12 left-0 sm:bottom-20 sm:left-4 bg-slate-800 p-3 sm:p-4 rounded-xl border border-slate-700 shadow-xl shadow-green-600/10 animate-float delay-2500 z-30">
                <FaNodeJs className="text-3xl sm:text-4xl text-green-600" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
