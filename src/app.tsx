import React from 'react';
import { Globe, Users, Heart, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-900 to-green-800 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">GTAF Foundation</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-green-200">About</a>
            <a href="#services" className="hover:text-green-200">Services</a>
            <a href="#contact" className="hover:text-green-200">Contact</a>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Empowering Communities</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Building a better future through education, healthcare, and community development.</p>
          <button className="bg-white text-green-900 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition duration-300">
            Get Involved
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Impact Areas</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Globe className="w-12 h-12 mx-auto mb-6 text-green-600" />
              <h3 className="text-xl font-semibold mb-4">Global Outreach</h3>
              <p className="text-gray-600">Extending our support across borders to create lasting change.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Users className="w-12 h-12 mx-auto mb-6 text-green-600" />
              <h3 className="text-xl font-semibold mb-4">Community Support</h3>
              <p className="text-gray-600">Building stronger communities through local initiatives.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Heart className="w-12 h-12 mx-auto mb-6 text-green-600" />
              <h3 className="text-xl font-semibold mb-4">Healthcare Access</h3>
              <p className="text-gray-600">Providing essential healthcare services to those in need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80" 
                alt="Community work" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">About GTAF Foundation</h2>
              <p className="text-gray-600 mb-6">We are dedicated to creating positive change in communities worldwide through sustainable development programs, education initiatives, and healthcare support.</p>
              <div className="flex items-center text-green-600 hover:text-green-700 cursor-pointer">
                Learn more about our mission <ArrowRight className="ml-2 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-green-600 mr-4" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">contact@gtaffoundation.org</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-green-600 mr-4" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-green-600 mr-4" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">123 Foundation Street, City, Country</p>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
              </div>
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">GTAF Foundation</h3>
              <p className="text-green-200">Making a difference in communities worldwide.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-green-200">
                <li><a href="#about" className="hover:text-white">About Us</a></li>
                <li><a href="#services" className="hover:text-white">Services</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <p className="text-green-200">Follow us on social media for updates and news.</p>
            </div>
          </div>
          <div className="border-t border-green-800 mt-12 pt-8 text-center text-green-200">
            <p>&copy; 2024 GTAF Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
