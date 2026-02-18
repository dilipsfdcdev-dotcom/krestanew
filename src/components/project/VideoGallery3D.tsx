'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { meadowBreezeVideos, VIDEO_BASE_PATH } from '@/data/videos';
import Image from 'next/image';

export default function VideoGallery3D() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [scrollPos, setScrollPos] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 320;
    const newPos = dir === 'left' ? scrollPos - amount : scrollPos + amount;
    scrollRef.current.scrollTo({ left: newPos, behavior: 'smooth' });
    setScrollPos(newPos);
  };

  const activeVideoData = activeVideo !== null ? meadowBreezeVideos.find((v) => v.id === activeVideo) : null;

  return (
    <>
      <section id="videos" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0c0c14] to-[#0a0a0f]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-[#c9a962]/60 text-xs tracking-[0.3em] uppercase mb-4">Virtual Tour</p>
            <h2 className="section-title font-bold text-gradient-gold font-[family-name:var(--font-heading)]">
              Experience The Meadow Breeze
            </h2>
          </motion.div>

          {/* Scroll controls */}
          <div className="relative">
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 glass rounded-full flex items-center justify-center text-white/50 hover:text-[#c9a962] transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 glass rounded-full flex items-center justify-center text-white/50 hover:text-[#c9a962] transition-colors"
            >
              <ChevronRight size={20} />
            </button>

            {/* Video cards */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide px-8 py-4 snap-x"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {meadowBreezeVideos.map((video, i) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  onClick={() => setActiveVideo(video.id)}
                  className="flex-shrink-0 w-72 md:w-80 rounded-2xl overflow-hidden glass cursor-pointer group snap-start hover:glow-gold transition-all duration-500"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="320px"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#c9a962]/90 text-black group-hover:scale-110 transition-transform">
                        <Play size={20} className="ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 glass rounded-full text-white/70 text-[10px]">
                      <Clock size={10} />
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-white/80 text-sm font-semibold mb-1 line-clamp-1">{video.title}</h4>
                    <p className="text-white/30 text-xs line-clamp-1">{video.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideoData && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 p-2 glass rounded-full text-white/70 hover:text-white z-10"
          >
            <X size={24} />
          </button>
          <div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={`${VIDEO_BASE_PATH}/${activeVideoData.videoFile}`}
              controls
              autoPlay
              className="w-full h-full object-contain bg-black"
            >
              <p className="text-white/50 text-center p-8">
                Video coming soon — {activeVideoData.title}
              </p>
            </video>
          </div>
        </div>
      )}
    </>
  );
}
