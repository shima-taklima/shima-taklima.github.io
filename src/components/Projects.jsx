import { useState } from "react";
import { useLang } from "../i18n/LangContext";

export default function Projects() {
  const { t } = useLang();
  const p = t.projects;
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="w-full py-20">
      <div className="section-inner">
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="w-8 h-px bg-accent flex-shrink-0" />
          <span className="section-label">{p.eyebrow}</span>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div className="reveal">
            <h2
              className="font-display font-extrabold leading-[0.95] tracking-tight text-ink"
              style={{ fontSize: "clamp(1.9rem,4.5vw,3.5rem)" }}
            >
              {p.heading1}
              <br />
              <span className="text-accent">{p.heading2}</span>
            </h2>
            <p className="text-muted text-[0.85rem] mt-3 max-w-md leading-relaxed">
              {p.note}
            </p>
          </div>
          <a
            href="https://github.com/shima-taklima"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline reveal"
          >
            {p.github}
          </a>
        </div>

        <div className="border-t border-ink/10 reveal">
          {p.items.map((item) => (
            <div
              key={item.num}
              className="border-b border-ink/10 py-5 sm:py-6 cursor-default transition-[border-color] duration-300 hover:border-ink/30"
              onMouseEnter={() => setHovered(item.num)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
                <span className="font-mono text-[0.65rem] text-muted w-6 flex-shrink-0 hidden sm:inline">
                  {item.num}
                </span>
                <span
                  className={`font-mono text-[0.65rem] border px-2 py-[2px] transition-all duration-300 flex-shrink-0
                  ${hovered === item.num ? "border-accent text-accent" : "border-ink/15 text-muted"}`}
                >
                  {item.cat}
                </span>
                <span
                  className={`font-display font-extrabold tracking-tight flex-1 min-w-[140px] transition-colors duration-200
                    ${hovered === item.num ? "text-accent" : "text-ink"}`}
                  style={{ fontSize: "clamp(1rem,2.6vw,1.7rem)" }}
                >
                  {item.title}
                </span>
                <span className="font-mono text-[0.65rem] text-muted ml-auto flex-shrink-0">
                  {item.year}
                </span>
              </div>

              {/* Desktop hover-expand */}
              <div
                className={`hidden sm:block overflow-hidden transition-all duration-500
                ${hovered === item.num ? "max-h-36 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"}`}
              >
                <p className="text-[0.86rem] text-muted leading-[1.7] max-w-2xl mb-2 pl-9">
                  {item.desc}
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pl-9">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.63rem] text-muted/60"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-muted/30 mx-1">·</span>
                  <a
                    href={item.live}
                    className="font-mono text-[0.63rem] text-muted hover:text-accent transition-colors"
                  >
                    {p.live}
                  </a>
                  <a
                    href={item.github}
                    className="font-mono text-[0.63rem] text-muted hover:text-accent transition-colors"
                  >
                    {p.githubLink}
                  </a>
                </div>
              </div>

              {/* Mobile always-visible */}
              <div className="sm:hidden mt-2">
                <p className="text-[0.84rem] text-muted leading-[1.65] mb-2">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.63rem] text-muted/60"
                    >
                      {tag}
                    </span>
                  ))}
                  <a
                    href={item.live}
                    className="font-mono text-[0.63rem] text-muted hover:text-accent transition-colors"
                  >
                    {p.live}
                  </a>
                  <a
                    href={item.github}
                    className="font-mono text-[0.63rem] text-muted hover:text-accent transition-colors"
                  >
                    {p.githubLink}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
