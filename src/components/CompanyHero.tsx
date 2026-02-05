'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import AdaptiveLogo from './AdaptiveLogo';


// Reduced particles for better performance (8 instead of 30)
const particles = [
  { left: 10, top: 20 },
  { left: 30, top: 60 },
  { left: 50, top: 30 },
  { left: 70, top: 70 },
  { left: 90, top: 25 },
  { left: 20, top: 80 },
  { left: 60, top: 50 },
  { left: 80, top: 15 },
];

export default function CompanyHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/97 via-[#1a1a1a]/95 to-[#0a0a0a]/98" />

        {/* Static Particles - CSS only for better performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#c9a962]/30 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
            />
          ))}
        </div>

        {/* Static Gradient Orbs - removed infinite animations */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a962]/10 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c9a962]/5 rounded-full filter blur-[120px]" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 container-luxury text-center px-4">
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="relative inline-block">
            {/* Static decorative ring */}
            <div
              className="absolute border-2 border-[#c9a962]/20 rounded-full"
              style={{ width: '160px', height: '160px', top: '-20px', left: '-20px' }}
            />
            {/* Company Logo */}
            <div className="w-28 h-28 md:w-32 md:h-32 relative">
              <AdaptiveLogo
                basePath="/images/company/logo"
                alt="Kresta Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Company Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2 tracking-tight">
            <span className="text-gradient-gold">KRESTA</span>
          </h1>
          <p className="text-[#c9a962] text-sm md:text-base tracking-[0.3em] uppercase font-medium">
            Infra & Developers Pvt. Ltd.
          </p>
        </motion.div>

        {/* Animated Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto my-8"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Crafting Luxury, Building Dreams
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-12"
        >
          Premium real estate solutions — from luxury residences and farmland estates
          to commercial spaces and integrated townships
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="#projects"
            className="group relative px-8 py-4 bg-[#c9a962] text-white rounded-full font-medium overflow-hidden transition-all hover:shadow-lg hover:shadow-[#c9a962]/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Projects
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-[#8b7355]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 hover:border-[#c9a962]/50 transition-all"
          >
            Contact Us
          </Link>
        </motion.div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <Link href="#about" className="flex flex-col items-center text-white/60 hover:text-[#c9a962] transition-colors group">
          <span className="text-xs tracking-widest uppercase mb-2">Discover More</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="group-hover:text-[#c9a962]"
          >
            <ChevronDown size={24} />
          </motion.div>
        </Link>
      </motion.div>

      {/* Corner Decorations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="hidden lg:block"
      >
        <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-[#c9a962]/30" />
        <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-[#c9a962]/30" />
        <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-[#c9a962]/30" />
        <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-[#c9a962]/30" />
      </motion.div>
    </section>
  );
}
