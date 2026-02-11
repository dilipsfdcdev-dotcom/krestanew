'use client';

import { Award, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useReveal } from '@/hooks/useReveal';

const values = [
  { icon: Award, title: 'Premium Quality', description: 'World-class construction standards and materials ensuring lasting value for generations.' },
  { icon: Clock, title: 'Timely Delivery', description: 'Committed to meeting project deadlines with transparent progress updates.' },
  { icon: MapPin, title: 'Strategic Locations', description: 'Prime locations with excellent connectivity and appreciation potential.' },
];

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="py-28 md:py-40 bg-[#080808] relative overflow-hidden section-glow">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#c9a84c]/[0.015] to-transparent" />

      <div className="container-luxury relative" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className={`reveal-left ${visible ? 'visible' : ''} lg:col-span-7`}>
            <span className="label-gold mb-6 block">About Kresta</span>

            <h2 className="heading-section text-white mb-8 font-[family-name:var(--font-heading)]">
              Where Vision Meets{' '}
              <span className="text-gold-gradient italic">Legacy</span>
            </h2>

            <div className="divider-gold mb-10" />

            <p className="text-white/45 text-lg leading-relaxed mb-6 max-w-2xl">
              Kresta Infra & Developers Pvt. Ltd. is a premier real estate development company specializing in luxury residential projects, premium farmland communities, commercial spaces, and integrated township developments.
            </p>
            <p className="text-white/35 leading-relaxed mb-12 max-w-2xl">
              From high-rise apartments to serene farmland estates, we deliver diverse real estate solutions with world-class quality. Our vision is to transform spaces into thriving communities that blend modern living with sustainable design.
            </p>

            <div className="space-y-4">
              {values.map((value, i) => (
                <div key={value.title} className={`reveal ${visible ? 'visible' : ''} stagger-${i + 1} group flex items-center gap-5 p-5 glass rounded-2xl hover:border-[#c9a84c]/15 transition-all glow-hover`}>
                  <div className="w-12 h-12 rounded-xl icon-premium flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-[#c9a84c]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-0.5 text-sm tracking-wide">{value.title}</h3>
                    <p className="text-white/35 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`reveal-right ${visible ? 'visible' : ''} lg:col-span-5`}>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden img-zoom aspect-[3/4]">
                <Image src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600" alt="Kresta Farmland" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
              </div>

              <div className={`reveal ${visible ? 'visible' : ''} stagger-4 absolute -bottom-4 -left-4 md:-left-8 glass p-5 rounded-2xl`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a84c] flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#080808]" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold text-white font-[family-name:var(--font-heading)]">Since 2024</h4>
                    <p className="text-white/35 text-xs tracking-widest uppercase font-[family-name:var(--font-body)]">Trusted Developer</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-[#c9a84c]/15 rounded-tr-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
