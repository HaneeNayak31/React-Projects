import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContextProvider";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import GrowMyTherapyPage from "./pages/GrowMyTherapyPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectsPage from "./pages/ProjectsPage";
import { growMyTherapy } from "./data/experience";

// The site has only a couple of pages, so a tiny path lookup is enough —
// no router library needed. Netlify's redirect rule in netlify.toml
// sends every URL to index.html, so these paths also work on refresh.
function renderPage() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return <HomePage />;
  if (path === "/projects") return <ProjectsPage />;
  if (path === growMyTherapy.path) return <GrowMyTherapyPage />;
  return <NotFoundPage />;
}

function readSavedTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // Storage can be blocked (private mode); fall back to the default.
  }
  return "dark"; // Dark is the default look.
}

function App() {
  const [themeMode, setThemeMode] = useState(readSavedTheme);

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");
  const toggleTheme = () => setThemeMode((mode) => (mode === "light" ? "dark" : "light"));

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
    try {
      localStorage.setItem("theme", themeMode);
    } catch {
      // Ignore — the theme still applies for this visit.
    }
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme, toggleTheme }}>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        {renderPage()}
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
