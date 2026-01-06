import { personalInfo } from '@/data/personal-info'

const About = () => {
  const { about } = personalInfo

  return (
    <section id="about" className="py-12 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Introduction */}
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4 text-primary-400">Introduction</h3>
            <p className="text-white/90 text-lg leading-relaxed">
              {about.intro}
            </p>
          </div>

          {/* Programming Journey */}
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4 text-primary-400">My Programming Journey</h3>
            <p className="text-white/90 text-lg leading-relaxed">
              {about.journey}
            </p>
          </div>

          {/* Work Style */}
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4 text-primary-400">What I Enjoy</h3>
            <p className="text-white/90 text-lg leading-relaxed">
              {about.workStyle}
            </p>
          </div>

          {/* Hobbies */}
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4 text-primary-400">Beyond Coding</h3>
            <p className="text-white/90 text-lg leading-relaxed">
              {about.hobbies}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
