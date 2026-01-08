'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { ChevronDown, MapPin, TreePine, Mountain, Shield } from 'lucide-react';

const highlights = [
  { icon: TreePine, text: '600-900 Plants/Plot' },
  { icon: Mountain, text: '360° Mountain Views' },
  { icon: Shield, text: 'Gated Community' },
];

export default function ProjectHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d2818]/80 via-[#1a4d2e]/60 to-[#0d2818]/90" />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-64 h-64 bg-[#c9a962]/20 rounded-full filter blur-[100px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#1a4d2e]/30 rounded-full filter blur-[100px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </motion.div>

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 container-luxury text-center px-4">
        {/* Project Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-6"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
            <Image
              src="/images/projects/meadow-breeze/logo.svg"
              alt="The Meadow Breeze Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        {/* Project Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
            The Meadow Breeze
          </h1>
          <p className="text-[#c9a962] text-base md:text-lg tracking-[0.2em] uppercase font-medium">
            by Kresta
          </p>
        </motion.div>

        {/* Animated Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto my-8"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light mb-4 italic"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          "Where the hills whisper peace and the breeze carries serenity"
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center gap-2 text-white/70 mb-10"
        >
          <MapPin className="w-5 h-5 text-[#c9a962]" />
          <span>Peepal Pahad, Choutuppal, Yadadri Bhuvanagiri District</span>
        </motion.div>

        {/* Highlights Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-[#c9a962]/50 transition-all"
            >
              <item.icon className="w-5 h-5 text-[#c9a962]" />
              <span className="text-white font-medium">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#overview"
            className="group relative px-8 py-4 bg-[#c9a962] text-white rounded-full font-medium overflow-hidden transition-all hover:shadow-lg hover:shadow-[#c9a962]/30"
          >
            <span className="relative z-10">Explore Project</span>
            <motion.div
              className="absolute inset-0 bg-[#8b7355]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </a>
          <a
            href="https://wa.me/919888932555?text=Hi%2C%20I%27m%20interested%20in%20The%20Meadow%20Breeze%20project.%20Please%20share%20more%20details."
            target="_blank"
            className="px-8 py-4 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 hover:border-[#c9a962]/50 transition-all"
          >
            Book Site Visit
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#overview" className="flex flex-col items-center text-white/60 hover:text-[#c9a962] transition-colors">
          <span className="text-xs tracking-widest uppercase mb-2">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </a>
      </motion.div>

      {/* Modern Sanctuary Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 right-8 hidden lg:block"
      >
        <p className="text-white/40 text-sm italic" style={{ fontFamily: 'var(--font-heading)' }}>
          Modern Sanctuary
        </p>
      </motion.div>
    </section>
  );
}
