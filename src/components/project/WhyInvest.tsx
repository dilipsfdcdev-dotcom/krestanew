'use client';

import { TrendingUp, Users, FileCheck, Building, Gem, TreePine, Award, Shield, MapPin } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const marketFactors = [
  { icon: TrendingUp, factor: 'Rising Land Values', advantage: 'Rachakonda corridor showing rapid appreciation' },
  { icon: Users, factor: 'Limited Community', advantage: 'Only 124 plots in an exclusive gated community' },
  { icon: FileCheck, factor: 'Clear Titles', advantage: 'All legal documentation verified and clear' },
  { icon: Building, factor: 'Infrastructure Growth', advantage: 'ORR, highways, and townships developing nearby' },
  { icon: Gem, factor: 'Scarcity Premium', advantage: 'Large farmland estates becoming increasingly rare' },
];

const differentiators = [
  { icon: TreePine, title: 'Pre-planted Estate', description: '600-900 plants already growing on each plot' },
  { icon: Award, title: '10 Premium Amenities', description: 'World-class infrastructure and facilities included' },
  { icon: Users, title: 'Expert Support', description: 'Agronomist guidance available for farming' },
  { icon: Shield, title: '24/7 Security', description: 'Gated community with CCTV surveillance' },
  { icon: MapPin, title: 'Prime Connectivity', description: '30 km from ORR, 7 km from highway' },
];

export default function WhyInvest() {
  const { ref, visible } = useReveal();

  return (
    <section id="invest" className="py-24 md:py-32 bg-[#faf8f5] relative">
      <div className="container-luxury" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''} text-center mb-16`}>
          <span className="section-label mb-4 block">Investment Opportunity</span>
          <h2 className="section-title font-bold text-[#1a1a1a] mb-4 font-[family-name:var(--font-heading)]">Why Invest in The Meadow Breeze</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">A rare opportunity to own premium farmland in one of Hyderabad&apos;s fastest-growing corridors</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`reveal-left ${visible ? 'visible' : ''}`}>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 flex items-center gap-3 font-[family-name:var(--font-heading)]">
              <TrendingUp className="w-6 h-6 text-[#c9a962]" />Market Factors
            </h3>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-[1fr,2fr] bg-[#1a1a1a] text-white p-4 font-semibold text-sm">
                <span>Factor</span><span>Advantage</span>
              </div>
              {marketFactors.map((m, i) => (
                <div key={m.factor} className={`grid grid-cols-[1fr,2fr] p-4 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-[#c9a962]/10 transition-colors`}>
                  <div className="flex items-center gap-2">
                    <m.icon className="w-4 h-4 text-[#c9a962]" />
                    <span className="font-medium text-[#1a1a1a] text-sm">{m.factor}</span>
                  </div>
                  <span className="text-gray-600 text-sm">{m.advantage}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`reveal-right ${visible ? 'visible' : ''}`}>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 flex items-center gap-3 font-[family-name:var(--font-heading)]">
              <Award className="w-6 h-6 text-[#c9a962]" />Project Differentiators
            </h3>
            <div className="space-y-4">
              {differentiators.map((d, i) => (
                <div key={d.title} className={`reveal ${visible ? 'visible' : ''} stagger-${i + 1} flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md card-hover border border-gray-100`}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a962] to-[#8b7355] flex items-center justify-center flex-shrink-0">
                    <d.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a1a] mb-1">{d.title}</h4>
                    <p className="text-gray-600 text-sm">{d.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`reveal ${visible ? 'visible' : ''} stagger-6 mt-16`}>
          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#333] rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-[family-name:var(--font-heading)]">The Meadow Breeze is not just land.</h3>
            <p className="text-white/60 text-lg mb-8 italic font-[family-name:var(--font-heading)]">It is a legacy waiting to be cultivated.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="px-8 py-4 bg-[#c9a962] text-white rounded-full font-medium hover:bg-[#8b7355] transition-colors">Start Your Legacy Today</a>
              <a href="https://wa.me/919888932555?text=Hi%2C%20I%27m%20interested%20in%20investing%20in%20The%20Meadow%20Breeze.%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-white/25 text-white rounded-full font-medium hover:bg-white/10 transition-colors">Speak to Investment Advisor</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
