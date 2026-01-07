import { personalInfo } from '@/data/personal-info'
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaPaperPlane, FaClock } from 'react-icons/fa'

const Contact = () => {
  const { contact, social } = personalInfo

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="group bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl group-hover:scale-110 transition-transform">
                <FaEnvelope />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Address</h3>
              <p className="text-gray-300 mb-4">{contact.email}</p>
              <span className="text-cyan-400 font-semibold">Send Email →</span>
            </a>

            {/* Phone */}
            <a
              href={`tel:${contact.phone}`}
              className="group bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 text-center hover:border-green-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 text-2xl group-hover:scale-110 transition-transform">
                <FaPhone />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone Number</h3>
              <p className="text-gray-300 mb-4">{contact.phone}</p>
              <span className="text-green-400 font-semibold">Call Now →</span>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Nayem,%20I'd%20like%20to%20discuss%20a%20project%20with%20you.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 text-center hover:border-green-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-400/10 flex items-center justify-center text-green-400 text-2xl group-hover:scale-110 transition-transform">
                <FaWhatsapp />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-gray-300 mb-4">{contact.whatsapp}</p>
              <span className="text-green-400 font-semibold">Chat Now →</span>
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form Alternative */}
            <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaPaperPlane className="text-cyan-400" />
                Quick Message
              </h3>
              <p className="text-gray-300 mb-6">
                Prefer to send a detailed message? Click the button below to compose an email with your project details.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <FaClock className="text-cyan-400" />
                  <span>Response time: Within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FaMapMarkerAlt className="text-cyan-400" />
                  <span>Location: {contact.location}</span>
                </div>
              </div>

              <a
                href={`mailto:${contact.email}?subject=Project Inquiry - Let's Work Together&body=Hi Nayem,%0D%0A%0D%0AI'm interested in working with you on a project.%0D%0A%0D%0AProject Details:%0D%0A- Project Type: %0D%0A- Timeline: %0D%0A- Budget Range: %0D%0A- Additional Requirements: %0D%0A%0D%0APlease let me know your availability for a discussion.%0D%0A%0D%0ABest regards`}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <FaEnvelope />
                Compose Detailed Email
              </a>
            </div>

            {/* Social Media */}
            <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Connect on Social Media</h3>
              <p className="text-gray-300 mb-6">
                Follow me on social platforms for updates on my latest projects and tech insights.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {/* LinkedIn */}
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-slate-700/50 rounded-xl hover:bg-blue-500/10 hover:border-blue-500/30 border border-transparent transition-all duration-300 group"
                >
                  <FaLinkedin className="text-2xl text-blue-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-white font-medium">LinkedIn</div>
                    <div className="text-gray-400 text-sm">Professional</div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-slate-700/50 rounded-xl hover:bg-gray-500/10 hover:border-gray-500/30 border border-transparent transition-all duration-300 group"
                >
                  <FaGithub className="text-2xl text-gray-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-white font-medium">GitHub</div>
                    <div className="text-gray-400 text-sm">Code Repository</div>
                  </div>
                </a>

                {/* Twitter */}
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-slate-700/50 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/30 border border-transparent transition-all duration-300 group"
                >
                  <FaTwitter className="text-2xl text-cyan-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-white font-medium">Twitter</div>
                    <div className="text-gray-400 text-sm">Tech Updates</div>
                  </div>
                </a>

                {/* Facebook */}
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-slate-700/50 rounded-xl hover:bg-blue-600/10 hover:border-blue-600/30 border border-transparent transition-all duration-300 group"
                >
                  <FaFacebook className="text-2xl text-blue-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-white font-medium">Facebook</div>
                    <div className="text-gray-400 text-sm">Personal</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Whether you need a complete web application, want to improve an existing project, or just have questions about development, I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={`mailto:${contact.email}`}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <FaEnvelope />
                Email Me
              </a>
              <a
                href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Nayem,%20I'd%20like%20to%20discuss%20a%20project%20with%20you.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
