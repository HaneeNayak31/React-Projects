import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContextProvider";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [themeMode, setThemeMode] = useState("dark");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
