"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Zap, Award, Users, Settings } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Enterprise Quality",
      desc: "Premium fabrics and specialized industrial stitching for bulk orders."
    },
    {
      icon: Zap,
      title: "Agile Production",
      desc: "Streamlined manufacturing lines ensuring on-time delivery across India."
    },
    {
      icon: Settings,
      title: "Scaleable Solutions",
      desc: "Customizable designs that scale seamlessly from 100 to 10,000+ units."
    },
    {
      icon: ShieldCheck,
      title: "Ethical Standards",
      desc: "100% compliant manufacturing practices and fair labor standards."
    },
    {
      icon: Truck,
      title: "Nationwide Logistics",
      desc: "Robust distribution network covering every major city in the country."
    },
    {
      icon: Users,
      title: "Industry Experts",
      desc: "Consultative approach with decades of textile manufacturing heritage."
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-6 px-4 py-1.5 bg-primary/10 inline-block rounded-full">Our Competitive Edge</h3>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-8 heading-dual">
              Why Brands Choose <span>KOOLTEX</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-light p-10 rounded-[3rem] border border-steel/20 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-steel/20">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-black text-dark mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-body leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
