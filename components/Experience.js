import { experience } from '@/data/personal-info'
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  if (!experience || experience.length === 0) {
    return null // Don't render if no experience
  }

  return (
    <section id="experience" className="py-12 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Work Experience</h2>

        <div className="max-w-4xl mx-auto space-y-5">
          {experience.map((exp) => (
            <div key={exp.id} className="card group">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center text-2xl">
                    <FaBriefcase />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow space-y-3">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-all">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-primary-400 mt-1">{exp.company}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-white/70">
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-primary-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-primary-400" />
                      <span>{exp.location}</span>
                    </div>
                    <span className="px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-sm font-semibold">
                      {exp.type}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold text-white/90 mb-2">Key Responsibilities:</h4>
                      <ul className="list-disc list-inside space-y-1 text-white/80">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold text-white/90 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm"
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
