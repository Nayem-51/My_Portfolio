import { personalInfo } from '@/data/personal-info'
import { FaCode, FaHeart, FaGamepad, FaCamera, FaPlane, FaCoffee } from 'react-icons/fa'

const About = () => {
  const { about } = personalInfo

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get to know me better - my journey, passions, and what drives me
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Introduction */}
          <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 lg:p-12 mb-12">
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
                  <FaCode className="text-3xl" />
                  Introduction
                </h3>
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                  {about.intro}
                </p>
              </div>

              {/* Programming Journey */}
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
                  🚀 My Programming Journey
                </h3>
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                  {about.journey}
                </p>
              </div>

              {/* Work I Enjoy */}
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
                  <FaHeart className="text-3xl" />
                  What I Enjoy Working On
                </h3>
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                  {about.workStyle}
                </p>
              </div>
            </div>
          </div>

          {/* Hobbies & Interests */}
          <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 lg:p-12 mb-12">
            <h3 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center gap-3">
              🎯 Hobbies & Interests Outside Programming
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Cricket */}
              <div className="bg-slate-700/30 rounded-xl p-6 text-center hover:bg-slate-700/50 transition-all duration-300">
                <div className="text-4xl mb-4">🏏</div>
                <h4 className="text-white font-semibold mb-2">Cricket</h4>
                <p className="text-gray-300 text-sm">Playing cricket with friends teaches me teamwork and strategy</p>
              </div>

              {/* Photography */}
              <div className="bg-slate-700/30 rounded-xl p-6 text-center hover:bg-slate-700/50 transition-all duration-300">
                <FaCamera className="text-4xl text-cyan-400 mx-auto mb-4" />
                <h4 className="text-white font-semibold mb-2">Photography</h4>
                <p className="text-gray-300 text-sm">Experimenting with photography to capture beautiful moments</p>
              </div>

              {/* Traveling */}
              <div className="bg-slate-700/30 rounded-xl p-6 text-center hover:bg-slate-700/50 transition-all duration-300">
                <FaPlane className="text-4xl text-cyan-400 mx-auto mb-4" />
                <h4 className="text-white font-semibold mb-2">Traveling</h4>
                <p className="text-gray-300 text-sm">Exploring new places and discovering different perspectives</p>
              </div>

              {/* Cafe Exploring */}
              <div className="bg-slate-700/30 rounded-xl p-6 text-center hover:bg-slate-700/50 transition-all duration-300">
                <FaCoffee className="text-4xl text-cyan-400 mx-auto mb-4" />
                <h4 className="text-white font-semibold mb-2">Cafe Exploring</h4>
                <p className="text-gray-300 text-sm">Discovering local cafes and enjoying different coffee experiences</p>
              </div>

              {/* Tech Learning */}
              <div className="bg-slate-700/30 rounded-xl p-6 text-center hover:bg-slate-700/50 transition-all duration-300">
                <div className="text-4xl mb-4">📚</div>
                <h4 className="text-white font-semibold mb-2">Continuous Learning</h4>
                <p className="text-gray-300 text-sm">Staying updated with latest tech trends through blogs and courses</p>
              </div>

              {/* Open Source */}
              <div className="bg-slate-700/30 rounded-xl p-6 text-center hover:bg-slate-700/50 transition-all duration-300">
                <div className="text-4xl mb-4">🌟</div>
                <h4 className="text-white font-semibold mb-2">Open Source</h4>
                <p className="text-gray-300 text-sm">Contributing to open-source projects and community building</p>
              </div>
            </div>
          </div>

          {/* Personality Showcase & Stats */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Personality */}
            <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">My Personality</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Detail-oriented and passionate about clean code</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Team player with strong communication skills</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Always eager to learn new technologies</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Problem solver who enjoys challenges</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Believes in work-life balance and creativity</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Quick Stats</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">2+</div>
                  <div className="text-gray-400 font-medium">Years Experience</div>
                  <div className="text-sm text-gray-500">Full-stack Development</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">10+</div>
                  <div className="text-gray-400 font-medium">Projects Completed</div>
                  <div className="text-sm text-gray-500">Web Applications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">100%</div>
                  <div className="text-gray-400 font-medium">Client Satisfaction</div>
                  <div className="text-sm text-gray-500">Quality Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
