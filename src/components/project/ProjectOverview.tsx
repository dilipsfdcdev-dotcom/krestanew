'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  MapPin,
  Car,
  TreePine,
  Home,
  Shield,
  Leaf,
  ArrowUpRight,
} from 'lucide-react';

const plotSizes = [
  { size: '10 Guntas', area: '~1,210 sq.yd', description: 'Compact farmhouse · weekend retreat' },
  { size: '12.5–15 Guntas', area: '~1,510–1,815 sq.yd', description: 'Farmhouse with landscaped garden' },
  { size: '17–20 Guntas', area: '~2,060–2,420 sq.yd', description: 'Medium farmhouse · orchard area' },
  { size: '22–25 Guntas', area: '~2,660–3,025 sq.yd', description: 'Large estate · corner & premium plots' },
  { size: '25+ Guntas', area: '3,025+ sq.yd', description: 'Premium estate near forest & boulder zones' },
];

const locationHighlights = [
  { icon: MapPin, text: '30 km from ORR Exit 11' },
  { icon: Car, text: '7 km from Vijayawada Highway' },
  { icon: TreePine, text: '360° panoramic mountain views' },
  { icon: Shield, text: 'Pure, pollution-free environment' },
];

const investmentPoints = [
  'Rising land values in the Rachakonda corridor',
  'Only 124 plots in an exclusive gated community',
  'Clear titles with all legal documentation verified',
  'Infrastructure growth with ORR & highways nearby',
  'Pre-planted estate with 600–900 plants per plot',
  '24/7 gated community with CCTV security',
];

const stats = [
  { value: '124', label: 'Total Plots', icon: Home },
  { value: '179,103', label: 'Sq.yd Area', icon: MapPin },
  { value: '600–900', label: 'Plants / Plot', icon: TreePine },
  { value: '100%', label: 'Organic Setup', icon: Leaf },
];

export default function ProjectOverview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <section
      id="overview"
      ref={ref}
      className="relative py-32 md:py-44 bg-[#050505] noise"
    >
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-20"
        >
          <p className="text-eyebrow mb-6">Overview · 50-Acre Estate</p>
          <h2 className="text-section text-white">
            Where the hills stand guard,
            <br />
            <span className="italic text-gradient-gold">serenity is inherited.</span>
          </h2>
          <div className="rule-gold mt-10" />
          <p className="mt-10 text-white/60 text-[15px] md:text-base leading-relaxed max-w-2xl">
            Nestled in the majestic Rachakonda Hills, The Meadow Breeze is
            composed for those who value privacy, purpose and the patient
            company of nature. Here you do not merely own land — you inherit
            quiet, continuity and a deeper bond with the earth.
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 rounded-3xl border border-white/10 overflow-hidden mb-20"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`relative p-7 md:p-9 bg-[#0a0a0a] ${
                i < stats.length - 1 ? 'md:border-r border-white/10' : ''
              } ${i % 2 === 0 ? 'border-r border-white/10 md:border-r' : ''} ${
                i < 2 ? 'border-b md:border-b-0 border-white/10' : ''
              }`}
            >
              <s.icon className="w-5 h-5 text-[#c9a962] mb-5 opacity-70" />
              <div className="text-[10px] tracking-[0.35em] uppercase text-white/45 mb-2">
                {s.label}
              </div>
              <div className="text-3xl md:text-4xl font-serif text-white">
                {s.value}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Location + Investment split */}
        <div className="grid lg:grid-cols-2 gap-6 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="surface-card p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#c9a962]/10 rounded-full filter blur-[80px]" />
            <p className="text-eyebrow mb-5">Strategic Location</p>
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-8">
              Connected, yet cloistered.
            </h3>
            <div className="space-y-4 relative z-10">
              {locationHighlights.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-4 py-3 border-t border-white/8"
                >
                  <item.icon className="w-4 h-4 text-[#c9a962] shrink-0" />
                  <span className="text-white/80 text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="surface-card p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#c9a962]/10 rounded-full filter blur-[80px]" />
            <p className="text-eyebrow mb-5">Investment Benefits</p>
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-8">
              Land that outlives cycles.
            </h3>
            <div className="space-y-3 relative z-10">
              {investmentPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#c9a962] shrink-0" />
                  <span className="text-white/75 text-sm leading-relaxed">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Plot sizes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-eyebrow mb-3">Plot Composition</p>
              <h3 className="text-2xl md:text-3xl font-serif text-white">
                Sized for every vision.
              </h3>
            </div>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 text-[#c9a962] text-sm tracking-[0.2em] uppercase link-underline"
            >
              Enquire <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 rounded-3xl border border-white/10 overflow-hidden">
            {plotSizes.map((plot, i) => (
              <motion.div
                key={plot.size}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                className={`p-7 bg-[#0a0a0a] hover:bg-[#111] transition-colors ${
                  i < plotSizes.length - 1 ? 'lg:border-r border-white/10' : ''
                } ${i !== plotSizes.length - 1 ? 'border-b lg:border-b-0 border-white/10' : ''}`}
              >
                <div className="text-[10px] tracking-[0.35em] uppercase text-white/45 mb-3">
                  Option {String(i + 1).padStart(2, '0')}
                </div>
                <h4 className="text-xl md:text-2xl font-serif text-white mb-2">
                  {plot.size}
                </h4>
                <p className="text-[#c9a962] text-sm mb-4">{plot.area}</p>
                <p className="text-white/55 text-[13px] leading-relaxed">
                  {plot.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
