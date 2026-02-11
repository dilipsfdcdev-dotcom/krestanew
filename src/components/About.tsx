'use client';

import { Award, Clock, MapPin } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const values = [
  { icon: Award, title: 'Premium Quality', description: 'World-class construction standards and materials ensuring lasting value for generations.' },
  { icon: Clock, title: 'Timely Delivery', description: 'Committed to meeting project deadlines with transparent progress updates.' },
  { icon: MapPin, title: 'Strategic Locations', description: 'Prime locations with excellent connectivity and appreciation potential.' },
];

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative">
      <div className="container-luxury">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className={`reveal-left ${visible ? 'visible' : ''}`}>
            <span className="section-label mb-4 block">About Kresta</span>
            <h2 className="section-title font-bold text-[#1a1a1a] mb-6 font-[family-name:var(--font-heading)]">
              Crafting Luxury,<span className="text-[#c9a962]"> Building Dreams</span>
            </h2>
            <div className="line-gold mb-8" />

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Kresta Infra & Developers Pvt. Ltd. is a premier real estate development company specializing in luxury residential projects, premium farmland communities, commercial spaces, and integrated township developments.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From high-rise apartments to serene farmland estates, we deliver diverse real estate solutions with world-class quality. Our vision is to transform spaces into thriving communities that blend modern living with sustainable design.
            </p>

            <div className="space-y-5">
              {values.map((value, i) => (
                <div key={value.title} className={`reveal ${visible ? 'visible' : ''} stagger-${i + 1} flex gap-4`}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c9a962]/10 flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a1a1a] mb-1">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className={`reveal-right ${visible ? 'visible' : ''} relative`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl img-zoom">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600"
                alt="Kresta Farmland"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            <div className={`reveal ${visible ? 'visible' : ''} stagger-4 absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl`}>
              <div className="flex items-center gap-4">
                <div className="w-13 h-13 rounded-full bg-[#c9a962] flex items-center justify-center p-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-[#1a1a1a]">Since 2024</h4>
                  <p className="text-gray-500 text-sm">Trusted Developer</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-3 -right-3 w-20 h-20 border-2 border-[#c9a962]/30 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
