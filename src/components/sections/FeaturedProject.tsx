'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Mountain, ShieldCheck, Leaf, TreePine } from 'lucide-react'
import { FadeInUp } from '@/components/MotionWrapper'
import { meadowBreeze } from '@/data/project'

const highlightIcons = [Mountain, ShieldCheck, Leaf, TreePine]

export function FeaturedProject() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#fefdf8] to-white">
      <div className="container-luxury mx-auto">
        <FadeInUp className="text-center mb-16">
          <p className="text-[#d4a843] text-sm tracking-[0.3em] uppercase mb-3">
            Featured Development
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2515] mb-6">
            Our Premium Developments
          </h2>
          <div className="divider-gold mx-auto" />
        </FadeInUp>

        <FadeInUp>
          <div className="luxury-card overflow-hidden p-0 group">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-80 lg:h-auto min-h-[400px] overflow-hidden">
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
              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-[#d4a843] text-sm tracking-wider uppercase mb-2">
                  By Kresta
                </p>
                <h3 className="text-3xl sm:text-4xl font-bold text-[#0a2515] mb-2">
                  {meadowBreeze.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {meadowBreeze.location}
                </p>
                <p className="text-[#0a2515]/80 italic text-lg mb-6">
                  &ldquo;{meadowBreeze.tagline}&rdquo;
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {meadowBreeze.stats.slice(0, 3).map((stat) => (
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
                    View Project
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
      </div>
    </section>
  )
}
