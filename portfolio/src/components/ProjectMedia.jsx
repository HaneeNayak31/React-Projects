import { useState } from "react";

// Screenshot with an optional demo video (loaded only when asked for).
// With no screenshot, shows the project's architecture summary instead.
function ProjectMedia({ project }) {
  const [playing, setPlaying] = useState(false);
  const { name, image, video, architecture } = project;

  if (!image && video) {
    return (
      <div className="media">
        <video
          src={video}
          controls
          muted
          playsInline
          preload="metadata"
          aria-label={`Demo video of ${name}`}
        />
      </div>
    );
  }

  if (!image) {
    if (!architecture) return null;
    return (
      <div className="media arch-panel">
        <p className="arch-title">{architecture.title}</p>
        <dl>
          {architecture.rows.map(([key, value]) => (
            <div key={key}>
              <dt>{key}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    );
  }

  if (playing && video) {
    return (
      <div className="media">
        <video
          src={video}
          poster={image}
          controls
          autoPlay
          muted
          playsInline
          preload="none"
        >
          <a href={video}>Download the {name} demo</a>
        </video>
      </div>
    );
  }

  return (
    <div className="media">
      <img
        src={image}
        alt={`Screenshot of ${name}`}
        loading="lazy"
        decoding="async"
        width="1200"
        height="675"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
        style={{ pointerEvents: "none", cursor: "default" }}
      />
      {video && (
        <button
          className="play-button"
          type="button"
          onClick={() => setPlaying(true)}
        >
          <span aria-hidden="true">▶</span> Play demo
          <span className="sr-only"> video of {name}</span>
        </button>
      )}
    </div>
  );
}

export default ProjectMedia;
