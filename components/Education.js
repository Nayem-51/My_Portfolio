import { education } from '@/data/personal-info'
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt, FaStar, FaUniversity, FaAward } from 'react-icons/fa'

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Educational Qualification
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My academic journey and educational achievements
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={edu.id} className="relative">
              {/* Timeline line */}
              {index !== education.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-transparent hidden md:block"></div>
              )}
              
              <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-2xl text-white shadow-lg">
                      <FaGraduationCap />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow space-y-4">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <FaUniversity className="text-cyan-400" />
                        <p className="text-xl text-cyan-400 font-semibold">{edu.institution}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-gray-300">
                      <div className="flex items-center gap-2 bg-slate-700/50 px-3 py-1 rounded-lg">
                        <FaCalendar className="text-cyan-400" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-700/50 px-3 py-1 rounded-lg">
                        <FaMapMarkerAlt className="text-cyan-400" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 px-3 py-1 rounded-lg">
                        <FaStar className="text-yellow-400" />
                        <span className="font-semibold text-cyan-400">{edu.grade}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <FaAward className="text-yellow-400" />
                          Key Achievements & Highlights:
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {edu.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-slate-700/30 p-3 rounded-lg">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300">{achievement}</span>
                            </div>
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

        {/* Education Summary */}
        <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Academic Excellence</h3>
          <p className="text-gray-300 text-lg mb-6">
            Consistently maintaining high academic standards while actively participating in programming contests and technology-focused activities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">Golden A+</div>
              <div className="text-gray-400">HSC & SSC Results</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">SUST</div>
              <div className="text-gray-400">Top Engineering University</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">CSE</div>
              <div className="text-gray-400">Computer Science Focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
