'use client';

import { Leaf, TreePine, Mountain, Shield, TrendingUp } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const visionPillars = [
  { icon: Leaf, title: 'Sustainable Living', description: 'We embrace eco-conscious development that works with the land, not against it. Natural contours, soil integrity, and native ecosystems are preserved to ensure a healthy, balanced environment that thrives over time.', color: 'from-green-500 to-emerald-600' },
  { icon: TreePine, title: 'Eco-Conscious Green Cover', description: 'Each plot is designed to host 600-900 thoughtfully selected plants, fostering an oxygen-rich microclimate, improved biodiversity, and a cooler, healthier living environment — transforming every parcel into a private green sanctuary.', color: 'from-emerald-500 to-teal-600' },
  { icon: Mountain, title: 'Preserving Natural Terrain', description: 'Existing rock formations and boulders are carefully retained and celebrated as natural landmarks, lending character, authenticity, and timeless beauty to the landscape while maintaining ecological balance.', color: 'from-stone-500 to-stone-700' },
  { icon: Shield, title: 'Refined Farmland Community', description: 'The Meadow Breeze is envisioned as a secure, gated farmland community offering world-class amenities that blend comfort with countryside charm — creating a refined lifestyle rooted in openness, privacy, and exclusivity.', color: 'from-[#c9a962] to-[#8b7355]' },
  { icon: TrendingUp, title: 'Long-Term Appreciation', description: 'Strategically located in a rapidly developing corridor, this premium farmland estate is designed not just for today, but for tomorrow — offering sustained growth potential alongside the rare advantage of owning land shaped by nature.', color: 'from-blue-500 to-indigo-600' },
];

export default function VisionPhilosophy() {
  const { ref, visible } = useReveal();

  return (
    <section id="vision" className="py-24 md:py-32 bg-[#faf8f5] relative">
      <div className="container-luxury" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''} text-center mb-16`}>
          <span className="section-label mb-4 block">Our Philosophy</span>
          <h2 className="section-title font-bold text-[#1a1a1a] mb-4 font-[family-name:var(--font-heading)]">Vision & Philosophy</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-6" />
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            At The Meadow Breeze, our vision is to create a living landscape where nature, sustainability, and long-term value exist in perfect harmony. Every element of this estate has been thoughtfully planned to respect the land, enhance well-being, and create a meaningful legacy for generations to come.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visionPillars.map((pillar, i) => (
            <div key={pillar.title} className={`reveal ${visible ? 'visible' : ''} stagger-${i + 1} ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
              <div className="h-full p-8 bg-white rounded-2xl shadow-lg card-hover border border-gray-100">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-5 shadow-lg`}>
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`reveal ${visible ? 'visible' : ''} stagger-6 mt-16 text-center`}>
          <div className="inline-block p-8 bg-gradient-to-r from-[#1a1a1a] to-[#333] rounded-2xl max-w-3xl">
            <p className="text-white/90 text-lg md:text-xl italic font-[family-name:var(--font-heading)]">
              &ldquo;The Meadow Breeze is more than farmland. It is an invitation — to build your private retreat, to nurture the land, to reconnect with what matters, and to invest in a legacy that grows with time and intention.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
