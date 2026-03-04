'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { FadeInUp } from '@/components/MotionWrapper'

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a2515] via-[#1a5632] to-[#0f3620]" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4a843] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4a843] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 container-luxury mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-0.5 bg-[#d4a843] mx-auto mb-8"
          />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Own Your Piece of{' '}
            <span className="gradient-text-gold">Paradise</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Discover premium farmland estates amidst the Rachakonda Hills.
            Limited plots available in an exclusive gated community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/schedule-visit" className="btn-primary group">
              <Phone className="w-4 h-4 mr-2" />
              Schedule Site Visit
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Contact Us
            </Link>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
