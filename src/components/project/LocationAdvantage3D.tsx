'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mountain, Eye, Wind, TrendingUp, Landmark, ExternalLink } from 'lucide-react';

const distances = [
  { name: 'ORR Exit 11', distance: '30 km' },
  { name: 'Vijayawada Highway', distance: '7 km' },
  { name: 'Ramoji Film City', distance: '25 km' },
  { name: 'RGIA Airport', distance: '60 km' },
  { name: 'Proposed RRR', distance: '8 km' },
  { name: 'Rachakonda Fort', distance: '10 km' },
];

const highlights = [
  { icon: Mountain, title: 'Rachakonda Hills Setting', desc: 'Nestled amidst iconic hills, offering elevation, openness, and timeless charm.' },
  { icon: Eye, title: '360° Panoramic Mountain Views', desc: 'Sweeping, uninterrupted views of rolling hills and open horizons.' },
  { icon: Wind, title: 'Pure, Pollution-Free Environment', desc: 'Clean air and tranquil surroundings ideal for mindful living.' },
  { icon: TrendingUp, title: 'Rapid Infrastructure Growth', desc: 'Located in fast-emerging growth corridor with strong appreciation potential.' },
  { icon: Landmark, title: 'Tourism & Cultural Significance', desc: 'Proximity to historic Rachakonda Fort adds prestige and future potential.' },
];

export default function LocationAdvantage3D() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="location" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0c0c14] to-[#0a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a962]/60 text-xs tracking-[0.3em] uppercase mb-4">Connectivity</p>
          <h2 className="section-title font-bold text-gradient-gold font-[family-name:var(--font-heading)]">
            Location Advantage
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Distance Grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-2xl glass-gold"
          >
            <h3 className="text-[#c9a962] font-semibold mb-8 text-sm uppercase tracking-wider">
              Distance & Connectivity
            </h3>
            <div className="space-y-5">
              {distances.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-center justify-between"
                >
                  <span className="text-white/50 text-sm">{item.name}</span>
                  <div className="flex-1 mx-4 h-px bg-gradient-to-r from-[#c9a962]/20 to-transparent" />
                  <span className="text-[#c9a962] font-semibold text-sm font-[family-name:var(--font-heading)]">
                    {item.distance}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex gap-4 p-4 glass rounded-xl hover:glass-gold transition-all duration-500 group"
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-[#c9a962]/10 group-hover:bg-[#c9a962]/20 transition-colors">
                  <item.icon size={18} className="text-[#c9a962]" />
                </div>
                <div>
                  <h4 className="text-white/80 text-sm font-semibold mb-1">{item.title}</h4>
                  <p className="text-white/30 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Map link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://maps.app.goo.gl/4HvLznBYEHfcQcHP7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass-gold rounded-full text-[#c9a962] text-sm hover:bg-[#c9a962]/10 transition-all"
          >
            <ExternalLink size={14} />
            View Project Location on Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
}
