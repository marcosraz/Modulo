"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  /** Stagger delay in ms applied via the --reveal-delay CSS variable. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li";
}

/**
 * Wraps content in a scroll-triggered fade/translate reveal. Uses
 * IntersectionObserver so below-the-fold content animates when it enters the
 * viewport (not on initial load). The `.reveal` CSS rule is neutralised under
 * `prefers-reduced-motion`, and we also skip observing entirely in that case.
 */
export default function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Under prefers-reduced-motion the `.reveal` CSS is neutralised (content is
    // always visible via an !important override), so we can simply observe in
    // all cases — no synchronous setState needed.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement & HTMLLIElement>}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? ({ ["--reveal-delay" as string]: `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
