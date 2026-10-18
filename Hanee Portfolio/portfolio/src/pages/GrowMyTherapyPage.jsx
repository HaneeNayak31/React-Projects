import { useEffect } from "react";
import usePageMeta from "../hooks/usePageMeta";
import { site } from "../data/site";
import { growMyTherapy as exp, formatDates } from "../data/experience";
import { publishedCaseStudies, publishedTestimonials } from "../data/growMyTherapyWork";
import SectionHeader from "../components/SectionHeader";
import TechList from "../components/TechList";
import ResponsibilityGroup from "../components/ResponsibilityGroup";
import SiteShowcase from "../components/SiteShowcase";
import TestimonialCard from "../components/TestimonialCard";

const sections = [
  ["overview", "Overview"],
  ["responsibilities", "Responsibilities"],
  ["work", "Websites"],
  ["testimonials", "Client reviews"],
  ["stack", "Stack"],
  ["learning", "Lessons"],
];

function GrowMyTherapyPage() {
  usePageMeta(
    `${exp.title} at ${exp.company} — Hanee Nayak`,
    `Hanee Nayak developed and maintained 10+ production websites for therapy practices at ${exp.company}: React, Next.js, TypeScript, Tailwind CSS, Stripe, AWS Amplify, Cloudflare, DNS and SSL.`
  );

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  const dates = formatDates(exp.dates);
  const sites = publishedCaseStudies;
  const reviews = publishedTestimonials;

  // Verified counts shown in the hero.
  const metrics = [
    { value: "10+", label: "production websites developed and maintained" },
    sites.length > 0 && { value: String(sites.length), label: "of those websites shown below" },
    reviews.length > 0 && { value: String(reviews.length), label: "client reviews, shown in full" },
  ].filter(Boolean);

  return (
    <article className="exp-page">
      {/* Hero */}
      <header className="exp-hero container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Portfolio</a> <span aria-hidden="true">/</span> <a href="/#experience">Experience</a>{" "}
          <span aria-hidden="true">/</span> <span aria-current="page">{exp.company}</span>
        </nav>

        <div className="exp-hero-grid">
          <div>
            <p className="eyebrow">Internship · Case study</p>
            <h1>
              {exp.company} <span className="exp-title">{exp.title}</span>
            </h1>
            {(exp.officialTitle && exp.officialTitle !== exp.title) || dates ? (
              <p className="exp-meta">
                {exp.officialTitle && exp.officialTitle !== exp.title && <span>Official title: {exp.officialTitle}</span>}
                {dates && <span>{dates}</span>}
              </p>
            ) : null}
            <p className="exp-lead">{exp.intro}</p>
            <TechList items={exp.stack} />
            <div className="hero-actions">
              <a className="button button-primary" href="#work">See the websites</a>
              <a className="button button-ghost" href="#testimonials">Client reviews</a>
            </div>
          </div>

          <dl className="metric-list">
            {metrics.map((m) => (
              <div key={m.label}>
                <dt>{m.value}</dt>
                <dd>{m.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <nav className="page-toc" aria-label="On this page">
          <ul>
            {sections.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
          </ul>
        </nav>
      </header>

      {/* Overview: standalone project vs production websites */}
      <section className="section container" id="overview" aria-labelledby="overview-title">
        <SectionHeader eyebrow="Overview" title="Many live websites, not one app." intro={exp.overview} id="overview-title" />
        <div className="contrast">
          <div className="contrast-col">
            <p className="meta-label">A standalone project</p>
            <ul className="plain-list">
              {exp.contrast.standalone.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
          <div className="contrast-col is-highlight">
            <p className="meta-label">Production websites at {exp.company}</p>
            <ul className="check-list">
              {exp.contrast.production.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="section container" id="responsibilities" aria-labelledby="resp-title">
        <SectionHeader
          eyebrow="Responsibilities"
          title="What the work involved."
          intro="Not every site needed all of these, and on many I contributed to an existing setup rather than owning it end to end."
          id="resp-title"
        />
        <div className="resp-grid">
          {exp.responsibilities.map((group, i) => (
            <ResponsibilityGroup key={group.title} index={i + 1} title={group.title} items={group.items} />
          ))}
        </div>
      </section>

      {/* Websites */}
      <section className="section container" id="work" aria-labelledby="work-title">
        <SectionHeader
          eyebrow="My work"
          title="Websites I worked on."
          intro="Practice websites I built or maintained. Choose a site below, or select the screenshot to see it full size."
          id="work-title"
        />
        {sites.length > 0 ? (
          <SiteShowcase sites={sites} />
        ) : (
          <p className="pending-note">Website case studies will be added here once they’re approved for publication.</p>
        )}
      </section>

      {/* Client reviews */}
      <section className="section container" id="testimonials" aria-labelledby="testimonials-title">
        <SectionHeader
          eyebrow="Client testimonials"
          title="What clients said."
          intro="Reviews from clients whose websites I worked on with the Grow My Therapy team. Some reviewers chose not to share their name."
          id="testimonials-title"
        />
        {reviews.length > 0 ? (
          <div className="testimonial-grid">
            {reviews.map((t, i) => <TestimonialCard key={t.id || i} item={t} />)}
          </div>
        ) : (
          <p className="pending-note">Client testimonials coming soon.</p>
        )}
      </section>

      {/* Stack */}
      <section className="section container" id="stack" aria-labelledby="stack-title">
        <SectionHeader eyebrow="Technical stack" title="Tools, by what they were for." id="stack-title" />
        <dl className="stack-table">
          {exp.stackGroups.map((g) => (
            <div key={g.name}>
              <dt>{g.name}</dt>
              <dd>
                <TechList items={g.items} label={g.name} />
                {g.use && <p className="stack-use">{g.use}</p>}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Lessons */}
      <section className="section container" id="learning" aria-labelledby="learning-title">
        <SectionHeader eyebrow="Engineering lessons" title="What production work taught me." id="learning-title" />
        <ol className="lesson-list">
          {exp.learning.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {item.example && <p className="challenge-example">{item.example}</p>}
            </li>
          ))}
        </ol>
      </section>

      {/* Closing */}
      <section className="section container exp-closing" aria-labelledby="closing-title">
        <h2 id="closing-title">Keep exploring.</h2>
        <ul className="closing-links">
          <li><a href="/">Homepage <span aria-hidden="true">→</span></a></li>
          <li><a href="/projects">All projects <span aria-hidden="true">→</span></a></li>
          <li><a href={site.resume} target="_blank" rel="noopener noreferrer">Resume (PDF) <span aria-hidden="true">↗</span></a></li>
          <li><a href="/#contact">Contact <span aria-hidden="true">→</span></a></li>
        </ul>
      </section>
    </article>
  );
}

export default GrowMyTherapyPage;
