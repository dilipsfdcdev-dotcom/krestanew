'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, MapPin } from 'lucide-react';

const POSTER =
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=75&w=1920';
const VIDEO = '/videos/projects/meadow-breeze/Site Drone View 1.mp4';

export default function ProjectHero() {
  const ref = useRef<HTMLDivElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const t = window.setTimeout(() => setVideoReady(true), 1000);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#050505] noise"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={POSTER}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {videoReady && (
          <video
            className="media-full"
            src={VIDEO}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={POSTER}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.75)_100%)]" />
      </motion.div>

      <div className="absolute top-28 left-6 md:left-10 z-10 hidden md:flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/50">
        <span className="w-6 h-px bg-[#c9a962]" />
        Project 01 · Meadow Breeze
      </div>

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 min-h-[100svh] flex flex-col justify-end pb-28 md:pb-36"
      >
        <div className="container-edge">
          <div className="max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-eyebrow mb-6"
            >
              A Distinguished Farmland Estate · 50 Acres
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-display text-white"
            >
              The Meadow
              <br />
              <span className="italic text-gradient-gold">Breeze.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 max-w-xl text-[15px] md:text-base italic text-white/75 leading-relaxed"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Where the hills whisper peace and the breeze carries serenity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95 }}
              className="mt-6 flex flex-wrap items-center gap-5 text-white/60 text-sm"
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#c9a962]" />
                Peepal Pahad · Choutuppal
              </div>
              <span className="hidden md:inline h-4 w-px bg-white/20" />
              <span>Yadadri Bhuvanagiri District</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link href="#overview" className="btn-primary">
                Begin the Tour
                <span aria-hidden>↓</span>
              </Link>
              <a
                href="https://wa.me/919888932555?text=Hi%2C%20I%27m%20interested%20in%20The%20Meadow%20Breeze."
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Book a Site Visit
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 right-6 md:right-10 z-10 hidden md:flex flex-col items-center gap-3 text-[10px] tracking-[0.35em] uppercase text-white/50"
      >
        <span className="rotate-90 origin-center">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.span>
      </motion.div>
    </section>
  );
}
