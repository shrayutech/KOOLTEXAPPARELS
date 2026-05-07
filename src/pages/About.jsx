import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, CheckCircle2, History } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Years of Experience", value: "15+" },
    { label: "Skilled Craftsmen", value: "200+" },
    { label: "Garments Monthly", value: "50k+" },
    { label: "Global Clients", value: "500+" }
  ];

  const timeline = [
    { year: "2010", title: "The Foundation", desc: "Kooltex Apparels was founded with a small workshop in New Delhi with only 5 stitching machines." },
    { year: "2014", title: "Industrial Expansion", desc: "Expanded our manufacturing unit and started specialized production for industrial safety wear." },
    { year: "2018", title: "Quality Certification", desc: "Received international ISO certifications for quality management and ethical manufacturing." },
    { year: "2022", title: "Digital Transformation", desc: "Integrated smart inventory and automated pattern-cutting technology into our workflow." },
    { year: "2024", title: "Sustainability Leap", desc: "Launched a range of eco-friendly and recycled fabric uniform options for corporate clients." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="bg-secondary pt-40 pb-32 text-center text-white relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Crafting Excellence <br />
            <span className="text-primary">Since 2010</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            A legacy built on quality, reliability, and an unwavering commitment to manufacturing the finest apparel for every industry.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="text-white">
                <h3 className="text-5xl font-bold mb-2">{stat.value}</h3>
                <p className="text-white/70 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro & Values */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">Our Journey to Becoming <span className="text-primary">Industry Leaders</span></h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                What started as a small family-run workshop has evolved into a powerhouse of apparel manufacturing. At Kooltex Apparels, we believe that a uniform is more than just clothing; it's an identity, a shield, and a statement.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We've spent over a decade perfecting our processes, from sourcing the finest raw materials to implementing rigorous quality checks at every stage of production.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "ISO 9001 Certified Quality",
                  "Ethical Manufacturing Practices",
                  "Sustainable Fabric Sourcing",
                  "Employee-First Work Culture"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-primary" />
                    <span className="font-bold text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1558444479-c8f010524776?q=80&w=2070&auto=format&fit=crop" alt="Stitching" className="rounded-2xl h-64 w-full object-cover shadow-lg" />
                <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" alt="Fabric" className="rounded-2xl h-80 w-full object-cover shadow-lg" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=1964&auto=format&fit=crop" alt="Uniforms" className="rounded-2xl h-80 w-full object-cover shadow-lg" />
                <img src="https://images.unsplash.com/photo-1560243563-062bff001d9f?q=80&w=2070&auto=format&fit=crop" alt="Office" className="rounded-2xl h-64 w-full object-cover shadow-lg" />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-12 rounded-3xl"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <Target size={32} className="text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide durable, high-quality, and cost-effective apparel solutions that empower organizations and their people, while maintaining the highest standards of integrity and social responsibility.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-secondary p-12 rounded-3xl text-white"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                To become the global benchmark for excellence in garment manufacturing, recognized for innovation, sustainability, and our contribution to the growth of the textile industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-50 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Our Growth Timeline</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto"></div>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center">
                    <div className={`bg-white p-8 rounded-3xl shadow-lg border border-gray-100 max-w-md relative ${i % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                      <span className="text-primary font-black text-2xl mb-2 block">{item.year}</span>
                      <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-12 h-12 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10 hidden md:flex">
                    <History size={20} className="text-white" />
                  </div>

                  <div className="w-full md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
