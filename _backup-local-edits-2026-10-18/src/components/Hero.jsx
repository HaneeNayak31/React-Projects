import { useState } from "react";

function Hero() {
  const [photoMissing, setPhotoMissing] = useState(false);

  return (
    <section className="hero section-shell" id="top">
      <div className="hero-kicker"><span className="status-dot" /> Hanee Nayak · Computer Engineering student</div>
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-label">Software developer / 01</p>
          <h1>Building web products<br /><em>from interface to backend.</em></h1>
          <p className="hero-intro">I build frontend and full-stack applications, work with backend systems and databases, and have hands-on experience shipping production websites.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#projects">View selected work <span>↘</span></a>
            <a className="button button-outline" href="/Resume.pdf" target="_blank" rel="noreferrer">View resume <span>↗</span></a>
          </div>
          <div className="hero-links"><a href="https://github.com/HaneeNayak31" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/hanee-nayak-8ba045280/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="#contact">Contact ↘</a></div>
        </div>
        <div className="hero-portrait-wrap">
          <div className="hero-portrait">
            {!photoMissing ? <img src="/profile%20photo.png" alt="Hanee Nayak" onError={() => setPhotoMissing(true)} /> : <div className="portrait-missing"><span>Profile photograph<br />awaiting asset restoration</span></div>}
          </div>
          <div className="portrait-caption"><span>Frontend · Full-stack · Fintech</span><span>Based in India</span></div>
        </div>
      </div>
      <div className="hero-bottom"><div><span className="eyebrow">Currently working with</span><p>React · Next.js · TypeScript · Node.js · PostgreSQL</p></div><div className="hero-scroll">Scroll to explore <span>↓</span></div></div>
    </section>
  );
}

export default Hero;
