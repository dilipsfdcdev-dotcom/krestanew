'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Home,
  Leaf,
  Palmtree,
  TrendingUp,
  Mountain,
  Flower2,
  Cable,
  Users,
  Shield,
  Building,
  Calendar,
  ArrowUpRight,
} from 'lucide-react';

type Lifestyle = {
  id: string;
  num: string;
  icon: typeof Home;
  title: string;
  subtitle: string;
  description: string;
  features: { icon: typeof Home; text: string }[];
};

const lifestyles: Lifestyle[] = [
  {
    id: 'farmhouse',
    num: '01',
    icon: Home,
    title: 'Bespoke Farmhouse',
    subtitle: 'Build your dream countryside retreat',
    description:
      'Design a farmhouse that reflects your vision — modern minimalist, traditional heritage or eco-luxury — with plot sizes from 10 to 50 Guntas amidst the Rachakonda Hills.',
    features: [
      { icon: Mountain, text: '360° mountain views' },
      { icon: Flower2, text: 'Pre-planted garden' },
      { icon: Cable, text: 'Wide roads & utilities' },
      { icon: Users, text: 'Agronomist support' },
    ],
  },
  {
    id: 'organic',
    num: '02',
    icon: Leaf,
    title: 'Organic Cultivation',
    subtitle: 'Transform your plot into a thriving farm',
    description:
      'With 600–900 plants already established and drip irrigation in place, grow seasonal vegetables, medicinal herbs, fruit orchards, and exotic flowers — supported by expert agronomists.',
    features: [
      { icon: Users, text: 'Expert guidance' },
      { icon: Leaf, text: 'Drip irrigation' },
      { icon: Flower2, text: 'Organic methodology' },
      { icon: TrendingUp, text: 'Market linkage' },
    ],
  },
  {
    id: 'weekend',
    num: '03',
    icon: Palmtree,
    title: 'Weekend Escape',
    subtitle: 'Your sanctuary far from the city',
    description:
      'Just 30 km from ORR Exit 11. Fresh mountain air, starlit nights, morning bird songs and peaceful solitude — a retreat at an easy drive.',
    features: [
      { icon: Calendar, text: 'Family weekends' },
      { icon: Building, text: 'Corporate retreats' },
      { icon: Flower2, text: 'Wellness getaways' },
      { icon: Leaf, text: 'Creative inspiration' },
    ],
  },
  {
    id: 'investment',
    num: '04',
    icon: TrendingUp,
    title: 'Long-Term Investment',
    subtitle: 'An appreciating land asset',
    description:
      'Premium farmland in a rapidly developing corridor — offering lifestyle benefits alongside strong long-term growth potential.',
    features: [
      { icon: Shield, text: 'Clear title' },
      { icon: Shield, text: 'Gated security' },
      { icon: Users, text: 'Managed services' },
      { icon: TrendingUp, text: 'High upside' },
    ],
  },
];

export default function LifestylePathways() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });
  const [active, setActive] = useState('farmhouse');
  const current = lifestyles.find((l) => l.id === active) ?? lifestyles[0];

  return (
    <section
      id="lifestyle"
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
          <p className="text-eyebrow mb-6">Pathways · 4 Ways to Live</p>
          <h2 className="text-section text-white">
            One estate.
            <br />
            <span className="italic text-gradient-gold">Four lives it can hold.</span>
          </h2>
          <div className="rule-gold mt-10" />
        </motion.div>

        {/* Tabs */}
        <div className="grid md:grid-cols-4 gap-3 mb-10">
          {lifestyles.map((l) => (
            <button
              key={l.id}
              onClick={() => setActive(l.id)}
              className={`relative text-left p-6 rounded-2xl border transition-all ${
                active === l.id
                  ? 'border-[#c9a962]/60 bg-[#111]'
                  : 'border-white/10 bg-[#0a0a0a] hover:border-white/25'
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <l.icon
                  className={`w-5 h-5 ${
                    active === l.id ? 'text-[#c9a962]' : 'text-white/55'
                  }`}
                />
                <span
                  className={`text-[10px] tracking-[0.35em] uppercase ${
                    active === l.id ? 'text-[#c9a962]' : 'text-white/40'
                  }`}
                >
                  {l.num}
                </span>
              </div>
              <div
                className={`text-lg font-serif ${
                  active === l.id ? 'text-white' : 'text-white/75'
                }`}
              >
                {l.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-12 gap-6"
          >
            <div className="md:col-span-7 surface-card p-8 md:p-12">
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#c9a962] mb-5">
                {current.subtitle}
              </p>
              <h3 className="text-3xl md:text-5xl font-serif text-white mb-6">
                {current.title}.
              </h3>
              <p className="text-white/65 text-[15px] leading-relaxed mb-10 max-w-xl">
                {current.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[#c9a962] text-sm tracking-[0.2em] uppercase link-underline"
              >
                Explore this pathway <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="md:col-span-5 grid grid-cols-2 gap-3">
              {current.features.map((f, i) => (
                <motion.div
                  key={`${current.id}-${i}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 * i }}
                  className="surface-card p-6"
                >
                  <f.icon className="w-4 h-4 text-[#c9a962] mb-4" />
                  <p className="text-white/85 text-[13px] leading-snug">
                    {f.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
