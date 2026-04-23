'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  MapPin,
  Navigation as NavIcon,
  Plane,
  Film,
  Castle,
  Route,
  Mountain,
  Wind,
  Sparkles,
  TrendingUp,
  Landmark,
  ArrowUpRight,
} from 'lucide-react';

const distances = [
  { landmark: 'ORR Exit 11', distance: '30 km', icon: Route },
  { landmark: 'Vijayawada Highway', distance: '7 km', icon: NavIcon },
  { landmark: 'Ramoji Film City', distance: '25 km', icon: Film },
  { landmark: 'RGIA Airport', distance: '60 km', icon: Plane },
  { landmark: 'Proposed RRR', distance: '8 km', icon: Route },
  { landmark: 'Rachakonda Fort', distance: '10 km', icon: Castle },
];

const highlights = [
  { icon: Mountain, title: 'Rachakonda Hills Setting', description: 'Nestled amidst iconic hills — elevation, openness and timeless charm.' },
  { icon: Sparkles, title: '360° Panoramic Views', description: 'Sweeping, uninterrupted views of rolling hills and open horizons.' },
  { icon: Wind, title: 'Pure, Pollution-Free Air', description: 'Clean air and tranquil surroundings for mindful, slow living.' },
  { icon: TrendingUp, title: 'Rapid Infrastructure Growth', description: 'A fast-emerging corridor with strong land-value appreciation.' },
  { icon: Landmark, title: 'Tourism & Culture', description: 'Proximity to historic Rachakonda Fort adds prestige and future upside.' },
];

export default function LocationAdvantage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <section
      id="location"
      ref={ref}
      className="relative py-32 md:py-44 bg-[#050505]"
    >
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-16"
        >
          <p className="text-eyebrow mb-6">Location Advantage</p>
          <h2 className="text-section text-white">
            Quiet enough to breathe,
            <br />
            <span className="italic text-gradient-gold">close enough to return.</span>
          </h2>
          <div className="rule-gold mt-10" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Distances table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 surface-card p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="w-4 h-4 text-[#c9a962]" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-white/50">
                Distance &amp; Connectivity
              </span>
            </div>
            <div className="divide-y divide-white/8">
              {distances.map((item, i) => (
                <motion.div
                  key={item.landmark}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.06 }}
                  className="flex items-center justify-between py-5"
                >
                  <div className="flex items-center gap-4">
                    <item.icon className="w-4 h-4 text-[#c9a962]/80" />
                    <span className="text-white/80 text-sm">{item.landmark}</span>
                  </div>
                  <span className="font-serif text-xl md:text-2xl text-white">
                    {item.distance}
                  </span>
                </motion.div>
              ))}
            </div>

            <a
              href="https://maps.app.goo.gl/CBX5zyzryJZz9jqe6"
              target="_blank"
              rel="noreferrer"
              className="mt-8 group inline-flex items-center gap-2 text-[#c9a962] text-sm tracking-[0.2em] uppercase link-underline"
            >
              View on Google Maps <ArrowUpRight size={14} />
            </a>
          </motion.div>

          {/* Highlights list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-7 space-y-3"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="surface-card surface-card-hover p-6 md:p-8 flex gap-5 items-start"
              >
                <div className="w-11 h-11 rounded-full border border-[#c9a962]/30 flex items-center justify-center shrink-0">
                  <h.icon className="w-4 h-4 text-[#c9a962]" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-serif text-white mb-1.5">
                    {h.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {h.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
