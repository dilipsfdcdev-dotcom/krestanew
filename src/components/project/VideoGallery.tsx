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
      <section id="videos" className="py-24 md:py-32 bg-[#0a0a0a] relative">
        <div className="container-luxury" ref={ref}>
          <div className={`reveal ${visible ? 'visible' : ''} text-center mb-12`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Film className="w-4 h-4 text-[#c9a962]" />
              <span className="text-white/80 text-sm">Video Gallery</span>
            </div>
            <h2 className="section-title font-bold text-white mb-4 font-[family-name:var(--font-heading)]">Experience The Meadow Breeze</h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-6" />
            <p className="text-white/50 max-w-2xl mx-auto">Watch our videos to get a virtual tour of the stunning farmland community</p>
          </div>

          <div className="relative">
            {meadowBreezeVideos.length > 2 && (
              <>
                <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 rounded-full items-center justify-center text-white hover:bg-[#c9a962] transition-all -ml-6 hidden md:flex" aria-label="Previous"><ChevronLeft className="w-6 h-6" /></button>
                <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 rounded-full items-center justify-center text-white hover:bg-[#c9a962] transition-all -mr-6 hidden md:flex" aria-label="Next"><ChevronRight className="w-6 h-6" /></button>
              </>
            )}

            <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
              {meadowBreezeVideos.map((video) => (
                <div key={video.id} className="flex-shrink-0 w-[320px] md:w-[380px] snap-start">
                  <div onClick={() => { setSelectedVideo(video); setVideoError(false); }} className="group cursor-pointer">
                    <div className="relative rounded-2xl overflow-hidden mb-4">
                      <div className="aspect-video relative">
                        <Image src={video.thumbnail} alt={video.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="380px" />
                      </div>
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-[#c9a962] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-7 h-7 text-white ml-1" fill="white" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 rounded text-white text-xs">{video.duration}</div>
                    </div>
                    <h3 className="text-white font-semibold mb-1 group-hover:text-[#c9a962] transition-colors">{video.title}</h3>
                    <p className="text-white/50 text-sm">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`reveal ${visible ? 'visible' : ''} mt-8 text-center`}>
            <p className="text-white/30 text-sm">{meadowBreezeVideos.length} videos available</p>
          </div>
        </div>
      </section>

      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => { setSelectedVideo(null); setVideoError(false); }}>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => { setSelectedVideo(null); setVideoError(false); }} className="absolute -top-12 right-0 p-2 text-white/60 hover:text-white transition-colors" aria-label="Close"><X className="w-8 h-8" /></button>
            <div className="aspect-video bg-black rounded-xl overflow-hidden">
              {videoError ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                  <VideoOff className="w-16 h-16 text-[#c9a962]/50 mb-4" />
                  <p className="text-[#c9a962] font-medium text-xl">Video Coming Soon</p>
                  <p className="text-white/40 text-sm mt-2">Drop your video file at:</p>
                  <code className="text-[#c9a962]/60 text-xs mt-1">/public{VIDEO_BASE_PATH}/{selectedVideo.videoFile}</code>
                </div>
              ) : (
                <video src={getVideoUrl(selectedVideo.videoFile)} controls autoPlay className="w-full h-full" onError={() => setVideoError(true)}>Your browser does not support the video tag.</video>
              )}
            </div>
            <div className="mt-4">
              <h3 className="text-white text-xl font-semibold">{selectedVideo.title}</h3>
              <p className="text-white/50">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
