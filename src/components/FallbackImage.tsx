'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { ImageOff } from 'lucide-react';

interface FallbackImageProps extends Omit<ImageProps, 'onError'> {
  fallbackText?: string;
}

export default function FallbackImage({
  fallbackText = 'Coming Soon',
  alt,
  className,
  ...props
}: FallbackImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
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
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
