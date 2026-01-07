"use client"

import { useState } from 'react'
import { personalInfo } from '@/data/personal-info'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const { contact, social } = personalInfo
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Full-stack Development',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Project Inquiry: ${formData.type} from ${formData.name}`
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AType: ${formData.type}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#020617]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Contact Info */}
          <div className="bg-[#0b1120] rounded-[2rem] p-8 lg:p-12 relative overflow-hidden border border-slate-800/50">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800/10 rounded-bl-full -mr-16 -mt-16 pointer-events-none"></div>
            
            <h2 className="text-4xl lg:text-5xl font-serif italic font-bold text-white mb-12 tracking-wider">
              CONTACT INFO
            </h2>

            <div className="space-y-10 relative z-10">
              {/* Email */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-[#111827] flex items-center justify-center text-blue-500 text-2xl group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-blue-500/5 border border-slate-800">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">DIGITAL MAIL</p>
                  <a href={`mailto:${contact.email}`} className="text-lg lg:text-xl font-bold text-white hover:text-blue-400 transition-colors">
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-[#111827] flex items-center justify-center text-green-500 text-2xl group-hover:bg-green-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-green-500/5 border border-slate-800">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">DIRECT LINE</p>
                  <a href={`tel:${contact.phone}`} className="text-lg lg:text-xl font-bold text-white hover:text-green-400 transition-colors">
                    {contact.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-[#111827] flex items-center justify-center text-purple-500 text-2xl group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-purple-500/5 border border-slate-800">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">BASE LOCATION</p>
                  <p className="text-lg lg:text-xl font-bold text-white">
                    {contact.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-16 flex gap-4">
              <a href={social.github} target="_blank" rel="noopener noreferrer" 
                 className="w-12 h-12 rounded-xl bg-[#111827] flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all duration-300 border border-slate-800">
                <FaGithub className="text-xl" />
              </a>
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 rounded-xl bg-[#111827] flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-slate-800">
                <FaLinkedin className="text-xl" />
              </a>
              <a href={social.facebook} target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 rounded-xl bg-[#111827] flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition-all duration-300 border border-slate-800">
                <FaFacebook className="text-xl" />
              </a>
            </div>

            {/* Status Indicator */}
            <div className="mt-12 pt-8 border-t border-slate-800/50 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <p className="text-sm font-bold text-slate-300 italic tracking-wider">
                CURRENT STATUS: ACCEPTING PROJECTS
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-[#0b1120] rounded-[2rem] p-8 lg:p-12 border border-slate-800/50">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                    COMMANDER NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="w-full bg-[#111827] border border-slate-800 rounded-xl px-5 py-4 text-slate-300 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                    RETURN ADDRESS
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full bg-[#111827] border border-slate-800 rounded-xl px-5 py-4 text-slate-300 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="type" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                  OPERATION TYPE
                </label>
                <div className="relative">
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full bg-[#111827] border border-slate-800 rounded-xl px-5 py-4 text-slate-300 focus:outline-none focus:border-cyan-500 transition-colors appearance-none cursor-pointer"
                  >
                    <option>Full-stack Development</option>
                    <option>Frontend Development</option>
                    <option>Backend Development</option>
                    <option>UI/UX Design</option>
                    <option>Consultation</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-cyan-500 font-bold">
                    V
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                  INTELLIGENCE BRIEF
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your vision..."
                  rows="5"
                  className="w-full bg-[#111827] border border-slate-800 rounded-xl px-5 py-4 text-slate-300 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-5 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
              >
                SEND MESSAGE
                <FaPaperPlane className="text-lg" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


