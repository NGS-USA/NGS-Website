import { Menu, X, ArrowRight, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      title: 'Custom Web Development',
      description: 'Build powerful, responsive websites tailored to your brand and business goals using modern technologies.',
    },
    {
      title: 'Application Development',
      description: 'Create feature-rich applications that scale with your business and deliver exceptional user experiences.',
    },
    {
      title: 'Hosting & Management',
      description: 'Reliable hosting solutions with 24/7 monitoring, regular updates, and comprehensive site management.',
    },
    {
      title: 'Performance Optimization',
      description: 'Boost your site speed and SEO with advanced optimization techniques and best practices.',
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing support, security updates, and maintenance to keep your site running smoothly.',
    },
    {
      title: 'Consulting & Strategy',
      description: 'Expert guidance on web development strategy, technology selection, and digital presence optimization.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img src="/icon-transparent.png" alt="NGS Logo" className="h-12 w-12" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                NGS
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
              <a href="#contact" className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition-colors">
                Get Started
              </a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-purple-900/20">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block hover:text-purple-400 transition-colors py-2">Home</a>
              <a href="#about" className="block hover:text-purple-400 transition-colors py-2">About</a>
              <a href="#services" className="block hover:text-purple-400 transition-colors py-2">Services</a>
              <a href="#contact" className="block hover:text-purple-400 transition-colors py-2">Contact</a>
              <a href="#contact" className="block w-full bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition-colors text-center">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Software Development
                <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Custom software applications, web development, and cloud hosting services designed to scale your business and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2 group">
                  Get Started
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#services" className="border border-purple-600 hover:bg-purple-600/10 px-8 py-4 rounded-lg transition-colors">
                  Learn More
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full"></div>
                <img
                  src="/icon-transparent.png"
                  alt="NGS Logo"
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain animate-pulse"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-purple-400">NGS</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-800/30 p-8 rounded-xl hover:border-purple-600/50 transition-all">
              <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-800/30 p-8 rounded-xl hover:border-purple-600/50 transition-all">
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-800/30 p-8 rounded-xl hover:border-purple-600/50 transition-all">
              <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-800/30 p-12 rounded-2xl">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              NGS is a full-service software development company specializing in custom web applications and web hosting solutions. With extensive experience in software development and web hosting, we help businesses build, deploy, and manage their digital presence with excellence.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              From software development and web application creation to reliable hosting and ongoing support, we provide comprehensive solutions that blend technical expertise with strategic innovation to accelerate your business growth.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-purple-400">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-purple-900/20 to-black border border-purple-800/30 p-8 rounded-xl hover:border-purple-600/50 hover:shadow-lg hover:shadow-purple-900/20 transition-all"
              >
                <CheckCircle className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-purple-400">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Let's start a conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600/20 p-3 rounded-lg">
                  <Mail className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Email</h3>
                  <p className="text-gray-300">info@ngs-us.net</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-600/20 p-3 rounded-lg">
                  <Phone className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Phone</h3>
                  <p className="text-gray-300">+1 (540) 929-0043</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-600/20 p-3 rounded-lg">
                  <MapPin className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Location</h3>
                  <p className="text-gray-300">Stafford, VA 22554</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-800/30 p-8 rounded-xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-black/50 border border-purple-800/50 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-600 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-black/50 border border-purple-800/50 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-600 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-black/50 border border-purple-800/50 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-600 transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors font-medium">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-purple-900/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-3">
              <img src="/icon-transparent.png" alt="NGS Logo" className="h-10 w-10" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                NGS
              </span>
            </div>

            <div className="text-gray-400 text-center md:text-left">
              &copy; 2024 NGS. All rights reserved.
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
