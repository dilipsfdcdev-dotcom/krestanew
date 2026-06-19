'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, MapPin, TreePine, Mountain, Shield, ArrowRight } from 'lucide-react';

const highlights = [
  { icon: TreePine, text: '600–900 Plants / Plot' },
  { icon: Mountain, text: '360° Mountain Views' },
  { icon: Shield, text: 'Gated Community' },
];

export default function ProjectHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Real drone footage of the site */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/projects/meadow-breeze/masterplan/layout.jpg"
        >
          <source
            src="/videos/projects/meadow-breeze/Site Drone View 1.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0d2818]/65 to-[#0a0a0a]/95" />
        <div className="absolute inset-0 bg-spotlight" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="container-luxury relative z-10 px-4 pt-24 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c9a962]/30 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[#e8d5a3] backdrop-blur-sm"
        >
          Now Booking · Phase I
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-title font-bold text-white"
        >
          The Meadow Breeze
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-2 text-sm font-medium uppercase tracking-[0.3em] text-[#c9a962] md:text-base"
        >
          A Kresta Signature Estate
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mx-auto my-7 h-px w-32 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto max-w-2xl font-[family-name:var(--font-heading)] text-xl font-light italic text-white/90 md:text-2xl lg:text-3xl"
        >
          “Where the hills whisper peace and the breeze carries serenity.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-6 flex items-center justify-center gap-2 text-white/70"
        >
          <MapPin className="h-5 w-5 text-[#c9a962]" />
          <span className="text-sm md:text-base">
            Peepal Pahad, Choutuppal · Yadadri Bhuvanagiri
          </span>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-9 flex flex-wrap justify-center gap-3"
        >
          {highlights.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-sm transition-all hover:border-[#c9a962]/50 hover:bg-white/15"
            >
              <item.icon className="h-5 w-5 text-[#c9a962]" />
              <span className="font-medium text-white">{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#overview"
            className="btn-gold group inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium text-white"
          >
            Explore the Estate
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://wa.me/919888932555?text=Hi%2C%20I%27m%20interested%20in%20The%20Meadow%20Breeze%20project.%20Please%20share%20more%20details."
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all hover:border-[#c9a962]/60 hover:bg-white/10"
          >
            Book Site Visit
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <a
          href="#overview"
          className="flex flex-col items-center text-white/55 transition-colors hover:text-[#c9a962]"
        >
          <span className="mb-2 text-[10px] uppercase tracking-[0.2em]">Scroll to Explore</span>
          <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={22} />
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}
