'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { plants, plantCategories, categoryPurposes } from '@/data/plants';
import Image from 'next/image';

const IMAGE_EXTENSIONS = ['webp', 'jpg', 'jpeg', 'png'];

function PlantImage({ plant }: { plant: typeof plants[0] }) {
  const [extIdx, setExtIdx] = useState(0);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#1a4d2e]/30 to-[#0a0a0f] flex items-center justify-center">
        <span className="text-[#c9a962]/30 text-xs">No image</span>
      </div>
    );
  }

  return (
    <Image
      src={`${plant.imagePath}.${IMAGE_EXTENSIONS[extIdx]}`}
      alt={plant.name}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 50vw, 200px"
      onError={() => {
        if (extIdx < IMAGE_EXTENSIONS.length - 1) {
          setExtIdx(extIdx + 1);
        } else {
          setHasError(true);
        }
      }}
    />
  );
}

export default function PlantForest3D() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState<string>('avenue');

  const filteredPlants = plants.filter((p) => p.category === activeCategory);
  const categoryKeys = Object.keys(plantCategories) as (keyof typeof plantCategories)[];

  return (
    <section id="forest" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d1a12] to-[#0a0a0f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(26,77,46,0.08)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-[#2d6a4f]/80 text-xs tracking-[0.3em] uppercase mb-4">Planted Forest</p>
          <h2 className="section-title font-bold text-gradient-gold font-[family-name:var(--font-heading)]">
            Plant Forest
          </h2>
          <p className="mt-4 text-white/40 max-w-2xl mx-auto text-sm">
            27 curated plant species across 5 categories, each chosen for ecological and aesthetic value
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-[#c9a962] text-black'
                  : 'glass text-white/40 hover:text-white/70'
              }`}
            >
              {plantCategories[key]}
            </button>
          ))}
        </motion.div>

        {/* Category Purpose */}
        {activeCategory && categoryPurposes[activeCategory as keyof typeof categoryPurposes] && (
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10"
          >
            <p className="text-[#c9a962]/60 text-sm mb-2">
              {categoryPurposes[activeCategory as keyof typeof categoryPurposes].purpose}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {categoryPurposes[activeCategory as keyof typeof categoryPurposes].benefits.map((b) => (
                <span key={b} className="px-3 py-1 glass-gold rounded-full text-[#c9a962]/60 text-[10px]">
                  {b}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Plants Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {filteredPlants.map((plant, i) => (
            <motion.div
              key={plant.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl overflow-hidden glass hover:glow-gold transition-all duration-500"
            >
              <div className="relative aspect-[3/4]">
                <PlantImage plant={plant} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h4 className="text-white text-xs font-semibold mb-0.5">{plant.name}</h4>
                <p className="text-white/30 text-[9px] leading-snug line-clamp-2 group-hover:text-white/50 transition-colors">
                  {plant.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
