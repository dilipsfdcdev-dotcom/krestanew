'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import FallbackImage from './FallbackImage';
import { MapPin, TreePine, ArrowRight, Sparkles } from 'lucide-react';

const projects = [
  {
    id: 'meadow-breeze',
    name: 'The Meadow Breeze',
    tagline: 'Where the hills whisper peace and the breeze carries serenity',
    location: 'Peepal Pahad, Choutuppal',
    totalArea: '179,103 Sq. Yards',
    totalPlots: 124,
    plantsPerPlot: '600-900',
    status: 'Now Booking',
    features: ['360° Mountain Views', 'Gated Community', 'Organic Farming'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
    logo: '/images/projects/meadow-breeze/logo.svg',
    slug: '/projects/meadow-breeze',
  },
];

export default function ProjectsShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#faf8f5] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pattern-lines" />
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#c9a962]/10 rounded-full filter blur-[100px]"
          animate={{ scale: [1, 1.2, 1] }}
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
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a4d2e]/10 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#c9a962]" />
            <span className="text-sm font-medium text-[#1a4d2e]">Featured Projects</span>
          </motion.div>
          <h2 className="section-title font-bold text-[#1a1a1a] mb-4">
            Our Premium
            <span className="text-[#1a4d2e]"> Developments</span>
          </h2>
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent"
            />
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our thoughtfully designed farmland communities that blend
            luxury living with natural serenity
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            >
              <Link href={project.slug} className="group block">
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="grid lg:grid-cols-2">
                    {/* Image Section */}
                    <div className="relative h-80 lg:h-[500px] overflow-hidden">
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.7 }}
                      >
                        <FallbackImage
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover"
                          fallbackText="Coming Soon"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Status Badge */}
                      <div className="absolute top-6 left-6">
                        <motion.div
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="px-4 py-2 bg-[#c9a962] text-white text-sm font-medium rounded-full shadow-lg"
                        >
                          {project.status}
                        </motion.div>
                      </div>

                      {/* Project Logo */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-end justify-between">
                          <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                              {project.name}
                            </h3>
                            <div className="flex items-center gap-2 text-white/80">
                              <MapPin className="w-4 h-4" />
                              <span>{project.location}</span>
                            </div>
                          </div>
                          <div className="hidden md:block w-20 h-20 relative">
                            <FallbackImage
                              src={project.logo}
                              alt={`${project.name} Logo`}
                              fill
                              className="object-contain"
                              fallbackText=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <p className="text-xl text-gray-600 italic mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                        "{project.tagline}"
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="text-center p-4 bg-[#faf8f5] rounded-xl">
                          <p className="text-2xl font-bold text-[#1a4d2e]">{project.totalPlots}</p>
                          <p className="text-sm text-gray-500">Plots</p>
                        </div>
                        <div className="text-center p-4 bg-[#faf8f5] rounded-xl">
                          <p className="text-2xl font-bold text-[#1a4d2e]">{project.plantsPerPlot}</p>
                          <p className="text-sm text-gray-500">Plants/Plot</p>
                        </div>
                        <div className="text-center p-4 bg-[#faf8f5] rounded-xl">
                          <p className="text-lg font-bold text-[#1a4d2e]">{project.totalArea}</p>
                          <p className="text-sm text-gray-500">Total Area</p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.features.map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-[#1a4d2e]/10 text-[#1a4d2e] text-sm rounded-full"
                          >
                            <TreePine className="w-3 h-3" />
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a4d2e] text-white rounded-full font-medium group-hover:bg-[#2d6a4f] transition-colors">
                          View Project Details
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.span>
                        </span>
                        <span className="text-[#c9a962] font-medium group-hover:underline">
                          Book Site Visit
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-lg border border-[#c9a962]/20">
            <Sparkles className="w-5 h-5 text-[#c9a962]" />
            <span className="text-gray-600">More exciting projects coming soon</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
