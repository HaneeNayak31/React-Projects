import usePageMeta from "../hooks/usePageMeta";

function NotFoundPage() {
  usePageMeta("Page not found — Hanee Nayak", "This page doesn’t exist.");

  return (
    <section className="section container not-found">
      <p className="eyebrow">404</p>
      <h1>This page doesn’t exist.</h1>
      <p>The link may be out of date.</p>
      <a className="button button-primary" href="/">Back to the portfolio</a>
    </section>
  );
}

export default NotFoundPage;
