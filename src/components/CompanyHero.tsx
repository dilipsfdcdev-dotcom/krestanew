'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, ArrowRight, Leaf } from 'lucide-react';
import Link from 'next/link';
import AdaptiveLogo from './AdaptiveLogo';
import Counter from './ui/Counter';

// A small, fixed set of drifting embers — far lighter than the old 30-particle field.
const embers = [
  { left: 12, top: 30, d: 7, delay: 0.2 },
  { left: 28, top: 68, d: 9, delay: 1.4 },
  { left: 44, top: 22, d: 8, delay: 0.8 },
  { left: 60, top: 74, d: 10, delay: 2.1 },
  { left: 73, top: 38, d: 7.5, delay: 1.1 },
  { left: 86, top: 60, d: 9.5, delay: 0.5 },
  { left: 20, top: 50, d: 8.5, delay: 1.8 },
  { left: 92, top: 20, d: 7, delay: 2.6 },
  { left: 6, top: 80, d: 10, delay: 0.9 },
  { left: 52, top: 88, d: 8, delay: 1.5 },
  { left: 38, top: 12, d: 9, delay: 2.3 },
  { left: 67, top: 8, d: 7.5, delay: 0.4 },
];

const stats = [
  { value: 50, suffix: '+', label: 'Acres of Green' },
  { value: 124, suffix: '', label: 'Premium Plots' },
  { value: 900, prefix: '', suffix: '', label: 'Plants / Plot', lead: '600–' },
  { value: 2024, suffix: '', label: 'Established' },
];

export default function CompanyHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 1.12]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Cinematic drone-footage background of the actual site */}
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
            src="/videos/projects/meadow-breeze/Site Drone View 3.mp4"
            type="video/mp4"
          />
        </video>
        {/* Legibility + brand wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/85 via-[#0d2818]/70 to-[#0a0a0a]/95" />
        <div className="absolute inset-0 bg-spotlight" />

        {/* Transform-only gold glows (cheap to composite) */}
        {!reduce && (
          <>
            <motion.div
              className="absolute left-[15%] top-1/4 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(201,169,98,0.18),transparent_70%)]"
              animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-1/4 right-[15%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(45,106,79,0.22),transparent_70%)]"
              animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Drifting embers */}
            <div className="absolute inset-0">
              {embers.map((e, i) => (
                <motion.span
                  key={i}
                  className="absolute h-1 w-1 rounded-full bg-[#e8d5a3]/60"
                  style={{ left: `${e.left}%`, top: `${e.top}%` }}
                  animate={{ y: [0, -36, 0], opacity: [0.15, 0.7, 0.15] }}
                  transition={{ duration: e.d, repeat: Infinity, delay: e.delay, ease: 'easeInOut' }}
                />
              ))}
            </div>
          </>
        )}
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="container-luxury relative z-10 px-4 pt-24 text-center"
      >
        {/* Logo with animated rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="relative inline-block">
            {!reduce && (
              <motion.div
                className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a962]/30"
                animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              />
            )}
            <div className="relative h-24 w-24 md:h-28 md:w-28">
              <AdaptiveLogo
                basePath="/images/company/logo"
                alt="Kresta Logo"
                fill
                sizes="112px"
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <h1 className="hero-title font-bold tracking-tight">
            <span className="text-shimmer">KRESTA</span>
          </h1>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.3em] text-[#c9a962] md:text-sm">
            Infra &amp; Developers Pvt. Ltd.
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mx-auto my-7 h-px w-32 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="font-[family-name:var(--font-heading)] text-2xl font-light text-white/90 md:text-3xl lg:text-4xl"
        >
          Crafting Luxury, Building Dreams
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mx-auto mt-5 max-w-2xl text-base text-white/60 md:text-lg"
        >
          Premium farmland estates where every plot becomes a living forest —
          600 to 900 trees, 360° mountain views, and a legacy that grows
          greener every year.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="#projects"
            className="btn-gold group inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium text-white"
          >
            Explore The Meadow Breeze
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all hover:border-[#c9a962]/60 hover:bg-white/10"
          >
            <Leaf className="h-4 w-4 text-[#c9a962]" />
            Book a Site Visit
          </Link>
        </motion.div>

        {/* Glass stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25 }}
          className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-5 text-center">
              <p className="text-2xl font-bold text-[#e8d5a3] md:text-3xl">
                {s.lead}
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-white/55">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <Link
          href="#about"
          className="group flex flex-col items-center text-white/55 transition-colors hover:text-[#c9a962]"
        >
          <span className="mb-2 text-[10px] uppercase tracking-[0.2em]">Discover More</span>
          <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={22} />
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
}
