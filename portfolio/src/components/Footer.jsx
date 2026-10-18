import { site } from "../data/site";
import Icon from "./Icon";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="footer-contact">
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
        <ul className="footer-links">
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Icon name="github" />
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Icon name="linkedin" />
            </a>
          </li>
          <li>
            <a href={site.leetcode} target="_blank" rel="noopener noreferrer">
              LeetCode
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`}>Email</a>
          </li>
          <li>
            <a href="#main">Back to top ↑</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
