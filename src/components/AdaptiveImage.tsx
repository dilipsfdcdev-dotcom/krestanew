'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { ImageOff } from 'lucide-react';

interface AdaptiveImageProps extends Omit<ImageProps, 'src' | 'onError'> {
  basePath: string; // Path without extension, e.g., '/images/masterplan/layout'
  fallbackText?: string;
}

const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'svg'];

export default function AdaptiveImage({
  basePath,
  fallbackText = 'Image Coming Soon',
  alt,
  className,
  ...props
}: AdaptiveImageProps) {
  const [currentExtIndex, setCurrentExtIndex] = useState(0);
  const [allFailed, setAllFailed] = useState(false);

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

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
}
