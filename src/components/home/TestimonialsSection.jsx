"use client";
import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "KOOLTEX has been our primary uniform partner for 5 years. Their quality consistency and turnaround time are unmatched in the industry.",
      author: "Rajesh Mehta",
      role: "Operations Head, Industrial Corp"
    },
    {
      text: "The school uniforms were delivered ahead of schedule and the fabric quality surpassed our expectations. Highly recommended for bulk orders.",
      author: "Sister Clara",
      role: "Principal, St. Xavier's School"
    },
    {
      text: "Exceptional service and premium branding. The custom corporate blazers we ordered were perfectly tailored and very comfortable.",
      author: "Anita Sharma",
      role: "HR Director, Tech Solution Ltd"
    },
  ];

  return (
    <section className="section-padding bg-light relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-dark mb-6 heading-dual"
          >
            Client <span>Success</span> Stories
          </motion.h2>
          <p className="text-body text-lg font-medium">Trusted by leading organizations for over a decade.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 rounded-[3rem] shadow-sm border border-steel/20 relative group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-lg">★</span>
                ))}
              </div>
              <p className="text-body text-lg leading-relaxed mb-10 font-medium">"{t.text}"</p>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-light rounded-2xl flex items-center justify-center text-primary font-black text-xl border border-steel/20">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-dark text-lg">{t.author}</h4>
                  <p className="text-primary font-black text-[10px] uppercase tracking-[0.2em] mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
