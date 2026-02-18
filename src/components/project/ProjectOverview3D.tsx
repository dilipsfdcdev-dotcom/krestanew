'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Home, MapPin, TreePine, Leaf, Car, Shield } from 'lucide-react';

const mainStats = [
  { value: '124', label: 'Total Plots', icon: Home },
  { value: '179,103', label: 'Sq. Yards Area', icon: MapPin },
  { value: '600-900', label: 'Plants/Plot', icon: TreePine },
  { value: '100%', label: 'Organic Setup', icon: Leaf },
];

const locationHighlights = [
  { icon: MapPin, text: '30 km from ORR Exit 11' },
  { icon: Car, text: '7 km from Vijayawada Highway' },
  { icon: TreePine, text: '360° Panoramic Mountain Views' },
  { icon: Shield, text: 'Pure, Pollution-Free Environment' },
];

const investmentBenefits = [
  'Rising land values in Rachakonda corridor',
  'Only 124 plots in exclusive gated community',
  'Clear titles with all legal documentation verified',
  'Infrastructure growth with ORR & highways nearby',
  'Pre-planted estate with 600-900 plants per plot',
  '24/7 gated community with CCTV security',
];

const plotSizes = [
  { size: '10 Guntas', area: '~1,210 sq yds', desc: 'Compact farmhouse, weekend home, nature retreat' },
  { size: '12.5-15 Guntas', area: '~1,510-1,815 sq yds', desc: 'Farmhouse with landscaped garden' },
  { size: '17-20 Guntas', area: '~2,060-2,420 sq yds', desc: 'Medium farmhouse with farming/orchard area' },
  { size: '22-25 Guntas', area: '~2,660-3,025 sq yds', desc: 'Large farmhouse estate, corner & premium plots' },
  { size: '25+ Guntas', area: '3,025+ sq yds', desc: 'Premium estate near forest & boulder zones' },
];

export default function ProjectOverview3D() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="overview" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0c0c14] to-[#0a0a0f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(26,77,46,0.05)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a962]/60 text-xs tracking-[0.3em] uppercase mb-4">Project Overview</p>
          <h2 className="section-title font-bold text-gradient-gold font-[family-name:var(--font-heading)]">
            Where the Hills Stand Guard
          </h2>
          <p className="mt-4 text-white/40 max-w-2xl mx-auto text-sm md:text-base">
            Nestled in the majestic Rachakonda Hills, The Meadow Breeze is crafted for those who value
            serenity, privacy, and purposeful living.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {mainStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="text-center p-6 glass rounded-2xl card-3d"
            >
              <stat.icon size={20} className="text-[#c9a962]/60 mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-[#c9a962] font-[family-name:var(--font-heading)]">
                {stat.value}
              </div>
              <div className="text-white/30 text-xs mt-1 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Two-column: Location + Investment */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-8 rounded-2xl glass-gold"
          >
            <h3 className="text-lg font-semibold text-[#c9a962] mb-6 font-[family-name:var(--font-heading)]">
              Strategic Location
            </h3>
            <div className="space-y-4">
              {locationHighlights.map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#c9a962]/10">
                    <item.icon size={14} className="text-[#c9a962]" />
                  </div>
                  <span className="text-white/60 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Investment */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="p-8 rounded-2xl glass"
          >
            <h3 className="text-lg font-semibold text-white mb-6 font-[family-name:var(--font-heading)]">
              Investment Benefits
            </h3>
            <div className="space-y-3">
              {investmentBenefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#c9a962] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-white/50 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Plot Sizes */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-center text-lg font-semibold text-white mb-8 font-[family-name:var(--font-heading)]">
            Available Plot Sizes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {plotSizes.map((plot, i) => (
              <motion.div
                key={plot.size}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
                className="p-4 glass rounded-xl text-center hover:glass-gold transition-all duration-500 group"
              >
                <div className="text-[#c9a962] font-bold text-sm mb-1 font-[family-name:var(--font-heading)]">
                  {plot.size}
                </div>
                <div className="text-white/40 text-[10px] mb-2">{plot.area}</div>
                <div className="text-white/25 text-[10px] leading-relaxed group-hover:text-white/40 transition-colors">
                  {plot.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
