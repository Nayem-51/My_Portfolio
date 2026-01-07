import { experience } from '@/data/personal-info'
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaCode, FaTasks, FaRocket } from 'react-icons/fa'

const Experience = () => {
  if (!experience || experience.length === 0) {
    return null // Don't render if no experience
  }

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey and key accomplishments in web development
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline line */}
              {index !== experience.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-transparent hidden md:block"></div>
              )}
              
              <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-2xl text-white shadow-lg">
                      <FaBriefcase />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow space-y-4">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <FaRocket className="text-cyan-400" />
                        <p className="text-xl text-cyan-400 font-semibold">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-gray-300">
                      <div className="flex items-center gap-2 bg-slate-700/50 px-3 py-1 rounded-lg">
                        <FaCalendar className="text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-700/50 px-3 py-1 rounded-lg">
                        <FaMapMarkerAlt className="text-cyan-400" />
                        <span>{exp.location}</span>
                      </div>
                      <span className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 px-3 py-1 rounded-lg text-cyan-400 font-semibold">
                        {exp.type}
                      </span>
                    </div>

                    {/* Responsibilities */}
                    {exp.responsibilities && exp.responsibilities.length > 0 && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <FaTasks className="text-cyan-400" />
                          Key Responsibilities & Achievements:
                        </h4>
                        <div className="grid gap-3">
                          {exp.responsibilities.map((resp, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-slate-700/30 p-3 rounded-lg">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300">{resp}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <FaCode className="text-cyan-400" />
                          Technologies & Tools Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-full text-sm font-medium hover:bg-cyan-500/20 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Professional Growth</h3>
          <p className="text-gray-300 text-lg mb-6">
            Continuously expanding my expertise through hands-on projects and client collaborations, delivering high-quality solutions that exceed expectations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">Freelance</div>
              <div className="text-gray-400">Independent Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">Full-Stack</div>
              <div className="text-gray-400">End-to-End Development</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">MERN</div>
              <div className="text-gray-400">Specialized Technology Stack</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
