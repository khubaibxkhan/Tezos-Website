"use client";

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, ...props }) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (!inView || !src) return;

    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
    };
  }, [inView, src]);

  return (
    <img
      ref={ref}
      src={imageSrc || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'} // Tiny transparent placeholder
      alt={alt}
      {...props}
      style={{
        opacity: imageSrc ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
        ...props.style,
      }}
    />
  );
};

export default LazyImage;