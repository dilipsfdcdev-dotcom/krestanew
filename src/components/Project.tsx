'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, TreePine, Mountain, Droplets, Shield, Zap, Car, Home, Leaf, Sun } from 'lucide-react';

const plotSizes = [
  { size: '10 Guntas', area: '1,210 sq yards', bestFor: 'Ideal for compact farmhouse with garden' },
  { size: '20 Guntas', area: '2,420 sq yards', bestFor: 'Perfect for medium farmhouse with farming area' },
  { size: '30 Guntas', area: '3,630 sq yards', bestFor: 'Great for spacious farmhouse with extensive gardens' },
  { size: '40 Guntas', area: '4,840 sq yards', bestFor: 'Excellent for large estate with multiple structures' },
  { size: '50 Guntas', area: '6,050 sq yards', bestFor: 'Premium plots for expansive farmhouse estates' },
  { size: 'Custom', area: 'Based on requirement', bestFor: 'Flexible plot sizes tailored to your needs' },
];

const highlights = [
  { icon: TreePine, text: '600-900 Plants per plot', desc: 'Personal forest setup' },
  { icon: Mountain, text: '360° Mountain Views', desc: 'Rachakonda hills' },
  { icon: MapPin, text: '25 km from ORR Exit 11', desc: 'Excellent connectivity' },
  { icon: Car, text: '7 km from Vijayawada Hwy', desc: 'Easy access' },
  { icon: Shield, text: 'Gated Community', desc: '24/7 security' },
  { icon: Droplets, text: 'Water Supply', desc: 'Continuous availability' },
  { icon: Zap, text: 'Electricity', desc: 'Uninterrupted power' },
  { icon: Leaf, text: 'Organic Farming', desc: 'Expert support' },
];

const investmentPoints = [
  'High appreciation potential in developing corridor',
  'Managed farmland services available',
  'Clear titles and legal documentation',
  'Premium location with excellent connectivity',
  'Suitable for weekend retreats',
  'Perfect for retirement homes',
  'Ideal for organic farming ventures',
];

export default function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="project" className="py-24 md:py-32 bg-[#faf8f5] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#c9a962]/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1a4d2e]/5 rounded-full filter blur-3xl" />
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
            Featured Project
          </span>
          <h2 className="section-title font-bold text-[#1a1a1a] mb-4">
            The Meadow Breeze
          </h2>
          <div className="flex justify-center mb-6">
            <div className="line-gold" />
          </div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Premium 50-acre farmland community at Peepal Pahad, Choutuppal, nestled amidst
            the lush green hills of Rachakonda with 360° panoramic mountain views
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left - Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl img-zoom">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
                alt="The Meadow Breeze - Panoramic View"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="px-3 py-1 bg-[#c9a962] text-white text-xs font-medium rounded-full mb-2 inline-block">
                  Now Booking
                </span>
                <h3 className="text-2xl font-bold">Rachakonda Hills</h3>
                <p className="text-white/80">Peepal Pahad, Choutuppal</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg img-zoom h-48">
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400"
                  alt="Farmland View"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg img-zoom h-48">
                <img
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400"
                  alt="Green Forest"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Tagline */}
            <div className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-[#c9a962]">
              <p className="text-xl italic text-gray-700">
                "Where the hills whisper peace and the breeze carries serenity"
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <item.icon className="w-6 h-6 text-[#1a4d2e] mb-2" />
                  <h4 className="font-semibold text-[#1a1a1a] text-sm">{item.text}</h4>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919888932555?text=Hi%2C%20I%27m%20interested%20in%20The%20Meadow%20Breeze%20farmland%20project.%20Please%20share%20more%20details."
                target="_blank"
                className="btn-luxury flex-1 py-4 bg-[#1a4d2e] text-white text-center rounded-xl font-medium hover:bg-[#2d6a4f] transition-all"
              >
                Request Site Visit
              </a>
              <a
                href="tel:+919888932555"
                className="btn-luxury flex-1 py-4 border-2 border-[#1a4d2e] text-[#1a4d2e] text-center rounded-xl font-medium hover:bg-[#1a4d2e] hover:text-white transition-all"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>

        {/* Plot Sizes Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4">
              Available Plot Sizes
            </h3>
            <p className="text-gray-600">Choose the perfect size for your dream farmhouse</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plotSizes.map((plot, index) => (
              <motion.div
                key={plot.size}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="card-luxury p-6 bg-white rounded-2xl shadow-lg border border-[#c9a962]/10 hover:border-[#c9a962]/30"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-[#1a4d2e]">{plot.size}</h4>
                    <p className="text-[#c9a962] font-medium">{plot.area}</p>
                  </div>
                  <Home className="w-8 h-8 text-[#c9a962]/50" />
                </div>
                <p className="text-gray-600 text-sm">{plot.bestFor}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Investment Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-[#1a4d2e] to-[#0d2818] rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a962]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#c9a962]/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <Sun className="w-12 h-12 text-[#c9a962] mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Investment Highlights
                </h3>
                <p className="text-white/70 mb-6">
                  The Meadow Breeze offers more than just land – it's a lifestyle investment
                  with exceptional growth potential and managed services.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a962] text-white rounded-full font-medium hover:bg-[#8b7355] transition-colors"
                >
                  Get Investment Details
                </a>
              </div>

              <div className="space-y-3">
                {investmentPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3 text-white"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#c9a962]" />
                    <span>{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
