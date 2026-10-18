import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContextProvider";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [themeMode, setThemeMode] = useState(() => localStorage.getItem("hanee-theme") || "light");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(themeMode);
    localStorage.setItem("hanee-theme", themeMode);
  }, [themeMode]);

  const toggleTheme = () => setThemeMode((current) => (current === "light" ? "dark" : "light"));

  return (
    <ThemeProvider value={{ themeMode, toggleTheme }}>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
