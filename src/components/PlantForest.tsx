'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { plants, plantCategories, plantStats } from '@/data/plants';
import { TreePine, Leaf, Wind, Heart, Filter, ChevronRight } from 'lucide-react';

export default function PlantForest() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredPlant, setHoveredPlant] = useState<number | null>(null);

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

  return (
    <section id="forest" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full pattern-dots" />
      </div>

      <div className="container-luxury relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle text-[#c9a962] font-medium mb-4 block">
            Your Personal Forest
          </span>
          <h2 className="section-title font-bold text-[#1a1a1a] mb-4">
            600-900 Plants Per Plot
          </h2>
          <div className="flex justify-center mb-6">
            <div className="line-gold" />
          </div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Every plot comes with its own forest setup featuring a diverse collection of trees,
            creating an oxygen-rich environment for you and your family
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="p-6 bg-gradient-to-br from-[#1a4d2e] to-[#2d6a4f] rounded-2xl text-white text-center">
            <TreePine className="w-10 h-10 mx-auto mb-3 text-[#c9a962]" />
            <h3 className="text-3xl font-bold mb-1">{plantStats.totalSpecies}</h3>
            <p className="text-white/70 text-sm">Tree Species</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-[#c9a962] to-[#8b7355] rounded-2xl text-white text-center">
            <Leaf className="w-10 h-10 mx-auto mb-3" />
            <h3 className="text-3xl font-bold mb-1">{plantStats.totalPlants}</h3>
            <p className="text-white/70 text-sm">Total Plants</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-[#1a4d2e] to-[#2d6a4f] rounded-2xl text-white text-center">
            <Wind className="w-10 h-10 mx-auto mb-3 text-[#c9a962]" />
            <h3 className="text-3xl font-bold mb-1">{plantStats.categories}</h3>
            <p className="text-white/70 text-sm">Categories</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-[#c9a962] to-[#8b7355] rounded-2xl text-white text-center">
            <Heart className="w-10 h-10 mx-auto mb-3" />
            <h3 className="text-3xl font-bold mb-1">100%</h3>
            <p className="text-white/70 text-sm">Organic</p>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-[#c9a962]" />
            <span className="text-sm font-medium text-gray-600">Filter by category</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categoryList.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-[#1a4d2e] text-white shadow-lg'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-[#c9a962] hover:text-[#c9a962]'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Plants Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
        >
          {filteredPlants.map((plant, index) => (
            <motion.div
              key={plant.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredPlant(plant.id)}
              onMouseLeave={() => setHoveredPlant(null)}
              className="card-luxury bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            >
              <div className="relative h-48 img-zoom">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover"
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

              <div className="p-5">
                <h3 className="font-bold text-[#1a1a1a] text-lg mb-2">{plant.name}</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#1a4d2e] font-medium">Qty: {plant.quantity}</span>
                </div>

                {/* Benefits - Show on hover */}
                <div className={`transition-all duration-300 overflow-hidden ${
                  hoveredPlant === plant.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500 mb-2">Benefits:</p>
                    <div className="flex flex-wrap gap-1">
                      {plant.benefits.slice(0, 3).map((benefit, i) => (
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
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-[#faf8f5] to-white rounded-3xl p-8 md:p-12 border border-[#c9a962]/20"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4">
                Why Our Forest Setup?
              </h3>
              <p className="text-gray-600 mb-6">
                Each plot is carefully planned with a diverse mix of trees to create
                a self-sustaining ecosystem that provides year-round benefits.
              </p>
              <div className="space-y-4">
                {[
                  'Avenue trees for shade and air purification',
                  'Palm trees for tropical aesthetics',
                  'Fruit trees for organic produce',
                  'Bamboo for privacy screening and carbon capture',
                  'Ornamental plants for landscaping beauty',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-[#c9a962]" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300"
                  alt="Forest"
                  className="rounded-2xl h-40 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=300"
                  alt="Trees"
                  className="rounded-2xl h-40 w-full object-cover mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=300"
                  alt="Nature"
                  className="rounded-2xl h-40 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=300"
                  alt="Green"
                  className="rounded-2xl h-40 w-full object-cover mt-8"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
