// A numbered group of responsibilities on the experience page.
function ResponsibilityGroup({ index, title, items }) {
  return (
    <div className="resp-col">
      <p className="skill-index" aria-hidden="true">{String(index).padStart(2, "0")}</p>
      <h3>{title}</h3>
      <ul className="check-list">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

export default ResponsibilityGroup;
