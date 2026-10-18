import TechList from "./TechList";
import { SHOW_SITE_LINKS } from "../data/growMyTherapyWork";

// One Grow My Therapy website (a carousel slide). Only name + image are required.
function CaseStudyCard({ study }) {
  return (
    <article className="case-study">
      <a href={study.image} target="_blank" rel="noopener noreferrer" className="case-study-shot">
        <img src={study.image} alt={`Homepage of ${study.name}`} loading="lazy" decoding="async" width="1200" height="578" />
        <span className="sr-only"> (open full-size screenshot)</span>
      </a>
      <div className="case-study-body">
        <h3>{study.name}</h3>
        {study.description && <p>{study.description}</p>}
        {study.contribution && (
          <p className="contribution"><span className="meta-label">My contribution</span>{study.contribution}</p>
        )}
        <TechList items={study.technologies} />
        {SHOW_SITE_LINKS && study.url && (
          <a className="text-link" href={study.url} target="_blank" rel="noopener noreferrer">
            Visit site<span className="sr-only">: {study.name}</span> <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default CaseStudyCard;
