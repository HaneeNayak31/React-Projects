// Compact technology labels.
function TechList({ items, label = "Technologies" }) {
  if (!items?.length) return null;
  return (
    <ul className="tag-list" aria-label={label}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default TechList;
