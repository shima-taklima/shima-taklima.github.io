import { useLang } from "../i18n/LangContext";

export default function Footer() {
  const { t } = useLang();
  const { tagline, copy, socials } = t.footer;

  return (
    <footer className="w-full bg-ink py-10">
      <div className="section-inner">
        <div
          className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-5
          border-t border-paper/10 pt-8"
        >
          <div>
            <div className="font-display font-extrabold text-[1.1rem] text-paper">
              SHIMA<span className="text-accent">.</span>DEV
            </div>
            <div className="font-mono text-[0.62rem] text-paper/30 mt-1">
              {tagline}
            </div>
          </div>
          <div className="flex gap-5 flex-wrap">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                className="font-mono text-[0.63rem] text-paper/30 hover:text-accent transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
          <div className="font-mono text-[0.62rem] text-paper/25 w-full sm:w-auto">
            © {new Date().getFullYear()} {copy}
          </div>
        </div>
      </div>
    </footer>
  );
}
