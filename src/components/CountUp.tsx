"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** Display value, e.g. "6x", "10+", "24/7" — the leading integer animates. */
  value: string;
  className?: string;
  durationMs?: number;
}

const NUM_RE = /^([^0-9]*)(\d+)(.*)$/;

/**
 * Animates the leading number of a stat value (e.g. "10+" counts 0→10) once
 * it enters the viewport. Falls back to static text when no number is found
 * or the user prefers reduced motion.
 */
export default function CountUp({ value, className = "", durationMs = 1400 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = NUM_RE.exec(value);
  const target = match ? parseInt(match[2], 10) : 0;
  const [display, setDisplay] = useState(match ? 0 : null);

  useEffect(() => {
    if (!match) return;
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / durationMs);
          // easeOutQuart for a satisfying deceleration
          const eased = 1 - Math.pow(1 - p, 4);
          setDisplay(Math.round(eased * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, durationMs]);

  if (!match) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {match[1]}
      {display}
      {match[3]}
    </span>
  );
}
