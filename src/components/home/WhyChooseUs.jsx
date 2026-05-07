import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Zap, Award, Users, Settings } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      desc: "We use high-grade fabrics and state-of-the-art stitching techniques for durability."
    },
    {
      icon: Zap,
      title: "Quick Turnaround",
      desc: "Optimized production lines ensuring timely delivery for bulk orders."
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      desc: "From design to final stitching, we customize every aspect to your brand needs."
    },
    {
      icon: ShieldCheck,
      title: "Reliable Service",
      desc: "Trusted by top corporations and schools for consistent quality and service."
    },
    {
      icon: Truck,
      title: "Global Delivery",
      desc: "Efficient logistics network to deliver your orders anywhere in the world."
    },
    {
      icon: Users,
      title: "Expert Team",
      desc: "Skilled craftsmen and designers with decades of experience in apparel."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              We combine modern industrial technology with traditional craftsmanship to deliver the best apparel solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <item.icon size={28} className="text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">
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
