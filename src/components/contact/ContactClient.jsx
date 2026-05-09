"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  MessageCircle, 
  ExternalLink,
  Clock
} from 'lucide-react';

const ContactClient = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for contacting KOOLTEX APPARELS. Our project team will reach out to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      {/* Header Section */}
      <section className="bg-secondary pt-48 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,#2563EB_0%,transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent font-bold uppercase tracking-[0.4em] text-xs mb-8"
          >
            Communication Hub
          </motion.h3>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter"
          >
            Connect With <br />
            <span className="text-primary italic">Our Team.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Direct access to our project management and manufacturing consultants for enterprise-level inquiries.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Contact Details Side */}
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold mb-12 text-secondary tracking-tighter uppercase">Project Support</h2>
              
              <div className="space-y-12 mb-16">
                {[
                  { icon: Phone, title: "Phone Enquiries", details: ["+91 86984 67777", "+91 78750 01777"] },
                  { icon: Mail, title: "Official Email", details: ["kooltexapparels@gmail.com"] },
                  { icon: Clock, title: "Business Hours", details: ["Mon - Sat: 10:00 AM - 7:00 PM", "Sunday: Closed"] },
                  { icon: MapPin, title: "Headquarters", details: ["Gat No. 97, Bidkin-Shendra Road,", "Bidkin – 431105 Dist. Chh. Sambhajinagar"] }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="w-14 h-14 bg-light rounded-2xl flex items-center justify-center flex-shrink-0 text-primary border border-steel/10 shadow-sm">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-secondary">{item.title}</h4>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-slate/80 font-medium leading-relaxed">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <h4 className="text-xl font-bold mb-8 text-secondary uppercase tracking-widest">Global Reach</h4>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, link: "#" },
                  { icon: Instagram, link: "https://www.instagram.com/kooltexapparels/" },
                  { icon: Twitter, link: "#" },
                  { icon: Linkedin, link: "#" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-light flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm border border-steel/10"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>

              {/* WhatsApp Premium CTA */}
              <div className="mt-16 p-10 rounded-[3rem] bg-secondary text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full"></div>
                <MessageCircle size={48} className="text-primary mb-8 group-hover:scale-110 transition-transform" />
                <h4 className="text-2xl font-bold mb-4">Direct WhatsApp Support</h4>
                <p className="text-white/80 mb-8 font-medium">Connect with our production lead for instant bulk project consultation.</p>
                <a href="https://wa.me/918698467777" target="_blank" className="btn-primary w-full shadow-2xl">
                  Start Consultation
                </a>
              </div>
            </div>

            {/* Form Side with Glassmorphism */}
            <div className="lg:col-span-2">
              <div className="bg-light/50 backdrop-blur-md p-10 md:p-16 rounded-[3.5rem] border border-steel/10 shadow-2xl relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full"></div>
                
                <h3 className="text-3xl font-bold mb-12 text-secondary tracking-tighter uppercase">Strategic Inquiry Form</h3>
                
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[0.2em] text-slate/40 ml-4">Authorized Representative</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-8 py-5 rounded-2xl bg-white border border-steel/10 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm font-medium"
                        placeholder="e.g. John Smith"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[0.2em] text-slate/40 ml-4">Corporate Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-8 py-5 rounded-2xl bg-white border border-steel/10 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm font-medium"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[0.2em] text-slate/40 ml-4">Contact Number</label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-8 py-5 rounded-2xl bg-white border border-steel/10 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm font-medium"
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[0.2em] text-slate/40 ml-4">Project Subject</label>
                      <input
                        type="text"
                        name="subject"
                        className="w-full px-8 py-5 rounded-2xl bg-white border border-steel/10 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm font-medium"
                        placeholder="Bulk Uniform Inquiry"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-slate/40 ml-4">Project Details & Requirements</label>
                    <textarea
                      rows="6"
                      name="message"
                      required
                      className="w-full px-8 py-5 rounded-2xl bg-white border border-steel/10 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm font-medium"
                      placeholder="Please describe your volume, material requirements, and deadlines..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full btn-primary py-6 rounded-2xl flex items-center justify-center gap-4 text-xl shadow-2xl">
                    <Send size={24} /> Submit Strategic Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[600px] w-full bg-light relative overflow-hidden group">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.023456789!2d75.29815673828125!3d19.697023391723633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDQxJzQ5LjMiTiA3NcKwMTcnNTMuNCJF!5e0!3m2!1sen!2sin!4v1715065000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kooltex Apparels Enterprise Hub"
          className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
        ></iframe>

        {/* Floating Location Card */}
        <div className="absolute top-10 left-10 z-10 max-w-sm w-full hidden md:block">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-steel/10"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-bold text-secondary tracking-tighter uppercase">Bidkin Hub</h3>
                <p className="text-slate/40 text-sm font-bold mt-1">Industrial Zone, Maharashtra</p>
              </div>
              <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center text-white shadow-xl">
                <MapPin size={32} />
              </div>
            </div>
            
            <div className="flex items-center gap-3 mb-8">
              <span className="w-3 h-3 bg-accent rounded-full animate-pulse"></span>
              <span className="text-secondary font-black text-xs uppercase tracking-widest">Main Manufacturing Unit</span>
            </div>

            <a 
              href="https://www.google.com/maps?q=19.697023391723633,75.29815673828125" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-secondary text-white w-full py-4 rounded-xl flex items-center justify-center gap-3 text-sm font-black uppercase tracking-widest hover:bg-primary transition-all shadow-xl"
            >
              <ExternalLink size={20} /> View in 3D Maps
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactClient;
