'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  TrendingUp,
  Users,
  FileCheck,
  Building,
  Gem,
  TreePine,
  Award,
  Shield,
  MapPin,
} from 'lucide-react';

const marketFactors = [
  { icon: TrendingUp, factor: 'Rising Land Values', advantage: 'Rachakonda corridor showing rapid appreciation' },
  { icon: Users, factor: 'Limited Community', advantage: 'Only 124 plots in an exclusive gated estate' },
  { icon: FileCheck, factor: 'Clear Titles', advantage: 'All legal documentation verified' },
  { icon: Building, factor: 'Infrastructure Growth', advantage: 'ORR, highways and townships nearby' },
  { icon: Gem, factor: 'Scarcity Premium', advantage: 'Large farmland estates are increasingly rare' },
];

const differentiators = [
  { icon: TreePine, title: 'Pre-planted Estate', description: '600–900 plants already growing on each plot' },
  { icon: Award, title: '10 Premium Amenities', description: 'World-class infrastructure included' },
  { icon: Users, title: 'Expert Support', description: 'Agronomist guidance for farming' },
  { icon: Shield, title: '24 / 7 Security', description: 'Gated community with CCTV' },
  { icon: MapPin, title: 'Prime Connectivity', description: '30 km from ORR, 7 km from highway' },
];

export default function WhyInvest() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <section
      id="invest"
      ref={ref}
      className="relative py-32 md:py-44 bg-[#050505] noise"
    >
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-16"
        >
          <p className="text-eyebrow mb-6">Investment · Rare Opportunity</p>
          <h2 className="text-section text-white">
            Not just land.
            <br />
            <span className="italic text-gradient-gold">A legacy waiting to be cultivated.</span>
          </h2>
          <div className="rule-gold mt-10" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Market Factors table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 surface-card overflow-hidden"
          >
            <div className="p-6 md:p-8 border-b border-white/10 flex items-center justify-between">
              <p className="text-eyebrow">Market Factors</p>
              <TrendingUp className="w-4 h-4 text-[#c9a962]" />
            </div>
            <div className="divide-y divide-white/8">
              {marketFactors.map((m, i) => (
                <motion.div
                  key={m.factor}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.07 }}
                  className="grid grid-cols-12 gap-4 px-6 md:px-8 py-5 items-center hover:bg-white/[0.02] transition-colors"
                >
                  <div className="col-span-5 flex items-center gap-3">
                    <m.icon className="w-4 h-4 text-[#c9a962]" />
                    <span className="text-white/90 text-sm">{m.factor}</span>
                  </div>
                  <div className="col-span-7 text-white/60 text-[13px] leading-relaxed">
                    {m.advantage}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Differentiators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-5 space-y-3"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-eyebrow">Our Differentiators</p>
              <Award className="w-4 h-4 text-[#c9a962]" />
            </div>
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="surface-card surface-card-hover p-5 md:p-6 flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-full border border-[#c9a962]/30 flex items-center justify-center shrink-0">
                  <d.icon className="w-4 h-4 text-[#c9a962]" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">{d.title}</h4>
                  <p className="text-white/55 text-[13px] leading-relaxed">
                    {d.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 rounded-3xl border border-white/10 bg-[#0a0a0a] p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] bg-[#c9a962]/8 rounded-full filter blur-[120px]" />
          <div className="relative">
            <h3 className="text-3xl md:text-5xl font-serif text-white mb-4">
              Begin a conversation
              <span className="italic text-gradient-gold"> with us.</span>
            </h3>
            <p className="text-white/60 text-[15px] max-w-xl mx-auto mb-10">
              Speak with our concierge about plot availability, pricing and a
              private site-visit slot.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#contact" className="btn-primary">
                Start your legacy <span aria-hidden>→</span>
              </a>
              <a
                href="https://wa.me/919888932555?text=Hi%2C%20I%27m%20interested%20in%20investing%20in%20The%20Meadow%20Breeze."
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Speak to an Advisor
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
