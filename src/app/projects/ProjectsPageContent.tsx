'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Mountain, ShieldCheck, Leaf, TreePine } from 'lucide-react'
import { FadeInUp } from '@/components/MotionWrapper'
import { meadowBreeze } from '@/data/project'

const highlightIcons = [Mountain, ShieldCheck, Leaf, TreePine]

export function ProjectsPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2515] via-[#1a5632] to-[#0f3620]" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4a843] rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 container-luxury mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#d4a843] text-sm tracking-[0.3em] uppercase mb-4">
              Our Developments
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Premium <span className="gradient-text-gold">Projects</span>
            </h1>
            <div className="divider-gold mx-auto mb-6" />
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Thoughtfully planned communities that combine modern architecture
              with nature and sustainable living.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects List */}
      <section className="section-padding bg-white">
        <div className="container-luxury mx-auto">
          <FadeInUp>
            <div className="luxury-card overflow-hidden p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-80 lg:h-auto min-h-[500px] overflow-hidden group">
                  <Image
                    src="/images/projects/meadow-breeze/logo.jpeg"
                    alt="The Meadow Breeze"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2515]/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-[#d4a843] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                      Now Selling
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                  <p className="text-[#d4a843] text-sm tracking-wider uppercase mb-2">
                    Premium Farmland Estate
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2515] mb-2">
                    {meadowBreeze.name}
                  </h2>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 text-[#d4a843]" />
                    {meadowBreeze.location}
                  </div>
                  <p className="text-[#0a2515]/80 italic text-lg mb-4">
                    &ldquo;{meadowBreeze.tagline}&rdquo;
                  </p>
                  <p className="text-gray-500 mb-6 leading-relaxed">
                    {meadowBreeze.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    {meadowBreeze.stats.map((stat) => (
                      <div key={stat.label} className="text-center p-3 rounded-xl bg-[#0a2515]/5">
                        <p className="text-[#d4a843] font-bold text-lg">{stat.value}</p>
                        <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {meadowBreeze.highlights.map((highlight, i) => {
                      const Icon = highlightIcons[i]
                      return (
                        <div key={highlight} className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-[#d4a843] shrink-0" />
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </div>
                      )
                    })}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/projects/meadow-breeze" className="btn-primary group text-sm">
                      View Full Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/schedule-visit" className="btn-outline text-sm">
                      Book Site Visit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Coming Soon */}
          <FadeInUp delay={0.2}>
            <div className="mt-12 text-center">
              <p className="text-gray-400 text-sm tracking-wider uppercase mb-4">
                More Projects Coming Soon
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {['Luxury Villas', 'Commercial Spaces', 'Integrated Townships'].map(
                  (item) => (
                    <div
                      key={item}
                      className="p-8 rounded-2xl border-2 border-dashed border-gray-200 text-gray-400"
                    >
                      <p className="font-medium">{item}</p>
                      <p className="text-xs mt-1">Coming 2026</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  )
}
