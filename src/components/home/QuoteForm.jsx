"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, Clock } from 'lucide-react';

const QuoteForm = () => {
  return (
    <section id="quote" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Content Side */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-dark mb-8 leading-tight heading-dual">
                Ready to <span>Start</span> Your <br />Bulk Order?
              </h2>
              <p className="text-body text-lg mb-12 font-medium leading-relaxed">
                Get a precision-engineered quote for your corporate, educational, or industrial apparel needs. Our experts will get back to you within 24 hours.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-light rounded-2xl flex items-center justify-center text-primary border border-steel/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-body text-xs font-black uppercase tracking-widest mb-1">Call for Support</p>
                    <p className="text-dark font-black text-xl">+91 86984 67777</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-light rounded-2xl flex items-center justify-center text-primary border border-steel/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-body text-xs font-black uppercase tracking-widest mb-1">Email Inquiry</p>
                    <p className="text-dark font-black text-xl">kooltexapparels@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-light rounded-2xl flex items-center justify-center text-primary border border-steel/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-body text-xs font-black uppercase tracking-widest mb-1">Response Time</p>
                    <p className="text-dark font-black text-xl">Within 24 Hours</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-light p-8 md:p-12 rounded-[3rem] border border-steel/20 shadow-2xl relative"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-dark font-black uppercase tracking-widest text-[10px] mb-3 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. John Doe"
                      className="w-full bg-white border border-steel/20 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all text-dark font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-dark font-black uppercase tracking-widest text-[10px] mb-3 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="e.g. john@company.com"
                      className="w-full bg-white border border-steel/20 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all text-dark font-medium"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-dark font-black uppercase tracking-widest text-[10px] mb-3 ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-white border border-steel/20 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all text-dark font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-dark font-black uppercase tracking-widest text-[10px] mb-3 ml-1">Service Type</label>
                    <select className="w-full bg-white border border-steel/20 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all text-dark font-medium appearance-none">
                      <option>Corporate Uniforms</option>
                      <option>School Uniforms</option>
                      <option>Industrial Wear</option>
                      <option>Custom T-Shirts</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-dark font-black uppercase tracking-widest text-[10px] mb-3 ml-1">Message / Requirements</label>
                  <textarea 
                    rows="4"
                    placeholder="Tell us about your bulk requirements..."
                    className="w-full bg-white border border-steel/20 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all text-dark font-medium resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full py-5 text-lg shadow-xl shadow-primary/20">
                  Send Request <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
