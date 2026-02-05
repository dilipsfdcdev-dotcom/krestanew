'use client';

import { useState, useRef, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { ImageOff } from 'lucide-react';

interface AdaptiveImageProps extends Omit<ImageProps, 'src' | 'onError'> {
  basePath: string; // Path without extension, e.g., '/images/masterplan/layout'
  fallbackText?: string;
  eager?: boolean; // Set to true to disable lazy loading (for above-the-fold images)
}

// Prioritize WebP for better compression, then fall back to other formats
const EXTENSIONS = ['webp', 'jpg', 'jpeg', 'png', 'svg'];

export default function AdaptiveImage({
  basePath,
  fallbackText = 'Image Coming Soon',
  alt,
  className,
  eager = false,
  ...props
}: AdaptiveImageProps) {
  const [currentExtIndex, setCurrentExtIndex] = useState(0);
  const [allFailed, setAllFailed] = useState(false);
  const [isVisible, setIsVisible] = useState(eager);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (eager) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Start loading 200px before visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [eager]);

  const currentSrc = `${basePath}.${EXTENSIONS[currentExtIndex]}`;

  const handleError = () => {
    if (currentExtIndex < EXTENSIONS.length - 1) {
      setCurrentExtIndex(prev => prev + 1);
    } else {
      setAllFailed(true);
    }
  };

  if (allFailed) {
    return (
      <div className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] ${className || ''}`}>
        <ImageOff className="w-12 h-12 text-[#c9a962]/50 mb-3" />
        <p className="text-[#c9a962] font-medium text-lg">{fallbackText}</p>
        <p className="text-white/40 text-sm mt-1">{alt}</p>
      </div>
    );
  }

  // Show placeholder until visible
  if (!isVisible) {
    return (
      <div
        ref={containerRef}
        className={`absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse ${className || ''}`}
      />
    );
  }

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading={eager ? 'eager' : 'lazy'}
      sizes={props.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
    />
  );
}
