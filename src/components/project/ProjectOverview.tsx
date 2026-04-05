'use client';

import { MapPin, Car, TreePine, Home, Shield, Leaf } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const plotSizes = [
  { size: '10 Guntas', area: '~1,210 sq yds', description: 'Compact farmhouse, weekend home, nature retreat' },
  { size: '12.5-15 Guntas', area: '~1,510-1,815 sq yds', description: 'Farmhouse with landscaped garden' },
  { size: '17-20 Guntas', area: '~2,060-2,420 sq yds', description: 'Medium farmhouse with farming/orchard area' },
  { size: '22-25 Guntas', area: '~2,660-3,025 sq yds', description: 'Large farmhouse estate, corner & premium plots' },
  { size: '25+ Guntas', area: '3,025+ sq yds', description: 'Premium estate near forest & boulder zones' },
];

const locationHighlights = [
  { icon: MapPin, text: '30 km from ORR Exit 11' },
  { icon: Car, text: '7 km from Vijayawada Highway' },
  { icon: TreePine, text: '360° Panoramic Mountain Views' },
  { icon: Shield, text: 'Pure, Pollution-Free Environment' },
];

const investmentPoints = [
  'Rising land values in Rachakonda corridor',
  'Only 124 plots in exclusive gated community',
  'Clear titles with all legal documentation verified',
  'Infrastructure growth with ORR & highways nearby',
  'Pre-planted estate with 600-900 plants per plot',
  '24/7 gated community with CCTV security',
];

export default function ProjectOverview() {
  const { ref, visible } = useReveal();

  return (
    <section id="overview" className="py-28 md:py-40 bg-[#0c0c0c] relative">
      <div className="container-luxury" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''} mb-16`}>
          <span className="label-gold mb-6 block">A Distinguished 100-Acre Farmland Estate</span>
          <h2 className="heading-section text-white mb-6 font-[family-name:var(--font-heading)]">
            Where the Hills{' '}
            <span className="text-gold-gradient italic">Stand Guard</span>
          </h2>
          <div className="divider-gold mb-8" />
          <p className="text-white/40 max-w-3xl text-lg">
            Nestled in the majestic Rachakonda Hills, The Meadow Breeze is crafted for those who value serenity, privacy, and purposeful living. Here, you don&apos;t merely own land — you inherit peace, purpose, and a deeper bond with nature.
          </p>
        </div>

        <div className={`reveal ${visible ? 'visible' : ''} stagger-1 grid grid-cols-2 md:grid-cols-4 gap-4 mb-20`}>
          {[
            { value: '124', label: 'Total Plots', icon: Home },
            { value: '179,103', label: 'Sq. Yards Area', icon: MapPin },
            { value: '600-900', label: 'Plants/Plot', icon: TreePine },
            { value: '100%', label: 'Organic Setup', icon: Leaf },
          ].map((stat, i) => (
            <div key={stat.label} className={`reveal ${visible ? 'visible' : ''} stagger-${i + 1} p-6 glass rounded-lg card-lift`}>
              <stat.icon className="w-6 h-6 text-[#d4af37] mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-heading)]">{stat.value}</h3>
              <p className="text-white/30 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div className={`reveal-left ${visible ? 'visible' : ''} p-8 md:p-10 glass rounded-lg`}>
            <h3 className="heading-sub text-white mb-8 font-[family-name:var(--font-heading)]">Strategic Location</h3>
            <div className="space-y-4">
              {locationHighlights.map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <span className="text-white/70">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`reveal-right ${visible ? 'visible' : ''} p-8 md:p-10 bg-[#161616] rounded-lg border border-white/5`}>
            <h3 className="heading-sub text-white mb-8 font-[family-name:var(--font-heading)]">Investment Benefits</h3>
            <div className="space-y-3">
              {investmentPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0" />
                  <span className="text-white/50">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`reveal ${visible ? 'visible' : ''} stagger-3`}>
          <h3 className="heading-sub text-white text-center mb-10 font-[family-name:var(--font-heading)]">Available Plot Sizes</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {plotSizes.map((plot, i) => (
              <div key={plot.size} className={`reveal ${visible ? 'visible' : ''} stagger-${i + 3} p-5 glass rounded-lg card-lift text-center`}>
                <h4 className="text-lg font-bold text-white mb-1">{plot.size}</h4>
                <p className="text-[#d4af37] font-medium text-sm mb-2">{plot.area}</p>
                <p className="text-white/30 text-xs">{plot.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
