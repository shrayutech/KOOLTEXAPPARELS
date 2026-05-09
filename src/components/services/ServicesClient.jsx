"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ChevronRight, 
  Settings, 
  Scissors, 
  Truck, 
  Award, 
  Building2, 
  GraduationCap, 
  HardHat, 
  Briefcase,
  Layers,
  Printer
} from 'lucide-react';

const ServicesClient = () => {
  const services = [
    {
      icon: Layers,
      title: "Bulk Apparel Production",
      desc: "Industrial-scale manufacturing capacity for high-volume orders with consistent quality across every unit."
    },
    {
      icon: Briefcase,
      title: "Corporate Identity Solutions",
      desc: "Comprehensive uniform programs designed to reinforce your brand's professional presence."
    },
    {
      icon: GraduationCap,
      title: "Educational Uniforms",
      desc: "Specialized production for academic institutions, focusing on comfort, durability, and traditional aesthetics."
    },
    {
      icon: HardHat,
      title: "Industrial Safety Wear",
      desc: "Highly compliant protective apparel engineered for maximum safety in challenging environments."
    },
    {
      icon: Printer,
      title: "Advanced Branding",
      desc: "State-of-the-art computerized embroidery and screen printing for precision logo replication."
    },
    {
      icon: Scissors,
      title: "Technical Stitching",
      desc: "Specialized machinery for reinforced seams, moisture-wicking fabrics, and performance apparel."
    }
  ];

  const industries = [
    { icon: Building2, name: "Corporates" },
    { icon: GraduationCap, name: "Schools & Colleges" },
    { icon: HardHat, name: "Manufacturing & Oil" },
    { icon: Briefcase, name: "Hospitality & Healthcare" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      {/* Header Section */}
      <section className="bg-secondary pt-48 pb-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent font-bold uppercase tracking-[0.4em] text-xs mb-8"
          >
            Capabilities
          </motion.h3>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter"
          >
            Enterprise <br />
            <span className="text-primary italic">Services.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            End-to-end manufacturing solutions engineered for reliability, scalability, and technical excellence.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-12 rounded-[2.5rem] bg-light border border-steel/10 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-20 h-20 bg-white rounded-[1.5rem] flex items-center justify-center mb-10 shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <service.icon size={36} />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-secondary tracking-tighter">{service.title}</h3>
                <p className="text-slate/80 text-lg leading-relaxed font-medium mb-10">
                  {service.desc}
                </p>
                <Link href="/contact" className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                  Get Started <ChevronRight size={20} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
           <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-[200px] border-primary rounded-full opacity-10"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">Industries We Empower</h2>
            <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto">
              Specialized apparel solutions tailored for mission-critical industrial and institutional sectors.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10 group-hover:bg-primary transition-all duration-500 shadow-xl">
                  <ind.icon size={40} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold uppercase tracking-widest">{ind.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="section-padding bg-light">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-12 tracking-tighter">Enterprise Project Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { step: "01", title: "Strategic Brief", desc: "Understanding scale and technical requirements." },
              { step: "02", title: "Technical Sampling", desc: "Prototype development and fabric validation." },
              { step: "03", title: "Scaled Production", desc: "Industrial manufacturing with 3-tier quality control." },
              { step: "04", title: "Nationwide Logistics", desc: "Secure bulk shipping and multi-location delivery." },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white rounded-3xl shadow-sm border border-steel/10 group hover:shadow-xl transition-all"
              >
                <div className="text-primary font-black text-5xl mb-6 opacity-20 group-hover:opacity-100 transition-opacity">{step.step}</div>
                <h4 className="text-xl font-bold mb-4 text-secondary">{step.title}</h4>
                <p className="text-slate/80 text-sm font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter">Ready to Scale Your Production?</h2>
          <p className="text-white/70 text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-medium">
            Contact our project management team for a detailed consultation and manufacturing plan.
          </p>
          <Link href="/contact" className="bg-white text-primary px-12 py-5 rounded-xl font-black text-xl shadow-2xl hover:bg-secondary hover:text-white transition-all inline-flex uppercase tracking-widest">
            Inquire Now
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesClient;
