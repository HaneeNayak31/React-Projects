import { skillGroups } from "../data/skills";
import SectionHeader from "./SectionHeader";
import TechList from "./TechList";

function Skills() {
  return (
    <section className="section container" id="skills" aria-labelledby="skills-title">
      <SectionHeader eyebrow="Skills" title="What I work with." id="skills-title" />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-panel" key={group.name}>
            <h3>{group.name}</h3>
            <TechList items={group.items} label={group.name} />
            {group.note && <p className="skill-note">{group.note}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
