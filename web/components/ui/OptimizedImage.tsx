'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallback?: string;
  blurDataURL?: string;
  lazy?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  fallback = '/placeholder.jpg',
  blurDataURL,
  lazy = true,
  className,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={cn(
        'flex items-center justify-center bg-zinc-100 dark:bg-zinc-800',
        className
      )}>
        <Image
          src={fallback}
          alt={alt || 'Fallback image'}
          className="opacity-50"
          {...props}
        />
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        priority={priority}
        loading={lazy && !priority ? 'lazy' : 'eager'}
        onLoad={handleLoad}
        onError={handleError}
        placeholder={blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL}
        className={cn(
          'duration-700 ease-in-out',
          isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0',
          className
        )}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...props}
      />
    </div>
  );
}
