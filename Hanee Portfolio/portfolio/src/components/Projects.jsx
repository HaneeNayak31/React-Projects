import { featuredProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

function Projects() {
  const [lead, ...rest] = featuredProjects;

  return (
    <section className="section container" id="projects" aria-labelledby="projects-title">
      <SectionHeader eyebrow="Projects" title="Selected work." id="projects-title" />

      <ProjectCard project={lead} variant="lead" showHighlights />

      <div className="project-pair">
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} showHighlights />
        ))}
      </div>

      <div className="section-cta">
        <a className="button button-primary" href="/projects">
          See All Projects <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

export default Projects;
