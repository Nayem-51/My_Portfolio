import Link from 'next/link'
import Image from 'next/image'
import { FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ project }) => {
  return (
    <div className="card group overflow-hidden">
      {/* Project Image */}
      <div className="relative h-64 w-full overflow-hidden rounded-lg mb-4">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Project Info */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-all">
          {project.name}
        </h3>
        
        <p className="text-white/80 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-sm">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>

        {/* View Details Button */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold group/link transition-colors mt-4"
        >
          View Details
          <FaExternalLinkAlt className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
