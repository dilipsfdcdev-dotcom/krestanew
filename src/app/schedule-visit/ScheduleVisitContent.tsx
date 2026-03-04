'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, MapPin, Calendar, Car, CheckCircle2 } from 'lucide-react'
import { FadeInUp } from '@/components/MotionWrapper'
import { ContactForm } from '@/components/ContactForm'
import { company } from '@/data/company'

const benefits = [
  'Experience the majestic Rachakonda Hills firsthand',
  'Walk through the 100-acre farmland estate',
  'See the curated plantation forest in person',
  'Meet our team and get expert guidance',
  'Explore available plot options on-site',
  'Free transportation from Hyderabad available',
]

export function ScheduleVisitContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/meadow-breeze/logo.jpeg"
            alt="Schedule a visit"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a2515]/70 via-[#0a2515]/50 to-[#0a2515]/80" />
        </div>
        <div className="relative z-10 container-luxury mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#d4a843] text-sm tracking-[0.3em] uppercase mb-4">
              Experience It Yourself
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Schedule a <span className="gradient-text-gold">Visit</span>
            </h1>
            <div className="divider-gold mx-auto mb-6" />
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              See the beauty of The Meadow Breeze with your own eyes.
              Book a complimentary site visit today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-luxury mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <FadeInUp>
              <h2 className="text-3xl font-bold text-[#0a2515] mb-6">
                Why Visit The Meadow Breeze?
              </h2>
              <div className="divider-gold mb-6" />
              <div className="space-y-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#d4a843] shrink-0 mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="luxury-card bg-[#fefdf8]">
                <h3 className="text-[#0a2515] font-bold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#d4a843]" />
                  Visit Details
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-[#d4a843] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#0a2515] font-medium">Free Pickup Available</p>
                      <p className="text-gray-500 text-sm">From ORR Exit 11 on weekends</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#d4a843] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#0a2515] font-medium">{company.phone}</p>
                      <p className="text-gray-500 text-sm">Call or WhatsApp to confirm</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#d4a843] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#0a2515] font-medium">Peepal Pahad, Choutuppal</p>
                      <p className="text-gray-500 text-sm">30 km from ORR Exit 11</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Form */}
            <FadeInUp delay={0.2}>
              <h2 className="text-3xl font-bold text-[#0a2515] mb-6">
                Book Your Visit
              </h2>
              <ContactForm variant="light" />
            </FadeInUp>
          </div>
        </div>
      </section>
    </>
  )
}
