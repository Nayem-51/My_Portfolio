import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa'

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
    title: `${project.name} - My Portfolio`,
    description: project.shortDescription,
  }
}

export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 mb-8 transition-colors group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        <div className="max-w-5xl mx-auto">
          {/* Project Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.name}
            </h1>
            <p className="text-xl text-white/80">{project.shortDescription}</p>
          </div>

          {/* Project Image */}
          <div className="relative h-96 w-full rounded-xl overflow-hidden mb-12 glass">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaExternalLinkAlt />
              View Live Project
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <FaGithub />
              View Source Code
            </a>
          </div>

          {/* Technology Stack */}
          <div className="card mb-8">
            <h2 className="text-3xl font-bold text-gradient mb-6">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-white rounded-lg font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="card mb-8">
            <h2 className="text-3xl font-bold text-gradient mb-6">Project Description</h2>
            <p className="text-white/90 text-lg leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="card mb-8">
              <h2 className="text-3xl font-bold text-gradient mb-6">Key Features</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary-400 mt-1">✓</span>
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="card mb-8">
              <h2 className="text-3xl font-bold text-gradient mb-6">Challenges Faced</h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent-400 font-bold mt-1">{idx + 1}.</span>
                    <span className="text-white/90">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Future Improvements */}
          {project.futureImprovements && project.futureImprovements.length > 0 && (
            <div className="card mb-8">
              <h2 className="text-3xl font-bold text-gradient mb-6">Future Improvements</h2>
              <ul className="space-y-4">
                {project.futureImprovements.map((improvement, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary-400 font-bold mt-1">→</span>
                    <span className="text-white/90">{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Back to Projects */}
          <div className="text-center mt-12">
            <Link href="/#projects" className="btn-primary">
              View More Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
