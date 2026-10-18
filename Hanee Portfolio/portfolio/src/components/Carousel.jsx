import { useEffect, useRef, useState } from "react";

const INTERVAL_MS = 3500;

// Scroll one card forward/back, wrapping around at either end.
function advance(track, direction) {
  if (!track) return;
  const card = track.firstElementChild;
  const step = card ? card.getBoundingClientRect().width + 16 : 300;
  const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  const atStart = track.scrollLeft <= 4;
  if (direction > 0 && atEnd) track.scrollTo({ left: 0, behavior: "smooth" });
  else if (direction < 0 && atStart) track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
  else track.scrollBy({ left: direction * step, behavior: "smooth" });
}

// Horizontal carousel that advances on its own every few seconds and loops.
// It pauses while the pointer is over it or it has keyboard focus, has a
// pause/play button, and doesn't auto-move for people who prefer reduced motion.
function Carousel({ label, children }) {
  const trackRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [paused, setPaused] = useState(
    () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
  );

  const go = (direction) => advance(trackRef.current, direction);

  useEffect(() => {
    if (paused || hovered) return undefined;
    const id = setInterval(() => advance(trackRef.current, 1), INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, hovered]);

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div className="carousel-controls">
        <button
          type="button"
          className="icon-button carousel-pause"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play carousel" : "Pause carousel"}
        >
          {paused ? "▶" : "❚❚"}
        </button>
        <button type="button" className="icon-button" onClick={() => go(-1)} aria-label="Previous">←</button>
        <button type="button" className="icon-button" onClick={() => go(1)} aria-label="Next">→</button>
      </div>
      <ul className="carousel-track" ref={trackRef} tabIndex={0}>
        {children.map((child, i) => (
          <li className="carousel-slide" key={i}>{child}</li>
        ))}
      </ul>
    </div>
  );
}

export default Carousel;
