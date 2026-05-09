"use client";
import React from 'react';
import Hero from '../../components/home/Hero.jsx';
import WhyChooseUs from '../../components/home/WhyChooseUs.jsx';
import FeaturedProducts from '../../components/home/FeaturedProducts.jsx';
import StatsSection from '../../components/home/StatsSection.jsx';
import ProcessSection from '../../components/home/ProcessSection.jsx';
import QualitySection from '../../components/home/QualitySection.jsx';
import TestimonialsSection from '../../components/home/TestimonialsSection.jsx';
import QuoteForm from '../../components/home/QuoteForm.jsx';
import FAQAccordion from '../../components/home/FAQAccordion.jsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const HomeClient = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      <Hero />
      
      {/* Trusted By Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <p className="text-center text-dark/40 text-xs font-black uppercase tracking-[0.5em] mb-12">Trusted by 500+ Organizations Across India</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {['Industrial', 'Education', 'Corporate', 'Healthcare', 'Government'].map(brand => (
              <span key={brand} className="text-2xl font-black tracking-tighter text-dark">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Enterprise Blue Style */}
      <section className="section-padding" id="about">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-6 px-4 py-1.5 bg-primary/10 inline-block rounded-full">Expert Manufacturing</h3>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] text-dark heading-dual">
                Industrial Heritage, <br />
                <span>Modern Delivery.</span>
              </h2>
              <p className="text-body text-xl mb-8 leading-relaxed font-medium">
                KOOLTEX APPARELS is a premier garment manufacturer specializing in large-scale production for corporate, educational, and industrial sectors across India.
              </p>
              <p className="text-body/60 text-lg mb-10 leading-relaxed font-medium">
                From our state-of-the-art facility in Chh. Sambhajinagar, we deliver consistent excellence in T-shirts, uniforms, and specialized safety gear.
              </p>
              <Link href="/about" className="btn-primary inline-flex group shadow-xl shadow-primary/20">
                Learn More About Us <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative border-8 border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000" 
                  alt="Kooltex Apparels Manufacturing" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-primary p-10 rounded-[2.5rem] shadow-2xl hidden md:block">
                <p className="text-white font-black text-xl leading-tight italic">
                  "Excellence in every stitch, <br /> precision in every order."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <StatsSection />
      
      <WhyChooseUs />

      <FeaturedProducts />

      <ProcessSection />

      <QualitySection />

      <TestimonialsSection />

      <QuoteForm />

      <FAQAccordion />
    </motion.div>
  );
};

export default HomeClient;
