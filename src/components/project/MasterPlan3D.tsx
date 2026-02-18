'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Home, Route, TreePine, MapPin, Compass, Check, Maximize2, X } from 'lucide-react';
import Image from 'next/image';

const planStats = [
  { value: '179,103', label: 'Sq. Yards', icon: MapPin },
  { value: '57,558', label: 'Sq. Yards Roads', icon: Route },
  { value: '124', label: 'Plots', icon: Home },
  { value: '600-900', label: 'Plants/Plot', icon: TreePine },
];

const planFeatures = [
  { icon: Home, label: '124 Premium Plots' },
  { icon: Route, label: '60ft, 40ft & 33ft Roads' },
  { icon: TreePine, label: 'Forest Area & Green Buffer' },
  { icon: MapPin, label: 'Premium Villa Section' },
  { icon: Compass, label: 'Walking Trails Throughout' },
];

const featuresList = [
  'Wide Internal Roads — 60 ft & 40 ft for easy access',
  'Forest Area — Surrounding the community for privacy',
  'Premium Villa Section — Designated premium plots',
  'Natural Boulder Preservation — Existing boulders as landmarks',
  'Walking Trails — Throughout the property',
  'Strategic Entrance — Wide access with gated security',
  'Green Buffer Zones — Extensive plantation areas',
];

export default function MasterPlan3D() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <>
      <section id="masterplan" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0c0c14] to-[#0a0a0f]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-[#c9a962]/60 text-xs tracking-[0.3em] uppercase mb-4">Layout Design</p>
            <h2 className="section-title font-bold text-gradient-gold font-[family-name:var(--font-heading)]">
              Master Plan
            </h2>
            <p className="mt-4 text-white/30 max-w-xl mx-auto text-xs md:text-sm">
              Thoughtfully designed layout by S&S Architects and Infra, ensuring optimal space utilization
              with natural forest surroundings
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {planStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="text-center p-4 glass rounded-xl"
              >
                <stat.icon size={16} className="text-[#c9a962]/50 mx-auto mb-2" />
                <div className="text-lg font-bold text-[#c9a962] font-[family-name:var(--font-heading)]">
                  {stat.value}
                </div>
                <div className="text-white/25 text-[10px] uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Master Plan Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative rounded-2xl overflow-hidden glass glow-gold mb-12 cursor-pointer group"
            onClick={() => setIsFullscreen(true)}
          >
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/projects/meadow-breeze/masterplan/layout.webp"
                alt="The Meadow Breeze Master Plan"
                fill
                className="object-contain bg-black/30"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              {/* Fullscreen button */}
              <div className="absolute top-4 right-4 p-2 glass rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={16} className="text-[#c9a962]" />
              </div>
            </div>
          </motion.div>

          {/* Plan Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12">
            {planFeatures.map((feature, i) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                className="flex items-center gap-2 p-3 glass rounded-xl text-xs"
              >
                <feature.icon size={14} className="text-[#c9a962] flex-shrink-0" />
                <span className="text-white/50">{feature.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="p-8 glass rounded-2xl"
          >
            <h3 className="text-white font-semibold mb-6 font-[family-name:var(--font-heading)]">
              Master Plan Features
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {featuresList.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <Check size={14} className="text-[#c9a962] mt-0.5 flex-shrink-0" />
                  <span className="text-white/40 text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-white/20 text-xs italic">
              Designed by S&S Architects and Infra
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 p-2 glass rounded-full text-white/70 hover:text-white z-10"
          >
            <X size={24} />
          </button>
          <div className="relative w-full h-full max-w-7xl">
            <Image
              src="/images/projects/meadow-breeze/masterplan/layout.webp"
              alt="The Meadow Breeze Master Plan"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
