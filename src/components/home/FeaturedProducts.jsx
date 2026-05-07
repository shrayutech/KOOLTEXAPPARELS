import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Premium Corporate Polo",
      category: "Corporate Uniforms",
      image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "High-Visibility Safety Jacket",
      category: "Safety Wear",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Classic School Uniform Set",
      category: "School Uniforms",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Performance Track Suit",
      category: "Sports Wear",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2040&auto=format&fit=crop"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <div className="w-20 h-1.5 bg-primary mb-6"></div>
            <p className="text-gray-600 text-lg">
              Check out our latest collections and most popular manufacturing solutions for various industries.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/explore" className="group flex items-center gap-2 text-primary font-bold hover:underline">
              View All Products
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Link to="/contact" className="w-full btn-primary text-sm py-2 text-center">
                    Quick Inquiry
                  </Link>
                </div>
              </div>
              <span className="text-primary text-sm font-bold uppercase tracking-wider mb-2 block">{product.category}</span>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{product.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
