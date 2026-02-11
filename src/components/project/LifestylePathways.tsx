'use client';

import { useState } from 'react';
import { Home, Leaf, Palmtree, TrendingUp, Mountain, Flower2, Cable, Users, Shield, Building, MapPin, Calendar } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const lifestyles = [
  {
    id: 'farmhouse', icon: Home, title: 'Bespoke Farmhouse Living', subtitle: 'Build Your Dream Countryside Retreat',
    description: 'Build your dream countryside retreat amidst the Rachakonda Hills. With plot sizes from 10 to 50 Guntas, design a farmhouse that reflects your vision — modern minimalist, traditional heritage, or eco-luxury.',
    features: [{ icon: Mountain, text: '360° panoramic mountain views' }, { icon: Flower2, text: 'Pre-planted organic garden' }, { icon: Cable, text: 'Wide road access & underground utilities' }, { icon: Users, text: 'Agronomist support available' }],
    gradient: 'from-amber-500 to-orange-600', bg: 'bg-gradient-to-br from-amber-50 to-orange-50',
  },
  {
    id: 'organic', icon: Leaf, title: 'Organic Cultivation', subtitle: 'Transform Your Plot Into a Thriving Farm',
    description: 'Transform your plot into a thriving organic farm. With 600-900 plants already established and drip irrigation infrastructure in place, grow seasonal vegetables, medicinal herbs, fruit orchards, and exotic flowers.',
    features: [{ icon: Users, text: 'Expert agronomist guidance' }, { icon: Leaf, text: 'Drip irrigation system' }, { icon: Flower2, text: 'Organic farming methodology' }, { icon: TrendingUp, text: 'Market linkage assistance' }],
    gradient: 'from-green-500 to-emerald-600', bg: 'bg-gradient-to-br from-green-50 to-emerald-50',
  },
  {
    id: 'weekend', icon: Palmtree, title: 'Weekend Escape', subtitle: 'Your Sanctuary Far From City Chaos',
    description: "Just 30 km from ORR Exit 11, The Meadow Breeze is your sanctuary far from city's chaos. An escape to fresh mountain air, starlit nights, morning bird songs, and peaceful solitude.",
    features: [{ icon: Calendar, text: 'Perfect for family weekends' }, { icon: Building, text: 'Corporate retreats' }, { icon: Flower2, text: 'Wellness getaways' }, { icon: Leaf, text: 'Creative inspiration' }],
    gradient: 'from-sky-500 to-blue-600', bg: 'bg-gradient-to-br from-sky-50 to-blue-50',
  },
  {
    id: 'investment', icon: TrendingUp, title: 'Long-Term Investment', subtitle: 'Premium Appreciating Land Asset',
    description: 'Premium appreciating land asset in a rapidly developing corridor. Invest in a property that offers both lifestyle benefits and strong growth potential.',
    features: [{ icon: Shield, text: 'Clear title property' }, { icon: Shield, text: 'Gated community security' }, { icon: Users, text: 'Managed farmland services' }, { icon: TrendingUp, text: 'High growth potential' }],
    gradient: 'from-purple-500 to-indigo-600', bg: 'bg-gradient-to-br from-purple-50 to-indigo-50',
  },
];

export default function LifestylePathways() {
  const { ref, visible } = useReveal();
  const [active, setActive] = useState('farmhouse');
  const data = lifestyles.find(l => l.id === active) || lifestyles[0];

  return (
    <section id="lifestyle" className="py-24 md:py-32 bg-[#0a0a0a] relative">
      <div className="container-luxury" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''} text-center mb-16`}>
          <span className="section-label mb-4 block">Four Distinct Pathways</span>
          <h2 className="section-title font-bold text-white mb-4 font-[family-name:var(--font-heading)]">A Life of Possibilities</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-6" />
          <p className="text-white/50 max-w-2xl mx-auto">The Meadow Breeze offers four distinct lifestyle pathways — choose the one that resonates with your vision</p>
        </div>

        <div className={`reveal ${visible ? 'visible' : ''} stagger-1 flex flex-wrap justify-center gap-3 mb-12`}>
          {lifestyles.map((l) => (
            <button key={l.id} onClick={() => setActive(l.id)} className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all ${active === l.id ? 'bg-[#c9a962] text-white shadow-lg shadow-[#c9a962]/30' : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'}`}>
              <l.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{l.title}</span>
              <span className="sm:hidden">{l.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        <div className={`${data.bg} rounded-2xl p-8 md:p-12 transition-all`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className={`inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r ${data.gradient} rounded-full text-white mb-6`}>
                <data.icon className="w-5 h-5" />
                <span className="font-medium text-sm">{data.subtitle}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4 font-[family-name:var(--font-heading)]">{data.title}</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">{data.description}</p>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white rounded-full font-medium hover:bg-[#333] transition-colors">
                Explore This Lifestyle <MapPin className="w-5 h-5" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.features.map((f, i) => (
                <div key={i} className="p-5 bg-white rounded-2xl shadow-lg">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${data.gradient} flex items-center justify-center mb-3`}>
                    <f.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-[#1a1a1a] font-medium text-sm">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
