import { allProjects as projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import usePageMeta from "../hooks/usePageMeta";

function ProjectsPage() {
  usePageMeta(
    "All Projects — Hanee Nayak",
    "Every project by Hanee Nayak: full-stack finance apps, React applications and JavaScript builds."
  );

  return (
    <section className="section container page-top" aria-labelledby="all-projects-title">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <a href="/">Portfolio</a> <span aria-hidden="true">/</span> <span aria-current="page">Projects</span>
      </nav>
      <SectionHeader
        eyebrow={`${projects.length} projects`}
        title="All Projects"
        intro="Full-stack finance apps first, then the React and JavaScript projects where I learned routing, state and API work."
        id="all-projects-title"
        level={1}
      />

      <div className="all-projects">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            headingLevel={2}
          />
        ))}
      </div>

      <div className="section-cta">
        <a className="button button-ghost" href="/">← Back to portfolio</a>
      </div>
    </section>
  );
}

export default ProjectsPage;
