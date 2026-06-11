"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  name: string;
  /** Localized accessible labels */
  labels: { close: string; prev: string; next: string; zoom: string };
}

/**
 * Product image gallery: thumbnails swap the main image, clicking the main
 * image opens a fullscreen lightbox with keyboard navigation (Esc/←/→).
 */
export default function ProductGallery({ images, name, labels }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const prev = useCallback(
    () => setActive((a) => (a - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setActive((a) => (a + 1) % images.length),
    [images.length]
  );

  // Lightbox: Esc closes, arrows navigate, body scroll locked while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, prev, next]);

  return (
    <div className="relative">
      {/* Main image */}
      <div className="tech-frame">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={labels.zoom}
          className="relative block w-full aspect-[4/3] image-well rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border)] cursor-zoom-in group"
        >
          <Image
            src={images[active]}
            alt={`${name} – ${active + 1}/${images.length}`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain p-8 transition-transform duration-300 group-hover:scale-[1.02]"
            priority
          />
          {/* Zoom hint */}
          <span className="absolute bottom-3 right-3 inline-flex items-center justify-center w-9 h-9 rounded-[var(--radius-base)] bg-[var(--background)]/75 backdrop-blur-sm border border-[var(--border)] text-[var(--foreground)] opacity-70 group-hover:opacity-100 transition-opacity">
            <svg className="w-4.5 h-4.5 w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m-3-3h6" />
            </svg>
          </span>
        </button>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-4">
          {images.map((img, idx) => (
            <button
              key={img}
              type="button"
              onClick={() => setActive(idx)}
              aria-label={`${name} ${idx + 1}/${images.length}`}
              aria-current={idx === active ? "true" : undefined}
              className={`relative aspect-[4/3] image-well rounded-[var(--radius-base)] overflow-hidden border transition-colors cursor-pointer ${
                idx === active
                  ? "border-[var(--modulo-accent)]"
                  : "border-[var(--border)] hover:border-[var(--border-strong)]"
              }`}
            >
              <Image
                src={img}
                alt=""
                fill
                sizes="(min-width: 1024px) 17vw, 33vw"
                className="object-contain p-2"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={name}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={labels.close}
            autoFocus
            className="absolute top-4 right-4 z-10 w-11 h-11 flex items-center justify-center rounded-[var(--radius-base)] bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev / Next */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label={labels.prev}
                className="absolute left-3 sm:left-6 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label={labels.next}
                className="absolute right-3 sm:right-6 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image */}
          <div
            className="relative w-[92vw] h-[82vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[active]}
              alt={`${name} – ${active + 1}/${images.length}`}
              fill
              sizes="92vw"
              className="object-contain"
            />
          </div>

          {/* Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-sm text-white/80 tabular-nums">
              {active + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
