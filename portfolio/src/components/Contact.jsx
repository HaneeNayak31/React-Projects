import { site } from "../data/site";
import Icon from "./Icon";

function Contact() {
  return (
    <section
      className="section container"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact">
        <div className="contact-info">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Let’s connect.</h2>
          <p>
            I enjoy building polished web experiences and solving real-world
            product problems through code.
          </p>
          <p className="contact-email">
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p className="muted">{site.location}</p>
          <ul className="social-links">
            <li>
              <a href={site.github} target="_blank" rel="noopener noreferrer">
                <Icon name="github" /> GitHub
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin" /> LinkedIn
              </a>
            </li>
            <li>
              <a href={site.leetcode} target="_blank" rel="noopener noreferrer">
                <span className="code-glyph" aria-hidden="true">
                  {"</>"}
                </span>{" "}
                LeetCode
              </a>
            </li>
            <li>
              <a href={site.resume} target="_blank" rel="noopener noreferrer">
                Resume (PDF) <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
