import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing my best work - from concept to deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projects.length > 3 && (
          <div className="text-center mt-12">
            <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-xl p-6 inline-block">
              <p className="text-white text-lg mb-2">
                <span className="text-cyan-400 font-bold">+{projects.length - 3}</span> more amazing projects
              </p>
              <p className="text-gray-400">
                Explore my complete portfolio on GitHub
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
