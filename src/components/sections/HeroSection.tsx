'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/projects/meadow-breeze/logo.jpeg"
          alt="Luxury farmland estate"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#33200F]/70 via-[#33200F]/50 to-[#33200F]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#33200F]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          {/* Gold accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-0.5 bg-gradient-to-r from-[#8D5B30] to-[#753429] mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[#8D5B30] text-sm sm:text-base tracking-[0.3em] uppercase mb-6"
          >
            Kresta Infra & Developers
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Own What{' '}
            <span className="gradient-text-gold">Endures</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A living landscape shaped by restraint, not imposition.
            Designed around nature, never against it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/projects" className="btn-primary group">
              Explore Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/schedule-visit" className="btn-outline-white">
              Schedule a Visit
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-[#8D5B30]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
