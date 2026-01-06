import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id="projects" className="py-12 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projects.length > 3 && (
          <div className="text-center mt-12">
            <p className="text-white/70 text-lg">
              And {projects.length - 3} more amazing projects!
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
