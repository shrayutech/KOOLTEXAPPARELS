"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center bg-light overflow-hidden pt-20">
      {/* --- Ambient Background Elements --- */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Micro-pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #000 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* --- Text Content Column --- */}
          <motion.div
            className="lg:col-span-8 max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge Indicator */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px] px-5 py-2 bg-primary/10 rounded-full shadow-sm">
                ESTD 2010
              </span>
              <div className="h-[1px] w-12 bg-dark/10"></div>
              <span className="text-dark/40 font-black uppercase tracking-[0.3em] text-[10px]">
                Premium Manufacturing
              </span>
            </motion.div>

            {/* Main Headline - With Decorative Element */}
            <div className="relative">
              <motion.h1
                variants={itemVariants}
                className="text-6xl md:text-8xl font-black text-dark mb-10 tracking-tighter leading-[1.1] md:leading-[0.92] pl-0 md:pl-4"
              >
                <span className="block">
                  Manufacturing{" "}
                  <span className="text-primary font-medium italic relative">
                    Made Simple
                  </span>
                </span>
                <span className="block mt-4 md:mt-6">& Premium.</span>
              </motion.h1>
            </div>

            {/* Sub-text Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-body mb-14 max-w-2xl leading-relaxed font-medium"
            >
              India's trusted bulk manufacturer specializing in
              precision-engineered T-Shirts, School Uniforms, and Corporate
              Apparel with scalable excellence.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6"
            >
              <Link
                href="/explore"
                className="btn-primary group py-5 px-14 text-lg shadow-2xl shadow-primary/30 flex items-center gap-3"
              >
                Explore Products
                <ChevronRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/contact"
                className="btn-outline border-dark/10 text-dark hover:bg-dark hover:text-white py-5 px-14 text-lg backdrop-blur-sm transition-all"
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>

          {/* --- Visual Accent Column (Desktop Only) --- */}
          <motion.div
            className="hidden lg:block lg:col-span-4 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/5] w-full max-w-[400px] ml-auto">
              {/* Layered Decorative Elements */}
              <div className="absolute -inset-6 bg-primary/5 rounded-[4rem] -rotate-6 border border-primary/10"></div>
              <div className="absolute -inset-6 bg-secondary/5 rounded-[4rem] rotate-3 border border-secondary/10 translate-x-4 translate-y-4"></div>

              {/* Main Visual Container */}
              <div className="relative h-full w-full bg-white rounded-[4rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] overflow-hidden border-8 border-white group">
                <Image
                  src="/images/hero.png"
                  alt="Kooltex Premium Apparel"
                  fill
                  priority
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating "Experience" Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 bg-dark text-white p-6 rounded-3xl shadow-2xl z-20 border border-white/10"
              >
                <div className="text-3xl font-black text-primary leading-none">
                  15+
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest mt-1 text-white/60">
                  Years of Legacy
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
