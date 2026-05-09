"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Palette, Settings, Truck, CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    { icon: Palette, title: "Design & Fabric Selection", desc: "Consultation and premium fabric sourcing tailored to requirements." },
    { icon: Scissors, title: "Precision Pattern Cutting", desc: "Automated pattern generation and high-accuracy fabric cutting." },
    { icon: Settings, title: "Expert Stitching", desc: "State-of-the-art industrial stitching by skilled craftsmen." },
    { icon: CheckCircle, title: "Quality Audit", desc: "Rigorous 3-stage quality check for durability and finish." },
    { icon: Truck, title: "Bulk Distribution", desc: "Secure packaging and nationwide delivery across India." },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-dark mb-6 heading-dual"
          >
            How We <span>Deliver</span> Excellence
          </motion.h2>
          <p className="text-body text-lg font-medium">A streamlined 5-step process for precision manufacturing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16 relative">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative z-10 text-center group ${i < steps.length - 1 ? 'step-line' : ''}`}
            >
              <div className="relative mb-10">
                <div className="w-24 h-24 bg-light rounded-3xl flex items-center justify-center mx-auto shadow-sm group-hover:shadow-2xl group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-steel/20 group-hover:scale-110 group-hover:-rotate-6">
                  <step.icon size={36} />
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-black text-sm border-4 border-white shadow-lg">
                  {i + 1}
                </div>
              </div>
              <h4 className="text-lg font-bold text-dark mb-4 px-2">{step.title}</h4>
              <p className="text-body text-sm font-medium leading-relaxed px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
