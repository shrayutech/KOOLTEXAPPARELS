import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/explore' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg shadow-lg group-hover:rotate-12 transition-transform">
            <span className="text-white font-bold text-xl">K</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-xl tracking-tight leading-none ${scrolled ? 'text-secondary' : 'text-secondary md:text-white'}`}>
              KOOLTEX
            </span>
            <span className={`text-[10px] font-semibold tracking-[0.2em] leading-none ${scrolled ? 'text-primary' : 'text-primary'}`}>
              APPARELS
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors hover:text-primary ${
                location.pathname === link.path 
                  ? 'text-primary' 
                  : scrolled ? 'text-secondary' : 'text-secondary md:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary py-2 px-5 text-sm">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-secondary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} className={scrolled ? 'text-secondary' : 'text-secondary'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-semibold flex justify-between items-center ${
                    location.pathname === link.path ? 'text-primary' : 'text-secondary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <ChevronRight size={18} className="text-gray-400" />
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="btn-primary text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
