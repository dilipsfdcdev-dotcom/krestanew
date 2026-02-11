'use client';

import { Shield, Droplets, Zap, TreePine, Route, Lock, Cable, CloudRain, Footprints, Users } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const amenities = [
  { icon: Shield, title: '24/7 Security', description: 'Round-the-clock CCTV surveillance and security patrol', gradient: 'from-red-500 to-orange-500' },
  { icon: Droplets, title: 'Water Supply', description: 'Dedicated bore wells and underground tank', gradient: 'from-blue-500 to-cyan-500' },
  { icon: TreePine, title: 'Drip Irrigation', description: 'Modern efficient irrigation systems for farming and plantation', gradient: 'from-green-500 to-emerald-500' },
  { icon: Zap, title: 'Electricity', description: 'Dedicated transformer for uninterrupted power', gradient: 'from-yellow-500 to-amber-500' },
  { icon: Route, title: 'Wide Roads', description: '60 ft, 40 ft & 33 ft wide internal roads', gradient: 'from-purple-500 to-pink-500' },
  { icon: Lock, title: 'Gated Entry', description: 'Controlled single access point with security', gradient: 'from-indigo-500 to-blue-500' },
  { icon: Cable, title: 'Underground Cables', description: 'Clean modern aesthetics, no overhead wires', gradient: 'from-gray-500 to-slate-500' },
  { icon: CloudRain, title: 'Drainage System', description: 'Effective water management and harvesting', gradient: 'from-teal-500 to-cyan-500' },
  { icon: Footprints, title: 'Walking Trails', description: 'Nature paths throughout the property', gradient: 'from-lime-500 to-green-500' },
  { icon: Users, title: 'Agronomist Support', description: 'Expert farming guidance and organic methodology', gradient: 'from-orange-500 to-red-500' },
];

const additionalFeatures = ['Avenue plantation on all roads', 'Rainwater harvesting infrastructure', 'Organic farming support', 'Natural landscapes preserved'];

export default function ProjectAmenities() {
  const { ref, visible } = useReveal();

  return (
    <section id="amenities" className="py-24 md:py-32 bg-white relative">
      <div className="container-luxury" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''} text-center mb-16`}>
          <span className="section-label mb-4 block">World-Class Facilities</span>
          <h2 className="section-title font-bold text-[#1a1a1a] mb-4 font-[family-name:var(--font-heading)]">Premium Amenities</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">Every detail thoughtfully planned to ensure your farmland experience is nothing short of extraordinary</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {amenities.map((a, i) => (
            <div key={a.title} className={`reveal ${visible ? 'visible' : ''} stagger-${Math.min(i + 1, 8)}`}>
              <div className="h-full p-5 bg-gradient-to-br from-[#faf8f5] to-white rounded-2xl border border-gray-100 card-hover">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${a.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <a.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#1a1a1a] mb-1 text-sm">{a.title}</h3>
                <p className="text-gray-500 text-xs">{a.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`reveal ${visible ? 'visible' : ''} stagger-6 mt-12 p-8 bg-gradient-to-br from-[#faf8f5] to-white rounded-2xl border border-[#c9a962]/20`}>
          <h3 className="text-xl font-bold text-[#1a1a1a] mb-6 text-center font-[family-name:var(--font-heading)]">Additional Features</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalFeatures.map((f) => (
              <div key={f} className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-md border border-gray-100">
                <div className="w-2 h-2 rounded-full bg-[#c9a962]" />
                <span className="text-gray-700 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`reveal ${visible ? 'visible' : ''} stagger-7 mt-16 text-center`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-[#1a1a1a] to-[#333] rounded-2xl text-white">
            <div className="text-left">
              <h4 className="font-semibold mb-1">Ready to experience luxury farmland?</h4>
              <p className="text-white/60 text-sm">Schedule a site visit and see these amenities firsthand</p>
            </div>
            <a href="https://wa.me/919888932555?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit%20for%20The%20Meadow%20Breeze." target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#c9a962] text-white rounded-full font-medium hover:bg-[#8b7355] transition-all whitespace-nowrap">
              Book Site Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
