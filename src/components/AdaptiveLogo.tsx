'use client';

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface AdaptiveLogoProps extends Omit<ImageProps, 'src' | 'onError'> {
  basePath: string; // Path without extension, e.g., '/images/company/logo'
  fallbackText?: string;
}

// Prioritize WebP for better compression (logo.webp is 97% smaller than PNG)
const EXTENSIONS = ['webp', 'png', 'jpg', 'jpeg', 'svg'];

export default function AdaptiveLogo({
  basePath,
  fallbackText = '',
  alt,
  className,
  ...props
}: AdaptiveLogoProps) {
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
      <div className={`flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-lg ${className || ''}`}>
        <span className="text-[#c9a962] text-xs font-medium">{fallbackText || alt}</span>
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
