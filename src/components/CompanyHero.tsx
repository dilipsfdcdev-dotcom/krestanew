'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

const HERO_POSTER = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=75&w=1920';
const HERO_VIDEO = '/videos/projects/meadow-breeze/Site Drone View 3.mp4';

const credits = [
  '50 Acre Estate',
  'Choutuppal · Telangana',
  '600–900 Plants / Plot',
  '360° Mountain Views',
  'Gated Community',
  'Organic Farming',
];

export default function CompanyHero() {
  const ref = useRef<HTMLDivElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Defer video load until after first paint so it doesn't fight with the LCP poster
  useEffect(() => {
    const t = window.setTimeout(() => setVideoReady(true), 900);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#050505] noise"
    >
      {/* Media layer */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={HERO_POSTER}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {videoReady && (
          <video
            className="media-full"
            src={HERO_VIDEO}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={HERO_POSTER}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.75)_100%)]" />
      </motion.div>

      {/* Corner meta */}
      <div className="absolute top-28 left-6 md:left-10 z-10 hidden md:block">
        <div className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/50">
          <span className="w-6 h-px bg-[#c9a962]" />
          <span>Est. 2024 · Hyderabad</span>
        </div>
      </div>
      <div className="absolute top-28 right-6 md:right-10 z-10 hidden md:block text-right">
        <div className="text-[11px] tracking-[0.3em] uppercase text-white/50">
          Reel · 00:00 / 00:32
        </div>
      </div>

      {/* Hero content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 min-h-[100svh] flex flex-col justify-end pb-28 md:pb-32"
      >
        <div className="container-edge">
          <div className="max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-eyebrow mb-6"
            >
              Kresta Infra &amp; Developers
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-display text-white"
            >
              Land, <span className="italic text-gradient-gold">reimagined</span>
              <br />
              as heirloom.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 max-w-xl text-[15px] md:text-base text-white/70 leading-relaxed"
            >
              Gated farmland estates and luxury residences where architecture,
              topography and horticulture are composed as a single work. Begin with
              the Meadow Breeze — fifty acres at the foothills of Rachakonda.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link href="#projects" className="btn-primary">
                Explore Projects
                <span aria-hidden>→</span>
              </Link>
              <Link href="#contact" className="btn-ghost">
                Schedule a Site Visit
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Credits marquee */}
      <div className="absolute bottom-0 inset-x-0 z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="overflow-hidden py-4">
          <div className="marquee-track">
            {[...credits, ...credits].map((c, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-4 text-[11px] tracking-[0.35em] uppercase text-white/55 whitespace-nowrap"
              >
                <span className="w-1 h-1 rounded-full bg-[#c9a962]" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-20 right-6 md:right-10 z-10 hidden md:flex flex-col items-center gap-3 text-[10px] tracking-[0.35em] uppercase text-white/50"
      >
        <span className="rotate-90 origin-center">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.span>
      </motion.div>
    </section>
  );
}
