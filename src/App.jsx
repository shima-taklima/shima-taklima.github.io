import { useEffect, useRef } from "react";
import { useLang } from "./i18n/LangContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function useReveal() {
  useEffect(() => {
    const run = () => {
      const els = document.querySelectorAll(".reveal:not(.visible)");
      if (!els.length) return;
      const obs = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              obs.unobserve(e.target);
            }
          }),
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
      );
      els.forEach((el) => obs.observe(el));
      return obs;
    };
    const obs = run();
    return () => obs?.disconnect();
  });
}

export default function App() {
  const { lang } = useLang();
  const prevLang = useRef(lang);

  useEffect(() => {
    if (prevLang.current === lang) return;
    prevLang.current = lang;
    // Brief fade-out/in on the main content
    const main = document.getElementById("main-content");
    if (main) {
      main.style.opacity = "0";
      main.style.transition = "opacity 0.2s ease";
      setTimeout(() => {
        document
          .querySelectorAll(".reveal:not(.visible)")
          .forEach((el) => observer.observe(el));
        main.style.opacity = "1";
      }, 150);
    }
  }, []);

  useReveal();

  return (
    <div className="min-h-screen bg-paper overflow-x-hidden">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
