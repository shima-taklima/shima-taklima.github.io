import { useState, useEffect } from "react";
import { useLang } from "../i18n/LangContext";

const SECTION_KEYS = ["about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollTo = (id) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const navLabels = [
    t.nav.about,
    t.nav.skills,
    t.nav.projects,
    t.nav.experience,
    t.nav.contact,
  ];

  // Language toggle button — appears in both desktop and mobile
  const LangToggle = ({ className = "" }) => (
    <button
      onClick={toggle}
      aria-label={lang === "en" ? "日本語に切り替え" : "Switch to English"}
      className={`font-mono text-[0.72rem] font-medium border border-ink/20 px-2.5 py-1
        hover:border-accent hover:text-accent transition-all duration-200
        tracking-wide ${className}`}
    >
      {lang === "en" ? "日本語" : "EN"}
    </button>
  );

  return (
    <>
      {/* ── Mobile full-screen menu ── */}
      <div
        className="md:hidden fixed inset-0 z-[200] flex flex-col items-center justify-center gap-7"
        style={{
          backgroundColor: "#f7f3ed",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transform: open ? "translateY(0)" : "translateY(-10px)",
          transition: "opacity 0.35s ease, transform 0.35s ease",
        }}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-6 font-display font-bold text-2xl text-ink hover:text-accent transition-colors"
          aria-label="Close menu"
        >
          ✕
        </button>

        <span className="font-display font-extrabold text-[1.1rem] tracking-tight text-ink mb-2">
          SHIMA<span className="text-accent">.</span>DEV
        </span>

        {SECTION_KEYS.map((key, i) => (
          <button
            key={key}
            onClick={() => scrollTo(key)}
            style={{ transitionDelay: open ? `${i * 45}ms` : "0ms" }}
            className="font-display font-extrabold text-[1.9rem] text-ink hover:text-accent transition-colors tracking-tight leading-none"
          >
            {navLabels[i]}
          </button>
        ))}

        <div className="flex items-center gap-4 mt-3">
          <LangToggle />
          <a
            href="mailto:your@email.com"
            className="btn-primary"
            onClick={() => setOpen(false)}
          >
            {t.nav.hire}
          </a>
        </div>
      </div>

      {/* ── Sticky navbar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between
          transition-all duration-300 ${scrolled ? "py-3 border-b border-ink/10" : "py-5"}`}
        style={{
          backgroundColor: scrolled ? "rgba(247,243,237,0.97)" : "transparent",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="section-inner-logo font-display font-extrabold text-[1.1rem] tracking-tight text-ink hover:text-accent transition-colors ml-5 sm:ml-8"
        >
          SHIMA<span className="text-accent">.</span>DEV
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 list-none">
          {SECTION_KEYS.map((key, i) => (
            <li key={key}>
              <button
                onClick={() => scrollTo(key)}
                className="font-body text-[0.8rem] font-medium text-muted hover:text-ink transition-colors tracking-wide"
              >
                {navLabels[i]}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-3 mr-5 sm:mr-8">
          <LangToggle />
          <button
            onClick={() => scrollTo("contact")}
            className="btn-primary text-xs"
          >
            {t.nav.hire}
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer mr-4"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`block w-[22px] h-[1.5px] bg-ink transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[3.5px]" : ""}`}
          />
          <span
            className={`block w-[22px] h-[1.5px] bg-ink transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block w-[22px] h-[1.5px] bg-ink transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
          />
        </button>
      </nav>
    </>
  );
}
