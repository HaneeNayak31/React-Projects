import { useState } from "react";
import useTheme from "../hooks/useTheme";

const links = [["Work", "projects"], ["Experience", "experience"], ["About", "about"], ["Contact", "contact"]];

function Navbar() {
  const { themeMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" onClick={closeMenu}>HN<span>.</span></a>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? "Close" : "Menu"}
        </button>
        <div className={menuOpen ? "nav-links is-open" : "nav-links"} id="site-navigation">
          {links.map(([label, href]) => <a href={"#" + href} key={href} onClick={closeMenu}>{label}</a>)}
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle color theme">
            <span aria-hidden="true">{themeMode === "light" ? "☾" : "☼"}</span>
            <span>{themeMode === "light" ? "Dark" : "Light"}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
