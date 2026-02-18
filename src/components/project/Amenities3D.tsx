'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Shield, Droplets, TreePine, Zap, Route, Lock,
  Cable, CloudRain, Footprints, Users, Check
} from 'lucide-react';

const amenities = [
  { icon: Shield, title: '24/7 Security', desc: 'Round-the-clock CCTV surveillance and security patrol' },
  { icon: Droplets, title: 'Water Supply', desc: 'Dedicated bore wells and underground tank' },
  { icon: TreePine, title: 'Drip Irrigation', desc: 'Modern efficient irrigation systems' },
  { icon: Zap, title: 'Electricity', desc: 'Dedicated transformer for uninterrupted power' },
  { icon: Route, title: 'Wide Roads', desc: '60 ft, 40 ft & 33 ft wide internal roads' },
  { icon: Lock, title: 'Gated Entry', desc: 'Controlled single access point with security' },
  { icon: Cable, title: 'Underground Cables', desc: 'Clean modern aesthetics' },
  { icon: CloudRain, title: 'Drainage System', desc: 'Effective water management and harvesting' },
  { icon: Footprints, title: 'Walking Trails', desc: 'Nature paths throughout the property' },
  { icon: Users, title: 'Agronomist Support', desc: 'Expert farming guidance and organic methodology' },
];

const additionalFeatures = [
  'Avenue plantation on all roads',
  'Rainwater harvesting infrastructure',
  'Organic farming support',
  'Natural landscapes preserved',
];

export default function Amenities3D() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="amenities" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0c0c14] to-[#0a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a962]/60 text-xs tracking-[0.3em] uppercase mb-4">World-Class Facilities</p>
          <h2 className="section-title font-bold text-gradient-gold font-[family-name:var(--font-heading)]">
            Premium Amenities
          </h2>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {amenities.map((amenity, i) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              className="group p-5 rounded-2xl glass hover:glass-gold transition-all duration-500 text-center card-3d"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#c9a962]/10 group-hover:bg-[#c9a962]/20 transition-colors mx-auto mb-3">
                <amenity.icon size={18} className="text-[#c9a962]" />
              </div>
              <h4 className="text-white/80 text-xs font-semibold mb-1">{amenity.title}</h4>
              <p className="text-white/25 text-[10px] leading-relaxed group-hover:text-white/40 transition-colors">
                {amenity.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {additionalFeatures.map((feature) => (
            <div key={feature} className="flex items-center gap-2 px-4 py-2 glass-gold rounded-full">
              <Check size={12} className="text-[#c9a962]" />
              <span className="text-[#c9a962]/70 text-xs">{feature}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center p-8 md:p-10 rounded-3xl glass-gold max-w-2xl mx-auto"
        >
          <h3 className="text-white font-semibold mb-2 font-[family-name:var(--font-heading)]">
            Ready to experience luxury farmland?
          </h3>
          <p className="text-white/30 text-sm mb-6">
            Schedule a site visit and see these amenities firsthand
          </p>
          <a
            href="https://wa.me/919888932555?text=Hi%2C%20I%20would%20like%20to%20book%20a%20site%20visit%20for%20The%20Meadow%20Breeze."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#c9a962] text-black font-semibold rounded-full btn-3d hover:bg-[#e8d5a3] transition-colors text-sm"
          >
            Book Site Visit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
