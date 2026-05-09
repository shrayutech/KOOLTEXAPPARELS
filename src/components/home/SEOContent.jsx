"use client";
import React from 'react';
import { motion } from 'framer-motion';

const SEOContent = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-12 text-dark tracking-tighter"
          >
            India's Most Trusted <span className="text-primary italic">Uniform & Apparel Manufacturer</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-body text-lg leading-relaxed font-medium">
                KOOLTEX APPARELS has established itself as the <strong className="text-dark">best T-Shirts manufacturer in India</strong>, 
                delivering premium quality bulk orders to clients across Maharashtra, Gujarat, Delhi, Karnataka, 
                and Tamil Nadu. Our state-of-the-art facility in Bidkin, Chh Sambhajinagar produces over 50,000 
                units monthly with ISO 9001:2015 and OEKO-TEX Standard 100 certifications.
              </p>
              <p className="text-body text-lg leading-relaxed font-medium">
                As a leading <strong className="text-dark">Track Suits manufacturer in India</strong>, we specialize in moisture-wicking, 
                durable athletic wear suitable for schools, sports academies, and corporate fitness programs. 
                Our <strong className="text-dark">School Uniforms manufacturing</strong> division serves 200+ educational institutions 
                with custom-designed, comfortable, and long-lasting uniform solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-body text-lg leading-relaxed font-medium">
                Looking for a reliable <strong className="text-dark">Corporate Uniforms manufacturer in India</strong>? We provide 
                end-to-end branding solutions including embroidery, screen printing, and custom tailoring for 
                businesses of all sizes. Our <strong className="text-dark">Safety Jackets manufacturer</strong> division produces 
                high-visibility, flame-resistant industrial wear meeting all safety standards.
              </p>
              <p className="text-body text-lg leading-relaxed font-medium">
                Additionally, we are a premier <strong className="text-dark">Aprons manufacturer</strong> for hospitality, healthcare, and industrial sectors. 
                Our focus on quality and precision has made us a preferred <strong className="text-dark">bulk uniform supplier India</strong> 
                for global enterprises and local institutions alike.
              </p>
            </motion.div>
          </div>
          
          {/* Certification Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-12 mt-20"
          >
            {[
              { label: "ISO 9001:2015", sub: "Quality Management" },
              { label: "OEKO-TEX®", sub: "Standard 100" },
              { label: "MSME", sub: "Registered Enterprise" },
              { label: "MADE IN INDIA", sub: "Manufacturing Excellence" }
            ].map((cert, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-light rounded-[2rem] flex items-center justify-center mx-auto mb-4 border border-steel/10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                  <span className="font-black text-xl">{cert.label.split(' ')[0]}</span>
                </div>
                <p className="text-dark font-black text-xs uppercase tracking-widest">{cert.label}</p>
                <p className="text-body/40 text-[10px] font-bold uppercase tracking-tighter mt-1">{cert.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;
