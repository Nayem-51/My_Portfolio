import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCode, FaRocket, FaCog, FaLightbulb, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.name} - Nayem Talukdar Portfolio`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.name} - Project Details`,
      description: project.shortDescription,
      images: [project.image],
    },
  }
}

export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors group bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 px-4 py-2 rounded-lg"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        <div className="max-w-6xl mx-auto">
          {/* Project Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-full text-cyan-400 font-semibold mb-4">
              {project.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {project.name}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Project Image */}
          <div className="relative h-96 lg:h-[500px] w-full rounded-2xl overflow-hidden mb-12 bg-slate-800/50 backdrop-blur-lg border border-slate-700/50">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 text-lg"
              >
                <FaRocket />
                View Live Project
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 text-lg"
              >
                <FaGithub />
                View Source Code
              </a>
            )}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Technology Stack */}
            <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <FaCode className="text-cyan-400" />
                Technology Stack
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {project.techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 px-4 py-3 rounded-lg font-semibold text-center hover:bg-cyan-500/20 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <FaCog className="text-cyan-400" />
                Project Info
              </h2>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Category</h4>
                  <span className="bg-slate-700/50 px-3 py-1 rounded-lg text-gray-300">{project.category}</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Status</h4>
                  <span className="bg-green-500/20 border border-green-500/30 text-green-400 px-3 py-1 rounded-lg">Completed</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Links</h4>
                  <div className="flex gap-2">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">Project Description</h2>
            <p className="text-gray-300 text-lg leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <FaCheckCircle className="text-green-400" />
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-700/30 p-4 rounded-lg">
                    <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <FaExclamationTriangle className="text-yellow-400" />
                Challenges Faced
              </h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-slate-700/30 p-4 rounded-lg">
                    <div className="w-8 h-8 bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {idx + 1}
                    </div>
                    <span className="text-gray-300">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Future Improvements */}
          {project.futureImprovements && project.futureImprovements.length > 0 && (
            <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <FaLightbulb className="text-cyan-400" />
                Future Improvements & Plans
              </h2>
              <div className="space-y-4">
                {project.futureImprovements.map((improvement, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-slate-700/30 p-4 rounded-lg">
                    <div className="text-cyan-400 mt-1 flex-shrink-0">
                      <FaLightbulb />
                    </div>
                    <span className="text-gray-300">{improvement}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back to Projects */}
          <div className="text-center mt-16">
            <Link 
              href="/#projects" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              View More Projects
              <FaArrowLeft className="rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
