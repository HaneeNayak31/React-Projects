// Repository / live demo links. Empty URLs are simply not rendered.
function ProjectLinks({ project }) {
  const { name, repositoryUrl, liveUrl } = project;
  if (!repositoryUrl && !liveUrl) return null;
  return (
    <div className="project-links">
      {liveUrl && (
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
          Live demo<span className="sr-only"> of {name}</span> <span aria-hidden="true">↗</span>
        </a>
      )}
      {repositoryUrl && (
        <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">
          Code<span className="sr-only"> for {name}</span> <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  );
}

export default ProjectLinks;
