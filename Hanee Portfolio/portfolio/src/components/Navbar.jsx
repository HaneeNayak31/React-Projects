import useTheme from "../hooks/useTheme";

function Navbar() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const toggleTheme = () => {
    themeMode === "light" ? darkTheme() : lightTheme();
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black shadow-lg border-b-2 border-sky-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-sky-900 dark:text-white hover:text-sky-700 transition-colors cursor-pointer ">
          Hanee Nayak
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
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
                href="#resume"
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
      </div>
    </nav>
  );
}

export default Navbar;
