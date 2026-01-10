'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Clock, MapPin, Shield, Users, Building } from 'lucide-react';

const stats = [
  { number: '50+', label: 'Acres of Premium Land', icon: MapPin },
  { number: '524', label: 'Trees Per Community', icon: Building },
  { number: '100%', label: 'Customer Satisfaction', icon: Users },
  { number: '24/7', label: 'Security & Support', icon: Shield },
];

const values = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'World-class construction standards and materials ensuring lasting value for generations.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Committed to meeting project deadlines with transparent progress updates.',
  },
  {
    icon: MapPin,
    title: 'Strategic Locations',
    description: 'Prime locations with excellent connectivity and appreciation potential.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pattern-lines" />

      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle text-[#c9a962] font-medium mb-4 block">
              About Kresta
            </span>
            <h2 className="section-title font-bold text-[#1a1a1a] mb-6">
              Crafting Luxury,
              <span className="text-[#c9a962]"> Building Dreams</span>
            </h2>
            <div className="line-gold-solid mb-8" />

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Kresta Infra & Developers Pvt. Ltd. is an emerging real estate development company
              dedicated to creating exceptional farmland communities and residential spaces that
              harmonize with nature.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We emphasize sustainable development that respects the environment while providing
              modern amenities and connectivity. Our vision is to transform how people connect
              with land, offering not just property but a lifestyle of tranquility and growth.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c9a962]/10 flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a1a1a] mb-1">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl img-zoom">
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600"
                  alt="Kresta Farmland"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#c9a962] flex items-center justify-center">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#1a1a1a]">Since 2024</h4>
                    <p className="text-gray-500 text-sm">Trusted Developer</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#c9a962] rounded-2xl" />
              <div className="absolute -bottom-4 right-20 w-16 h-16 bg-[#c9a962]/10 rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#faf8f5] to-white border border-[#c9a962]/20 card-luxury"
            >
              <stat.icon className="w-8 h-8 text-[#c9a962] mx-auto mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2">{stat.number}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
