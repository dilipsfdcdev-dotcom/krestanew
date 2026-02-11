'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Maximize2, X, Home, Route, TreePine, MapPin, Compass } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const planFeatures = [
  { icon: Home, label: '124 Premium Plots' },
  { icon: Route, label: '60ft, 40ft & 33ft Roads' },
  { icon: TreePine, label: 'Forest Area & Green Buffer' },
  { icon: MapPin, label: 'Premium Villa Section' },
  { icon: Compass, label: 'Walking Trails Throughout' },
];

const masterPlanFeatures = [
  'Wide Internal Roads — 60 ft & 40 ft for easy access',
  'Forest Area — Surrounding the community for privacy',
  'Premium Villa Section — Designated premium plots',
  'Natural Boulder Preservation — Existing boulders as landmarks',
  'Walking Trails — Throughout the property',
  'Strategic Entrance — Wide access with gated security',
  'Green Buffer Zones — Extensive plantation areas',
];

const stats = [
  { label: 'Total Plot Area', value: '179,103 Sq. Yards' },
  { label: 'Roads Area', value: '57,558 Sq. Yards' },
  { label: 'Total Plots', value: '124' },
  { label: 'Plants Per Plot', value: '600-900' },
];

export default function MasterPlan() {
  const { ref, visible } = useReveal();
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <>
      <section id="masterplan" className="py-28 md:py-40 bg-[#161616] relative overflow-hidden">
        <div className="container-luxury relative z-10" ref={ref}>
          <div className={`reveal ${visible ? 'visible' : ''} mb-12`}>
            <span className="label-gold mb-6 block">Layout Design</span>
            <h2 className="heading-section text-white mb-6 font-[family-name:var(--font-heading)]">
              Master{' '}
              <span className="text-gold-gradient italic">Plan</span>
            </h2>
            <div className="divider-gold mb-8" />
            <p className="text-white/40 max-w-2xl">Thoughtfully designed layout by S&S Architects and Infra, ensuring optimal space utilization with natural forest surroundings</p>
          </div>

          <div className={`reveal ${visible ? 'visible' : ''} stagger-1 flex flex-wrap gap-8 mb-12`}>
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-3xl font-bold text-[#d4af37] font-[family-name:var(--font-heading)]">{s.value}</p>
                <p className="text-white/30 text-xs tracking-widest uppercase">{s.label}</p>
              </div>
            ))}
          </div>

          <div className={`reveal-scale ${visible ? 'visible' : ''} relative mb-12`}>
            <div className="relative rounded-lg overflow-hidden border border-white/5 group">
              <div className="relative aspect-[16/10] w-full bg-[#0c0c0c]">
                <Image src="/images/projects/meadow-breeze/masterplan/layout.webp" alt="The Meadow Breeze Master Plan" fill className="object-contain" sizes="100vw" loading="lazy" />
              </div>
              <button onClick={() => setFullscreen(true)} className="absolute top-4 right-4 p-3 glass rounded text-white hover:bg-[#d4af37] hover:text-[#0c0c0c] transition-colors opacity-0 group-hover:opacity-100" aria-label="View fullscreen">
                <Maximize2 className="w-5 h-5" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0c0c0c]/80 to-transparent p-6">
                <p className="text-white/50 text-sm">Designed by <span className="text-[#d4af37] font-medium">S&S Architects and Infra</span></p>
              </div>
            </div>
          </div>

          <div className={`reveal ${visible ? 'visible' : ''} stagger-2 grid grid-cols-2 md:grid-cols-5 gap-4`}>
            {planFeatures.map((f) => (
              <div key={f.label} className="p-4 glass rounded-lg text-center card-lift">
                <div className="w-9 h-9 rounded bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-3">
                  <f.icon className="w-4 h-4 text-[#d4af37]" />
                </div>
                <p className="text-white/60 text-xs">{f.label}</p>
              </div>
            ))}
          </div>

          <div className={`reveal ${visible ? 'visible' : ''} stagger-3 mt-12 p-8 glass rounded-lg`}>
            <h3 className="text-lg font-bold text-white mb-6 text-center font-[family-name:var(--font-heading)]">Master Plan Features</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {masterPlanFeatures.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0" />
                  <span className="text-white/50 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {fullscreen && (
        <div className="fixed inset-0 z-50 bg-[#0c0c0c]/98 flex items-center justify-center p-4" onClick={() => setFullscreen(false)}>
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image src="/images/projects/meadow-breeze/masterplan/layout.webp" alt="The Meadow Breeze Master Plan" fill className="object-contain" sizes="100vw" />
            <button onClick={() => setFullscreen(false)} className="absolute top-4 right-4 p-3 glass rounded text-white hover:bg-[#d4af37] hover:text-[#0c0c0c] transition-colors" aria-label="Close">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
