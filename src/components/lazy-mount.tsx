'use client';

import { useEffect, useRef, useState } from 'react';

type LazyMountProps = {
  children: React.ReactNode;
  rootMargin?: string;
  once?: boolean;
  fallback?: React.ReactNode;
  initiallyVisible?: boolean;
};

export function LazyMount({
  children,
  rootMargin = '400px',
  once = true,
  fallback = null,
  initiallyVisible = false,
}: LazyMountProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(initiallyVisible);

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

  useEffect(() => {
    const element = containerRef.current;
    if (!element || isVisible) return;

    const parseMarginPx = (margin: string): number => {
      const first = margin.trim().split(/\s+/)[0] ?? '0px';
      const match = /(-?\d+(?:\.\d+)?)px/.exec(first);
      return match ? Number(match[1]) : 0;
    };

    const marginPx = parseMarginPx(rootMargin);

    const isInViewport = (el: Element): boolean => {
      const rect = el.getBoundingClientRect();
      const vw = window.innerWidth || document.documentElement.clientWidth;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return (
        rect.bottom >= -marginPx &&
        rect.right >= -marginPx &&
        rect.top <= vh + marginPx &&
        rect.left <= vw + marginPx
      );
    };

    const check = () => {
      if (!isVisible && isInViewport(element)) {
        setIsVisible(true);
        if (once) {
          window.removeEventListener('scroll', onScroll, true);
          window.removeEventListener('resize', onScroll);
        }
      }
    };

    const onScroll = () => check();

    check();
    window.addEventListener('scroll', onScroll, true);
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll, true);
      window.removeEventListener('resize', onScroll);
    };
  }, [isVisible, once, rootMargin]);

  return <div ref={containerRef}>{isVisible ? children : fallback}</div>;
}
