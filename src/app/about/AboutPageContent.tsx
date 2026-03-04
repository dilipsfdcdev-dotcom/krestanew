'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Shield,
  Clock,
  MapPin,
  Building2,
  TreePine,
  Home,
  Landmark,
  ArrowRight,
  Target,
  Eye,
  Heart,
} from 'lucide-react'
import { FadeInUp, StaggerContainer } from '@/components/MotionWrapper'
import { company, features } from '@/data/company'

const iconMap = { Shield, Clock, MapPin } as const

const offerings = [
  { icon: Home, title: 'Luxury Residences', desc: 'Premium homes designed for sophisticated living.' },
  { icon: TreePine, title: 'Farmland Estates', desc: 'Curated farmland communities with eco living.' },
  { icon: Building2, title: 'Commercial Spaces', desc: 'World-class commercial developments.' },
  { icon: Landmark, title: 'Integrated Townships', desc: 'Complete living ecosystems with modern amenities.' },
]

const values = [
  { icon: Target, title: 'Our Mission', desc: 'To create exceptional real estate experiences that combine luxury with sustainability, delivering lasting value to our customers and communities.' },
  { icon: Eye, title: 'Our Vision', desc: 'To be India\'s most trusted luxury real estate developer, known for quality, innovation, and respect for nature.' },
  { icon: Heart, title: 'Our Values', desc: 'Quality, transparency, timely delivery, and a deep commitment to sustainable development that respects both people and planet.' },
]

export function AboutPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2515] via-[#1a5632] to-[#0f3620]" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#d4a843] rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 container-luxury mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#d4a843] text-sm tracking-[0.3em] uppercase mb-4">
              Est. 2025 • Hyderabad
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="gradient-text-gold">Kresta</span>
            </h1>
            <div className="divider-gold mx-auto mb-6" />
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              {company.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInUp>
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/projects/meadow-breeze/logo.jpeg"
                    alt="Kresta vision"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#0a2515] text-white p-6 rounded-2xl shadow-xl">
                  <p className="text-[#d4a843] text-3xl font-bold">2025</p>
                  <p className="text-white/60 text-sm">Founded</p>
                </div>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-[#d4a843] text-sm tracking-[0.3em] uppercase mb-3">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2515] mb-6">
                Building Dreams Since 2025
              </h2>
              <div className="divider-gold mb-6" />
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                {company.description}
              </p>
              <p className="text-gray-500 leading-relaxed">
                {company.descriptionExtended}
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-[#fefdf8]">
        <div className="container-luxury mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, i) => (
              <FadeInUp key={item.title} delay={i * 0.1}>
                <div className="luxury-card text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#0a2515] flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-[#d4a843]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a2515] mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </FadeInUp>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-luxury mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2515] mb-6">
              Why Choose Kresta
            </h2>
            <div className="divider-gold mx-auto" />
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap]
              return (
                <FadeInUp key={feature.title} delay={i * 0.1}>
                  <div className="luxury-card text-center hover:-translate-y-1 transition-transform">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#0a2515]/5 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#d4a843]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0a2515] mb-3">{feature.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                </FadeInUp>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Offerings */}
      <section className="section-padding bg-[#0a2515]">
        <div className="container-luxury mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              What We <span className="gradient-text-gold">Offer</span>
            </h2>
            <div className="divider-gold mx-auto" />
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((item, i) => (
              <FadeInUp key={item.title} delay={i * 0.1}>
                <div className="luxury-card-dark text-center h-full">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-[#d4a843]/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#d4a843]" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              </FadeInUp>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-[#fefdf8] to-white text-center">
        <FadeInUp>
          <div className="container-luxury mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2515] mb-6">
              Ready to Invest in Your Future?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-8">
              Explore our premium developments and schedule a site visit today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/projects" className="btn-primary group">
                Explore Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="btn-outline">
                Get in Touch
              </Link>
            </div>
          </div>
        </FadeInUp>
      </section>
    </>
  )
}
