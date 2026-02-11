'use client';

import { Shield, Droplets, Zap, TreePine, Route, Lock, Cable, CloudRain, Footprints, Users } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const amenities = [
  { icon: Shield, title: '24/7 Security', description: 'Round-the-clock CCTV surveillance and security patrol' },
  { icon: Droplets, title: 'Water Supply', description: 'Dedicated bore wells and underground tank' },
  { icon: TreePine, title: 'Drip Irrigation', description: 'Modern efficient irrigation systems for farming and plantation' },
  { icon: Zap, title: 'Electricity', description: 'Dedicated transformer for uninterrupted power' },
  { icon: Route, title: 'Wide Roads', description: '60 ft, 40 ft & 33 ft wide internal roads' },
  { icon: Lock, title: 'Gated Entry', description: 'Controlled single access point with security' },
  { icon: Cable, title: 'Underground Cables', description: 'Clean modern aesthetics, no overhead wires' },
  { icon: CloudRain, title: 'Drainage System', description: 'Effective water management and harvesting' },
  { icon: Footprints, title: 'Walking Trails', description: 'Nature paths throughout the property' },
  { icon: Users, title: 'Agronomist Support', description: 'Expert farming guidance and organic methodology' },
];

const additionalFeatures = ['Avenue plantation on all roads', 'Rainwater harvesting infrastructure', 'Organic farming support', 'Natural landscapes preserved'];

export default function ProjectAmenities() {
  const { ref, visible } = useReveal();

  return (
    <section id="amenities" className="py-28 md:py-40 bg-[#080808] relative section-glow">
      <div className="container-luxury" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''} mb-16`}>
          <span className="label-gold mb-6 block font-[family-name:var(--font-body)]">World-Class Facilities</span>
          <h2 className="heading-section text-white mb-6 font-[family-name:var(--font-heading)]">
            Premium{' '}
            <span className="text-gold-gradient italic">Amenities</span>
          </h2>
          <div className="divider-gold mb-8" />
          <p className="text-white/40 max-w-2xl">Every detail thoughtfully planned to ensure your farmland experience is nothing short of extraordinary</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {amenities.map((a, i) => (
            <div key={a.title} className={`reveal ${visible ? 'visible' : ''} stagger-${Math.min(i + 1, 8)}`}>
              <div className="h-full p-5 glass rounded-2xl card-lift group glow-hover">
                <div className="w-10 h-10 rounded-xl icon-premium flex items-center justify-center mb-4 group-hover:bg-[#c9a84c]/20 transition-colors">
                  <a.icon className="w-5 h-5 text-[#c9a84c]" />
                </div>
                <h3 className="font-semibold text-white mb-1 text-sm">{a.title}</h3>
                <p className="text-white/30 text-xs">{a.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`reveal ${visible ? 'visible' : ''} stagger-6 mt-12 p-8 glass rounded-2xl glow-hover`}>
          <h3 className="text-lg font-semibold text-white mb-6 text-center font-[family-name:var(--font-heading)]">Additional Features</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalFeatures.map((f) => (
              <div key={f} className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.03] rounded-xl border border-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                <span className="text-white/50 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`reveal ${visible ? 'visible' : ''} stagger-7 mt-16 text-center`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 glass rounded-2xl glow-hover">
            <div className="text-left">
              <h4 className="font-semibold text-white mb-1 text-sm">Ready to experience luxury farmland?</h4>
              <p className="text-white/30 text-xs">Schedule a site visit and see these amenities firsthand</p>
            </div>
            <a href="https://wa.me/919888932555?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit%20for%20The%20Meadow%20Breeze." target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#c9a84c] text-[#080808] rounded-xl font-semibold text-sm hover:bg-[#e8d48b] transition-all whitespace-nowrap btn-premium shimmer">
              Book Site Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
