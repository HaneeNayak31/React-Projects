import { useEffect, useState } from "react";
import TechList from "./TechList";
import { SHOW_SITE_LINKS, findTestimonial } from "../data/growMyTherapyWork";

const INTERVAL_MS = 5000;

// Large website viewer: one site at a time (big screenshot + details),
// with a thumbnail strip to jump between sites. It advances on its own,
// pauses on hover/focus or with the pause button, and stays still for
// visitors who prefer reduced motion.
function SiteShowcase({ sites }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [paused, setPaused] = useState(
    () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
  );
  const count = sites.length;
  const current = sites[index];
  const review = current.review ? findTestimonial(current.review) : null;

  useEffect(() => {
    if (paused || hovered || count < 2) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, hovered, count]);

  const go = (step) => setIndex((i) => (i + step + count) % count);

  return (
    <div
      className="showcase"
      role="region"
      aria-roledescription="carousel"
      aria-label="Websites I worked on"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div className="showcase-stage" aria-live={paused ? "polite" : "off"}>
        <a className="showcase-shot" href={current.image} target="_blank" rel="noopener noreferrer">
          <img src={current.image} alt={`Homepage of ${current.name}`} width="1200" height="578" />
          <span className="sr-only"> (open full-size screenshot)</span>
        </a>

        <div className="showcase-info">
          <p className="showcase-count">
            {String(index + 1).padStart(2, "0")} <span>/ {String(count).padStart(2, "0")}</span>
          </p>
          <h3>{current.name}</h3>
          {current.context && <p className="showcase-context">{current.context}</p>}

          {current.contribution && (
            <div>
              <p className="meta-label">My contribution</p>
              <p>{current.contribution}</p>
            </div>
          )}

          <TechList items={current.technologies} />

          {review && (
            <a className="showcase-review" href={`#review-${review.id}`}>
              <span className="meta-label">Client review</span>
              “{review.title.replace(/[.…]+$/, "")}” — {review.name} <span aria-hidden="true">↓</span>
            </a>
          )}

          {current.gallery?.length > 0 && (
            <ul className="showcase-gallery" aria-label={`More screenshots of ${current.name}`}>
              {current.gallery.map((src) => (
                <li key={src}>
                  <a href={src} target="_blank" rel="noopener noreferrer">
                    <img src={src} alt={`Screenshot of ${current.name}`} loading="lazy" />
                  </a>
                </li>
              ))}
            </ul>
          )}

          {SHOW_SITE_LINKS && current.url && (
            <a className="text-link" href={current.url} target="_blank" rel="noopener noreferrer">
              Visit site<span className="sr-only">: {current.name}</span> <span aria-hidden="true">↗</span>
            </a>
          )}

          <div className="showcase-controls">
            <button type="button" className="icon-button" onClick={() => go(-1)} aria-label="Previous website">←</button>
            <button type="button" className="icon-button" onClick={() => go(1)} aria-label="Next website">→</button>
            <button
              type="button"
              className="icon-button showcase-pause"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            >
              {paused ? "▶" : "❚❚"}
            </button>
          </div>
        </div>
      </div>

      <ul className="showcase-thumbs" aria-label="Choose a website">
        {sites.map((s, i) => (
          <li key={s.name}>
            <button
              type="button"
              className={i === index ? "is-active" : ""}
              aria-pressed={i === index}
              aria-label={s.name}
              onClick={() => setIndex(i)}
            >
              <img src={s.image} alt="" loading="lazy" width="160" height="77" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SiteShowcase;
