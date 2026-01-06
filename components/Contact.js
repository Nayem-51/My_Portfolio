import { personalInfo } from '@/data/personal-info'
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
import SocialLinks from './SocialLinks'

const Contact = () => {
  const { contact } = personalInfo

  return (
    <section id="contact" className="py-12 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xl text-white/80 mb-10">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="card group hover:bg-gradient-to-r hover:from-primary-500/20 hover:to-accent-500/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary-500/20 flex items-center justify-center text-2xl text-primary-400 group-hover:scale-110 transition-transform">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white/70">Email</h3>
                  <p className="text-white font-medium">{contact.email}</p>
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${contact.phone}`}
              className="card group hover:bg-gradient-to-r hover:from-primary-500/20 hover:to-accent-500/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-accent-500/20 flex items-center justify-center text-2xl text-accent-400 group-hover:scale-110 transition-transform">
                  <FaPhone />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white/70">Phone</h3>
                  <p className="text-white font-medium">{contact.phone}</p>
                </div>
              </div>
            </a>

            {/* WhatsApp */}
            {contact.whatsapp && (
              <a
                href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card group hover:bg-gradient-to-r hover:from-primary-500/20 hover:to-accent-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center text-2xl text-green-400 group-hover:scale-110 transition-transform">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white/70">WhatsApp</h3>
                    <p className="text-white font-medium">{contact.whatsapp}</p>
                  </div>
                </div>
              </a>
            )}

            {/* Location */}
            {contact.location && (
              <div className="card">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center text-2xl text-purple-400">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white/70">Location</h3>
                    <p className="text-white font-medium">{contact.location}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Social Links */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
            <SocialLinks className="justify-center" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
