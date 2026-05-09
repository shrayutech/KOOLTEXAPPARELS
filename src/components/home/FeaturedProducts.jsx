"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      title: "Corporate Apparel",
      category: "Professional Wear",
      image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800",
      desc: "Bespoke shirts and uniforms for modern corporate environments."
    },
    {
      title: "Educational Uniforms",
      category: "School Wear",
      image: "https://images.unsplash.com/photo-1628554271148-3b61a97a8461?q=80&w=800",
      desc: "Durable and high-quality school uniforms for every academic level."
    },
    {
      title: "Safety & Industrial",
      category: "Protection Gear",
      image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800",
      desc: "High-visibility and protective apparel for industrial safety."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h3 className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-6 px-4 py-1.5 bg-primary/10 inline-block rounded-full">Product Showcase</h3>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 heading-dual">Enterprise Product <span>Range</span></h2>
            <p className="text-body text-lg font-medium">
              Explore our core specializations in bulk manufacturing for diverse industries.
            </p>
          </motion.div>
          <Link href="/explore" className="btn-outline border-dark/10 text-dark hover:bg-dark hover:text-white py-4 px-10">
            View All Categories <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-light rounded-[3rem] overflow-hidden border border-steel/20 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-8 left-8">
                  <span className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-black text-primary uppercase tracking-[0.2em] shadow-lg">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-black text-dark mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-body text-base mb-8 leading-relaxed font-medium">
                  {item.desc}
                </p>
                <Link href="/contact" className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs hover:gap-4 transition-all">
                  Inquire Now <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
