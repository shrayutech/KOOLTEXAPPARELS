import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Scissors, 
  Printer, 
  Truck, 
  Users, 
  Layers, 
  ShieldCheck, 
  ClipboardCheck, 
  Zap,
  ChevronRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Custom Uniform Manufacturing",
      desc: "End-to-end manufacturing for schools, corporates, and hospitals with precise sizing and high-quality stitching."
    },
    {
      icon: Layers,
      title: "Bulk Apparel Production",
      desc: "Mass production capabilities for T-shirts, hoodies, and promotional wear with consistent quality across thousands of units."
    },
    {
      icon: ShieldCheck,
      title: "Safety Wear Manufacturing",
      desc: "Specialized production of high-visibility jackets, aprons, and fire-retardant industrial wear meeting safety standards."
    },
    {
      icon: Users,
      title: "Corporate Branding",
      desc: "Transform your staff into brand ambassadors with professionally designed and branded corporate attire."
    },
    {
      icon: Printer,
      title: "Custom Printing & Stitching",
      desc: "State-of-the-art screen printing, DTG, and computerized embroidery services for all types of garments."
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      desc: "Seamless delivery management from our manufacturing unit directly to your doorstep, anywhere in the world."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      desc: "We discuss your requirements, fabric preferences, and branding needs."
    },
    {
      step: "02",
      title: "Sample Creation",
      desc: "Our designers create samples for your approval before starting bulk production."
    },
    {
      step: "03",
      title: "Mass Production",
      desc: "Using automated machinery and skilled labor, we begin the manufacturing process."
    },
    {
      step: "04",
      title: "Quality Control",
      desc: "Every single piece goes through a 5-point quality check to ensure excellence."
    },
    {
      step: "05",
      title: "Packaging & Delivery",
      desc: "Goods are professionally packed and dispatched via our reliable logistics partners."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <section className="bg-secondary pt-40 pb-24 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-5 -skew-x-12 translate-x-1/2"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">Our Manufacturing <span className="text-primary">Services</span></h1>
            <p className="text-xl text-gray-400">
              From concept to delivery, we provide comprehensive apparel manufacturing solutions tailored to your industry's specific needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <service.icon size={32} className="text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  {service.desc}
                </p>
                <Link to="/contact" className="flex items-center gap-2 text-secondary font-bold group-hover:text-primary transition-colors">
                  Learn More <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary text-white overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Our Workflow Process</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Arrow for Desktop */}
                {i < process.length - 1 && (
                  <div className="absolute top-10 -right-4 hidden lg:block text-primary/30">
                    <ChevronRight size={32} />
                  </div>
                )}
                
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8 relative">
                    <span className="text-4xl font-black text-primary/20">{p.step}</span>
                    <div className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover:scale-100 transition-transform"></div>
                  </div>
                  <h4 className="text-xl font-bold mb-4">{p.title}</h4>
                  <p className="text-gray-400">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Decorative background circle */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <ClipboardCheck size={64} className="text-white/50 mx-auto mb-8" />
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Get a Personalized Quote</h2>
              <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
                Ready to elevate your organization's image? Send us your requirements and get a detailed quote within 24 hours.
              </p>
              <Link to="/contact" className="bg-white text-primary px-12 py-5 rounded-2xl font-bold text-xl hover:bg-secondary hover:text-white transition-all shadow-xl active:scale-95 flex items-center gap-3 mx-auto max-w-fit">
                <Zap size={24} /> Request Quote Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
