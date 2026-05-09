"use client";
import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    { label: "Years in Industry", value: "15+" },
    { label: "Corporate Clients", value: "500+" },
    { label: "Monthly Capacity", value: "50,000+" },
    { label: "Product SKUs", value: "1,200+" },
  ];

  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="text-primary font-black text-6xl md:text-7xl mb-4 tracking-tighter tabular-nums">
                {stat.value}
              </div>
              <div className="text-white/60 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
                {stat.label}
              </div>
              <div className="w-8 h-1 bg-primary/30 mt-6 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
