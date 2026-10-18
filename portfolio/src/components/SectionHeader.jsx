// Eyebrow label + heading (+ optional intro). Used by every section.
// Pass level={1} for a page's main heading.
function SectionHeader({ eyebrow, title, intro, id, level = 2 }) {
  return (
    <div className="section-head">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {level === 1 ? <h1 id={id}>{title}</h1> : <h2 id={id}>{title}</h2>}
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

export default SectionHeader;
