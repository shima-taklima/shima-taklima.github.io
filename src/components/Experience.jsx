import { useLang } from '../i18n/LangContext'

export default function Experience() {
  const { t } = useLang()
  const e = t.experience

  return (
    <section id="experience" className="w-full py-20 bg-ink">
      <div className="section-inner">
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="w-8 h-px bg-accent flex-shrink-0" />
          <span className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-paper/40">
            {e.eyebrow}
          </span>
        </div>

        <h2
          className="font-display font-extrabold leading-[0.95] tracking-tight text-paper mb-3 reveal"
          style={{ fontSize: 'clamp(1.9rem,4.5vw,3.5rem)' }}
        >
          {e.heading1}<br /><span className="text-accent">{e.heading2}</span>
        </h2>
        <p className="text-[0.9rem] text-paper/45 mb-12 reveal max-w-lg leading-relaxed">
          {e.note}
        </p>

        <div>
          {e.items.map((item, i) => (
            <div
              key={item.org + item.role}
              className="reveal border-t border-paper/10 py-7 grid gap-3 sm:grid-cols-[9rem_1fr]"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="font-mono text-[0.67rem] text-paper/30 leading-relaxed">
                {item.period}
                <span className="block mt-1">{item.loc}</span>
              </div>
              <div>
                <div className="flex items-center flex-wrap gap-2 mb-0.5">
                  <span className="font-display font-bold text-[1rem] text-paper leading-snug">
                    {item.role}
                  </span>
                  {item.isCurrent && (
                    <span className="font-mono text-[0.58rem] bg-accent text-paper px-1.5 py-[2px]">
                      {e.ongoing}
                    </span>
                  )}
                </div>
                <div className="font-display text-[0.84rem] text-accent font-bold mb-2">{item.org}</div>
                <p className="text-[0.85rem] text-paper/50 leading-[1.7] max-w-xl mb-3">{item.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map(tag => (
                    <span key={tag} className="font-mono text-[0.62rem] border border-accent/25 text-accent/65 px-2 py-[2px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What's Next */}
        <div className="reveal mt-12 border-t border-paper/10 pt-10">
          <div className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-paper/30 mb-5">
            {e.nextLabel}
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {e.nexts.map(({ goal, detail }) => (
              <div key={goal} className="border border-paper/10 p-4 hover:border-accent/30 transition-colors">
                <div className="font-display font-bold text-paper text-[0.95rem] mb-1.5">{goal}</div>
                <p className="font-body text-[0.82rem] text-paper/45 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
