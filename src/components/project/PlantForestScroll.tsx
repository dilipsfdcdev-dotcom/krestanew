'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { plants, plantCategories, plantStats } from '@/data/plants';
import { TreePine, Leaf, Wind, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function PlantForestScroll() {
  const { ref, visible } = useReveal();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filtered = selectedCategory === 'all' ? plants : plants.filter(p => p.category === selectedCategory);

  const categoryList = [
    { id: 'all', name: 'All Plants', count: plants.length },
    ...Object.entries(plantCategories).map(([id, name]) => ({
      id, name, count: plants.filter(p => p.category === id).length,
    })),
  ];

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -400 : 400, behavior: 'smooth' });
  };

  return (
    <section id="forest" className="py-28 md:py-40 bg-[#161616] relative">
      <div className="container-luxury" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''} mb-12`}>
          <span className="label-gold mb-6 block">A Forest for Every Plot</span>
          <h2 className="heading-section text-white mb-6 font-[family-name:var(--font-heading)]">
            Living Inside{' '}
            <span className="text-gold-gradient italic">Nature</span>
          </h2>
          <div className="divider-gold mb-8" />
          <p className="text-white/40 max-w-2xl text-lg">
            At The Meadow Breeze, nature is not an add-on — it is the foundation. Each plot is thoughtfully designed with a curated mini forest of 600-900 plants, transforming private land ownership into a living ecosystem.
          </p>
          <p className="text-[#d4af37] font-medium mt-4 italic text-sm">We are not near a forest. We are inside one.</p>
        </div>

        <div className={`reveal ${visible ? 'visible' : ''} stagger-1 grid grid-cols-2 md:grid-cols-4 gap-4 mb-12`}>
          {[
            { icon: TreePine, value: plantStats.totalSpecies, label: 'Tree Species' },
            { icon: Leaf, value: '600-900', label: 'Plants Per Plot' },
            { icon: Wind, value: plantStats.categories, label: 'Categories' },
            { icon: Heart, value: '100%', label: 'Organic' },
          ].map((s, i) => (
            <div key={s.label} className={`p-5 rounded-lg text-center ${i % 2 === 0 ? 'glass' : 'bg-[#d4af37]/10 border border-[#d4af37]/20'}`}>
              <s.icon className="w-6 h-6 mx-auto mb-2 text-[#d4af37]" />
              <h3 className="text-2xl font-bold text-white">{s.value}</h3>
              <p className="text-white/40 text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        <div className={`reveal ${visible ? 'visible' : ''} stagger-2 mb-8`}>
          <div className="flex flex-wrap justify-center gap-3">
            {categoryList.map((c) => (
              <button key={c.id} onClick={() => setSelectedCategory(c.id)} className={`px-5 py-2.5 rounded text-sm font-medium transition-all ${selectedCategory === c.id ? 'bg-[#d4af37] text-[#0c0c0c]' : 'glass text-white/50 hover:text-white hover:border-[#d4af37]/30'}`}>
                {c.name} ({c.count})
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          {filtered.length > 3 && (
            <>
              <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 glass rounded flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-[#0c0c0c] transition-all -ml-5 hidden md:flex" aria-label="Scroll left">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 glass rounded flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-[#0c0c0c] transition-all -mr-5 hidden md:flex" aria-label="Scroll right">
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
            {filtered.map((plant) => (
              <div key={plant.id} className="flex-shrink-0 w-[260px] snap-start">
                <div className="glass rounded-lg overflow-hidden card-lift h-full">
                  <div className="relative h-48 overflow-hidden img-zoom">
                    <Image src={`${plant.imagePath}.webp`} alt={plant.name} fill className="object-cover" sizes="260px" loading="lazy" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-[#0c0c0c]/80 text-white text-[10px] font-medium rounded tracking-wide">
                        {plantCategories[plant.category as keyof typeof plantCategories]}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white text-sm mb-1.5">{plant.name}</h3>
                    <p className="text-white/30 text-xs leading-relaxed">{plant.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 md:hidden">
            <p className="text-sm text-white/20">&larr; Swipe to explore &rarr;</p>
          </div>
        </div>

        <div className={`reveal ${visible ? 'visible' : ''} stagger-3 mt-16 glass rounded-lg p-8 md:p-12`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">A Self-Sustaining Green Ecosystem</h3>
              <p className="text-white/40 mb-6 text-sm">Our scientifically planned mix of avenue trees, native forest species, palms, bamboo, medicinal plants, ornamentals, and fruit-bearing trees creates a dense green cover, natural temperature regulation, and a self-sustaining micro-ecosystem.</p>
              <div className="space-y-3">
                {['Multi-level forest structure for year-round greenery', 'Thick tree canopy reduces heat by 3-5°C naturally', 'Higher oxygen levels & pollution-free environment', 'Supports birds, butterflies & local biodiversity'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    <span className="text-white/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#d4af37] font-medium mt-6 italic text-sm">Every plot becomes a private green sanctuary.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['/images/projects/meadow-breeze/plants/Marri (Banyan)', '/images/projects/meadow-breeze/plants/Rain Tree', '/images/projects/meadow-breeze/plants/Green Bamboo', '/images/projects/meadow-breeze/plants/Gulmohar'].map((src, i) => (
                <div key={src} className={`rounded-lg overflow-hidden h-28 relative ${i % 2 === 1 ? 'mt-4' : ''}`}>
                  <Image src={`${src}.webp`} alt="Forest" fill className="object-cover" sizes="200px" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`reveal ${visible ? 'visible' : ''} stagger-4 mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5`}>
          {[
            { title: 'Climate-Responsive Living', points: ['Natural temperature reduction', 'Improved soil moisture', 'Natural wind & dust barriers'] },
            { title: 'Health & Well-being', points: ['Higher oxygen levels', 'Reduced stress & improved wellness', 'Toxin-free environment'] },
            { title: 'Long-Term Land Value', points: ['Green plots appreciate faster', 'Premium resale value', 'Evergreen visual beauty'] },
            { title: 'Sustainable Development', points: ['Supports local biodiversity', 'Lowers carbon footprint', 'Eco-conscious living'] },
          ].map((b) => (
            <div key={b.title} className="p-5 glass rounded-lg">
              <h4 className="font-semibold text-white mb-3 text-sm">{b.title}</h4>
              <ul className="space-y-2">
                {b.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-xs text-white/40">
                    <span className="text-[#d4af37] mt-0.5">&#10003;</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`reveal ${visible ? 'visible' : ''} stagger-5 mt-8 text-center`}>
          <p className="text-white/20 text-sm">{plants.length} plant varieties available</p>
        </div>
      </div>
    </section>
  );
}
