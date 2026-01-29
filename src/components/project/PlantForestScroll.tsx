'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import AdaptiveImage from '../AdaptiveImage';
import { plants, plantCategories, plantStats } from '@/data/plants';
import { TreePine, Leaf, Wind, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PlantForestScroll() {
  const ref = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPlants = selectedCategory === 'all'
    ? plants
    : plants.filter(plant => plant.category === selectedCategory);

  const categoryList = [
    { id: 'all', name: 'All Plants', count: plants.length },
    ...Object.entries(plantCategories).map(([id, name]) => ({
      id,
      name,
      count: plants.filter(p => p.category === id).length,
    })),
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="forest" className="py-24 md:py-32 bg-[#faf8f5] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pattern-dots" />

      <div className="container-luxury relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-[#c9a962] text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            A Forest for Every Plot
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Living Inside Nature, Not Beside It
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-6"
          />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            At The Meadow Breeze, nature is not an add-on — it is the foundation. Each plot is thoughtfully designed with a curated mini forest of 600-900 plants, transforming private land ownership into a living ecosystem.
          </p>
          <p className="text-[#c9a962] font-medium mt-4 italic">
            We are not near a forest. We are inside one.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { icon: TreePine, value: plantStats.totalSpecies, label: 'Tree Species', color: 'from-[#1a1a1a] to-[#333]' },
            { icon: Leaf, value: '600-900', label: 'Plants Per Plot', color: 'from-[#c9a962] to-[#8b7355]' },
            { icon: Wind, value: plantStats.categories, label: 'Categories', color: 'from-[#1a1a1a] to-[#333]' },
            { icon: Heart, value: '100%', label: 'Organic', color: 'from-[#c9a962] to-[#8b7355]' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className={`p-5 bg-gradient-to-br ${stat.color} rounded-2xl text-white text-center`}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-2 opacity-80" />
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-white/70 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categoryList.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-[#1a1a1a] text-white shadow-lg scale-105'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-[#c9a962] hover:text-[#c9a962]'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative"
        >
          {/* Navigation Arrows */}
          {filteredPlants.length > 3 && (
            <>
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all -ml-6 hidden md:flex"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all -mr-6 hidden md:flex"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Scrollable Plant Cards */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredPlants.map((plant, index) => (
              <motion.div
                key={plant.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex-shrink-0 w-[300px] snap-start"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full border border-gray-100 hover:border-[#c9a962]/30">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <AdaptiveImage
                      basePath={plant.imagePath}
                      alt={plant.name}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                      fallbackText={plant.name}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#1a1a1a] text-xs font-medium rounded-full">
                        {plantCategories[plant.category as keyof typeof plantCategories]}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-[#1a1a1a] text-lg mb-2">{plant.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{plant.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Hint for Mobile */}
          <div className="flex justify-center mt-4 md:hidden">
            <p className="text-sm text-gray-500">← Swipe to explore →</p>
          </div>
        </motion.div>

        {/* Forest Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 bg-gradient-to-r from-[#1a1a1a] to-[#333] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a962]/10 rounded-full filter blur-[80px]" />
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">A Self-Sustaining Green Ecosystem</h3>
              <p className="text-white/70 mb-6">
                Our scientifically planned mix of avenue trees, native forest species, palms, bamboo, medicinal plants, ornamentals, and fruit-bearing trees creates a dense green cover, natural temperature regulation, and a self-sustaining micro-ecosystem.
              </p>
              <div className="space-y-3">
                {[
                  'Multi-level forest structure for year-round greenery',
                  'Thick tree canopy reduces heat by 3-5°C naturally',
                  'Higher oxygen levels & pollution-free environment',
                  'Supports birds, butterflies & local biodiversity',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#c9a962]" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#c9a962] font-medium mt-6 italic text-sm">
                Every plot becomes a private green sanctuary.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden h-32 relative">
                <AdaptiveImage
                  basePath="/images/projects/meadow-breeze/plants/Marri (Banyan)"
                  alt="Forest"
                  fill
                  className="object-cover"
                  fallbackText="Forest"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-32 mt-6 relative">
                <AdaptiveImage
                  basePath="/images/projects/meadow-breeze/plants/Rain Tree"
                  alt="Trees"
                  fill
                  className="object-cover"
                  fallbackText="Trees"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-32 relative">
                <AdaptiveImage
                  basePath="/images/projects/meadow-breeze/plants/Green Bamboo"
                  alt="Nature"
                  fill
                  className="object-cover"
                  fallbackText="Nature"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-32 mt-6 relative">
                <AdaptiveImage
                  basePath="/images/projects/meadow-breeze/plants/Gulmohar"
                  alt="Green"
                  fill
                  className="object-cover"
                  fallbackText="Green"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why a Forest-Based Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              title: 'Climate-Responsive Living',
              points: ['Natural temperature reduction', 'Improved soil moisture', 'Natural wind & dust barriers'],
            },
            {
              title: 'Health & Well-being',
              points: ['Higher oxygen levels', 'Reduced stress & improved wellness', 'Toxin-free environment'],
            },
            {
              title: 'Long-Term Land Value',
              points: ['Green plots appreciate faster', 'Premium resale value', 'Evergreen visual beauty'],
            },
            {
              title: 'Sustainable Development',
              points: ['Supports local biodiversity', 'Lowers carbon footprint', 'Eco-conscious living'],
            },
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              className="p-6 bg-white rounded-2xl border border-gray-100 shadow-lg"
            >
              <h4 className="font-bold text-[#1a1a1a] mb-4">{benefit.title}</h4>
              <ul className="space-y-2">
                {benefit.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-[#c9a962] mt-1">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Plant Count Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            {plants.length} plant varieties available
          </p>
        </motion.div>
      </div>

      {/* Custom Scrollbar Hide */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
