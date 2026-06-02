import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LangContext'

function Bar({ n, v, delay = 0 }) {
  const [w, setW] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    setW(0)
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setW(v), delay); obs.disconnect() }
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [v, delay])
  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-1.5">
        <span className="text-[0.88rem] font-medium">{n}</span>
        <span className="font-mono text-[0.7rem] text-muted">{v}%</span>
      </div>
      <div className="h-[2px] bg-ink/10 w-full">
        <div className="h-full bg-accent transition-[width] duration-[1200ms] ease-out" style={{ width: `${w}%` }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const { t } = useLang()
  const s = t.skills

  return (
    <section id="skills" className="w-full py-20 bg-[#eee9df]">
      <div className="section-inner">
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="w-8 h-px bg-accent flex-shrink-0" />
          <span className="section-label">{s.eyebrow}</span>
        </div>

        <div className="reveal mb-8 border-l-2 border-accent pl-4 py-1">
          <p className="text-[0.85rem] text-muted leading-relaxed"
            dangerouslySetInnerHTML={{ __html: s.note }} />
        </div>

        <h2
          className="font-display font-extrabold leading-[0.95] tracking-tight text-ink mb-12 reveal"
          style={{ fontSize: 'clamp(1.9rem,4.5vw,3.5rem)' }}
        >
          {s.heading1}<br /><span className="text-accent">{s.heading2}</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-10 reveal">
          <div>
            <h3 className="font-display font-bold text-[0.95rem] mb-5 pb-3 border-b border-ink/10">
              {s.group1}
            </h3>
            {s.front.map((skill, i) => <Bar key={skill.n} n={skill.n} v={skill.v} delay={i * 120} />)}
          </div>
          <div>
            <h3 className="font-display font-bold text-[0.95rem] mb-5 pb-3 border-b border-ink/10">
              {s.group2}
            </h3>
            {s.tools.map((skill, i) => <Bar key={skill.n} n={skill.n} v={skill.v} delay={i * 120 + 200} />)}
          </div>
        </div>

        <div className="reveal delay-200 mt-10">
          <div className="section-label mb-4">{s.alsoLabel}</div>
          <div className="flex flex-wrap gap-2">
            {s.tags.map(tag => (
              <span key={tag} className="font-mono text-[0.68rem] border border-ink/15 px-2.5 py-1 text-muted hover:border-accent hover:text-accent transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal delay-300 mt-12">
          <h3 className="font-display font-bold text-[0.95rem] mb-5 pb-3 border-b border-ink/10">
            {s.coursesLabel}
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {s.courses.map(c => (
              <div key={c.name} className="border border-ink/10 p-4 hover:border-accent/30 transition-colors">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className="font-medium text-[0.86rem] text-ink leading-snug">{c.name}</span>
                  <span className="font-mono text-[0.6rem] bg-accent/10 text-accent px-1.5 py-0.5 flex-shrink-0 mt-0.5">
                    {c.status}
                  </span>
                </div>
                <span className="font-mono text-[0.65rem] text-muted">{c.platform} · {c.instructor}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
