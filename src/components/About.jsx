import { useLang } from '../i18n/LangContext';

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="w-full py-20">
      <div className="section-inner">
        <div className="flex items-center gap-3 mb-10 reveal">
          <span className="w-8 h-px bg-accent flex-shrink-0" />
          <span className="section-label">{a.eyebrow}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Visual */}
          <div className="reveal relative aspect-[4/5] bg-[#eee9df] overflow-hidden flex items-center justify-center">
            <span className="font-display font-extrabold text-[clamp(6rem,18vw,12rem)] text-ink opacity-[0.05] leading-none select-none pointer-events-none">
              S
            </span>
            <div className="absolute top-0 right-0 bg-accent text-paper px-3 py-2.5 font-display font-bold text-[0.7rem] tracking-wide leading-snug text-center whitespace-pre-line">
              {a.badge}
            </div>
            <div className="absolute bottom-4 left-4 bg-ink text-paper font-mono text-[0.65rem] px-2.5 py-1">
              {a.location}
            </div>
          </div>

          {/* Text */}
          <div className="reveal delay-200">
            <h2
              className="font-display font-extrabold leading-[0.95] tracking-tight text-ink mb-5"
              style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}
            >
              {a.heading1}
              <br />
              <span className="text-accent">{a.heading2}</span> {a.heading3}
            </h2>

            <div className="space-y-3 text-muted text-[0.93rem] leading-[1.75] mb-6">
              <p dangerouslySetInnerHTML={{ __html: a.p1 }} />
              <p dangerouslySetInnerHTML={{ __html: a.p2 }} />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-7">
              {a.meta.map(([k, v]) => (
                <div key={k} className="border-l-2 border-accent pl-3">
                  <div className="section-label mb-1">{k}</div>
                  <div className="text-[0.85rem] font-medium text-ink">{v}</div>
                </div>
              ))}
            </div>

            {/* JLPT badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 border border-accent/40 text-accent font-mono text-[0.68rem] px-3 py-1.5 tracking-wide">
                🇯🇵 JLPT N2 認定
              </span>
              <span className="inline-flex items-center gap-1.5 border border-ink/15 text-muted font-mono text-[0.68rem] px-3 py-1.5 tracking-wide">
                🌏 English OK
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="履歴書_shima.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {a.cv}
              </a>
              <div className="flex gap-4">
                {[a.github, a.linkedin, a.twitter].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="font-mono text-[0.7rem] text-muted hover:text-accent transition-colors hover-line"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
