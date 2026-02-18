'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, TreePine, Mountain, Shield, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Projects3D() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0c0c14] to-[#0a0a0f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(26,77,46,0.08)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-gold rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#c9a962] rounded-full" />
            <span className="text-[#c9a962] text-xs tracking-[0.15em] uppercase">Featured Projects</span>
          </div>
          <h2 className="section-title font-bold text-gradient-gold font-[family-name:var(--font-heading)]">
            Our Premium Developments
          </h2>
          <p className="mt-4 text-white/40 max-w-2xl mx-auto text-sm md:text-base">
            Discover our thoughtfully designed farmland communities that blend luxury living with natural serenity
          </p>
        </motion.div>

        {/* Project Card - The Meadow Breeze */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative rounded-3xl overflow-hidden glass glow-gold max-w-5xl mx-auto"
        >
          {/* Status badge */}
          <div className="absolute top-6 right-6 z-20">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#c9a962] rounded-full">
              <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
              <span className="text-black text-xs font-bold tracking-wide">NOW BOOKING</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-64 lg:h-auto lg:min-h-[500px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e]/40 via-[#0d2818]/60 to-[#0a0a0f]/80" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,98,0.1)_0%,_transparent_70%)]" />

              {/* Mountain illustration */}
              <div className="absolute inset-0 flex items-end justify-center pb-12">
                <svg viewBox="0 0 400 200" className="w-full max-w-sm opacity-20">
                  <path d="M0,200 L80,60 L120,120 L180,30 L240,100 L300,50 L350,90 L400,200 Z" fill="rgba(201,169,98,0.3)" />
                  <path d="M0,200 L100,100 L160,150 L220,80 L280,130 L340,70 L400,200 Z" fill="rgba(26,77,46,0.3)" />
                </svg>
              </div>

              {/* Project name overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <p className="text-[#c9a962]/60 text-xs tracking-[0.3em] uppercase mb-2">Premium Farmland</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-heading)] mb-2">
                  The Meadow Breeze
                </h3>
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <MapPin size={14} />
                  <span>Peepal Pahad, Choutuppal</span>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-10 lg:p-12">
              <p className="text-[#c9a962]/70 italic text-sm mb-8 font-[family-name:var(--font-heading)]">
                &ldquo;Where the hills whisper peace and the breeze carries serenity&rdquo;
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: '124', label: 'Plots' },
                  { value: '600-900', label: 'Plants/Plot' },
                  { value: '179,103', label: 'Sq. Yards' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-xl glass">
                    <div className="text-xl md:text-2xl font-bold text-[#c9a962] font-[family-name:var(--font-heading)]">
                      {stat.value}
                    </div>
                    <div className="text-white/30 text-[10px] md:text-xs mt-1 tracking-wide uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  { icon: Mountain, label: '360° Mountain Views' },
                  { icon: Shield, label: 'Gated Community' },
                  { icon: TreePine, label: 'Organic Farming' },
                ].map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 glass-gold rounded-full text-[#c9a962]/80 text-xs"
                  >
                    <feature.icon size={12} />
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/projects/meadow-breeze"
                  className="group flex items-center justify-center gap-2 px-6 py-3 bg-[#c9a962] text-black font-semibold rounded-full btn-3d hover:bg-[#e8d5a3] transition-colors text-sm"
                >
                  View Project Details
                  <ArrowRight
                    size={16}
                    className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
                  />
                </Link>
                <a
                  href="https://wa.me/919888932555?text=Hi%2C%20I%20would%20like%20to%20book%20a%20site%20visit%20for%20The%20Meadow%20Breeze."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-white/10 text-white/60 rounded-full hover:border-[#c9a962]/30 hover:text-[#c9a962] transition-all text-sm"
                >
                  Book Site Visit
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 text-white/20 text-sm">
            <Sparkles size={16} className="text-[#c9a962]/40" />
            <span>More exciting projects coming soon</span>
            <Sparkles size={16} className="text-[#c9a962]/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
