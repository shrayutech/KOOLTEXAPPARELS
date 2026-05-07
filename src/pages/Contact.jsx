import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter, Linkedin, MessageCircle, ExternalLink } from 'lucide-react';

const Contact = () => {
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
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <section className="bg-secondary pt-40 pb-20 text-white relative">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact <span className="text-primary">Us</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions about bulk orders or custom designs? Our team is here to help you every step of the way.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info Side */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-8 mb-12">
                {[
                  { icon: Phone, title: "Phone", details: ["+91 86984 67777", "+91 78750 01777"] },
                  { icon: Mail, title: "Email", details: ["kooltexapparels@gmail.com"] },
                  { icon: MapPin, title: "Address", details: ["Gat No. 97, Bidkin-Shendra Road,", "Bidkin- 431 105 Dist. Chh. Sambhajinagar"] }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-500">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <h4 className="text-xl font-bold mb-6">Follow Us</h4>
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
                    className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>

              {/* WhatsApp Call to Action */}
              <div className="mt-12 p-8 rounded-3xl bg-[#25D366]/10 border border-[#25D366]/20">
                <MessageCircle size={32} className="text-[#25D366] mb-4" fill="currentColor" />
                <h4 className="text-xl font-bold mb-2">Chat on WhatsApp</h4>
                <p className="text-gray-600 mb-6">Connect with our sales team instantly for quick inquiries.</p>
                <a href="https://wa.me/919876543210" target="_blank" className="inline-block bg-[#25D366] text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                  Chat Now
                </a>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-8">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="Bulk Order Inquiry"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Message</label>
                    <textarea
                      rows="5"
                      name="message"
                      required
                      className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="Tell us about your project requirements..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full btn-primary py-5 rounded-2xl flex items-center justify-center gap-3 text-lg">
                    <Send size={20} /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[600px] w-full bg-gray-200 relative overflow-hidden group">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.023456789!2d75.29815673828125!3d19.697023391723633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDQxJzQ5LjMiTiA3NcKwMTcnNTMuNCJF!5e0!3m2!1sen!2sin!4v1715065000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kooltex Apparels Location"
          className="transition-all duration-700"
        ></iframe>

        {/* Custom Location Card Overlay */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10 max-w-[280px] sm:max-w-xs w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white p-5 sm:p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-bold text-secondary tracking-tight">Bidkin</h3>
                <p className="text-gray-400 text-sm font-medium">Bidkin, Maharashtra 431105</p>
              </div>
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-[0_10px_20px_rgba(211,47,47,0.3)]">
                <MapPin size={28} />
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 bg-[#4ADE80] rounded-full"></span>
              <span className="text-gray-500 font-medium">Manufacturing Unit</span>
            </div>

            <div className="flex gap-2">
              <a 
                href="https://www.google.com/maps?q=19.697023391723633,75.29815673828125&z=17&hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-dark text-white flex-grow py-3.5 rounded-2xl flex items-center justify-center gap-2 text-sm font-bold transition-all shadow-lg active:scale-95"
              >
                <ExternalLink size={18} /> Open in Maps
              </a>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=19.697023391723633,75.29815673828125" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white border-2 border-gray-100 text-secondary hover:bg-gray-50 p-3.5 rounded-2xl flex items-center justify-center transition-all active:scale-95"
                title="Directions"
              >
                <Send size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
