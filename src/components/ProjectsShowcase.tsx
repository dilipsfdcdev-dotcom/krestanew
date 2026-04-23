'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';

const stats = [
  { label: 'Plots', value: '124' },
  { label: 'Plants / Plot', value: '600–900' },
  { label: 'Area', value: '179,103 sq.yd' },
  { label: 'Status', value: 'Now Booking' },
];

export default function ProjectsShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });
  const [hovering, setHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const onEnter = () => {
    setHovering(true);
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  };
  const onLeave = () => {
    setHovering(false);
    videoRef.current?.pause();
  };

  return (
    <section id="projects" ref={ref} className="relative py-32 md:py-44 bg-[#050505]">
      <div className="container-edge">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-eyebrow mb-5">Portfolio · 01</p>
            <h2 className="text-section text-white max-w-2xl">
              A single, uncompromising project
              <span className="italic text-gradient-gold"> at a time.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md">
            Our current focus is The Meadow Breeze — a fifty-acre gated estate in
            Peepal Pahad, Choutuppal. More developments follow when the work
            deserves it.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/projects/meadow-breeze"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className="group block relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a]"
          >
            <div className="relative aspect-[16/10] md:aspect-[21/9]">
              <Image
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=75&w=1800"
                alt="The Meadow Breeze"
                fill
                sizes="(min-width: 1280px) 1600px, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <video
                ref={videoRef}
                className={`media-full transition-opacity duration-700 ${
                  hovering ? 'opacity-100' : 'opacity-0'
                }`}
                src="/videos/projects/meadow-breeze/Site Drone View 1.mp4"
                muted
                loop
                playsInline
                preload="none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute top-6 left-6 flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-white/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a962]" />
                Now Booking
              </div>

              <div className="absolute top-6 right-6 w-12 h-12 rounded-full surface-glass flex items-center justify-center text-white transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 md:p-10">
                <div className="flex items-center gap-2 text-white/70 text-[12px] tracking-[0.25em] uppercase mb-4">
                  <MapPin size={14} className="text-[#c9a962]" />
                  Peepal Pahad · Choutuppal
                </div>
                <h3 className="text-hero text-white">
                  The Meadow <span className="italic text-gradient-gold">Breeze</span>
                </h3>
                <p className="mt-4 max-w-xl text-white/70 text-[15px] leading-relaxed">
                  Where the hills whisper peace and the breeze carries serenity — a
                  fifty-acre living estate at the foothills of Rachakonda.
                </p>
              </div>
            </div>

            {/* Stat bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-6 py-6 md:px-10 md:py-8 ${
                    i < stats.length - 1 ? 'md:border-r border-white/10' : ''
                  } ${i % 2 === 0 ? 'border-r border-white/10 md:border-r' : ''} ${
                    i < 2 ? 'border-b md:border-b-0 border-white/10' : ''
                  }`}
                >
                  <div className="text-[10px] tracking-[0.35em] uppercase text-white/45 mb-2">
                    {s.label}
                  </div>
                  <div className="text-2xl md:text-3xl font-serif text-white">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          </Link>
        </motion.div>

        {/* Future whisper */}
        <div className="mt-16 flex items-center gap-4 text-white/45 text-[12px] tracking-[0.3em] uppercase">
          <span className="h-px flex-1 bg-white/10" />
          More developments in composition
          <span className="h-px flex-1 bg-white/10" />
        </div>
      </div>
    </section>
  );
}
