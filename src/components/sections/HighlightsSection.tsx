'use client'

import { motion } from 'framer-motion'
import { TreePine, Mountain, Sprout, Home } from 'lucide-react'
import { FadeInUp, StaggerContainer } from '@/components/MotionWrapper'

const highlights = [
  {
    title: 'Luxury Farmland Living',
    description: 'Build your dream countryside retreat amidst the hills.',
    icon: Home,
    gradient: 'from-emerald-900/90 to-emerald-800/70',
  },
  {
    title: 'Sustainable Plantation Forest',
    description: '600-900 plants per plot creating a private green sanctuary.',
    icon: TreePine,
    gradient: 'from-green-900/90 to-green-800/70',
  },
  {
    title: '360° Mountain Views',
    description: 'Sweeping panoramic views of the rolling Rachakonda Hills.',
    icon: Mountain,
    gradient: 'from-teal-900/90 to-teal-800/70',
  },
  {
    title: 'Eco Community Living',
    description: 'Gated community with world-class amenities and natural living.',
    icon: Sprout,
    gradient: 'from-emerald-950/90 to-emerald-900/70',
  },
]

export function HighlightsSection() {
  return (
    <section className="section-padding bg-[#33200F]">
      <div className="container-luxury mx-auto">
        <FadeInUp className="text-center mb-16">
          <p className="text-[#8D5B30] text-sm tracking-[0.3em] uppercase mb-3">
            Project Highlights
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            A Life Beyond Ordinary
          </h2>
          <div className="divider-gold mx-auto" />
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <FadeInUp key={item.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="luxury-card-dark h-full flex flex-col items-center text-center cursor-default"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#8D5B30]/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-[#8D5B30]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </FadeInUp>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
