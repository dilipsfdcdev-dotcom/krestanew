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
    <section id="overview" className="py-24 md:py-32 bg-white relative">
      <div className="container-luxury" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''} text-center mb-16`}>
          <span className="section-label mb-4 block">A Distinguished 100-Acre Farmland Estate</span>
          <h2 className="section-title font-bold text-[#1a1a1a] mb-4 font-[family-name:var(--font-heading)]">Where the Hills Stand Guard</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-4" />
          <p className="text-gray-600 max-w-3xl mx-auto">
            Nestled in the majestic Rachakonda Hills, The Meadow Breeze is crafted for those who value serenity, privacy, and purposeful living. Here, you don&apos;t merely own land — you inherit peace, purpose, and a deeper bond with nature.
          </p>
        </div>

        {/* Stats */}
        <div className={`reveal ${visible ? 'visible' : ''} stagger-1 grid grid-cols-2 md:grid-cols-4 gap-4 mb-16`}>
          {[
            { value: '124', label: 'Total Plots', icon: Home },
            { value: '179,103', label: 'Sq. Yards Area', icon: MapPin },
            { value: '600-900', label: 'Plants/Plot', icon: TreePine },
            { value: '100%', label: 'Organic Setup', icon: Leaf },
          ].map((stat, i) => (
            <div key={stat.label} className={`reveal ${visible ? 'visible' : ''} stagger-${i + 1} p-6 bg-gradient-to-br from-[#faf8f5] to-white rounded-2xl border border-[#c9a962]/15 shadow-lg card-hover`}>
              <stat.icon className="w-7 h-7 text-[#c9a962] mb-3" />
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">{stat.value}</h3>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Location & Investment */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className={`reveal-left ${visible ? 'visible' : ''} bg-[#1a1a1a] rounded-2xl p-8 md:p-10 text-white`}>
            <h3 className="text-2xl font-bold mb-6 font-[family-name:var(--font-heading)]">Strategic Location</h3>
            <div className="space-y-4">
              {locationHighlights.map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  <span className="text-white/90">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`reveal-right ${visible ? 'visible' : ''} bg-gradient-to-br from-[#faf8f5] to-white rounded-2xl p-8 md:p-10 border border-[#c9a962]/15`}>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 font-[family-name:var(--font-heading)]">Investment Benefits</h3>
            <div className="space-y-3">
              {investmentPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#c9a962] mt-2 flex-shrink-0" />
                  <span className="text-gray-600">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Plot Sizes */}
        <div className={`reveal ${visible ? 'visible' : ''} stagger-3`}>
          <h3 className="text-2xl font-bold text-[#1a1a1a] text-center mb-8 font-[family-name:var(--font-heading)]">Available Plot Sizes</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {plotSizes.map((plot, i) => (
              <div key={plot.size} className={`reveal ${visible ? 'visible' : ''} stagger-${i + 3} p-5 bg-white rounded-2xl border border-gray-100 shadow-md card-hover text-center`}>
                <h4 className="text-xl font-bold text-[#1a1a1a] mb-1">{plot.size}</h4>
                <p className="text-[#c9a962] font-medium text-sm mb-2">{plot.area}</p>
                <p className="text-gray-500 text-xs">{plot.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
