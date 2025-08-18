'use client';

import { useEffect, useRef, useState } from 'react';

type LazyMountProps = {
  children: React.ReactNode;
  rootMargin?: string;
  once?: boolean;
  fallback?: React.ReactNode;
};

export function LazyMount({
  children,
  rootMargin = '400px',
  once = true,
  fallback = null,
}: LazyMountProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || isVisible) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        }
      },
      { root: null, rootMargin, threshold: 0 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible, once, rootMargin]);

  return <div ref={containerRef}>{isVisible ? children : fallback}</div>;
}
