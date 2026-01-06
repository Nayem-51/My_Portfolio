import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'

const SocialLinks = ({ className = "" }) => {
  const socials = [
    { icon: FaGithub, href: "https://github.com/Nayem-51", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/nayem-talukdar/", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: FaFacebook, href: "https://www.facebook.com/md.nayemislam.9693001", label: "Facebook" },
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
          className="w-12 h-12 rounded-full glass flex items-center justify-center text-xl hover:scale-110 hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 transition-all duration-300"
        >
          <social.icon />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
