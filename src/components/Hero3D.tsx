'use client';

import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero3D() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#0a0a0f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,98,0.08)_0%,_transparent_70%)]" />

      {/* Decorative grid */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Corner decorations */}
      <div className="absolute top-32 left-8 w-20 h-20 border-l border-t border-[#c9a962]/20" />
      <div className="absolute bottom-20 right-8 w-20 h-20 border-r border-b border-[#c9a962]/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, rotateY: -180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="mb-8 inline-block"
          style={{ perspective: '1000px' }}
        >
          <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-2 border-[#c9a962]/30 glow-gold">
            <Image
              src="/images/company/logo.webp"
              alt="Kresta"
              fill
              className="object-cover"
              sizes="128px"
              priority
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="hero-title font-bold text-gradient-gold font-[family-name:var(--font-heading)]">
            KRESTA
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/50 tracking-[0.2em] text-sm md:text-base uppercase mt-2 mb-6 font-[family-name:var(--font-heading)]"
        >
          Infra & Developers Pvt. Ltd.
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="line-gold mx-auto mb-8"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="hero-subtitle text-[#c9a962]/80 mb-6"
        >
          Crafting Luxury, Building Dreams
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-white/40 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-10"
        >
          Premium real estate solutions — from luxury residences and farmland estates
          to commercial spaces and integrated townships
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToProjects}
            className="group flex items-center gap-2 px-8 py-3.5 bg-[#c9a962] text-black font-semibold rounded-full btn-3d hover:bg-[#e8d5a3] transition-colors text-sm"
          >
            Explore Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollToContact}
            className="flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white/70 rounded-full hover:border-[#c9a962]/50 hover:text-[#c9a962] transition-all text-sm"
          >
            Contact Us
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase">Discover More</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-[#c9a962]/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
