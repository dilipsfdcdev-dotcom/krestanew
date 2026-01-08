'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, Building2, TreePine, Users, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const stats = [
  { icon: Building2, value: '50+', label: 'Acres Developed' },
  { icon: TreePine, value: '524+', label: 'Trees Planted' },
  { icon: Users, value: '100+', label: 'Happy Families' },
  { icon: Award, value: '100%', label: 'Trust & Quality' },
];

// Pre-defined particle positions to avoid hydration mismatch
const particles = [
  { left: 5, top: 12, duration: 5.2, delay: 0.3 },
  { left: 15, top: 45, duration: 6.1, delay: 1.2 },
  { left: 25, top: 78, duration: 4.8, delay: 2.5 },
  { left: 35, top: 23, duration: 5.9, delay: 0.8 },
  { left: 45, top: 67, duration: 4.5, delay: 1.9 },
  { left: 55, top: 34, duration: 6.4, delay: 2.1 },
  { left: 65, top: 89, duration: 5.1, delay: 0.5 },
  { left: 75, top: 56, duration: 4.9, delay: 1.7 },
  { left: 85, top: 15, duration: 6.2, delay: 2.8 },
  { left: 95, top: 42, duration: 5.5, delay: 0.9 },
  { left: 10, top: 91, duration: 4.7, delay: 1.4 },
  { left: 20, top: 38, duration: 6.0, delay: 2.3 },
  { left: 30, top: 62, duration: 5.3, delay: 0.6 },
  { left: 40, top: 8, duration: 4.6, delay: 1.8 },
  { left: 50, top: 75, duration: 6.3, delay: 2.6 },
  { left: 60, top: 28, duration: 5.0, delay: 0.4 },
  { left: 70, top: 53, duration: 4.4, delay: 1.5 },
  { left: 80, top: 86, duration: 6.5, delay: 2.9 },
  { left: 90, top: 19, duration: 5.6, delay: 0.7 },
  { left: 8, top: 71, duration: 4.3, delay: 2.0 },
  { left: 18, top: 4, duration: 5.8, delay: 1.1 },
  { left: 28, top: 95, duration: 6.6, delay: 2.4 },
  { left: 38, top: 31, duration: 5.4, delay: 0.2 },
  { left: 48, top: 84, duration: 4.2, delay: 1.6 },
  { left: 58, top: 47, duration: 6.7, delay: 2.7 },
  { left: 68, top: 11, duration: 5.7, delay: 1.0 },
  { left: 78, top: 69, duration: 4.1, delay: 2.2 },
  { left: 88, top: 36, duration: 6.8, delay: 0.1 },
  { left: 98, top: 82, duration: 5.2, delay: 1.3 },
  { left: 3, top: 59, duration: 4.0, delay: 2.5 },
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d2818]/95 via-[#1a4d2e]/90 to-[#0d2818]/98" />

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#c9a962]/40 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: particle.delay,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a962]/10 rounded-full filter blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1a4d2e]/20 rounded-full filter blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        />
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
            {/* Animated Rings */}
            <motion.div
              className="absolute inset-0 border-2 border-[#c9a962]/30 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ width: '180px', height: '180px', top: '-30px', left: '-30px' }}
            />
            <motion.div
              className="absolute inset-0 border border-[#c9a962]/20 rounded-full"
              animate={{ scale: [1.1, 1.4, 1.1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              style={{ width: '200px', height: '200px', top: '-40px', left: '-40px' }}
            />
            {/* Company Logo */}
            <div className="w-28 h-28 md:w-32 md:h-32 relative">
              <Image
                src="/images/company/logo.svg"
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
          Creating exceptional farmland communities and residential spaces
          that harmonize with nature
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

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-[#c9a962]/30 transition-all cursor-default"
            >
              <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-[#c9a962] mx-auto mb-2" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-white/60 text-xs md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
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
