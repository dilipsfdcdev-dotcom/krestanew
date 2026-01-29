'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Home, Leaf, Palmtree, TrendingUp, Mountain, Flower2, Cable, Users, Shield, Building, MapPin, Calendar } from 'lucide-react';

const lifestyles = [
  {
    id: 'farmhouse',
    icon: Home,
    title: 'Bespoke Farmhouse Living',
    subtitle: 'Build Your Dream Countryside Retreat',
    description: 'Build your dream countryside retreat amidst the Rachakonda Hills. With plot sizes from 10 to 50 Guntas, design a farmhouse that reflects your vision — modern minimalist, traditional heritage, or eco-luxury.',
    features: [
      { icon: Mountain, text: '360° panoramic mountain views' },
      { icon: Flower2, text: 'Pre-planted organic garden' },
      { icon: Cable, text: 'Wide road access & underground utilities' },
      { icon: Users, text: 'Agronomist support available' },
    ],
    gradient: 'from-amber-500 to-orange-600',
    bgImage: 'bg-gradient-to-br from-amber-50 to-orange-50',
  },
  {
    id: 'organic',
    icon: Leaf,
    title: 'Organic Cultivation',
    subtitle: 'Transform Your Plot Into a Thriving Farm',
    description: 'Transform your plot into a thriving organic farm. With 600-900 plants already established and drip irrigation infrastructure in place, grow seasonal vegetables, medicinal herbs, fruit orchards, and exotic flowers.',
    features: [
      { icon: Users, text: 'Expert agronomist guidance' },
      { icon: Leaf, text: 'Drip irrigation system' },
      { icon: Flower2, text: 'Organic farming methodology' },
      { icon: TrendingUp, text: 'Market linkage assistance' },
    ],
    gradient: 'from-green-500 to-emerald-600',
    bgImage: 'bg-gradient-to-br from-green-50 to-emerald-50',
  },
  {
    id: 'weekend',
    icon: Palmtree,
    title: 'Weekend Escape',
    subtitle: 'Your Sanctuary Far From City Chaos',
    description: 'Just 30 km from ORR Exit 11, The Meadow Breeze is your sanctuary far from city\'s chaos. An escape to fresh mountain air, starlit nights, morning bird songs, and peaceful solitude.',
    features: [
      { icon: Calendar, text: 'Perfect for family weekends' },
      { icon: Building, text: 'Corporate retreats' },
      { icon: Flower2, text: 'Wellness getaways' },
      { icon: Leaf, text: 'Creative inspiration' },
    ],
    gradient: 'from-sky-500 to-blue-600',
    bgImage: 'bg-gradient-to-br from-sky-50 to-blue-50',
  },
  {
    id: 'investment',
    icon: TrendingUp,
    title: 'Long-Term Investment',
    subtitle: 'Premium Appreciating Land Asset',
    description: 'Premium appreciating land asset in a rapidly developing corridor. Invest in a property that offers both lifestyle benefits and strong growth potential.',
    features: [
      { icon: Shield, text: 'Clear title property' },
      { icon: Shield, text: 'Gated community security' },
      { icon: Users, text: 'Managed farmland services' },
      { icon: TrendingUp, text: 'High growth potential' },
    ],
    gradient: 'from-purple-500 to-indigo-600',
    bgImage: 'bg-gradient-to-br from-purple-50 to-indigo-50',
  },
];

export default function LifestylePathways() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeLifestyle, setActiveLifestyle] = useState('farmhouse');

  const activeData = lifestyles.find(l => l.id === activeLifestyle) || lifestyles[0];

  return (
    <section id="lifestyle" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <span className="text-[#c9a962] text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            Four Distinct Pathways
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            A Life of Possibilities
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-6"
          />
          <p className="text-white/60 max-w-2xl mx-auto">
            The Meadow Breeze offers four distinct lifestyle pathways — choose the one that resonates with your vision
          </p>
        </motion.div>

        {/* Lifestyle Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {lifestyles.map((lifestyle) => (
            <button
              key={lifestyle.id}
              onClick={() => setActiveLifestyle(lifestyle.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all ${
                activeLifestyle === lifestyle.id
                  ? 'bg-[#c9a962] text-white shadow-lg shadow-[#c9a962]/30'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <lifestyle.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{lifestyle.title}</span>
              <span className="sm:hidden">{lifestyle.title.split(' ')[0]}</span>
            </button>
          ))}
        </motion.div>

        {/* Active Lifestyle Content */}
        <motion.div
          key={activeLifestyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`${activeData.bgImage} rounded-3xl p-8 md:p-12`}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className={`inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r ${activeData.gradient} rounded-full text-white mb-6`}>
                <activeData.icon className="w-5 h-5" />
                <span className="font-medium">{activeData.subtitle}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
                {activeData.title}
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {activeData.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white rounded-full font-medium hover:bg-[#333] transition-colors"
              >
                Explore This Lifestyle
                <MapPin className="w-5 h-5" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {activeData.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-5 bg-white rounded-2xl shadow-lg"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${activeData.gradient} flex items-center justify-center mb-3`}>
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-[#1a1a1a] font-medium text-sm">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
