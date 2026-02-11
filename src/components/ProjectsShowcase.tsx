'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, TreePine, ArrowRight, Sparkles } from 'lucide-react';
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
    features: ['360° Mountain Views', 'Gated Community', 'Organic Farming'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
    logoPath: '/images/projects/meadow-breeze/logo.jpeg',
    slug: '/projects/meadow-breeze',
  },
];

export default function ProjectsShowcase() {
  const { ref, visible } = useReveal();

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#faf8f5] relative">
      <div className="container-luxury" ref={ref}>
        {/* Header */}
        <div className={`reveal ${visible ? 'visible' : ''} text-center mb-16`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a4d2e]/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#c9a962]" />
            <span className="text-sm font-medium text-[#1a4d2e]">Featured Projects</span>
          </div>
          <h2 className="section-title font-bold text-[#1a1a1a] mb-4 font-[family-name:var(--font-heading)]">
            Our Premium<span className="text-[#1a4d2e]"> Developments</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent" />
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our thoughtfully designed farmland communities that blend luxury living with natural serenity
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project) => (
            <div key={project.id} className={`reveal ${visible ? 'visible' : ''} stagger-2`}>
              <Link href={project.slug} className="group block">
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="grid lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-80 lg:h-[500px] overflow-hidden img-zoom">
                      <Image src={project.image} alt={project.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-6 left-6">
                        <div className="px-4 py-2 bg-[#c9a962] text-white text-sm font-medium rounded-full shadow-lg">
                          {project.status}
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-end justify-between">
                          <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 font-[family-name:var(--font-heading)]">{project.name}</h3>
                            <div className="flex items-center gap-2 text-white/80">
                              <MapPin className="w-4 h-4" />
                              <span>{project.location}</span>
                            </div>
                          </div>
                          <div className="hidden md:block w-16 h-16 relative">
                            <Image src={project.logoPath} alt={`${project.name} Logo`} fill className="object-contain" sizes="64px" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <p className="text-xl text-gray-600 italic mb-8 font-[family-name:var(--font-heading)]">
                        &ldquo;{project.tagline}&rdquo;
                      </p>

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

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.features.map((f) => (
                          <span key={f} className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#1a4d2e]/8 text-[#1a4d2e] text-sm rounded-full font-medium">
                            <TreePine className="w-3.5 h-3.5" />
                            {f}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white rounded-full font-medium group-hover:bg-[#333] transition-colors">
                          View Project Details
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <span className="text-[#c9a962] font-medium group-hover:underline">Book Site Visit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className={`reveal ${visible ? 'visible' : ''} stagger-4 mt-16 text-center`}>
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-lg border border-[#c9a962]/20">
            <Sparkles className="w-5 h-5 text-[#c9a962]" />
            <span className="text-gray-600">More exciting projects coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
