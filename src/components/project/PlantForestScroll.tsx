'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
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
            Your Personal Forest
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            600-900 Plants Per Plot
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-6"
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every plot comes with its own forest setup featuring diverse trees,
            creating an oxygen-rich environment for you and your family
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
            { icon: TreePine, value: plantStats.totalSpecies, label: 'Tree Species', color: 'from-[#1a4d2e] to-[#2d6a4f]' },
            { icon: Leaf, value: plantStats.totalPlants, label: 'Total Plants', color: 'from-[#c9a962] to-[#8b7355]' },
            { icon: Wind, value: plantStats.categories, label: 'Categories', color: 'from-[#1a4d2e] to-[#2d6a4f]' },
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
                    ? 'bg-[#1a4d2e] text-white shadow-lg scale-105'
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
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-[#1a4d2e] hover:bg-[#1a4d2e] hover:text-white transition-all -ml-6 hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-[#1a4d2e] hover:bg-[#1a4d2e] hover:text-white transition-all -mr-6 hidden md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

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
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={plant.image}
                      alt={plant.name}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#1a4d2e] text-xs font-medium rounded-full">
                        {plantCategories[plant.category as keyof typeof plantCategories]}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-[#c9a962] text-white text-xs font-medium rounded-full">
                        {plant.height}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-[#1a1a1a] text-lg mb-2">{plant.name}</h3>
                    <p className="text-[#1a4d2e] font-medium text-sm mb-4">Quantity: {plant.quantity}</p>

                    {/* Benefits - Always Visible */}
                    <div className="pt-3 border-t border-gray-100">
                      <p className="text-xs text-gray-500 mb-2 font-medium">Benefits:</p>
                      <div className="flex flex-wrap gap-1">
                        {plant.benefits.map((benefit, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-[#1a4d2e]/10 text-[#1a4d2e] text-xs rounded-full"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
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
          className="mt-16 bg-gradient-to-r from-[#1a4d2e] to-[#2d6a4f] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a962]/10 rounded-full filter blur-[80px]" />
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Our Forest Setup?</h3>
              <p className="text-white/70 mb-6">
                Each plot is carefully planned with a diverse mix of trees to create
                a self-sustaining ecosystem that provides year-round benefits.
              </p>
              <div className="space-y-3">
                {[
                  'Avenue trees for shade and air purification',
                  'Palm trees for tropical aesthetics',
                  'Fruit trees for organic produce',
                  'Bamboo for privacy and carbon capture',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#c9a962]" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden h-32">
                <Image
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300"
                  alt="Forest"
                  width={200}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-32 mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=300"
                  alt="Trees"
                  width={200}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-32">
                <Image
                  src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=300"
                  alt="Nature"
                  width={200}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-32 mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=300"
                  alt="Green"
                  width={200}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
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
