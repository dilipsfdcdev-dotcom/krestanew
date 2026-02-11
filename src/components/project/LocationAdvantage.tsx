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
    <section id="location" className="py-24 md:py-32 bg-white relative">
      <div className="container-luxury" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''} text-center mb-16`}>
          <span className="section-label mb-4 block">Strategic Position</span>
          <h2 className="section-title font-bold text-[#1a1a1a] mb-4 font-[family-name:var(--font-heading)]">Location Advantage</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">The Meadow Breeze enjoys a coveted location with excellent connectivity and natural beauty</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className={`reveal-left ${visible ? 'visible' : ''}`}>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 flex items-center gap-3 font-[family-name:var(--font-heading)]">
              <MapPin className="w-6 h-6 text-[#c9a962]" />Distance & Connectivity
            </h3>
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#333] rounded-2xl p-6 md:p-8 mb-6">
              <div className="space-y-3">
                {distances.map((item) => (
                  <div key={item.landmark} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#c9a962]/20 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-[#c9a962]" />
                      </div>
                      <span className="text-white/90">{item.landmark}</span>
                    </div>
                    <span className="text-[#c9a962] font-bold text-lg">{item.distance}</span>
                  </div>
                ))}
              </div>
            </div>
            <a href="https://maps.app.goo.gl/CBX5zyzryJZz9jqe6" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-4 bg-[#c9a962] text-white rounded-xl font-medium hover:bg-[#8b7355] transition-colors">
              <MapPin className="w-5 h-5" />View Project Location on Maps
            </a>
          </div>

          <div className={`reveal-right ${visible ? 'visible' : ''}`}>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 flex items-center gap-3 font-[family-name:var(--font-heading)]">
              <Sparkles className="w-6 h-6 text-[#c9a962]" />Location Highlights
            </h3>
            <div className="space-y-4">
              {locationHighlights.map((h, i) => (
                <div key={h.title} className={`reveal ${visible ? 'visible' : ''} stagger-${i + 1} p-5 bg-gradient-to-br from-[#faf8f5] to-white rounded-2xl border border-gray-100 card-hover`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center flex-shrink-0">
                      <h.icon className="w-6 h-6 text-[#c9a962]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1a1a] mb-1">{h.title}</h4>
                      <p className="text-gray-600 text-sm">{h.description}</p>
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
