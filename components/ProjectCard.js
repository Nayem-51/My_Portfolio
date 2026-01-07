import Link from 'next/link'
import Image from 'next/image'
import { FaExternalLinkAlt, FaEye, FaCode, FaRocket } from 'react-icons/fa'

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02] group">
      {/* Project Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-cyan-500/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {project.category}
          </span>
        </div>

        {/* Quick Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full flex items-center justify-center transition-colors"
              title="View Live Project"
            >
              <FaRocket className="text-sm" />
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-700 hover:bg-slate-600 text-white rounded-full flex items-center justify-center transition-colors"
              title="View Source Code"
            >
              <FaCode className="text-sm" />
            </a>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {project.name}
          </h3>
          
          <p className="text-gray-300 text-sm lg:text-base line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 bg-slate-700/50 text-gray-400 rounded-md text-xs">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <Link
            href={`/projects/${project.slug}`}
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm"
          >
            <FaEye />
            View Details
          </Link>
          
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm"
              title="Live Demo"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
