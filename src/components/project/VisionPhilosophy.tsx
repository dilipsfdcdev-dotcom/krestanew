'use client';

import { Leaf, TreePine, Mountain, Shield, TrendingUp } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const visionPillars = [
  { icon: Leaf, title: 'Sustainable Living', description: 'We embrace eco-conscious development that works with the land, not against it. Natural contours, soil integrity, and native ecosystems are preserved to ensure a healthy, balanced environment that thrives over time.' },
  { icon: TreePine, title: 'Eco-Conscious Green Cover', description: 'Each plot is designed to host 600-900 thoughtfully selected plants, fostering an oxygen-rich microclimate, improved biodiversity, and a cooler, healthier living environment — transforming every parcel into a private green sanctuary.' },
  { icon: Mountain, title: 'Preserving Natural Terrain', description: 'Existing rock formations and boulders are carefully retained and celebrated as natural landmarks, lending character, authenticity, and timeless beauty to the landscape while maintaining ecological balance.' },
  { icon: Shield, title: 'Refined Farmland Community', description: 'The Meadow Breeze is envisioned as a secure, gated farmland community offering world-class amenities that blend comfort with countryside charm — creating a refined lifestyle rooted in openness, privacy, and exclusivity.' },
  { icon: TrendingUp, title: 'Long-Term Appreciation', description: 'Strategically located in a rapidly developing corridor, this premium farmland estate is designed not just for today, but for tomorrow — offering sustained growth potential alongside the rare advantage of owning land shaped by nature.' },
];

export default function VisionPhilosophy() {
  const { ref, visible } = useReveal();

  return (
    <section id="vision" className="py-28 md:py-40 bg-[#161616] relative">
      <div className="container-luxury" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''} mb-16`}>
          <span className="label-gold mb-6 block">Our Philosophy</span>
          <h2 className="heading-section text-white mb-6 font-[family-name:var(--font-heading)]">
            Vision &{' '}
            <span className="text-gold-gradient italic">Philosophy</span>
          </h2>
          <div className="divider-gold mb-8" />
          <p className="text-white/40 max-w-3xl text-lg">
            At The Meadow Breeze, our vision is to create a living landscape where nature, sustainability, and long-term value exist in perfect harmony. Every element of this estate has been thoughtfully planned to respect the land, enhance well-being, and create a meaningful legacy for generations to come.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visionPillars.map((pillar, i) => (
            <div key={pillar.title} className={`reveal ${visible ? 'visible' : ''} stagger-${i + 1} ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
              <div className="h-full p-7 glass rounded-lg card-lift group">
                <div className="w-12 h-12 rounded bg-[#d4af37]/10 flex items-center justify-center mb-5 group-hover:bg-[#d4af37]/20 transition-colors">
                  <pillar.icon className="w-6 h-6 text-[#d4af37]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`reveal ${visible ? 'visible' : ''} stagger-6 mt-16 text-center`}>
          <div className="inline-block p-8 md:p-10 glass rounded-lg max-w-3xl">
            <p className="text-white/60 text-lg md:text-xl italic font-[family-name:var(--font-heading)] leading-relaxed">
              &ldquo;The Meadow Breeze is more than farmland. It is an invitation — to build your private retreat, to nurture the land, to reconnect with what matters, and to invest in a legacy that grows with time and intention.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
