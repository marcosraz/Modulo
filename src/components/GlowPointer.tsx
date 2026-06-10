"use client";

import { useEffect } from "react";

/**
 * One delegated pointermove listener that feeds --mx/--my CSS variables to
 * .card--interactive elements, powering the cursor-tracking glow defined in
 * globals.css. Renders nothing.
 */
export default function GlowPointer() {
  useEffect(() => {
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const card = (e.target as Element | null)?.closest?.(".card--interactive") as HTMLElement | null;
      if (!card) return;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        card.style.setProperty("--my", `${e.clientY - rect.top}px`);
      });
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
