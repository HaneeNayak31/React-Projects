import { growMyTherapy as exp, formatDates } from "../data/experience";
import SectionHeader from "./SectionHeader";
import TechList from "./TechList";

function Experience() {
  const dates = formatDates(exp.dates);

  return (
    <section className="section container" id="experience" aria-labelledby="experience-title">
      <SectionHeader eyebrow="Experience" title="Production work." id="experience-title" />

      <article className="experience-card">
        <div className="experience-side">
          <p className="experience-company">{exp.company}</p>
          <h3>{exp.title}</h3>
          {dates && <p className="muted">{dates}</p>}
          <p className="experience-stat">
            <strong>10+</strong>
            <span>production websites for therapy practices</span>
          </p>
        </div>

        <div className="experience-main">
          <p className="experience-summary">{exp.summary}</p>
          <ul className="check-list">
            {exp.homepagePoints.map((point) => <li key={point}>{point}</li>)}
          </ul>
          <TechList items={exp.stack} />
          <a className="button button-primary" href={exp.path}>
            View Full Experience <span aria-hidden="true">→</span>
          </a>
        </div>
      </article>
    </section>
  );
}

export default Experience;
