import { site } from "../data/site";

function Hero() {
  return (
    <section className="hero container" id="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          Software developer · Computer Engineering, GTU
        </p>
        <h1 id="hero-title">
          Hanee Nayak{" "}
          <span className="hero-sub">
            Building useful software across the frontend and backend.
          </span>
        </h1>
        <p className="hero-lead">
          I build full-stack applications with React, Next.js, Node.js and
          PostgreSQL. At Grow My Therapy I developed and maintained 10+
          production websites — including forms, integrations and deployment. I
          enjoy building practical software products that solve real problems.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View projects
          </a>
          <a
            className="button button-secondary"
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-ghost" href="#contact">
            Contact
          </a>
        </div>
      </div>

      <figure className="hero-photo">
        <picture>
          <source srcSet="/images/profile-photo.webp" type="image/webp" />
          <img
            src="/profile%20photo.png"
            alt="Portrait of Hanee Nayak"
            width="640"
            height="760"
            fetchPriority="high"
          />
        </picture>
      </figure>
    </section>
  );
}

export default Hero;
