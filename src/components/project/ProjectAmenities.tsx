'use client';

import { motion, useInView } from 'framer-motion';
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
    title: '24/7 Security',
    description: 'Round-the-clock CCTV surveillance',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    icon: Droplets,
    title: 'Water Supply',
    description: 'Dedicated bore wells & tanks',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TreePine,
    title: 'Drip Irrigation',
    description: 'Modern efficient systems',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Electricity',
    description: 'Dedicated transformer',
    gradient: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Route,
    title: 'Wide Roads',
    description: '60ft & 40ft roads',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Lock,
    title: 'Gated Entry',
    description: 'Controlled access points',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Cable,
    title: 'Underground Cables',
    description: 'Clean modern aesthetics',
    gradient: 'from-gray-500 to-slate-500',
  },
  {
    icon: CloudRain,
    title: 'Drainage System',
    description: 'Effective water management',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Footprints,
    title: 'Walking Trails',
    description: 'Nature paths throughout',
    gradient: 'from-lime-500 to-green-500',
  },
  {
    icon: Users,
    title: 'Agronomist Support',
    description: 'Expert farming guidance',
    gradient: 'from-orange-500 to-red-500',
  },
];

export default function ProjectAmenities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="amenities" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pattern-lines" />
      </div>

      <div className="container-luxury relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a962] text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            World-Class Facilities
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Premium Amenities
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-6"
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every detail thoughtfully planned to ensure your farmland experience
            is nothing short of extraordinary
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="h-full p-5 bg-gradient-to-br from-[#faf8f5] to-white rounded-2xl border border-gray-100 hover:border-[#c9a962]/30 hover:shadow-xl transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${amenity.gradient} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <amenity.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="font-bold text-[#1a1a1a] mb-1">{amenity.title}</h3>
                <p className="text-gray-500 text-sm">{amenity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-[#1a1a1a] to-[#333] rounded-2xl text-white">
            <div className="text-left">
              <h4 className="font-semibold mb-1">Ready to experience luxury farmland?</h4>
              <p className="text-white/70 text-sm">Schedule a site visit and see these amenities firsthand</p>
            </div>
            <a
              href="https://wa.me/919888932555?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit%20for%20The%20Meadow%20Breeze."
              target="_blank"
              className="px-6 py-3 bg-[#c9a962] text-white rounded-full font-medium hover:bg-[#8b7355] transition-all whitespace-nowrap"
            >
              Book Site Visit
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
