'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { Maximize2, X, MapPin, Route, TreePine, Home, Compass } from 'lucide-react';

const planFeatures = [
  { icon: Home, label: '124 Premium Plots' },
  { icon: Route, label: '60ft · 40ft · 33ft Roads' },
  { icon: TreePine, label: 'Forest & Green Buffer' },
  { icon: MapPin, label: 'Premium Villa Section' },
  { icon: Compass, label: 'Walking Trails' },
];

const features = [
  'Wide internal roads — 60 ft &amp; 40 ft for easy access',
  'Forest area surrounding the community for privacy',
  'Premium villa section — designated premium plots',
  'Natural boulder preservation as landmarks',
  'Walking trails throughout the property',
  'Strategic entrance with gated security',
  'Green buffer zones with extensive plantation',
];

const stats = [
  { label: 'Total Plot Area', value: '179,103 sq.yd' },
  { label: 'Roads Area', value: '57,558 sq.yd' },
  { label: 'Plots', value: '124' },
  { label: 'Plants / Plot', value: '600–900' },
];

const LAYOUT_WEBP = '/images/projects/meadow-breeze/masterplan/layout.webp';
const LAYOUT_JPG = '/images/projects/meadow-breeze/masterplan/layout.jpg';

export default function MasterPlan() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });
  const [src, setSrc] = useState(LAYOUT_WEBP);
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="masterplan"
        ref={ref}
        className="relative py-32 md:py-44 bg-[#050505] noise"
      >
        <div className="container-edge">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          >
            <div className="max-w-3xl">
              <p className="text-eyebrow mb-6">Master Plan · 50-Acre Layout</p>
              <h2 className="text-section text-white">
                Composed by
                <span className="italic text-gradient-gold"> S&amp;S Architects.</span>
              </h2>
              <div className="rule-gold mt-8" />
            </div>
            <p className="text-white/55 text-[15px] max-w-md leading-relaxed">
              Thoughtfully laid out for optimal space, forest surroundings,
              and roads that accommodate privacy as well as access.
            </p>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="grid grid-cols-2 md:grid-cols-4 rounded-3xl border border-white/10 overflow-hidden mb-10"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`p-6 md:p-8 bg-[#0a0a0a] ${
                  i < stats.length - 1 ? 'md:border-r border-white/10' : ''
                } ${i % 2 === 0 ? 'border-r border-white/10 md:border-r' : ''} ${
                  i < 2 ? 'border-b md:border-b-0 border-white/10' : ''
                }`}
              >
                <div className="text-[10px] tracking-[0.35em] uppercase text-white/45 mb-2">
                  {s.label}
                </div>
                <div className="text-2xl md:text-3xl font-serif text-[#c9a962]">
                  {s.value}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Plan image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a]"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={src}
                alt="The Meadow Breeze Master Plan"
                fill
                sizes="(min-width: 1280px) 1500px, 100vw"
                className="object-contain"
                onError={() => setSrc(LAYOUT_JPG)}
              />
            </div>

            <button
              onClick={() => setOpen(true)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full surface-glass flex items-center justify-center text-white hover:text-[#c9a962] transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Open fullscreen"
            >
              <Maximize2 size={16} />
            </button>

            <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white/70 text-sm tracking-wide">
                Designed by{' '}
                <span className="text-[#c9a962]">S&amp;S Architects and Infra</span>
              </p>
            </div>
          </motion.div>

          {/* Feature icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-10"
          >
            {planFeatures.map((f, i) => (
              <div
                key={f.label}
                className="surface-card surface-card-hover p-5 md:p-6 text-center"
              >
                <f.icon className="w-5 h-5 text-[#c9a962] mx-auto mb-3" />
                <p className="text-white/80 text-[13px]">{f.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 surface-card p-8 md:p-10"
          >
            <p className="text-eyebrow mb-6">Plan Features</p>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-3">
              {features.map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#c9a962] shrink-0" />
                  <span
                    className="text-white/75 text-sm"
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050505]/97 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              className="relative w-full max-w-7xl h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt="The Meadow Breeze Master Plan"
                fill
                sizes="100vw"
                className="object-contain"
              />
              <button
                onClick={() => setOpen(false)}
                className="absolute -top-2 -right-2 md:top-4 md:right-4 w-11 h-11 rounded-full surface-glass flex items-center justify-center text-white hover:text-[#c9a962] transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
