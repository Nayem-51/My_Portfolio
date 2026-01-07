"use client"

import { skillsData } from '@/data/skills'
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaPython, FaJava } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiNextdotjs, SiTailwindcss, SiBootstrap, SiTypescript, SiRedux, SiPostgresql, SiFirebase, SiFigma, SiPostman, SiVercel } from 'react-icons/si'

const Skills = () => {
  const skillIcons = {
    'React': <FaReact className="text-blue-400" />,
    'Node.js': <FaNodeJs className="text-green-400" />,
    'Express.js': <SiExpress className="text-gray-400" />,
    'MongoDB': <SiMongodb className="text-green-500" />,
    'Next.js': <SiNextdotjs className="text-white" />,
    'Redux Toolkit': <SiRedux className="text-purple-400" />,
    'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
    'Python': <FaPython className="text-yellow-400" />,
    'Java': <FaJava className="text-red-400" />,
    'HTML5': <FaHtml5 className="text-orange-400" />,
    'CSS3': <FaCss3Alt className="text-blue-400" />,
    'Bootstrap': <SiBootstrap className="text-purple-500" />,
    'JavaScript': <FaJs className="text-yellow-400" />,
    'TypeScript': <SiTypescript className="text-blue-500" />,
    'Git': <FaGitAlt className="text-orange-500" />,
    'PostgreSQL': <SiPostgresql className="text-blue-600" />,
    'Firebase': <SiFirebase className="text-yellow-500" />,
    'REST API': <div className="text-green-400">🔗</div>,
    'Figma': <SiFigma className="text-pink-400" />,
    'Postman': <SiPostman className="text-orange-400" />,
    'Vercel': <SiVercel className="text-white" />,
    'VS Code': <div className="w-6 h-6 bg-blue-500 rounded text-white flex items-center justify-center text-xs font-bold">VS</div>,
  }

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Skills Overview Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-16">
            {skillsData.flatMap(category => category.skills).map((skill, idx) => (
              <div key={idx} className="group">
                <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-xl p-4 text-center hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="text-3xl mb-3 flex justify-center group-hover:scale-110 transition-transform">
                    {skillIcons[skill.name] || <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg"></div>}
                  </div>
                  <h3 className="text-white font-semibold text-xs mb-1">{skill.name}</h3>
                  <div className="text-xs text-cyan-400 font-medium">{skill.level}%</div>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Skills Categories */}
          <div className="space-y-8">
            {skillsData.map((category, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="text-3xl">
                    {category.category === 'Frontend Development' && '🎨'}
                    {category.category === 'Backend Development' && '⚙️'}
                    {category.category === 'Database & Tools' && '🛠️'}
                  </div>
                  {category.category}
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium flex items-center gap-3">
                          <span className="text-xl">{skillIcons[skill.name]}</span>
                          {skill.name}
                        </span>
                        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                      </div>
                      
                      {/* Animated Progress Bar */}
                      <div className="relative">
                        <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full transition-all duration-1000 ease-out relative"
                            style={{ width: `${skill.level}%` }}
                          >
                            {/* Animated shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                          </div>
                        </div>
                        {/* Skill level indicator */}
                        <div 
                          className="absolute top-0 h-3 w-1 bg-white rounded-full transition-all duration-1000 ease-out"
                          style={{ left: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Technical Proficiency</h3>
            <p className="text-gray-300 text-lg mb-6">
              Constantly learning and improving my skills to stay current with industry trends and best practices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">Frontend</div>
                <div className="text-gray-400">Modern UI/UX Development</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">Backend</div>
                <div className="text-gray-400">Scalable Server Solutions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">Full-Stack</div>
                <div className="text-gray-400">End-to-End Development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
