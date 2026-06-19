'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import FallbackImage from './FallbackImage';
import AdaptiveLogo from './AdaptiveLogo';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { MapPin, TreePine, ArrowRight, Sparkles } from 'lucide-react';

const projects = [
  {
    id: 'meadow-breeze',
    name: 'The Meadow Breeze',
    tagline: 'Where the hills whisper peace and the breeze carries serenity',
    location: 'Peepal Pahad, Choutuppal',
    totalArea: '179,103 Sq. Yds',
    totalPlots: 124,
    plantsPerPlot: '600–900',
    status: 'Now Booking',
    features: ['360° Mountain Views', 'Gated Community', 'Organic Farming'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000&q=80',
    logoPath: '/images/projects/meadow-breeze/logo',
    slug: '/projects/meadow-breeze',
  },
];

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#faf8f5] py-24 md:py-32">
      <div className="pattern-grid absolute inset-0 opacity-60" />
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,169,98,0.14),transparent_70%)]" />

      <div className="container-luxury relative z-10">
        <SectionHeading
          eyebrow="Featured Development"
          title={
            <>
              Our Premium <span className="text-[#1a4d2e]">Estates</span>
            </>
          }
          description="Thoughtfully designed farmland communities that blend luxury living with natural serenity — a rare chance to own a piece of paradise."
          className="mb-16"
        />

        <div className="space-y-16">
          {projects.map((project) => (
            <Reveal key={project.id} direction="up">
              <Link href={project.slug} className="group block">
                <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-black/5 transition-all duration-500 hover:shadow-2xl">
                  <div className="grid lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-80 overflow-hidden lg:h-[520px]">
                      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                        <FallbackImage
                          src={project.image}
                          alt={project.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                          fallbackText="Coming Soon"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                      {/* Status badge */}
                      <div className="absolute left-6 top-6">
                        <span className="inline-flex items-center gap-2 rounded-full bg-[#c9a962] px-4 py-2 text-sm font-medium text-white shadow-lg">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                          </span>
                          {project.status}
                        </span>
                      </div>

                      {/* Title + logo */}
                      <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
                        <div>
                          <h3 className="mb-2 text-3xl font-bold text-white md:text-4xl">
                            {project.name}
                          </h3>
                          <div className="flex items-center gap-2 text-white/80">
                            <MapPin className="h-4 w-4" />
                            <span>{project.location}</span>
                          </div>
                        </div>
                        <div className="relative hidden h-20 w-20 md:block">
                          <AdaptiveLogo
                            basePath={project.logoPath}
                            alt={`${project.name} logo`}
                            fill
                            sizes="80px"
                            className="object-contain drop-shadow-lg"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-8 lg:p-12">
                      <p className="mb-8 font-[family-name:var(--font-heading)] text-xl italic text-gray-600">
                        “{project.tagline}”
                      </p>

                      <div className="mb-8 grid grid-cols-3 gap-4">
                        {[
                          { v: project.totalPlots, l: 'Plots' },
                          { v: project.plantsPerPlot, l: 'Plants / Plot' },
                          { v: project.totalArea, l: 'Total Area' },
                        ].map((stat) => (
                          <div
                            key={stat.l}
                            className="rounded-2xl bg-[#faf8f5] p-4 text-center ring-1 ring-black/5"
                          >
                            <p className="text-lg font-bold text-[#1a4d2e] md:text-2xl">{stat.v}</p>
                            <p className="mt-1 text-xs text-gray-500">{stat.l}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mb-8 flex flex-wrap gap-2">
                        {project.features.map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center gap-1 rounded-full bg-[#1a4d2e]/8 px-3 py-1.5 text-sm text-[#1a4d2e]"
                          >
                            <TreePine className="h-3.5 w-3.5" />
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-4">
                        <span className="inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-6 py-3 font-medium text-white transition-colors group-hover:bg-[#1a4d2e]">
                          View Project Details
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <span className="font-medium text-[#c9a962] underline-animation">
                          Book Site Visit
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-2xl border border-[#c9a962]/20 bg-white px-6 py-4 shadow-lg">
            <Sparkles className="h-5 w-5 text-[#c9a962]" />
            <span className="text-gray-600">More signature estates launching soon</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
