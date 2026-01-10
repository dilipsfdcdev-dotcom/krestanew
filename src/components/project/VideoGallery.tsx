'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, X, Film, ChevronLeft, ChevronRight, VideoOff } from 'lucide-react';
import FallbackImage from '../FallbackImage';
import { meadowBreezeVideos, VIDEO_BASE_PATH, Video } from '@/data/videos';

export default function VideoGallery() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [videoError, setVideoError] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Get full video URL
  const getVideoUrl = (videoFile: string) => `${VIDEO_BASE_PATH}/${videoFile}`;

  return (
    <>
      <section id="videos" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a962]/10 rounded-full filter blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container-luxury relative z-10" ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Film className="w-4 h-4 text-[#c9a962]" />
              <span className="text-white/80 text-sm">Video Gallery</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Experience The Meadow Breeze
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-6"
            />
            <p className="text-white/60 max-w-2xl mx-auto">
              Watch our videos to get a virtual tour of the stunning farmland community
            </p>
          </motion.div>

          {/* Video Carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Navigation Arrows */}
            {meadowBreezeVideos.length > 2 && (
              <>
                <button
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#c9a962] transition-all -ml-6 hidden md:flex"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#c9a962] transition-all -mr-6 hidden md:flex"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Scrollable Container */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {meadowBreezeVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex-shrink-0 w-[350px] md:w-[400px] snap-start"
                >
                  <div
                    onClick={() => { setSelectedVideo(video); setVideoError(false); }}
                    className="group cursor-pointer"
                  >
                    <div className="relative rounded-2xl overflow-hidden mb-4">
                      <div className="aspect-video relative">
                        <FallbackImage
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          fallbackText="Coming Soon"
                        />
                      </div>
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                      {/* Play Button */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-16 h-16 bg-[#c9a962] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-[#c9a962]/30 transition-shadow">
                          <Play className="w-7 h-7 text-white ml-1" fill="white" />
                        </div>
                      </motion.div>
                      {/* Duration */}
                      <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 rounded text-white text-xs">
                        {video.duration}
                      </div>
                    </div>
                    <h3 className="text-white font-semibold mb-1 group-hover:text-[#c9a962] transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-white/60 text-sm">{video.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Video Count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-white/40 text-sm">
              {meadowBreezeVideos.length} videos available
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => { setSelectedVideo(null); setVideoError(false); }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => { setSelectedVideo(null); setVideoError(false); }}
              className="absolute -top-12 right-0 p-2 text-white/60 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video bg-black rounded-xl overflow-hidden">
              {videoError ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                  <VideoOff className="w-16 h-16 text-[#c9a962]/50 mb-4" />
                  <p className="text-[#c9a962] font-medium text-xl">Video Coming Soon</p>
                  <p className="text-white/40 text-sm mt-2">Drop your video file at:</p>
                  <code className="text-[#c9a962]/60 text-xs mt-1">
                    /public{VIDEO_BASE_PATH}/{selectedVideo.videoFile}
                  </code>
                </div>
              ) : (
                <video
                  src={getVideoUrl(selectedVideo.videoFile)}
                  controls
                  autoPlay
                  className="w-full h-full"
                  onError={() => setVideoError(true)}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <div className="mt-4">
              <h3 className="text-white text-xl font-semibold">{selectedVideo.title}</h3>
              <p className="text-white/60">{selectedVideo.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
