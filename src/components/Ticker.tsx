/**
 * Slow-scrolling technical fact ticker (industrial marquee). Pure CSS
 * animation — the track holds the item list twice and translates -50% for a
 * seamless loop. Pauses on hover; stops entirely under reduced motion.
 */
export default function Ticker({ dict }: { dict: any }) {
  const items: string[] = dict.home.ticker;
  // Duplicate so the -50% translation loops seamlessly.
  const loop = [...items, ...items];

  return (
    <div
      className="ticker border-y border-[var(--border)] bg-[var(--background-secondary)]/60 py-3.5"
      aria-hidden="true"
    >
      <div className="ticker-track">
        {loop.map((item, i) => (
          <span key={i} className="ticker-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
