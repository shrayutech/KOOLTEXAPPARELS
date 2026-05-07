import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary flex items-center justify-center rounded shadow-lg">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="font-bold text-xl tracking-tight uppercase">Kooltex Apparels</span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Premium uniform and apparel manufacturing solutions. Excellence in quality, reliability, and corporate branding since 2010.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, link: "#" },
                { icon: Instagram, link: "https://www.instagram.com/kooltexapparels/" },
                { icon: Twitter, link: "#" },
                { icon: Linkedin, link: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-8">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Explore', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-8">Products</h3>
            <ul className="space-y-4">
              {['T-Shirts', 'Track Suits', 'School Uniforms', 'Corporate Uniforms', 'Safety Jackets', 'Aprons'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/explore" 
                    state={{ category: item }}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-8">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <span className="text-gray-400">Gat No. 97, Bidkin-Shendra Road, Bidkin- 431 105 Dist. Chh. Sambhajinagar</span>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div className="flex flex-col text-gray-400">
                  <span>+91 86984 67777</span>
                  <span>+91 78750 01777</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <span className="text-gray-400">kooltexapparels@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Kooltex Apparels. All rights reserved.
          </p>
          <div className="flex gap-8 text-gray-500 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
