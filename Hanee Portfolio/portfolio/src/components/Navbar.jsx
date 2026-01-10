import { useState } from "react";
import useTheme from "../hooks/useTheme";

function Navbar() {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    themeMode === "light" ? darkTheme() : lightTheme();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black shadow-lg border-b-2 border-sky-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-sky-900 dark:text-white hover:text-sky-700 transition-colors cursor-pointer ">
          Hanee Nayak
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 items-center">
            <li>
              <a
                href="#hero"
                className="text-lg font-semibold text-sky-900 dark:text-white cursor-pointer hover:text-sky-700 dark:hover:text-sky-300 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-lg font-semibold text-sky-900 dark:text-white cursor-pointer hover:text-sky-700 dark:hover:text-sky-300 transition-colors duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-lg font-semibold text-sky-900 dark:text-white cursor-pointer hover:text-sky-700 dark:hover:text-sky-300 transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-sky-900 dark:text-white cursor-pointer hover:text-sky-700 dark:hover:text-sky-300 transition-colors duration-300"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg font-semibold text-sky-900 dark:text-white cursor-pointer hover:text-sky-700 dark:hover:text-sky-300 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-3 px-4 rounded-full bg-sky-900 text-white hover:bg-sky-800 transition-all shadow-lg hover:shadow-xl"
            title="Toggle theme"
          >
            {themeMode === "dark" ? (
              <i className="fas fa-sun text-xl"></i>
            ) : (
              <i className="fas fa-moon text-xl"></i>
            )}
          </button>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-3 px-4 rounded-full bg-sky-900 text-white hover:bg-sky-800 transition-all shadow-lg hover:shadow-xl"
          >
            {themeMode === "dark" ? (
              <i className="fas fa-sun text-xl"></i>
            ) : (
              <i className="fas fa-moon text-xl"></i>
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="text-sky-900 dark:text-white text-3xl focus:outline-none"
          >
            {isMenuOpen ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t-2 border-sky-700 absolute w-full left-0 shadow-xl">
          <ul className="flex flex-col items-center py-6 space-y-6">
            <li>
              <a
                href="#hero"
                onClick={toggleMenu}
                className="text-xl font-semibold text-sky-900 dark:text-white hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={toggleMenu}
                className="text-xl font-semibold text-sky-900 dark:text-white hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={toggleMenu}
                className="text-xl font-semibold text-sky-900 dark:text-white hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
                className="text-xl font-semibold text-sky-900 dark:text-white hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="text-xl font-semibold text-sky-900 dark:text-white hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
