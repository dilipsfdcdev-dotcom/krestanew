'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, TreePine, Mountain, Shield, TrendingUp } from 'lucide-react';

const visionPillars = [
  {
    icon: Leaf,
    title: 'Sustainable Living',
    description: 'We embrace eco-conscious development that works with the land, not against it. Natural contours, soil integrity, and native ecosystems are preserved to ensure a healthy, balanced environment that thrives over time.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: TreePine,
    title: 'Eco-Conscious Green Cover',
    description: 'Each plot is designed to host 600-900 thoughtfully selected plants, fostering an oxygen-rich microclimate, improved biodiversity, and a cooler, healthier living environment — transforming every parcel into a private green sanctuary.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Mountain,
    title: 'Preserving Natural Terrain',
    description: 'Existing rock formations and boulders are carefully retained and celebrated as natural landmarks, lending character, authenticity, and timeless beauty to the landscape while maintaining ecological balance.',
    color: 'from-stone-500 to-stone-700',
  },
  {
    icon: Shield,
    title: 'Refined Farmland Community',
    description: 'The Meadow Breeze is envisioned as a secure, gated farmland community offering world-class amenities that blend comfort with countryside charm — creating a refined lifestyle rooted in openness, privacy, and exclusivity.',
    color: 'from-[#c9a962] to-[#8b7355]',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Appreciation',
    description: 'Strategically located in a rapidly developing corridor, this premium farmland estate is designed not just for today, but for tomorrow — offering sustained growth potential alongside the rare advantage of owning land shaped by nature.',
    color: 'from-blue-500 to-indigo-600',
  },
];

export default function VisionPhilosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="vision" className="py-24 md:py-32 bg-[#faf8f5] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pattern-dots" />

      <div className="container-luxury relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a962] text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            Our Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Vision & Philosophy
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-6"
          />
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            At The Meadow Breeze, our vision is to create a living landscape where nature, sustainability, and long-term value exist in perfect harmony. Every element of this estate has been thoughtfully planned to respect the land, enhance well-being, and create a meaningful legacy for generations to come.
          </p>
        </motion.div>

        {/* Vision Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visionPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-[#c9a962]/30">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-5 shadow-lg`}>
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-[#1a1a1a] to-[#333] rounded-2xl">
            <p className="text-white/90 text-lg md:text-xl italic max-w-2xl" style={{ fontFamily: 'var(--font-heading)' }}>
              &ldquo;The Meadow Breeze is more than farmland. It is an invitation — to build your private retreat, to nurture the land, to reconnect with what matters, and to invest in a legacy that grows with time and intention.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
