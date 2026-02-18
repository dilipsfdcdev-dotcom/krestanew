'use client';

import { motion } from 'framer-motion';
import { ChevronDown, TreePine, Mountain, Shield, MapPin } from 'lucide-react';

export default function ProjectHero3D() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d2818] via-[#0a0a0f] to-[#0a0a0f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(26,77,46,0.15)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(201,169,98,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Corner elements */}
      <div className="absolute top-28 left-8 w-24 h-24 border-l border-t border-[#2d6a4f]/30" />
      <div className="absolute bottom-20 right-8 w-24 h-24 border-r border-b border-[#c9a962]/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#c9a962]/60 text-xs tracking-[0.3em] uppercase mb-4"
        >
          A Distinguished 100-Acre Farmland Estate
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-title font-bold text-white font-[family-name:var(--font-heading)] mb-3"
        >
          The Meadow Breeze
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[#c9a962] text-lg md:text-xl font-[family-name:var(--font-heading)]"
        >
          by <span className="text-gradient-gold font-bold">Kresta</span>
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="line-gold mx-auto my-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white/40 italic text-sm md:text-base font-[family-name:var(--font-heading)] mb-4"
        >
          &ldquo;Where the hills whisper peace and the breeze carries serenity&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-2 text-white/30 text-sm mb-8"
        >
          <MapPin size={14} className="text-[#c9a962]/50" />
          <span>Peepal Pahad, Choutuppal, Yadadri Bhuvanagiri District</span>
        </motion.div>

        {/* Highlight pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {[
            { icon: TreePine, label: '600-900 Plants/Plot' },
            { icon: Mountain, label: '360° Mountain Views' },
            { icon: Shield, label: 'Gated Community' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-4 py-2 glass-gold rounded-full text-[#c9a962]/80 text-xs"
            >
              <item.icon size={14} />
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#overview"
            className="group flex items-center gap-2 px-8 py-3.5 bg-[#c9a962] text-black font-semibold rounded-full btn-3d hover:bg-[#e8d5a3] transition-colors text-sm"
          >
            Explore Project
          </a>
          <a
            href="https://wa.me/919888932555?text=Hi%2C%20I%20would%20like%20to%20book%20a%20site%20visit%20for%20The%20Meadow%20Breeze."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white/70 rounded-full hover:border-[#c9a962]/50 hover:text-[#c9a962] transition-all text-sm"
          >
            Book Site Visit
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-[#c9a962]/50" />
        </motion.div>
      </motion.div>

      {/* Corner text */}
      <div className="hidden md:block absolute bottom-12 right-12 text-white/10 text-xs italic font-[family-name:var(--font-heading)]">
        Modern Sanctuary
      </div>
    </section>
  );
}
