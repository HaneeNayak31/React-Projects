import { education, activities } from "../data/site";
import SectionHeader from "./SectionHeader";

function About() {
  return (
    <section
      className="section container"
      id="about"
      aria-labelledby="about-title"
    >
      <SectionHeader eyebrow="About" title="Background." id="about-title" />
      <div className="about-grid">
        <div className="about-item">
          <p className="meta-label">Education</p>
          <p className="about-strong">{education.degree}</p>
          <p>{education.school}</p>
          {education.detail && <p className="muted">{education.detail}</p>}
        </div>
        <div className="about-item">
          <p className="meta-label">Focus</p>
          <p className="about-strong">Full-stack web development</p>
          <p>
            From React interfaces to REST APIs, relational data and deployment —
            building reliable software products.
          </p>
        </div>
        <div className="about-item">
          <p className="meta-label">Hackathons & courses</p>
          <ul className="plain-list">
            {activities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
