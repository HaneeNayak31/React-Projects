import ProjectMedia from "./ProjectMedia";
import ProjectLinks from "./ProjectLinks";
import TechList from "./TechList";

// One component for every project card.
// variant="lead" → wide two-column layout with highlights (homepage #1)
// variant="card" → stacked card (everything else)
function ProjectCard({ project, variant = "card", showHighlights = false, headingLevel = 3 }) {
  return (
    <article className={`project-card project-${variant}`} id={project.id}>
      <ProjectMedia project={project} />
      <div className="project-body">
        <p className="project-kind">{project.kind}</p>
        {headingLevel === 2 ? (
          <h2 className="project-name">{project.name}</h2>
        ) : (
          <h3 className="project-name">{project.name}</h3>
        )}
        {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
        {project.status && <p className="project-status">{project.status}</p>}
        <p className="project-desc">{project.description}</p>
        {showHighlights && project.highlights?.length > 0 && (
          <ul className="check-list">
            {project.highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>
        )}
        <TechList items={project.technologies} />
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export default ProjectCard;
