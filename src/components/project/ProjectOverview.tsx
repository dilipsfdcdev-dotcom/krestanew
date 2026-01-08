'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Car, TreePine, Home, Shield, Droplets, Zap, Leaf } from 'lucide-react';

const plotSizes = [
  { size: '10 Guntas', area: '1,210 sq yards', description: 'Compact farmhouse with garden' },
  { size: '20 Guntas', area: '2,420 sq yards', description: 'Medium farmhouse with farming' },
  { size: '30 Guntas', area: '3,630 sq yards', description: 'Spacious farmhouse estate' },
  { size: '40 Guntas', area: '4,840 sq yards', description: 'Large estate with structures' },
  { size: '50 Guntas', area: '6,050 sq yards', description: 'Premium expansive estate' },
];

const locationHighlights = [
  { icon: MapPin, text: '25 km from Exit 11 - ORR' },
  { icon: Car, text: '7 km from Vijayawada Highway' },
  { icon: TreePine, text: 'Nestled in Rachakonda Hills' },
  { icon: Shield, text: 'Pollution-free environment' },
];

const investmentPoints = [
  'High appreciation potential in developing corridor',
  'Managed farmland services available',
  'Clear titles and legal documentation',
  'Premium location with excellent connectivity',
  'Suitable for weekend retreats & retirement homes',
  'Ideal for organic farming ventures',
];

export default function ProjectOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="overview" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pattern-dots" />

      <div className="container-luxury" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a962] text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            Project Overview
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Your Dream Farmland Awaits
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto"
          />
        </motion.div>

        {/* Main Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: '124', label: 'Total Plots', icon: Home },
            { value: '179,103', label: 'Sq. Yards Area', icon: MapPin },
            { value: '600-900', label: 'Plants/Plot', icon: TreePine },
            { value: '100%', label: 'Organic Setup', icon: Leaf },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 bg-gradient-to-br from-[#faf8f5] to-white rounded-2xl border border-[#c9a962]/20 shadow-lg hover:shadow-xl transition-all"
            >
              <stat.icon className="w-8 h-8 text-[#c9a962] mb-3" />
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a4d2e]">{stat.value}</h3>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Location & Investment Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Location Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#1a4d2e] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#c9a962]/10 rounded-full filter blur-[60px]" />
            <h3 className="text-2xl font-bold mb-6">Strategic Location</h3>
            <div className="space-y-4 relative z-10">
              {locationHighlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  <span className="text-white/90">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Investment Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-[#faf8f5] to-white rounded-3xl p-8 md:p-10 border border-[#c9a962]/20"
          >
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">Investment Benefits</h3>
            <div className="space-y-3">
              {investmentPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-[#c9a962] mt-2 flex-shrink-0" />
                  <span className="text-gray-600">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Plot Sizes */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-[#1a1a1a] text-center mb-8">Available Plot Sizes</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {plotSizes.map((plot, index) => (
              <motion.div
                key={plot.size}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-5 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:border-[#c9a962]/30 transition-all text-center"
              >
                <h4 className="text-xl font-bold text-[#1a4d2e] mb-1">{plot.size}</h4>
                <p className="text-[#c9a962] font-medium text-sm mb-2">{plot.area}</p>
                <p className="text-gray-500 text-xs">{plot.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
