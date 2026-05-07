import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductGrid from '../components/explore/ProductGrid.jsx';

const Explore = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <section className="bg-secondary pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-1/4"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Collections</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our wide range of premium apparel and uniform solutions designed for durability, comfort, and professional style.
            </p>
          </motion.div>
        </div>
      </section>

      <ProductGrid />

      {/* Bulk Inquiry Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl flex flex-col md:flex-row items-center gap-12 border border-gray-100">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Design?</h2>
              <p className="text-gray-600 text-lg mb-8">
                If you don't see exactly what you're looking for, our design team can work with you to create custom apparel that perfectly matches your brand identity.
              </p>
              <ul className="space-y-4 mb-10">
                {['Custom Fabric Selection', 'Logo Embroidery & Printing', 'Specific Color Matching', 'Size Grading for all types'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="font-medium text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary px-10 py-4 inline-block">
                Start Custom Project
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop" alt="Custom" className="rounded-2xl h-48 w-full object-cover" />
                <img src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1974&auto=format&fit=crop" alt="Fabric" className="rounded-2xl h-64 w-full object-cover -mt-8" />
                <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop" alt="Stitching" className="rounded-2xl h-64 w-full object-cover -mt-16" />
                <img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop" alt="Finished" className="rounded-2xl h-48 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Explore;
