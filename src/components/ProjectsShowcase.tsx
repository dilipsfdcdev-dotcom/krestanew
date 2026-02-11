'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, TreePine, ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

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
    features: ['360\u00b0 Mountain Views', 'Gated Community', 'Organic Farming'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
    logoPath: '/images/projects/meadow-breeze/logo.jpeg',
    slug: '/projects/meadow-breeze',
  },
];

export default function ProjectsShowcase() {
  const { ref, visible } = useReveal();

  return (
    <section id="projects" className="py-28 md:py-40 bg-[#111111] relative section-glow">
      <div className="container-luxury" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''} mb-16 md:mb-20`}>
          <span className="label-gold mb-6 block">Featured Projects</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="heading-section text-white font-[family-name:var(--font-heading)]">
              Our Premium{' '}
              <span className="text-gold-gradient italic">Developments</span>
            </h2>
            <p className="text-white/35 max-w-md lg:text-right">
              Discover our thoughtfully designed farmland communities that blend luxury living with natural serenity
            </p>
          </div>
          <div className="divider-fade w-full mt-8" />
        </div>

        {projects.map((project) => (
          <div key={project.id} className={`reveal-scale ${visible ? 'visible' : ''} stagger-2`}>
            <Link href={project.slug} className="group block">
              <div className="relative rounded-3xl overflow-hidden">
                <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
                  <Image src={project.image} alt={project.name} fill className="object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out" sizes="100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 to-transparent" />
                </div>

                <div className="absolute top-6 md:top-8 right-6 md:right-8">
                  <span className="px-5 py-2.5 bg-[#c9a84c] text-[#080808] text-xs font-bold tracking-wider uppercase rounded-xl shimmer">
                    {project.status}
                  </span>
                </div>

                <div className="absolute top-6 md:top-8 left-6 md:left-8 w-14 h-14 md:w-16 md:h-16 relative rounded-2xl overflow-hidden border border-white/10">
                  <Image src={project.logoPath} alt={`${project.name} Logo`} fill className="object-contain bg-white/90" sizes="64px" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-2 text-[#c9a84c] mb-4">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm tracking-wide">{project.location}</span>
                    </div>

                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 font-[family-name:var(--font-heading)] tracking-tight">
                      {project.name}
                    </h3>

                    <p className="text-white/45 text-lg italic font-[family-name:var(--font-heading)] mb-8">
                      &ldquo;{project.tagline}&rdquo;
                    </p>

                    <div className="flex flex-wrap gap-8 mb-8">
                      <div>
                        <p className="text-2xl md:text-3xl font-semibold text-white font-[family-name:var(--font-heading)]">{project.totalPlots}</p>
                        <p className="text-white/25 text-xs tracking-widest uppercase font-[family-name:var(--font-body)]">Plots</p>
                      </div>
                      <div className="w-px bg-white/10" />
                      <div>
                        <p className="text-2xl md:text-3xl font-semibold text-white font-[family-name:var(--font-heading)]">{project.plantsPerPlot}</p>
                        <p className="text-white/25 text-xs tracking-widest uppercase font-[family-name:var(--font-body)]">Plants/Plot</p>
                      </div>
                      <div className="w-px bg-white/10" />
                      <div>
                        <p className="text-lg md:text-xl font-semibold text-white font-[family-name:var(--font-heading)]">{project.totalArea}</p>
                        <p className="text-white/25 text-xs tracking-widest uppercase font-[family-name:var(--font-body)]">Total Area</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      {project.features.map((f) => (
                        <span key={f} className="inline-flex items-center gap-1.5 px-4 py-2 glass text-white/65 text-xs rounded-xl tracking-wide">
                          <TreePine className="w-3 h-3 text-[#c9a84c]" />
                          {f}
                        </span>
                      ))}
                      <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#080808] rounded-xl text-sm font-semibold group-hover:bg-[#c9a84c] transition-colors ml-auto">
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}

        <div className={`reveal ${visible ? 'visible' : ''} stagger-4 mt-12 text-center`}>
          <p className="text-white/15 text-sm tracking-widest uppercase font-[family-name:var(--font-body)]">More projects coming soon</p>
        </div>
      </div>
    </section>
  );
}
