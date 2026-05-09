"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      q: "What is your minimum order quantity (MOQ)?",
      a: "Our typical MOQ starts at 50 units per design for T-shirts and 100 units for uniforms, depending on the complexity and fabric requirements."
    },
    {
      q: "Do you provide customized branding and logos?",
      a: "Yes, we offer premium embroidery, screen printing, and heat transfer options for all types of apparel to match your brand identity perfectly."
    },
    {
      q: "What is the typical turnaround time?",
      a: "Sample production takes 7-10 days. Bulk production usually ranges from 3-5 weeks depending on the order size and current manufacturing load."
    },
    {
      q: "Can you provide samples before bulk production?",
      a: "Absolutely. We recommend getting a sample approved to ensure fabric, fit, and branding meet your expectations before we start bulk manufacturing."
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-dark mb-6 heading-dual"
          >
            Common <span>Questions</span>
          </motion.h2>
          <p className="text-body text-lg font-medium">Everything you need to know about our manufacturing process.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-steel/20 rounded-[2rem] overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
                className={`w-full flex items-center justify-between p-8 text-left transition-colors ${activeIndex === i ? 'bg-primary text-white' : 'bg-light text-dark hover:bg-steel/10'}`}
              >
                <span className="text-lg font-bold">{faq.q}</span>
                {activeIndex === i ? <Minus size={20} /> : <Plus size={20} className="text-primary" />}
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-white"
                  >
                    <div className="p-8 text-body text-lg font-medium leading-relaxed border-t border-steel/10">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
