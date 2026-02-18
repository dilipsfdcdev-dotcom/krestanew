'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Clock, MapPin } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'World-class construction standards and materials ensuring lasting value for generations.',
    gradient: 'from-[#c9a962] to-[#8b7355]',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Committed to meeting project deadlines with transparent progress updates.',
    gradient: 'from-[#2d6a4f] to-[#0d2818]',
  },
  {
    icon: MapPin,
    title: 'Strategic Locations',
    description: 'Prime locations with excellent connectivity and appreciation potential.',
    gradient: 'from-[#c9a962] to-[#2d6a4f]',
  },
];

export default function About3D() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0c0c14] to-[#0a0a0f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,98,0.05)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-[#c9a962]/60 text-xs tracking-[0.3em] uppercase mb-4">About Us</p>
          <h2 className="section-title font-bold text-gradient-gold font-[family-name:var(--font-heading)]">
            Crafting Luxury,<br />Building Dreams
          </h2>
          <div className="line-gold mx-auto mt-6" />
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-white/60 leading-relaxed mb-6 text-sm md:text-base">
              Kresta Infra & Developers Pvt. Ltd. is a premier real estate development company
              specializing in luxury residential projects, premium farmland communities, commercial
              spaces, and integrated township developments.
            </p>
            <p className="text-white/40 leading-relaxed text-sm md:text-base">
              From high-rise apartments to serene farmland estates, we deliver diverse real estate
              solutions with world-class quality. Our vision is to transform spaces into thriving
              communities that blend modern living with sustainable design.
            </p>

            {/* Since badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex items-center gap-3 mt-8 px-6 py-3 glass-gold rounded-full"
            >
              <div className="w-2 h-2 bg-[#c9a962] rounded-full" />
              <span className="text-[#c9a962] text-sm font-medium">Since 2024 — Trusted Developer</span>
            </motion.div>
          </motion.div>

          {/* Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glow-gold">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9a962]/20 via-[#1a4d2e]/10 to-[#0a0a0f] rounded-2xl" />
              <div className="absolute inset-0 grid-pattern" />
              {/* 3D-style layered content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl md:text-7xl font-bold text-gradient-gold font-[family-name:var(--font-heading)]">
                    100+
                  </div>
                  <div className="text-white/50 text-sm tracking-[0.2em] uppercase">
                    Acres of Premium<br />Farmland Developed
                  </div>
                </div>
              </div>
              {/* Decorative border */}
              <div className="absolute inset-4 border border-[#c9a962]/10 rounded-xl" />
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="group relative p-8 rounded-2xl glass hover:glass-gold transition-all duration-500 card-3d"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} mb-5`}>
                <value.icon size={22} className="text-white" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-3 font-[family-name:var(--font-heading)]">
                {value.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {value.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#c9a962]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
