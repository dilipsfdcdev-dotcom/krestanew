'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ChevronDown,
  MapPin,
  Mountain,
  ShieldCheck,
  Leaf,
  TreePine,
  Droplets,
  Sprout,
  Zap,
  Route,
  DoorOpen,
  Cable,
  Waves,
  Footprints,
  Shield,
  Home,
  TrendingUp,
  Sun,
  Heart,
  BarChart3,
  Recycle,
  Navigation,
  Phone,
  CheckCircle2,
} from 'lucide-react'
import { FadeInUp, FadeIn, StaggerContainer, ScaleIn } from '@/components/MotionWrapper'
import { meadowBreeze } from '@/data/project'
import { company } from '@/data/company'
import { ContactForm } from '@/components/ContactForm'

const amenityIcons: Record<string, React.ElementType> = {
  Shield,
  Droplets,
  Sprout,
  Zap,
  Route,
  DoorOpen,
  Cable,
  Waves,
  Footprints,
}

const lifestyleIcons = [Home, Leaf, Sun, TrendingUp]
const forestBenefitIcons = [Sun, Heart, BarChart3, Recycle]

export function MeadowBreezeContent() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/meadow-breeze/logo.jpeg"
            alt="The Meadow Breeze"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#33200F]/60 via-[#33200F]/40 to-[#33200F]/80" />
        </div>

        <div className="relative z-10 container-luxury mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-0.5 bg-[#8D5B30] mx-auto mb-8"
            />
            <p className="text-[#8D5B30] text-sm tracking-[0.3em] uppercase mb-4">
              By Kresta
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              The Meadow{' '}
              <span className="gradient-text-gold">Breeze</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-4 italic">
              {meadowBreeze.tagline}
            </p>
            <div className="flex items-center justify-center gap-2 text-white/50 text-sm mb-8">
              <MapPin className="w-4 h-4 text-[#8D5B30]" />
              {meadowBreeze.location}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
              {meadowBreeze.stats.map((stat) => (
                <div key={stat.label} className="glass-dark p-4">
                  <p className="text-[#8D5B30] font-bold text-xl">{stat.value}</p>
                  <p className="text-white/50 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/schedule-visit" className="btn-primary group">
                <Phone className="w-4 h-4 mr-2" />
                Book Site Visit
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#overview" className="btn-outline-white">
                Explore More
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDown className="w-6 h-6 text-[#8D5B30]" />
          </motion.div>
        </motion.div>
      </section>

      {/* Project Overview */}
      <section id="overview" className="section-padding bg-white">
        <div className="container-luxury mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInUp>
              <p className="text-[#8D5B30] text-sm tracking-[0.3em] uppercase mb-3">
                Premium Farmland Investment
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#33200F] mb-6">
                Welcome
              </h2>
              <div className="divider-gold mb-6" />
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                {meadowBreeze.description}
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                {meadowBreeze.fullDescription}
              </p>
              <p className="text-[#33200F]/80 italic leading-relaxed border-l-2 border-[#8D5B30] pl-4">
                {meadowBreeze.legacy}
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/projects/meadow-breeze/logo.jpeg"
                  alt="The Meadow Breeze estate"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#33200F]/40 to-transparent" />
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Vision & Philosophy */}
      <section className="section-padding bg-[#faf6ee]">
        <div className="container-luxury mx-auto">
          <FadeInUp className="text-center mb-16">
            <p className="text-[#8D5B30] text-sm tracking-[0.3em] uppercase mb-3">
              Our Approach
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#33200F] mb-6">
              Vision & Philosophy
            </h2>
            <div className="divider-gold mx-auto mb-6" />
            <p className="text-gray-500 max-w-3xl mx-auto">
              Every element of this estate has been thoughtfully planned to respect the land, enhance well-being,
              and create a meaningful legacy for generations to come.
            </p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {meadowBreeze.vision.map((item, i) => (
              <FadeInUp key={item.title} delay={i * 0.1}>
                <div className="luxury-card h-full hover:-translate-y-1 transition-transform">
                  <div className="w-10 h-10 rounded-lg bg-[#33200F] flex items-center justify-center mb-4">
                    <span className="text-[#8D5B30] font-bold text-sm">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#33200F] mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeInUp>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Location Advantage */}
      <section className="section-padding bg-[#33200F]">
        <div className="container-luxury mx-auto">
          <FadeInUp className="text-center mb-16">
            <p className="text-[#8D5B30] text-sm tracking-[0.3em] uppercase mb-3">
              Connectivity
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Location <span className="gradient-text-gold">Advantage</span>
            </h2>
            <div className="divider-gold mx-auto" />
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Distance Table */}
            <FadeInUp>
              <div className="luxury-card-dark">
                <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-[#8D5B30]" />
                  Distance & Connectivity
                </h3>
                <div className="space-y-0">
                  {meadowBreeze.distances.map((item, i) => (
                    <div
                      key={item.landmark}
                      className={`flex justify-between py-3 ${
                        i < meadowBreeze.distances.length - 1 ? 'border-b border-white/10' : ''
                      }`}
                    >
                      <span className="text-white/70 text-sm">{item.landmark}</span>
                      <span className="text-[#8D5B30] font-semibold text-sm">{item.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>

            {/* Location Highlights */}
            <FadeInUp delay={0.2}>
              <div className="luxury-card-dark">
                <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#8D5B30]" />
                  Location Highlights
                </h3>
                <div className="space-y-4">
                  {meadowBreeze.locationHighlights.map((highlight) => {
                    const [title, desc] = highlight.split(' – ')
                    return (
                      <div key={title} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#8D5B30] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-white font-medium text-sm">{title}</span>
                          {desc && <span className="text-white/50 text-sm"> – {desc}</span>}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Map Embed */}
          <FadeInUp delay={0.3}>
            <div className="mt-12 rounded-2xl overflow-hidden border border-white/10 h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.5!2d78.8!3d17.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPeepal+Pahad+Choutuppal!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Meadow Breeze Location"
              />
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Master Plan */}
      <section className="section-padding bg-white">
        <div className="container-luxury mx-auto">
          <FadeInUp className="text-center mb-16">
            <p className="text-[#8D5B30] text-sm tracking-[0.3em] uppercase mb-3">
              Layout Design
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#33200F] mb-6">
              Master Plan
            </h2>
            <div className="divider-gold mx-auto" />
          </FadeInUp>

          {/* Specs Grid */}
          <FadeInUp>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
              {[
                { label: 'Total Project Area', value: meadowBreeze.totalArea },
                { label: 'Total Plots', value: String(meadowBreeze.totalPlots) },
                { label: 'Total Roads Area', value: meadowBreeze.totalRoadsArea },
                { label: 'Road Widths', value: meadowBreeze.roadWidths },
                { label: 'Plants Per Plot', value: meadowBreeze.plantsPerPlot },
              ].map((spec) => (
                <div key={spec.label} className="text-center p-4 rounded-xl bg-[#33200F]/5">
                  <p className="text-[#8D5B30] font-bold text-lg">{spec.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{spec.label}</p>
                </div>
              ))}
            </div>
          </FadeInUp>

          {/* Master Plan Image */}
          <FadeInUp delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/images/projects/meadow-breeze/masterplan/layout.jpg"
                alt="The Meadow Breeze Master Plan"
                width={1400}
                height={900}
                className="w-full h-auto"
                quality={95}
              />
            </div>
          </FadeInUp>

          {/* Master Plan Features */}
          <FadeInUp delay={0.3}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Wide Internal Roads — 60 ft & 40 ft',
                'Surrounding Forest Area',
                'Premium Villa Section',
                'Natural Boulder Preservation',
                'Walking Trails Throughout',
                'Gated Security Entrance',
                'Green Buffer Zones',
                'Strategic Plot Layout',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2 p-3 rounded-lg bg-[#faf6ee]">
                  <CheckCircle2 className="w-4 h-4 text-[#8D5B30] shrink-0" />
                  <span className="text-gray-600 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Forest Concept */}
      <section className="section-padding bg-[#33200F]">
        <div className="container-luxury mx-auto">
          <FadeInUp className="text-center mb-16">
            <p className="text-[#8D5B30] text-sm tracking-[0.3em] uppercase mb-3">
              Plantation Concept
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              A Forest for <span className="gradient-text-gold">Every Plot</span>
            </h2>
            <p className="text-white/50 text-xl italic mb-6">
              {meadowBreeze.forestConcept.subtitle}
            </p>
            <div className="divider-gold mx-auto mb-6" />
            <p className="text-white/60 max-w-3xl mx-auto leading-relaxed">
              {meadowBreeze.forestConcept.description}
            </p>
            <p className="text-[#8D5B30] font-semibold text-lg mt-4 italic">
              &ldquo;{meadowBreeze.forestConcept.highlight}&rdquo;
            </p>
          </FadeInUp>

          {/* Forest Benefits */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {meadowBreeze.forestConcept.benefits.map((benefit, i) => {
              const Icon = forestBenefitIcons[i]
              return (
                <FadeInUp key={benefit.title} delay={i * 0.1}>
                  <div className="luxury-card-dark h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#8D5B30]/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#8D5B30]" />
                    </div>
                    <h3 className="text-white font-bold mb-3">{benefit.title}</h3>
                    <ul className="space-y-2">
                      {benefit.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-white/50 text-sm">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8D5B30] shrink-0 mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInUp>
              )
            })}
          </StaggerContainer>

          {/* Plant Summary */}
          <FadeInUp>
            <div className="glass-dark p-8 text-center max-w-2xl mx-auto">
              <h3 className="text-white font-bold text-xl mb-6">Combined Plant Summary</h3>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="text-[#8D5B30] font-bold text-2xl">
                    {meadowBreeze.forestConcept.plantSummary.total.varieties}
                  </p>
                  <p className="text-white/50 text-xs mt-1">Plant Varieties</p>
                </div>
                <div>
                  <p className="text-[#8D5B30] font-bold text-2xl">
                    {meadowBreeze.forestConcept.plantSummary.total.plants}
                  </p>
                  <p className="text-white/50 text-xs mt-1">Total Plants/Plot</p>
                </div>
                <div>
                  <p className="text-[#8D5B30] font-bold text-2xl">124</p>
                  <p className="text-white/50 text-xs mt-1">Green Sanctuaries</p>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Plant Gallery */}
      <section className="section-padding bg-white">
        <div className="container-luxury mx-auto">
          <FadeInUp className="text-center mb-16">
            <p className="text-[#8D5B30] text-sm tracking-[0.3em] uppercase mb-3">
              Curated Selection
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#33200F] mb-6">
              Plant Gallery
            </h2>
            <div className="divider-gold mx-auto" />
          </FadeInUp>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {[
              'Tabebuia Rosea',
              'Spethodea',
              'Mahogany',
              'Areca Palm',
              'Foxtail Palm',
              'Golden Bamboo',
              'Buddha Bamboo',
              'Gulmohar',
              'Rain Tree',
              'Ficus Microcarpus (Malti Balls)',
              'Water Apple',
              'Guava',
              'Usiri (Amla)',
              'Kadamba',
              'Peltophorum',
            ].map((plant) => {
              const ext = ['Buddha Bamboo', 'Mahogany', 'Green Bamboo'].includes(plant)
                ? 'jpeg'
                : 'jpg'
              return (
                <ScaleIn key={plant}>
                  <div className="group relative aspect-square rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={`/images/projects/meadow-breeze/plants/${plant}.${ext}`}
                      alt={plant}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-xs font-medium text-center">{plant}</p>
                    </div>
                  </div>
                </ScaleIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Plot Details */}
      <section className="section-padding bg-[#faf6ee]">
        <div className="container-luxury mx-auto">
          <FadeInUp className="text-center mb-16">
            <p className="text-[#8D5B30] text-sm tracking-[0.3em] uppercase mb-3">
              Investment Options
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#33200F] mb-6">
              Plot Details
            </h2>
            <div className="divider-gold mx-auto" />
          </FadeInUp>

          <FadeInUp>
            <div className="overflow-x-auto">
              <table className="w-full luxury-card p-0 overflow-hidden">
                <thead>
                  <tr className="bg-[#33200F] text-white">
                    <th className="text-left p-4 font-semibold text-sm">Size</th>
                    <th className="text-left p-4 font-semibold text-sm">Approx. Area</th>
                    <th className="text-left p-4 font-semibold text-sm">Ideal For</th>
                  </tr>
                </thead>
                <tbody>
                  {meadowBreeze.plotOptions.map((plot, i) => (
                    <tr key={plot.size} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-[#faf6ee]'}`}>
                      <td className="p-4 text-[#8D5B30] font-semibold text-sm">{plot.size}</td>
                      <td className="p-4 text-gray-600 text-sm">{plot.area}</td>
                      <td className="p-4 text-gray-500 text-sm">{plot.idealFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-padding bg-white">
        <div className="container-luxury mx-auto">
          <FadeInUp className="text-center mb-16">
            <p className="text-[#8D5B30] text-sm tracking-[0.3em] uppercase mb-3">
              World-Class Infrastructure
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#33200F] mb-6">
              Amenities
            </h2>
            <div className="divider-gold mx-auto" />
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {meadowBreeze.amenities.map((amenity, i) => {
              const Icon = amenityIcons[amenity.icon] || Shield
              return (
                <FadeInUp key={amenity.name} delay={i * 0.05}>
                  <div className="luxury-card flex items-start gap-4 hover:-translate-y-1 transition-transform">
                    <div className="w-12 h-12 rounded-xl bg-[#33200F] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#8D5B30]" />
                    </div>
                    <div>
                      <h3 className="text-[#33200F] font-bold mb-1">{amenity.name}</h3>
                      <p className="text-gray-500 text-sm">{amenity.description}</p>
                    </div>
                  </div>
                </FadeInUp>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Lifestyle Pathways */}
      <section className="section-padding bg-[#33200F]">
        <div className="container-luxury mx-auto">
          <FadeInUp className="text-center mb-16">
            <p className="text-[#8D5B30] text-sm tracking-[0.3em] uppercase mb-3">
              Four Distinct Pathways
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              A Life of <span className="gradient-text-gold">Possibilities</span>
            </h2>
            <div className="divider-gold mx-auto" />
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {meadowBreeze.lifestyles.map((lifestyle, i) => {
              const Icon = lifestyleIcons[i]
              return (
                <FadeInUp key={lifestyle.title} delay={i * 0.1}>
                  <div className="luxury-card-dark h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#8D5B30]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#8D5B30]" />
                      </div>
                      <h3 className="text-white font-bold text-lg">{lifestyle.title}</h3>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                      {lifestyle.description}
                    </p>
                    <ul className="space-y-2">
                      {lifestyle.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-white/60 text-sm">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8D5B30] shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInUp>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Invest */}
      <section className="section-padding bg-[#faf6ee]">
        <div className="container-luxury mx-auto">
          <FadeInUp className="text-center mb-16">
            <p className="text-[#8D5B30] text-sm tracking-[0.3em] uppercase mb-3">
              Investment Potential
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#33200F] mb-6">
              Why Invest in The Meadow Breeze
            </h2>
            <div className="divider-gold mx-auto" />
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Market Factors */}
            <FadeInUp>
              <div className="luxury-card h-full">
                <h3 className="text-xl font-bold text-[#33200F] mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#8D5B30]" />
                  Market Factors
                </h3>
                <div className="space-y-0">
                  {meadowBreeze.investmentFactors.map((item, i) => (
                    <div
                      key={item.factor}
                      className={`flex justify-between gap-4 py-3 ${
                        i < meadowBreeze.investmentFactors.length - 1
                          ? 'border-b border-gray-100'
                          : ''
                      }`}
                    >
                      <span className="text-[#33200F] font-medium text-sm">{item.factor}</span>
                      <span className="text-gray-500 text-sm text-right">{item.advantage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>

            {/* Differentiators */}
            <FadeInUp delay={0.2}>
              <div className="luxury-card h-full">
                <h3 className="text-xl font-bold text-[#33200F] mb-6 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#8D5B30]" />
                  Project Differentiators
                </h3>
                <div className="space-y-4">
                  {meadowBreeze.differentiators.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#8D5B30] shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Book Site Visit Form */}
      <section className="section-padding bg-[#33200F]">
        <div className="container-luxury mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeInUp>
              <p className="text-[#8D5B30] text-sm tracking-[0.3em] uppercase mb-3">
                Get Started
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Book a <span className="gradient-text-gold">Site Visit</span>
              </h2>
              <div className="divider-gold mb-6" />
              <p className="text-white/60 leading-relaxed mb-8">
                The Meadow Breeze is not just land. It is a legacy waiting to be cultivated.
                Schedule a visit to experience the serenity and beauty of Rachakonda Hills firsthand.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/60">
                  <Phone className="w-5 h-5 text-[#8D5B30]" />
                  <a href={`tel:${company.phone}`} className="hover:text-white transition-colors">
                    {company.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin className="w-5 h-5 text-[#8D5B30]" />
                  <span>{meadowBreeze.location}</span>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <ContactForm variant="dark" />
            </FadeInUp>
          </div>
        </div>
      </section>
    </>
  )
}
