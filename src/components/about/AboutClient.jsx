"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, History, Award, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const AboutClient = () => {
  const stats = [
    { label: "Years of Heritage", value: "15+" },
    { label: "Production Specialists", value: "200+" },
    { label: "Unit Capacity (Monthly)", value: "50k+" },
    { label: "Global Presence", value: "500+" }
  ];

  const timeline = [
    { year: "2010", title: "Foundation & Vision", desc: "Established in Chh. Sambhajinagar with a focus on premium industrial manufacturing." },
    { year: "2014", title: "Infrastructural Expansion", desc: "Inauguration of our state-of-the-art automated manufacturing facility." },
    { year: "2018", title: "Strategic Diversification", desc: "Expanding into high-performance corporate and educational uniform sectors." },
    { year: "2024", title: "Digital Manufacturing", desc: "Integrating AI-driven pattern design and sustainable textile solutions." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      {/* Hero Section */}
      <section className="bg-secondary pt-48 pb-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent font-bold uppercase tracking-[0.4em] text-xs mb-8"
          >
            Corporate Heritage
          </motion.h3>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter"
          >
            Crafting Excellence <br />
            <span className="text-primary italic">Since 2010.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            A legacy built on precision engineering, ethical manufacturing, and an unwavering commitment to apparel excellence.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter">{stat.value}</h3>
                <p className="text-white font-bold uppercase tracking-widest text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Story Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-10 text-secondary leading-tight">Leading the Future of <span className="text-primary">Apparel Manufacturing.</span></h2>
              <p className="text-slate/80 text-xl mb-8 leading-relaxed font-medium">
                Kooltex Apparels was founded with a singular vision: to bridge the gap between traditional craftsmanship and modern industrial efficiency.
              </p>
              <p className="text-slate/70 text-lg mb-10 leading-relaxed font-medium">
                Today, we operate one of India's most advanced manufacturing hubs, delivering millions of units of high-quality uniforms and industrial apparel to organizations nationwide.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Enterprise Quality Standards",
                  "Ethical Manufacturing",
                  "Sustainable Sourcing",
                  "Automated Production"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={24} className="text-primary" />
                    <span className="font-bold text-secondary text-base">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-square"
            >
              <Image src="https://images.unsplash.com/photo-1558444479-c8f010524776?q=80&w=1000" alt="Kooltex Apparels Manufacturing Facility in Maharashtra India" fill className="object-cover" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </motion.div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              className="bg-light p-16 rounded-[3rem] border border-steel/10 group hover:bg-white hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-10 shadow-lg group-hover:bg-primary group-hover:text-white transition-all">
                <Target size={40} />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-secondary uppercase tracking-tighter">Our Mission</h3>
              <p className="text-slate/80 text-lg leading-relaxed font-medium">
                To empower organizations through high-performance apparel solutions, combining technical innovation with human-centric design.
              </p>
            </motion.div>
            <motion.div
              className="bg-secondary p-16 rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full"></div>
              <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-10 shadow-xl border border-white/10">
                <Eye size={40} className="text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-6 uppercase tracking-tighter">Our Vision</h3>
              <p className="text-white/80 text-lg leading-relaxed font-medium">
                To be the global benchmark for ethical and sustainable manufacturing, redefining excellence in the textile industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Timeline */}
      <section className="section-padding bg-light">
        <div className="container mx-auto">
          <div className="text-center mb-24">
            <h3 className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-6">Corporate Evolution</h3>
            <h2 className="text-4xl md:text-6xl font-bold text-secondary mb-10 tracking-tighter">Our Journey Timeline</h2>
            <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2rem] border border-steel/10 shadow-sm relative group hover:shadow-xl transition-all duration-500"
              >
                <div className="text-primary font-black text-4xl mb-6 tracking-tighter group-hover:scale-110 transition-transform origin-left">{item.year}</div>
                <h4 className="text-xl font-bold mb-4 text-secondary uppercase tracking-tight">{item.title}</h4>
                <p className="text-slate/80 text-sm leading-relaxed font-medium">{item.desc}</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutClient;
