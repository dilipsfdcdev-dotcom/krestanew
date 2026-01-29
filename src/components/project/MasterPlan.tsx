'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import AdaptiveImage from '../AdaptiveImage';
import { Maximize2, X, MapPin, Route, TreePine, Home, Compass } from 'lucide-react';

const planFeatures = [
  { icon: Home, label: '124 Premium Plots', color: 'bg-emerald-500' },
  { icon: Route, label: '60ft, 40ft & 33ft Roads', color: 'bg-blue-500' },
  { icon: TreePine, label: 'Forest Area & Green Buffer', color: 'bg-green-500' },
  { icon: MapPin, label: 'Premium Villa Section', color: 'bg-purple-500' },
  { icon: Compass, label: 'Walking Trails Throughout', color: 'bg-orange-500' },
];

const masterPlanFeatures = [
  'Wide Internal Roads — 60 ft & 40 ft for easy access',
  'Forest Area — Surrounding the community for privacy',
  'Premium Villa Section — Designated premium plots',
  'Natural Boulder Preservation — Existing boulders as landmarks',
  'Walking Trails — Throughout the property',
  'Strategic Entrance — Wide access with gated security',
  'Green Buffer Zones — Extensive plantation areas',
];

const stats = [
  { label: 'Total Plot Area', value: '179,103 Sq. Yards' },
  { label: 'Roads Area', value: '57,558 Sq. Yards' },
  { label: 'Total Plots', value: '124' },
  { label: 'Plants Per Plot', value: '600-900' },
];

export default function MasterPlan() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <>
      <section id="masterplan" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-[#c9a962]/10 rounded-full filter blur-[120px]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-[#c9a962]/10 rounded-full filter blur-[120px]"
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container-luxury relative z-10" ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-[#c9a962] text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
              Layout Design
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Master Plan
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-6"
            />
            <p className="text-white/60 max-w-2xl mx-auto">
              Thoughtfully designed layout by S&S Architects and Infra, ensuring optimal space
              utilization with natural forest surroundings
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#c9a962]">{stat.value}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Master Plan Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mb-12"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="relative aspect-[16/10] w-full bg-[#1a1a1a]/50">
                <AdaptiveImage
                  basePath="/images/projects/meadow-breeze/masterplan/layout"
                  alt="The Meadow Breeze Master Plan"
                  fill
                  className="object-contain"
                  fallbackText="Master Plan Coming Soon"
                />
              </div>

              {/* Fullscreen Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsFullscreen(true)}
                className="absolute top-4 right-4 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-[#c9a962] transition-colors opacity-0 group-hover:opacity-100"
              >
                <Maximize2 className="w-5 h-5" />
              </motion.button>

              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white/80 text-sm">
                  Designed by <span className="text-[#c9a962] font-medium">S&S Architects and Infra</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
          >
            {planFeatures.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#c9a962]/30 transition-all text-center"
              >
                <div className={`w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-white/80 text-sm">{feature.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Master Plan Features List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
          >
            <h3 className="text-xl font-bold text-white mb-6 text-center">Master Plan Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {masterPlanFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-[#c9a962] mt-2 flex-shrink-0" />
                  <span className="text-white/80">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsFullscreen(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-7xl w-full h-full flex items-center justify-center"
          >
            <AdaptiveImage
              basePath="/images/projects/meadow-breeze/masterplan/layout"
              alt="The Meadow Breeze Master Plan"
              fill
              className="object-contain"
              fallbackText="Master Plan"
            />
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-[#c9a962] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
