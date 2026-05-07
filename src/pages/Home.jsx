import React from 'react';
import Hero from '../components/home/Hero.jsx';
import WhyChooseUs from '../components/home/WhyChooseUs.jsx';
import FeaturedProducts from '../components/home/FeaturedProducts.jsx';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      
      {/* Short Intro Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-primary font-bold uppercase tracking-widest mb-4">About Kooltex</h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Decades of Excellence in Industrial & Fashion Apparel
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Kooltex Apparels is a leading manufacturer specializing in high-quality uniforms and custom apparel. We pride ourselves on our state-of-the-art manufacturing facility and a dedicated team that ensures every garment meets the highest standards of quality and comfort.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-4xl font-bold text-secondary mb-2">15+</h4>
                  <p className="text-gray-500">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-secondary mb-2">500+</h4>
                  <p className="text-gray-500">Happy Clients</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" 
                  alt="Manufacturing Process" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-primary p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-white font-bold text-xl italic">
                  "Quality is not an act, it is a habit."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <FeaturedProducts />

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Start Your Project?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
              Whether you need 100 or 10,000 units, we have the capacity and expertise to deliver premium results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="mailto:kooltexapparels@gmail.com" className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-secondary hover:text-white transition-all shadow-xl active:scale-95">
                Request a Quote
              </a>
              <a href="tel:+918698467777" className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-all active:scale-95">
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
