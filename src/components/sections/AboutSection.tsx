'use client'

import { Shield, Clock, MapPin } from 'lucide-react'
import { FadeInUp, StaggerContainer } from '@/components/MotionWrapper'
import { company, features } from '@/data/company'

const iconMap = {
  Shield,
  Clock,
  MapPin,
} as const

export function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-luxury mx-auto">
        <FadeInUp className="text-center mb-16">
          <p className="text-[#8D5B30] text-sm tracking-[0.3em] uppercase mb-3">
            Who We Are
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#33200F] mb-6">
            About Kresta
          </h2>
          <div className="divider-gold mx-auto mb-8" />
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            {company.description}
          </p>
          <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed mt-4">
            {company.descriptionExtended}
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <FadeInUp key={feature.title} delay={index * 0.1}>
                <div className="luxury-card text-center group hover:-translate-y-1">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#33200F]/5 flex items-center justify-center group-hover:bg-[#33200F] transition-colors duration-500">
                    <Icon className="w-7 h-7 text-[#8D5B30]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#33200F] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FadeInUp>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
