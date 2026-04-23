'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import AdaptiveImage from '../AdaptiveImage';
import { plants, plantCategories, plantStats } from '@/data/plants';
import { TreePine, Leaf, Wind, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const benefits = [
  {
    title: 'Climate-responsive living',
    points: ['Natural temperature reduction', 'Improved soil moisture', 'Wind & dust barriers'],
  },
  {
    title: 'Health & well-being',
    points: ['Higher oxygen levels', 'Reduced stress', 'Toxin-free environment'],
  },
  {
    title: 'Long-term land value',
    points: ['Green plots appreciate faster', 'Premium resale value', 'Evergreen visual beauty'],
  },
  {
    title: 'Sustainable development',
    points: ['Supports biodiversity', 'Lowers carbon footprint', 'Eco-conscious living'],
  },
];

export default function PlantForestScroll() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });
  const [category, setCategory] = useState<string>('all');

  const filtered = category === 'all' ? plants : plants.filter((p) => p.category === category);

  const categoryList = [
    { id: 'all', name: 'All', count: plants.length },
    ...Object.entries(plantCategories).map(([id, name]) => ({
      id,
      name,
      count: plants.filter((p) => p.category === id).length,
    })),
  ];

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -420 : 420, behavior: 'smooth' });
  };

  return (
    <section
      id="forest"
      ref={ref}
      className="relative py-32 md:py-44 bg-[#050505]"
    >
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-16"
        >
          <p className="text-eyebrow mb-6">Forest · 600–900 Plants / Plot</p>
          <h2 className="text-section text-white">
            We are not near a forest.
            <br />
            <span className="italic text-gradient-gold">We are inside one.</span>
          </h2>
          <div className="rule-gold mt-10" />
          <p className="mt-10 text-white/60 text-[15px] md:text-base leading-relaxed max-w-2xl">
            Every plot is composed with a curated mini-forest of 600–900
            plants. Nature isn't an amenity here — it is the foundation.
            Shade, fruit, fragrance and biodiversity arrive with the land.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 rounded-3xl border border-white/10 overflow-hidden mb-14"
        >
          {[
            { icon: TreePine, value: plantStats.totalSpecies, label: 'Tree Species' },
            { icon: Leaf, value: '600–900', label: 'Plants / Plot' },
            { icon: Wind, value: plantStats.categories, label: 'Categories' },
            { icon: Heart, value: '100%', label: 'Organic' },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`p-6 md:p-8 bg-[#0a0a0a] ${
                i < 3 ? 'md:border-r border-white/10' : ''
              } ${i % 2 === 0 ? 'border-r border-white/10 md:border-r' : ''} ${
                i < 2 ? 'border-b md:border-b-0 border-white/10' : ''
              }`}
            >
              <s.icon className="w-5 h-5 text-[#c9a962] mb-3" />
              <div className="text-2xl md:text-3xl font-serif text-white">{s.value}</div>
              <div className="text-[10px] tracking-[0.35em] uppercase text-white/45 mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Category chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categoryList.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`px-4 py-2 rounded-full text-[12px] tracking-[0.15em] uppercase transition-all border ${
                category === c.id
                  ? 'bg-[#c9a962] text-black border-[#c9a962]'
                  : 'border-white/15 text-white/60 hover:border-[#c9a962]/60 hover:text-white'
              }`}
            >
              {c.name} <span className="opacity-60">({c.count})</span>
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          {filtered.length > 3 && (
            <>
              <button
                onClick={() => scroll('left')}
                className="hidden md:flex absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full surface-glass items-center justify-center text-white hover:text-[#c9a962] transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="hidden md:flex absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full surface-glass items-center justify-center text-white hover:text-[#c9a962] transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filtered.map((plant) => (
              <div
                key={plant.id}
                className="shrink-0 w-[280px] md:w-[320px] snap-start"
              >
                <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-[#c9a962]/30 transition-colors h-full group">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <AdaptiveImage
                      basePath={plant.imagePath}
                      alt={plant.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      fallbackText={plant.name}
                      sizes="320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-white/80 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      {plantCategories[plant.category as keyof typeof plantCategories]}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-serif text-white mb-1.5">{plant.name}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-white/60 text-[13px] leading-relaxed line-clamp-3">
                      {plant.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 md:hidden text-center text-white/40 text-[11px] tracking-[0.25em] uppercase">
            Swipe to explore
          </div>
        </div>

        {/* Ecosystem callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-20 relative rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a]"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-14">
              <p className="text-eyebrow mb-5">Micro-Ecosystem</p>
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
                A self-sustaining
                <span className="italic text-gradient-gold"> green estate.</span>
              </h3>
              <p className="text-white/65 leading-relaxed mb-6">
                Our planned mix of avenue trees, native forest species, palms,
                bamboo, medicinal plants, ornamentals and fruit-bearing trees
                creates a dense canopy, natural temperature regulation and a
                self-sustaining micro-ecosystem.
              </p>
              <ul className="space-y-3">
                {[
                  'Multi-level structure for year-round greenery',
                  'Thick canopy cools the estate by 3–5 °C',
                  'Higher oxygen · pollution-free air',
                  'Habitat for birds, butterflies and wildlife',
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-white/80 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a962]" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-1 md:gap-1.5 p-1 md:p-1.5 bg-black">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <AdaptiveImage
                  basePath="/images/projects/meadow-breeze/plants/Marri (Banyan)"
                  alt="Banyan"
                  fill
                  className="object-cover"
                  fallbackText="Banyan"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <AdaptiveImage
                  basePath="/images/projects/meadow-breeze/plants/Rain Tree"
                  alt="Rain Tree"
                  fill
                  className="object-cover"
                  fallbackText="Rain Tree"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <AdaptiveImage
                  basePath="/images/projects/meadow-breeze/plants/Green Bamboo"
                  alt="Bamboo"
                  fill
                  className="object-cover"
                  fallbackText="Bamboo"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <AdaptiveImage
                  basePath="/images/projects/meadow-breeze/plants/Gulmohar"
                  alt="Gulmohar"
                  fill
                  className="object-cover"
                  fallbackText="Gulmohar"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {benefits.map((b) => (
            <div key={b.title} className="surface-card surface-card-hover p-7">
              <h4 className="text-lg font-serif text-white mb-4">{b.title}</h4>
              <ul className="space-y-2">
                {b.points.map((p) => (
                  <li
                    key={p}
                    className="text-white/60 text-[13px] flex items-start gap-2"
                  >
                    <span className="text-[#c9a962] mt-0.5">·</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-white/40 text-xs tracking-[0.25em] uppercase">
          {plants.length} plant varieties available
        </p>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
