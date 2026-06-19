'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

interface CounterProps {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  /** Render with thousands separators (e.g. 179,103). */
  separator?: boolean;
  className?: string;
}

/**
 * Counts up to `to` when it scrolls into view. Falls back to the final
 * value immediately when reduced motion is requested.
 */
export default function Counter({
  to,
  duration = 1.8,
  prefix = '',
  suffix = '',
  separator = false,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    // Reduced motion → snap to the final value on the first frame (dur = 0).
    const dur = reduce ? 0 : duration;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const p = dur <= 0 ? 1 : Math.min(elapsed / (dur * 1000), 1);
      // easeOutExpo
      const eased = p >= 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setValue(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduce]);

  const display = separator ? value.toLocaleString('en-IN') : value.toString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
