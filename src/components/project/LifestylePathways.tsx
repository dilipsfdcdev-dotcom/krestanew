'use client';

import { useState } from 'react';
import { Home, Leaf, Palmtree, TrendingUp, Mountain, Flower2, Cable, Users, Shield, Building, MapPin, Calendar } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const lifestyles = [
  {
    id: 'farmhouse', icon: Home, title: 'Bespoke Farmhouse Living', subtitle: 'Build Your Dream Countryside Retreat',
    description: 'Build your dream countryside retreat amidst the Rachakonda Hills. With plot sizes from 10 to 50 Guntas, design a farmhouse that reflects your vision — modern minimalist, traditional heritage, or eco-luxury.',
    features: [{ icon: Mountain, text: '360° panoramic mountain views' }, { icon: Flower2, text: 'Pre-planted organic garden' }, { icon: Cable, text: 'Wide road access & underground utilities' }, { icon: Users, text: 'Agronomist support available' }],
  },
  {
    id: 'organic', icon: Leaf, title: 'Organic Cultivation', subtitle: 'Transform Your Plot Into a Thriving Farm',
    description: 'Transform your plot into a thriving organic farm. With 600-900 plants already established and drip irrigation infrastructure in place, grow seasonal vegetables, medicinal herbs, fruit orchards, and exotic flowers.',
    features: [{ icon: Users, text: 'Expert agronomist guidance' }, { icon: Leaf, text: 'Drip irrigation system' }, { icon: Flower2, text: 'Organic farming methodology' }, { icon: TrendingUp, text: 'Market linkage assistance' }],
  },
  {
    id: 'weekend', icon: Palmtree, title: 'Weekend Escape', subtitle: 'Your Sanctuary Far From City Chaos',
    description: "Just 30 km from ORR Exit 11, The Meadow Breeze is your sanctuary far from city's chaos. An escape to fresh mountain air, starlit nights, morning bird songs, and peaceful solitude.",
    features: [{ icon: Calendar, text: 'Perfect for family weekends' }, { icon: Building, text: 'Corporate retreats' }, { icon: Flower2, text: 'Wellness getaways' }, { icon: Leaf, text: 'Creative inspiration' }],
  },
  {
    id: 'investment', icon: TrendingUp, title: 'Long-Term Investment', subtitle: 'Premium Appreciating Land Asset',
    description: 'Premium appreciating land asset in a rapidly developing corridor. Invest in a property that offers both lifestyle benefits and strong growth potential.',
    features: [{ icon: Shield, text: 'Clear title property' }, { icon: Shield, text: 'Gated community security' }, { icon: Users, text: 'Managed farmland services' }, { icon: TrendingUp, text: 'High growth potential' }],
  },
];

export default function LifestylePathways() {
  const { ref, visible } = useReveal();
  const [active, setActive] = useState('farmhouse');
  const data = lifestyles.find(l => l.id === active) || lifestyles[0];

  return (
    <section id="lifestyle" className="py-28 md:py-40 bg-[#0c0c0c] relative">
      <div className="container-luxury" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''} mb-16`}>
          <span className="label-gold mb-6 block">Four Distinct Pathways</span>
          <h2 className="heading-section text-white mb-6 font-[family-name:var(--font-heading)]">
            A Life of{' '}
            <span className="text-gold-gradient italic">Possibilities</span>
          </h2>
          <div className="divider-gold mb-8" />
          <p className="text-white/40 max-w-2xl">The Meadow Breeze offers four distinct lifestyle pathways — choose the one that resonates with your vision</p>
        </div>

        <div className={`reveal ${visible ? 'visible' : ''} stagger-1 flex flex-wrap justify-center gap-3 mb-12`}>
          {lifestyles.map((l) => (
            <button key={l.id} onClick={() => setActive(l.id)} className={`flex items-center gap-2 px-5 py-3 rounded font-medium text-sm transition-all ${active === l.id ? 'bg-[#d4af37] text-[#0c0c0c]' : 'glass text-white/50 hover:text-white'}`}>
              <l.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{l.title}</span>
              <span className="sm:hidden">{l.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        <div className="glass rounded-lg p-8 md:p-12 transition-all">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded text-[#d4af37] mb-6">
                <data.icon className="w-4 h-4" />
                <span className="font-medium text-xs tracking-wide">{data.subtitle}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">{data.title}</h3>
              <p className="text-white/40 text-sm mb-8 leading-relaxed">{data.description}</p>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#d4af37] text-[#0c0c0c] rounded font-semibold text-sm hover:bg-[#f0d77b] transition-colors">
                Explore This Lifestyle <MapPin className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.features.map((f, i) => (
                <div key={i} className="p-4 bg-white/[0.03] rounded-lg border border-white/5">
                  <div className="w-9 h-9 rounded bg-[#d4af37]/10 flex items-center justify-center mb-3">
                    <f.icon className="w-4 h-4 text-[#d4af37]" />
                  </div>
                  <p className="text-white/70 font-medium text-xs">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
