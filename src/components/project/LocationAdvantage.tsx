'use client';

import { MapPin, Navigation, Plane, Film, Castle, Route, Mountain, Wind, Sparkles, TrendingUp, Landmark } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const distances = [
  { landmark: 'ORR Exit 11', distance: '30 km', icon: Route },
  { landmark: 'Vijayawada Highway', distance: '7 km', icon: Navigation },
  { landmark: 'Ramoji Film City', distance: '25 km', icon: Film },
  { landmark: 'RGIA Airport', distance: '60 km', icon: Plane },
  { landmark: 'Proposed RRR', distance: '8 km', icon: Route },
  { landmark: 'Rachakonda Fort', distance: '10 km', icon: Castle },
];

const locationHighlights = [
  { icon: Mountain, title: 'Rachakonda Hills Setting', description: 'Nestled amidst iconic hills, offering elevation, openness, and timeless charm.' },
  { icon: Sparkles, title: '360° Panoramic Mountain Views', description: 'Sweeping, uninterrupted views of rolling hills and open horizons.' },
  { icon: Wind, title: 'Pure, Pollution-Free Environment', description: 'Clean air and tranquil surroundings ideal for mindful living.' },
  { icon: TrendingUp, title: 'Rapid Infrastructure Growth', description: 'Located in fast-emerging growth corridor with strong appreciation potential.' },
  { icon: Landmark, title: 'Tourism & Cultural Significance', description: 'Proximity to historic Rachakonda Fort adds prestige and future potential.' },
];

export default function LocationAdvantage() {
  const { ref, visible } = useReveal();

  return (
    <section id="location" className="py-28 md:py-40 bg-[#080808] relative section-glow">
      <div className="container-luxury" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''} mb-16`}>
          <span className="label-gold mb-6 block font-[family-name:var(--font-body)]">Strategic Position</span>
          <h2 className="heading-section text-white mb-6 font-[family-name:var(--font-heading)]">
            Location{' '}
            <span className="text-gold-gradient italic">Advantage</span>
          </h2>
          <div className="divider-gold mb-8" />
          <p className="text-white/40 max-w-2xl">The Meadow Breeze enjoys a coveted location with excellent connectivity and natural beauty</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className={`reveal-left ${visible ? 'visible' : ''}`}>
            <h3 className="heading-sub text-white mb-8 flex items-center gap-3 font-[family-name:var(--font-heading)]">
              <MapPin className="w-5 h-5 text-[#c9a84c]" />Distance & Connectivity
            </h3>
            <div className="glass rounded-2xl p-6 md:p-8 mb-6 glow-hover">
              <div className="space-y-3">
                {distances.map((item) => (
                  <div key={item.landmark} className="flex items-center justify-between p-4 bg-white/[0.02] rounded-2xl hover:bg-white/[0.05] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl icon-premium flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-[#c9a84c]" />
                      </div>
                      <span className="text-white/70 text-sm">{item.landmark}</span>
                    </div>
                    <span className="text-[#c9a84c] font-semibold">{item.distance}</span>
                  </div>
                ))}
              </div>
            </div>
            <a href="https://maps.app.goo.gl/CBX5zyzryJZz9jqe6" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-4 bg-[#c9a84c] text-[#080808] rounded-xl font-semibold text-sm hover:bg-[#e8d48b] transition-colors btn-premium shimmer">
              <MapPin className="w-4 h-4" />View on Google Maps
            </a>
          </div>

          <div className={`reveal-right ${visible ? 'visible' : ''}`}>
            <h3 className="heading-sub text-white mb-8 flex items-center gap-3 font-[family-name:var(--font-heading)]">
              <Sparkles className="w-5 h-5 text-[#c9a84c]" />Location Highlights
            </h3>
            <div className="space-y-4">
              {locationHighlights.map((h, i) => (
                <div key={h.title} className={`reveal ${visible ? 'visible' : ''} stagger-${i + 1} p-5 glass rounded-2xl card-lift group glow-hover`}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl icon-premium flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a84c]/20 transition-colors">
                      <h.icon className="w-5 h-5 text-[#c9a84c]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm">{h.title}</h4>
                      <p className="text-white/40 text-sm">{h.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
