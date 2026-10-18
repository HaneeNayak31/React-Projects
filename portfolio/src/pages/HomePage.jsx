import { useEffect } from "react";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import usePageMeta from "../hooks/usePageMeta";

function HomePage() {
  usePageMeta(
    "Hanee Nayak — Software Developer",
    "Hanee Nayak is a software developer and final-year Computer Engineering student building full-stack web applications, with production experience on 10+ client websites."
  );

  // When arriving from another page with a #section link, scroll to it once rendered.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </>
  );
}

export default HomePage;
