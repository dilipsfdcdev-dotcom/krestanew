'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Shield,
  Droplets,
  Zap,
  TreePine,
  Route,
  Lock,
  Cable,
  CloudRain,
  Footprints,
  Users,
} from 'lucide-react';

const amenities = [
  {
    icon: Shield,
    title: '24/7 Security & Surveillance',
    description: 'Round-the-clock security with CCTV monitoring for complete peace of mind',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Droplets,
    title: 'Continuous Water Supply',
    description: 'Reliable water availability with dedicated bore wells and overhead tanks',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TreePine,
    title: 'Advanced Drip Irrigation',
    description: 'Modern irrigation systems for efficient water usage in farming areas',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Reliable Electricity',
    description: 'Uninterrupted power supply with dedicated transformer for the community',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Route,
    title: '60ft & 30ft Roads',
    description: 'Wide internal road network ensuring easy access to all plots',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Lock,
    title: 'Gated Community',
    description: 'Exclusive and secure environment with controlled access points',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Cable,
    title: 'Underground Cabling',
    description: 'Clean aesthetics with hidden infrastructure for modern look',
    color: 'from-gray-500 to-slate-500',
  },
  {
    icon: CloudRain,
    title: 'Proper Drainage System',
    description: 'Effective water management and storm water drainage throughout',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Footprints,
    title: 'Walking Trails',
    description: 'Nature paths for morning walks amidst greenery and fresh air',
    color: 'from-lime-500 to-green-500',
  },
  {
    icon: Users,
    title: 'Agronomist Support',
    description: 'Expert agricultural guidance available for organic farming ventures',
    color: 'from-orange-500 to-red-500',
  },
];

export default function Amenities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="amenities" className="py-24 md:py-32 bg-[#1a4d2e] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#c9a962]/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full filter blur-[100px]" />
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
            World-Class Facilities
          </span>
          <h2 className="section-title font-bold text-white mb-4">
            Premium Amenities
          </h2>
          <div className="flex justify-center mb-6">
            <div className="line-gold" />
          </div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Every detail has been thoughtfully planned to ensure your farmland experience
            is nothing short of extraordinary
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-[#c9a962]/30 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${amenity.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <amenity.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2 text-lg">
                  {amenity.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-left">
              <h4 className="text-white font-semibold mb-1">Ready to experience luxury farmland?</h4>
              <p className="text-white/60 text-sm">Schedule a site visit and see these amenities firsthand</p>
            </div>
            <a
              href="https://wa.me/919888932555?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit%20to%20see%20the%20amenities%20at%20The%20Meadow%20Breeze."
              target="_blank"
              className="btn-luxury px-8 py-3 bg-[#c9a962] text-white rounded-full font-medium hover:bg-[#8b7355] transition-all whitespace-nowrap"
            >
              Book Site Visit
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
