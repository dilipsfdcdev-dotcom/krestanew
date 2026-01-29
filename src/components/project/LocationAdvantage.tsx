'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Navigation, Plane, Film, Castle, Route, Mountain, Wind, Sparkles, TrendingUp, Landmark } from 'lucide-react';

const distances = [
  { landmark: 'ORR Exit 11', distance: '30 km', icon: Route },
  { landmark: 'Vijayawada Highway', distance: '7 km', icon: Navigation },
  { landmark: 'Ramoji Film City', distance: '25 km', icon: Film },
  { landmark: 'RGIA Airport', distance: '60 km', icon: Plane },
  { landmark: 'Proposed RRR', distance: '8 km', icon: Route },
  { landmark: 'Rachakonda Fort', distance: '10 km', icon: Castle },
];

const locationHighlights = [
  {
    icon: Mountain,
    title: 'Rachakonda Hills Setting',
    description: 'Nestled amidst iconic hills, offering elevation, openness, and timeless charm.',
  },
  {
    icon: Sparkles,
    title: '360° Panoramic Mountain Views',
    description: 'Sweeping, uninterrupted views of rolling hills and open horizons.',
  },
  {
    icon: Wind,
    title: 'Pure, Pollution-Free Environment',
    description: 'Clean air and tranquil surroundings ideal for mindful living.',
  },
  {
    icon: TrendingUp,
    title: 'Rapid Infrastructure Growth',
    description: 'Located in fast-emerging growth corridor with strong appreciation potential.',
  },
  {
    icon: Landmark,
    title: 'Tourism & Cultural Significance',
    description: 'Proximity to historic Rachakonda Fort adds prestige and future potential.',
  },
];

export default function LocationAdvantage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="location" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5 pattern-lines" />

      <div className="container-luxury relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a962] text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            Strategic Position
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Location Advantage
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-6"
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            The Meadow Breeze enjoys a coveted location with excellent connectivity and natural beauty
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Distance & Connectivity */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-[#c9a962]" />
              Distance & Connectivity
            </h3>
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#333] rounded-2xl p-6 md:p-8">
              <div className="space-y-4">
                {distances.map((item, index) => (
                  <motion.div
                    key={item.landmark}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#c9a962]/20 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-[#c9a962]" />
                      </div>
                      <span className="text-white/90">{item.landmark}</span>
                    </div>
                    <span className="text-[#c9a962] font-bold text-lg">{item.distance}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map Link */}
            <motion.a
              href="https://maps.app.goo.gl/CBX5zyzryJZz9jqe6"
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 flex items-center justify-center gap-2 p-4 bg-[#c9a962] text-white rounded-xl font-medium hover:bg-[#8b7355] transition-colors"
            >
              <MapPin className="w-5 h-5" />
              View Project Location on Maps
            </motion.a>
          </motion.div>

          {/* Location Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-[#c9a962]" />
              Location Highlights
            </h3>
            <div className="space-y-4">
              {locationHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-5 bg-gradient-to-br from-[#faf8f5] to-white rounded-2xl border border-gray-100 hover:border-[#c9a962]/30 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center flex-shrink-0">
                      <highlight.icon className="w-6 h-6 text-[#c9a962]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1a1a] mb-1">{highlight.title}</h4>
                      <p className="text-gray-600 text-sm">{highlight.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
