import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'
import { personalInfo } from '@/data/personal-info'

const SocialLinks = ({ className = "" }) => {
  const socials = [
    { 
      icon: FaGithub, 
      href: personalInfo.social.github, 
      label: "GitHub",
      color: "hover:text-gray-400 hover:bg-gray-400/10 hover:border-gray-400/30"
    },
    { 
      icon: FaLinkedin, 
      href: personalInfo.social.linkedin, 
      label: "LinkedIn",
      color: "hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/30"
    },
    { 
      icon: FaTwitter, 
      href: personalInfo.social.twitter, 
      label: "Twitter",
      color: "hover:text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/30"
    },
    { 
      icon: FaFacebook, 
      href: personalInfo.social.facebook, 
      label: "Facebook",
      color: "hover:text-blue-600 hover:bg-blue-600/10 hover:border-blue-600/30"
    },
  ]

  return (
    <div className={`flex gap-4 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={`w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 flex items-center justify-center text-xl text-gray-300 transition-all duration-300 hover:scale-110 ${social.color}`}
        >
          <social.icon />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
