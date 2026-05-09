"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Zap, Ruler } from 'lucide-react';
import Image from 'next/image';

const QualitySection = () => {
  const points = [
    { icon: ShieldCheck, title: "Industry Compliance", desc: "Our safety apparel meets international industrial safety standards." },
    { icon: Award, title: "Premium Fabric Graded", desc: "We use only tested, color-fast, and high-GSM fabrics for durability." },
    { icon: Ruler, title: "Consistent Sizing", desc: "Standardized sizing charts across all product categories for perfect fit." },
    { icon: Zap, title: "Color Persistence", desc: "Industrial-grade dyeing ensures colors stay vibrant after 100+ washes." },
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-dark mb-8 leading-[1.1] heading-dual">
              Uncompromising <br />
              <span>Quality Assurance.</span>
            </h2>
            <p className="text-slate/60 text-xl mb-12 font-medium leading-relaxed">
              At KOOLTEX APPARELS, quality isn't a department; it's our core identity. We implement rigorous testing from fabric stress to final stitching precision.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {points.map((point, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-primary flex-shrink-0">
                    <point.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-dark mb-2">{point.title}</h4>
                    <p className="text-body/60 text-sm font-medium leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-light rounded-[3rem] relative overflow-hidden shadow-2xl">
              <Image 
                src="/images/quality.png" 
                alt="Kooltex Quality Assurance" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary rounded-3xl flex items-center justify-center p-8 text-white shadow-2xl">
              <div className="text-center">
                <div className="text-4xl font-black mb-1">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest">Quality Tested</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
