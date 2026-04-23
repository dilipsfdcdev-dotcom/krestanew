'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Shield,
  Droplets,
  Zap,
  TreePine,
  Route,
  Lock,
  Cable,
  CloudRain,
  Footprints,
  Users,
} from 'lucide-react';

const amenities = [
  { icon: Shield, title: '24 / 7 Security', description: 'Round-the-clock CCTV & patrol' },
  { icon: Droplets, title: 'Water Supply', description: 'Dedicated bore wells & tank' },
  { icon: TreePine, title: 'Drip Irrigation', description: 'Modern efficient systems' },
  { icon: Zap, title: 'Electricity', description: 'Dedicated transformer' },
  { icon: Route, title: 'Wide Roads', description: '60 · 40 · 33 ft internal roads' },
  { icon: Lock, title: 'Gated Entry', description: 'Single controlled access' },
  { icon: Cable, title: 'Underground Cables', description: 'No overhead wires' },
  { icon: CloudRain, title: 'Drainage & Harvesting', description: 'Effective water management' },
  { icon: Footprints, title: 'Walking Trails', description: 'Nature paths throughout' },
  { icon: Users, title: 'Agronomist Support', description: 'Expert organic guidance' },
];

const additional = [
  'Avenue plantation on all roads',
  'Rainwater harvesting infrastructure',
  'Organic farming support',
  'Natural landscapes preserved',
];

export default function ProjectAmenities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <section
      id="amenities"
      ref={ref}
      className="relative py-32 md:py-44 bg-[#050505] noise"
    >
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div className="max-w-3xl">
            <p className="text-eyebrow mb-6">Amenities · World-Class Facilities</p>
            <h2 className="text-section text-white">
              Every detail,
              <span className="italic text-gradient-gold"> considered.</span>
            </h2>
            <div className="rule-gold mt-8" />
          </div>
          <p className="text-white/55 text-[15px] max-w-md leading-relaxed">
            Infrastructure you'd expect from a premium residential community,
            integrated into a working farmland estate.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {amenities.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.06 * i }}
              className="surface-card surface-card-hover p-6 md:p-7"
            >
              <div className="w-10 h-10 rounded-full border border-[#c9a962]/30 flex items-center justify-center mb-5">
                <a.icon className="w-4 h-4 text-[#c9a962]" />
              </div>
              <h3 className="text-white font-serif text-lg mb-1.5">
                {a.title}
              </h3>
              <p className="text-white/50 text-[12px] leading-relaxed">
                {a.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 surface-card p-8 md:p-10"
        >
          <p className="text-eyebrow mb-5">Additional Features</p>
          <div className="flex flex-wrap gap-2">
            {additional.map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/75 text-[13px]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a962]" />
                {f}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="max-w-xl">
            <h4 className="text-2xl md:text-3xl font-serif text-white mb-3">
              Experience the estate firsthand.
            </h4>
            <p className="text-white/55 text-[15px] leading-relaxed">
              Schedule a private site visit — walk the plots, meet the team,
              see the amenities under construction.
            </p>
          </div>
          <a
            href="https://wa.me/919888932555?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit%20for%20The%20Meadow%20Breeze."
            target="_blank"
            rel="noreferrer"
            className="btn-primary shrink-0"
          >
            Book Site Visit
            <span aria-hidden>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
