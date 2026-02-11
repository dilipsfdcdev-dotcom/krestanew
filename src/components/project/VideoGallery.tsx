'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Play, X, Film, ChevronLeft, ChevronRight, VideoOff } from 'lucide-react';
import { meadowBreezeVideos, VIDEO_BASE_PATH, Video } from '@/data/videos';
import { useReveal } from '@/hooks/useReveal';

export default function VideoGallery() {
  const { ref, visible } = useReveal();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [videoError, setVideoError] = useState(false);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -400 : 400, behavior: 'smooth' });
  };

  const getVideoUrl = (file: string) => `${VIDEO_BASE_PATH}/${file}`;

  return (
    <>
      <section id="videos" className="py-28 md:py-40 bg-[#161616] relative">
        <div className="container-luxury" ref={ref}>
          <div className={`reveal ${visible ? 'visible' : ''} mb-12`}>
            <span className="label-gold mb-6 block">Video Gallery</span>
            <h2 className="heading-section text-white mb-6 font-[family-name:var(--font-heading)]">
              Experience{' '}
              <span className="text-gold-gradient italic">The Meadow Breeze</span>
            </h2>
            <div className="divider-gold mb-8" />
            <p className="text-white/40 max-w-2xl">Watch our videos to get a virtual tour of the stunning farmland community</p>
          </div>

          <div className="relative">
            {meadowBreezeVideos.length > 2 && (
              <>
                <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 glass rounded flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-[#0c0c0c] transition-all -ml-5 hidden md:flex" aria-label="Previous"><ChevronLeft className="w-5 h-5" /></button>
                <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 glass rounded flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-[#0c0c0c] transition-all -mr-5 hidden md:flex" aria-label="Next"><ChevronRight className="w-5 h-5" /></button>
              </>
            )}

            <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
              {meadowBreezeVideos.map((video) => (
                <div key={video.id} className="flex-shrink-0 w-[300px] md:w-[360px] snap-start">
                  <div onClick={() => { setSelectedVideo(video); setVideoError(false); }} className="group cursor-pointer">
                    <div className="relative rounded-lg overflow-hidden mb-3">
                      <div className="aspect-video relative">
                        <Image src={video.thumbnail} alt={video.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="360px" />
                      </div>
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-[#d4af37] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-[#0c0c0c] ml-0.5" fill="#0c0c0c" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/60 rounded text-white text-[10px]">{video.duration}</div>
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-[#d4af37] transition-colors">{video.title}</h3>
                    <p className="text-white/30 text-xs">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`reveal ${visible ? 'visible' : ''} mt-8 text-center`}>
            <p className="text-white/20 text-sm">{meadowBreezeVideos.length} videos available</p>
          </div>
        </div>
      </section>

      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-[#0c0c0c]/98 flex items-center justify-center p-4" onClick={() => { setSelectedVideo(null); setVideoError(false); }}>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => { setSelectedVideo(null); setVideoError(false); }} className="absolute -top-12 right-0 p-2 text-white/40 hover:text-white transition-colors" aria-label="Close"><X className="w-7 h-7" /></button>
            <div className="aspect-video bg-[#0c0c0c] rounded-lg overflow-hidden border border-white/5">
              {videoError ? (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <VideoOff className="w-14 h-14 text-[#d4af37]/30 mb-4" />
                  <p className="text-[#d4af37] font-medium text-lg">Video Coming Soon</p>
                  <p className="text-white/20 text-sm mt-2">Drop your video file at:</p>
                  <code className="text-[#d4af37]/40 text-xs mt-1">/public{VIDEO_BASE_PATH}/{selectedVideo.videoFile}</code>
                </div>
              ) : (
                <video src={getVideoUrl(selectedVideo.videoFile)} controls autoPlay className="w-full h-full" onError={() => setVideoError(true)}>Your browser does not support the video tag.</video>
              )}
            </div>
            <div className="mt-4">
              <h3 className="text-white text-lg font-semibold">{selectedVideo.title}</h3>
              <p className="text-white/40 text-sm">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
