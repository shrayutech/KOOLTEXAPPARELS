import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-secondary">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1558444479-c8f010524776?q=80&w=2070&auto=format&fit=crop" 
          alt="Apparel Manufacturing" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm mb-6 tracking-wider uppercase">
              Elite Manufacturing Partner
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Premium Uniform & <br />
              <span className="text-primary">Apparel</span> Manufacturing Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Specialized in T-Shirts, Track Suits, School Uniforms, Corporate Uniforms, Safety Jackets & Aprons. We deliver excellence in every stitch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/explore" className="btn-primary flex items-center justify-center gap-2 group">
                Explore Products
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-secondary flex items-center justify-center">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute right-0 bottom-0 w-1/3 h-2/3 bg-primary/10 backdrop-blur-3xl rounded-tl-[100px] hidden lg:block"
      ></motion.div>
    </section>
  );
};

export default Hero;
