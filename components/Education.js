import { education } from '@/data/personal-info'
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt, FaStar } from 'react-icons/fa'

const Education = () => {
  return (
    <section id="education" className="py-12 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>

        <div className="max-w-4xl mx-auto space-y-5">
          {education.map((edu) => (
            <div key={edu.id} className="card group">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center text-2xl">
                    <FaGraduationCap />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow space-y-3">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-all">
                      {edu.degree}
                    </h3>
                    <p className="text-xl text-primary-400 mt-1">{edu.institution}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-white/70">
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-primary-400" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-primary-400" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaStar className="text-accent-400" />
                      <span className="font-semibold">{edu.grade}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold text-white/90 mb-2">Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-white/80">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
