'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, TreePine, Mountain, Shield, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: Leaf,
    title: 'Sustainable Living',
    description: 'We embrace eco-conscious development that works with the land, not against it. Natural contours, soil integrity, and native ecosystems are preserved to ensure a healthy, balanced environment.',
    gradient: 'from-emerald-600 to-emerald-900',
  },
  {
    icon: TreePine,
    title: 'Eco-Conscious Green Cover',
    description: 'Each plot is designed to host 600-900 thoughtfully selected plants, fostering an oxygen-rich microclimate, improved biodiversity, and a cooler, healthier living environment.',
    gradient: 'from-green-600 to-green-900',
  },
  {
    icon: Mountain,
    title: 'Preserving Natural Terrain',
    description: 'Existing rock formations and boulders are carefully retained and celebrated as natural landmarks, lending character, authenticity, and timeless beauty to the landscape.',
    gradient: 'from-stone-500 to-stone-800',
  },
  {
    icon: Shield,
    title: 'Refined Farmland Community',
    description: 'The Meadow Breeze is envisioned as a secure, gated farmland community offering world-class amenities that blend comfort with countryside charm.',
    gradient: 'from-[#c9a962] to-[#8b7355]',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Appreciation',
    description: 'Strategically located in a rapidly developing corridor, this premium farmland estate is designed not just for today, but for tomorrow — offering sustained growth potential.',
    gradient: 'from-blue-600 to-blue-900',
  },
];

export default function VisionPhilosophy3D() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="vision" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0c0c14] to-[#0a0a0f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(26,77,46,0.06)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <p className="text-[#c9a962]/60 text-xs tracking-[0.3em] uppercase mb-4">Our Philosophy</p>
          <h2 className="section-title font-bold text-gradient-gold font-[family-name:var(--font-heading)]">
            Vision & Philosophy
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-white/40 max-w-3xl mx-auto text-sm md:text-base leading-relaxed mb-16"
        >
          At The Meadow Breeze, our vision is to create a living landscape where nature, sustainability,
          and long-term value exist in perfect harmony. Every element of this estate has been thoughtfully
          planned to respect the land, enhance well-being, and create a meaningful legacy for generations to come.
        </motion.p>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              className={`group p-8 rounded-2xl glass hover:glass-gold transition-all duration-500 card-3d ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} mb-5`}>
                <pillar.icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 font-[family-name:var(--font-heading)]">
                {pillar.title}
              </h3>
              <p className="text-white/35 text-sm leading-relaxed group-hover:text-white/50 transition-colors">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center p-8 md:p-12 rounded-3xl glass-gold max-w-4xl mx-auto"
        >
          <p className="text-[#c9a962]/70 italic text-sm md:text-base leading-relaxed font-[family-name:var(--font-heading)]">
            &ldquo;The Meadow Breeze is more than farmland. It is an invitation — to build your private
            retreat, to nurture the land, to reconnect with what matters, and to invest in a legacy
            that grows with time and intention.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
