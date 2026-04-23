'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, TreePine, Mountain, Shield, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: Leaf,
    num: '01',
    title: 'Sustainable Living',
    description:
      'Development that works with the land, not against it. Natural contours, soil integrity and native ecosystems are preserved so the estate thrives over decades.',
  },
  {
    icon: TreePine,
    num: '02',
    title: 'Eco-Conscious Green Cover',
    description:
      '600–900 thoughtfully selected plants per plot foster an oxygen-rich microclimate, improved biodiversity and a cooler, healthier environment — a private green sanctuary.',
  },
  {
    icon: Mountain,
    num: '03',
    title: 'Preserving Natural Terrain',
    description:
      'Existing rock formations and boulders are retained and celebrated as natural landmarks, lending character, authenticity and timeless beauty.',
  },
  {
    icon: Shield,
    num: '04',
    title: 'Refined Farmland Community',
    description:
      'A secure, gated farmland community with world-class amenities — blending countryside openness with the comforts of a contemporary estate.',
  },
  {
    icon: TrendingUp,
    num: '05',
    title: 'Long-Term Appreciation',
    description:
      'Strategically located in a rapidly developing corridor — designed not just for today, but for the sustained growth of tomorrow.',
  },
];

export default function VisionPhilosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <section
      id="philosophy"
      ref={ref}
      className="relative py-32 md:py-44 bg-[#050505]"
    >
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-16 md:mb-20"
        >
          <p className="text-eyebrow mb-6">Vision &amp; Philosophy</p>
          <h2 className="text-section text-gradient-fade">
            A living landscape where nature,
            sustainability and long-term value
            exist in quiet harmony.
          </h2>
          <div className="rule-gold mt-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              className={`surface-card surface-card-hover p-8 md:p-10 ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-8">
                <p.icon className="w-6 h-6 text-[#c9a962]" />
                <span className="text-[10px] tracking-[0.35em] uppercase text-white/35">
                  {p.num}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-white mb-4">
                {p.title}
              </h3>
              <p className="text-white/60 text-[14px] leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-24 md:mt-32 max-w-3xl"
        >
          <div className="text-[#c9a962] text-5xl font-serif leading-none mb-6">“</div>
          <p
            className="text-2xl md:text-3xl font-serif italic text-white/90 leading-snug"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            The Meadow Breeze is more than farmland. It is an invitation — to
            build your private retreat, to nurture the land, and to invest in
            a legacy that grows with time and intention.
          </p>
          <p className="mt-6 text-[11px] tracking-[0.35em] uppercase text-white/40">
            — Kresta Infra &amp; Developers
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
