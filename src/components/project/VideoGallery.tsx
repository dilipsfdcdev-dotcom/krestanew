'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, X, Film, VideoOff } from 'lucide-react';
import FallbackImage from '../FallbackImage';
import { meadowBreezeVideos, VIDEO_BASE_PATH, Video } from '@/data/videos';

export default function VideoGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });
  const [selected, setSelected] = useState<Video | null>(null);
  const [error, setError] = useState(false);

  const videoUrl = (file: string) => `${VIDEO_BASE_PATH}/${file}`;

  const [feature, ...rest] = meadowBreezeVideos;

  return (
    <>
      <section
        id="videos"
        ref={ref}
        className="relative py-32 md:py-44 bg-[#050505]"
      >
        <div className="container-edge">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
          >
            <div className="max-w-3xl">
              <p className="text-eyebrow mb-6 flex items-center gap-3">
                <Film size={12} className="text-[#c9a962]" /> Film Archive
              </p>
              <h2 className="text-section text-white">
                Experience the estate
                <span className="italic text-gradient-gold"> in motion.</span>
              </h2>
              <div className="rule-gold mt-8" />
            </div>
            <p className="text-white/55 text-[15px] max-w-md leading-relaxed">
              Drone reels, site walkthroughs and panoramic views. Click any
              tile to play in an immersive theatre.
            </p>
          </motion.div>

          {/* Featured hero */}
          {feature && (
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              onClick={() => {
                setSelected(feature);
                setError(false);
              }}
              className="group relative block w-full rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] mb-5"
            >
              <div className="relative aspect-[21/9]">
                <FallbackImage
                  src={feature.thumbnail}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  fallbackText="Coming Soon"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/30 surface-glass flex items-center justify-center group-hover:bg-[#c9a962] group-hover:border-[#c9a962] transition-all duration-500">
                    <Play className="w-7 h-7 md:w-8 md:h-8 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-10 text-left">
                  <p className="text-[10px] tracking-[0.35em] uppercase text-[#c9a962] mb-2">
                    Featured · {feature.duration}
                  </p>
                  <h3 className="text-2xl md:text-4xl font-serif text-white">
                    {feature.title}
                  </h3>
                </div>
              </div>
            </motion.button>
          )}

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((v, i) => (
              <motion.button
                key={v.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                onClick={() => {
                  setSelected(v);
                  setError(false);
                }}
                className="group text-left rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] hover:border-[#c9a962]/40 transition-colors"
              >
                <div className="relative aspect-video">
                  <FallbackImage
                    src={v.thumbnail}
                    alt={v.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    fallbackText="Coming Soon"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full surface-glass flex items-center justify-center group-hover:bg-[#c9a962] group-hover:border-[#c9a962] transition-all">
                      <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 text-[10px] tracking-widest text-white/80 bg-black/50 px-2 py-1 rounded">
                    {v.duration}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-serif text-lg mb-1 group-hover:text-[#c9a962] transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-white/55 text-[13px] leading-relaxed line-clamp-2">
                    {v.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          <p className="mt-10 text-white/40 text-xs tracking-[0.25em] uppercase">
            {meadowBreezeVideos.length} films in archive
          </p>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050505]/97 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => {
              setSelected(null);
              setError(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => {
                  setSelected(null);
                  setError(false);
                }}
                className="absolute -top-2 -right-2 md:-top-4 md:-right-4 z-10 w-11 h-11 rounded-full surface-glass flex items-center justify-center text-white hover:text-[#c9a962] transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <div className="aspect-video bg-black rounded-2xl overflow-hidden border border-white/10">
                {error ? (
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <VideoOff className="w-12 h-12 text-[#c9a962]/60 mb-4" />
                    <p className="text-[#c9a962] font-serif text-xl mb-2">Film coming soon</p>
                    <code className="text-white/40 text-[11px]">
                      /public{VIDEO_BASE_PATH}/{selected.videoFile}
                    </code>
                  </div>
                ) : (
                  <video
                    src={videoUrl(selected.videoFile)}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full"
                    onError={() => setError(true)}
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <div className="mt-5 text-center">
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#c9a962] mb-1">
                  {selected.duration}
                </p>
                <h3 className="text-white font-serif text-xl md:text-2xl">{selected.title}</h3>
                <p className="text-white/55 text-sm mt-1">{selected.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
