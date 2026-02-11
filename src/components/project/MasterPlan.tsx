'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Maximize2, X, Home, Route, TreePine, MapPin, Compass } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const planFeatures = [
  { icon: Home, label: '124 Premium Plots', color: 'bg-emerald-500' },
  { icon: Route, label: '60ft, 40ft & 33ft Roads', color: 'bg-blue-500' },
  { icon: TreePine, label: 'Forest Area & Green Buffer', color: 'bg-green-500' },
  { icon: MapPin, label: 'Premium Villa Section', color: 'bg-purple-500' },
  { icon: Compass, label: 'Walking Trails Throughout', color: 'bg-orange-500' },
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
      <section id="masterplan" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="container-luxury relative z-10" ref={ref}>
          <div className={`reveal ${visible ? 'visible' : ''} text-center mb-12`}>
            <span className="section-label mb-4 block">Layout Design</span>
            <h2 className="section-title font-bold text-white mb-4 font-[family-name:var(--font-heading)]">Master Plan</h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-6" />
            <p className="text-white/50 max-w-2xl mx-auto">Thoughtfully designed layout by S&S Architects and Infra, ensuring optimal space utilization with natural forest surroundings</p>
          </div>

          <div className={`reveal ${visible ? 'visible' : ''} stagger-1 flex flex-wrap justify-center gap-8 mb-12`}>
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#c9a962]">{s.value}</p>
                <p className="text-white/50 text-sm">{s.label}</p>
              </div>
            ))}
          </div>

          <div className={`reveal-scale ${visible ? 'visible' : ''} relative mb-12`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="relative aspect-[16/10] w-full bg-[#1a1a1a]/50">
                <Image src="/images/projects/meadow-breeze/masterplan/layout.webp" alt="The Meadow Breeze Master Plan" fill className="object-contain" sizes="100vw" loading="lazy" />
              </div>
              <button onClick={() => setFullscreen(true)} className="absolute top-4 right-4 p-3 bg-black/50 rounded-full text-white hover:bg-[#c9a962] transition-colors opacity-0 group-hover:opacity-100" aria-label="View fullscreen">
                <Maximize2 className="w-5 h-5" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white/70 text-sm">Designed by <span className="text-[#c9a962] font-medium">S&S Architects and Infra</span></p>
              </div>
            </div>
          </div>

          <div className={`reveal ${visible ? 'visible' : ''} stagger-2 grid grid-cols-2 md:grid-cols-5 gap-4`}>
            {planFeatures.map((f) => (
              <div key={f.label} className="p-4 bg-white/5 rounded-xl border border-white/10 text-center card-hover">
                <div className={`w-10 h-10 ${f.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-white/80 text-sm">{f.label}</p>
              </div>
            ))}
          </div>

          <div className={`reveal ${visible ? 'visible' : ''} stagger-3 mt-12 p-8 bg-white/5 rounded-2xl border border-white/10`}>
            <h3 className="text-xl font-bold text-white mb-6 text-center font-[family-name:var(--font-heading)]">Master Plan Features</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {masterPlanFeatures.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#c9a962] mt-2 flex-shrink-0" />
                  <span className="text-white/80">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {fullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setFullscreen(false)}>
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image src="/images/projects/meadow-breeze/masterplan/layout.webp" alt="The Meadow Breeze Master Plan" fill className="object-contain" sizes="100vw" />
            <button onClick={() => setFullscreen(false)} className="absolute top-4 right-4 p-3 bg-white/10 rounded-full text-white hover:bg-[#c9a962] transition-colors" aria-label="Close">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
