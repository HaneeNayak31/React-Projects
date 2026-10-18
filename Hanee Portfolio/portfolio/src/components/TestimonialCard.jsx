// A client review: exact quoted text, who said it, and a link to the original screenshot.
function TestimonialCard({ item }) {
  const meta = [item.source, item.date].filter(Boolean).join(" · ");

  return (
    <figure
      className="testimonial"
      id={item.id ? `review-${item.id}` : undefined}
    >
      {item.title && <p className="testimonial-title">{item.title}</p>}
      {item.quote && (
        <blockquote>
          <p>{item.quote}</p>
        </blockquote>
      )}
      {item.note && <p className="testimonial-note">{item.note}</p>}
      <figcaption>
        {item.name && <span className="testimonial-name">{item.name}</span>}
        {item.role && <span className="testimonial-role">{item.role}</span>}
        <span className="testimonial-meta">
          {meta}
          {item.image && (
            <>
              {meta && " · "}
              <span title={item.imageAlt}>Screenshot available</span>
            </>
          )}
          {item.sourceUrl && (
            <>
              {" · "}
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </>
          )}
        </span>
      </figcaption>
    </figure>
  );
}

export default TestimonialCard;
