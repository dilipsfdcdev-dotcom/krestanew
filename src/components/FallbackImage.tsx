'use client';

import { useState, useRef, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { ImageOff } from 'lucide-react';

interface FallbackImageProps extends Omit<ImageProps, 'onError'> {
  fallbackText?: string;
  eager?: boolean; // Set to true to disable lazy loading
}

export default function FallbackImage({
  fallbackText = 'Coming Soon',
  alt,
  className,
  eager = false,
  ...props
}: FallbackImageProps) {
  const [hasError, setHasError] = useState(false);
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
      { rootMargin: '200px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [eager]);

  if (hasError) {
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
        className={`absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 animate-pulse ${className || ''}`}
      />
    );
  }

  return (
    <Image
      {...props}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      loading={eager ? 'eager' : 'lazy'}
      sizes={props.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
    />
  );
}
