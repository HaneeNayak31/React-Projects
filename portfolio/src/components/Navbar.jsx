import { useState } from "react";
import useTheme from "../hooks/useTheme";
import { site } from "../data/site";

// Links start with "/" so they also work from the experience page.
const links = [
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

function Navbar() {
  const { themeMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const nextTheme = themeMode === "light" ? "dark" : "light";

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main">
        <a className="wordmark" href="/" onClick={closeMenu}>
          Hanee Nayak
        </a>

        <div className="nav-actions">
          <button
            className="icon-button theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${nextTheme} theme`}
            title={`Switch to ${nextTheme} theme`}
          >
            {themeMode === "light" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
            )}
          </button>
          <button
            className="icon-button menu-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="nav-links"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        <ul id="nav-links" className={isMenuOpen ? "nav-links is-open" : "nav-links"}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href={site.resume} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
              Resume <span aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
