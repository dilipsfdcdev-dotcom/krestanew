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
    <section id="invest" className="py-28 md:py-40 bg-[#111111] relative section-glow">
      <div className="container-luxury" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''} mb-16`}>
          <span className="label-gold mb-6 block font-[family-name:var(--font-body)]">Investment Opportunity</span>
          <h2 className="heading-section text-white mb-6 font-[family-name:var(--font-heading)]">
            Why Invest in{' '}
            <span className="text-gold-gradient italic">The Meadow Breeze</span>
          </h2>
          <div className="divider-gold mb-8" />
          <p className="text-white/40 max-w-2xl">A rare opportunity to own premium farmland in one of Hyderabad&apos;s fastest-growing corridors</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`reveal-left ${visible ? 'visible' : ''}`}>
            <h3 className="heading-sub text-white mb-8 flex items-center gap-3 font-[family-name:var(--font-heading)]">
              <TrendingUp className="w-5 h-5 text-[#c9a84c]" />Market Factors
            </h3>
            <div className="glass rounded-2xl overflow-hidden glow-hover">
              <div className="grid grid-cols-[1fr,2fr] bg-[#c9a84c]/10 p-4 font-semibold text-sm text-white/80">
                <span>Factor</span><span>Advantage</span>
              </div>
              {marketFactors.map((m, i) => (
                <div key={m.factor} className={`grid grid-cols-[1fr,2fr] p-4 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''} hover:bg-[#c9a84c]/5 transition-colors`}>
                  <div className="flex items-center gap-2">
                    <m.icon className="w-4 h-4 text-[#c9a84c]" />
                    <span className="font-medium text-white text-sm">{m.factor}</span>
                  </div>
                  <span className="text-white/50 text-sm">{m.advantage}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`reveal-right ${visible ? 'visible' : ''}`}>
            <h3 className="heading-sub text-white mb-8 flex items-center gap-3 font-[family-name:var(--font-heading)]">
              <Award className="w-5 h-5 text-[#c9a84c]" />Project Differentiators
            </h3>
            <div className="space-y-4">
              {differentiators.map((d, i) => (
                <div key={d.title} className={`reveal ${visible ? 'visible' : ''} stagger-${i + 1} flex items-start gap-4 p-5 glass rounded-2xl card-lift group glow-hover`}>
                  <div className="w-11 h-11 rounded-xl icon-premium flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a84c]/20 transition-colors">
                    <d.icon className="w-5 h-5 text-[#c9a84c]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm">{d.title}</h4>
                    <p className="text-white/40 text-sm">{d.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`reveal ${visible ? 'visible' : ''} stagger-6 mt-16`}>
          <div className="glass rounded-2xl p-8 md:p-12 text-center glow-hover">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">The Meadow Breeze is not just land.</h3>
            <p className="text-white/40 text-lg mb-8 italic font-[family-name:var(--font-heading)]">It is a legacy waiting to be cultivated.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="px-8 py-4 bg-[#c9a84c] text-[#080808] rounded-xl font-semibold text-sm hover:bg-[#e8d48b] transition-colors btn-premium shimmer">Start Your Legacy Today</a>
              <a href="https://wa.me/919888932555?text=Hi%2C%20I%27m%20interested%20in%20investing%20in%20The%20Meadow%20Breeze.%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-white/15 text-white rounded-xl font-medium text-sm hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-colors">Speak to Investment Advisor</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
