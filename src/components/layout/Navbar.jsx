"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'py-4 bg-white/90 backdrop-blur-xl shadow-lg border-b border-steel/10' 
          : 'py-5 bg-white/50 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-primary flex items-center justify-center rounded-2xl shadow-lg transition-transform group-hover:scale-110">
            <span className="text-white font-black text-2xl">K</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-2xl tracking-tighter leading-none transition-colors ${
              scrolled || pathname !== '/' ? 'text-dark' : 'text-dark'
            }`}>
              KOOLTEX
            </span>
            <span className="text-[10px] font-black tracking-[0.4em] leading-none text-primary mt-1 uppercase">
              APPARELS
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-sm font-bold uppercase tracking-[0.15em] transition-all hover:text-primary relative group ${
                pathname === link.path 
                  ? 'text-primary' 
                  : scrolled || pathname !== '/' ? 'text-dark' : 'text-dark'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${pathname === link.path ? 'w-full' : ''}`}></span>
            </Link>
          ))}
          <Link href="/contact" className="btn-primary py-3 px-8 text-sm">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden w-12 h-12 rounded-full flex items-center justify-center transition-all ${
            scrolled || pathname !== '/' ? 'bg-dark/5 text-dark' : 'bg-dark/5 text-dark'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-2xl absolute w-full"
          >
            <div className="flex flex-col p-8 gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-bold uppercase tracking-widest ${pathname === link.path ? 'text-primary' : 'text-dark'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full py-5"
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
