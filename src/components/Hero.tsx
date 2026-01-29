'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Play, TreePine, Mountain, Wind } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        {/* Animated overlay patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a962] rounded-full filter blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1a4d2e] rounded-full filter blur-[100px] animate-pulse delay-1000" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="hero-subtitle text-[#c9a962] font-medium">
            Welcome to
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-title font-bold mb-6"
        >
          The Meadow
          <span className="block text-gradient-gold">Breeze</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div className="line-gold" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          Where the hills whisper peace and the breeze carries serenity
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-white/70 max-w-2xl mx-auto mb-12"
        >
          A distinguished 100-acre farmland estate nestled amidst the majestic Rachakonda Hills
        </motion.p>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <TreePine size={18} className="text-[#c9a962]" />
            <span className="text-sm font-medium">600-900 Plants/Plot</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Mountain size={18} className="text-[#c9a962]" />
            <span className="text-sm font-medium">360° Mountain Views</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Wind size={18} className="text-[#c9a962]" />
            <span className="text-sm font-medium">Oxygen-Rich Environment</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#project"
            className="btn-luxury px-10 py-4 bg-[#c9a962] text-white rounded-full text-lg font-medium tracking-wide hover:bg-[#8b7355] transition-all shadow-lg shadow-[#c9a962]/30"
          >
            Explore Project
          </a>
          <a
            href="https://wa.me/919888932555?text=Hi%2C%20I%27m%20interested%20in%20The%20Meadow%20Breeze%20project"
            target="_blank"
            className="btn-luxury px-10 py-4 bg-transparent border-2 border-white/50 text-white rounded-full text-lg font-medium tracking-wide hover:bg-white hover:text-[#1a1a1a] transition-all"
          >
            Book a Visit
          </a>
        </motion.div>

        {/* Video Play Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16"
        >
          <button className="group flex items-center gap-4 mx-auto">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all animate-pulse-gold">
                <Play size={24} className="text-white ml-1" fill="white" />
              </div>
            </div>
            <span className="text-white/80 font-medium group-hover:text-white transition-colors">
              Watch Video Tour
            </span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center text-white/60 hover:text-white transition-colors">
          <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </a>
      </motion.div>

      {/* Side Elements */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center gap-4">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
          <span className="text-white/60 text-xs tracking-widest uppercase rotate-[-90deg] whitespace-nowrap">
            Est. 2024
          </span>
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        </div>
      </div>

      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center gap-4">
          <a href="https://facebook.com" target="_blank" className="text-white/60 hover:text-[#c9a962] transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="https://instagram.com/krestainfradevelopers" target="_blank" className="text-white/60 hover:text-[#c9a962] transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="https://youtube.com" target="_blank" className="text-white/60 hover:text-[#c9a962] transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
