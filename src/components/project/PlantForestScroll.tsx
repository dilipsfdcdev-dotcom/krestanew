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
    <section id="forest" className="py-24 md:py-32 bg-[#faf8f5] relative">
      <div className="container-luxury" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''} text-center mb-12`}>
          <span className="section-label mb-4 block">A Forest for Every Plot</span>
          <h2 className="section-title font-bold text-[#1a1a1a] mb-4 font-[family-name:var(--font-heading)]">Living Inside Nature, Not Beside It</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            At The Meadow Breeze, nature is not an add-on — it is the foundation. Each plot is thoughtfully designed with a curated mini forest of 600-900 plants, transforming private land ownership into a living ecosystem.
          </p>
          <p className="text-[#c9a962] font-medium mt-4 italic">We are not near a forest. We are inside one.</p>
        </div>

        {/* Stats */}
        <div className={`reveal ${visible ? 'visible' : ''} stagger-1 grid grid-cols-2 md:grid-cols-4 gap-4 mb-12`}>
          {[
            { icon: TreePine, value: plantStats.totalSpecies, label: 'Tree Species', dark: true },
            { icon: Leaf, value: '600-900', label: 'Plants Per Plot', dark: false },
            { icon: Wind, value: plantStats.categories, label: 'Categories', dark: true },
            { icon: Heart, value: '100%', label: 'Organic', dark: false },
          ].map((s) => (
            <div key={s.label} className={`p-5 rounded-2xl text-center ${s.dark ? 'bg-[#1a1a1a] text-white' : 'bg-gradient-to-br from-[#c9a962] to-[#8b7355] text-white'}`}>
              <s.icon className="w-7 h-7 mx-auto mb-2 opacity-80" />
              <h3 className="text-2xl font-bold">{s.value}</h3>
              <p className="text-white/70 text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className={`reveal ${visible ? 'visible' : ''} stagger-2 mb-8`}>
          <div className="flex flex-wrap justify-center gap-3">
            {categoryList.map((c) => (
              <button key={c.id} onClick={() => setSelectedCategory(c.id)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${selectedCategory === c.id ? 'bg-[#1a1a1a] text-white shadow-lg' : 'bg-white border border-gray-200 text-gray-600 hover:border-[#c9a962] hover:text-[#c9a962]'}`}>
                {c.name} ({c.count})
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Cards */}
        <div className="relative">
          {filtered.length > 3 && (
            <>
              <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all -ml-6 hidden md:flex" aria-label="Scroll left">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all -mr-6 hidden md:flex" aria-label="Scroll right">
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
            {filtered.map((plant) => (
              <div key={plant.id} className="flex-shrink-0 w-[280px] snap-start">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover h-full border border-gray-100">
                  <div className="relative h-52 overflow-hidden img-zoom">
                    <Image src={`${plant.imagePath}.webp`} alt={plant.name} fill className="object-cover" sizes="280px" loading="lazy" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-white/90 text-[#1a1a1a] text-xs font-medium rounded-full">
                        {plantCategories[plant.category as keyof typeof plantCategories]}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#1a1a1a] text-lg mb-2">{plant.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{plant.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 md:hidden">
            <p className="text-sm text-gray-400">&larr; Swipe to explore &rarr;</p>
          </div>
        </div>

        {/* Forest Benefits */}
        <div className={`reveal ${visible ? 'visible' : ''} stagger-3 mt-16 bg-gradient-to-r from-[#1a1a1a] to-[#333] rounded-2xl p-8 md:p-12 text-white`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-[family-name:var(--font-heading)]">A Self-Sustaining Green Ecosystem</h3>
              <p className="text-white/60 mb-6">Our scientifically planned mix of avenue trees, native forest species, palms, bamboo, medicinal plants, ornamentals, and fruit-bearing trees creates a dense green cover, natural temperature regulation, and a self-sustaining micro-ecosystem.</p>
              <div className="space-y-3">
                {['Multi-level forest structure for year-round greenery', 'Thick tree canopy reduces heat by 3-5°C naturally', 'Higher oxygen levels & pollution-free environment', 'Supports birds, butterflies & local biodiversity'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#c9a962]" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#c9a962] font-medium mt-6 italic text-sm">Every plot becomes a private green sanctuary.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['/images/projects/meadow-breeze/plants/Marri (Banyan)', '/images/projects/meadow-breeze/plants/Rain Tree', '/images/projects/meadow-breeze/plants/Green Bamboo', '/images/projects/meadow-breeze/plants/Gulmohar'].map((src, i) => (
                <div key={src} className={`rounded-2xl overflow-hidden h-32 relative ${i % 2 === 1 ? 'mt-6' : ''}`}>
                  <Image src={`${src}.webp`} alt="Forest" fill className="object-cover" sizes="200px" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className={`reveal ${visible ? 'visible' : ''} stagger-4 mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6`}>
          {[
            { title: 'Climate-Responsive Living', points: ['Natural temperature reduction', 'Improved soil moisture', 'Natural wind & dust barriers'] },
            { title: 'Health & Well-being', points: ['Higher oxygen levels', 'Reduced stress & improved wellness', 'Toxin-free environment'] },
            { title: 'Long-Term Land Value', points: ['Green plots appreciate faster', 'Premium resale value', 'Evergreen visual beauty'] },
            { title: 'Sustainable Development', points: ['Supports local biodiversity', 'Lowers carbon footprint', 'Eco-conscious living'] },
          ].map((b) => (
            <div key={b.title} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-lg">
              <h4 className="font-bold text-[#1a1a1a] mb-4">{b.title}</h4>
              <ul className="space-y-2">
                {b.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-[#c9a962] mt-0.5">&#10003;</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`reveal ${visible ? 'visible' : ''} stagger-5 mt-8 text-center`}>
          <p className="text-gray-400 text-sm">{plants.length} plant varieties available</p>
        </div>
      </div>
    </section>
  );
}
