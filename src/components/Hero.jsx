import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LangContext'

export default function Hero() {
  const { t } = useLang()
  const roles = t.hero.roles
  const [displayed, setDisplayed] = useState('')
  const [ri, setRi] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setRi(0)
    setDeleting(false)
  }, [roles])

  useEffect(() => {
    const word = roles[ri]
    const timer = setTimeout(() => {
      if (!deleting) {
        if (displayed.length < word.length) setDisplayed(word.slice(0, displayed.length + 1))
        else setTimeout(() => setDeleting(true), 1800)
      } else {
        if (displayed.length > 0) setDisplayed(displayed.slice(0, -1))
        else { setDeleting(false); setRi(r => (r + 1) % roles.length) }
      }
    }, deleting ? 40 : 75)
    return () => clearTimeout(timer)
  }, [displayed, deleting, ri, roles])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="w-full pt-28 sm:pt-32 pb-16 sm:pb-20">
      <div className="section-inner">
        <div className="flex items-center gap-3 mb-6 sm:mb-8 opacity-0 animate-[fadeUp_0.6s_0.15s_ease_forwards]">
          <span className="w-8 h-px bg-accent flex-shrink-0" />
          <span className="section-label">{t.hero.badge}</span>
        </div>

        <h1
          className="font-display font-extrabold leading-[0.92] tracking-[-0.03em] text-ink
            opacity-0 animate-[fadeUp_0.7s_0.3s_ease_forwards]"
          style={{ fontSize: 'clamp(2.2rem, 7.5vw, 6.5rem)', wordBreak: 'break-word' }}
        >
          {t.hero.line1}<br />
          {t.hero.line2}<br />
          <span className="text-accent">{t.hero.line3}</span>
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mt-8 sm:mt-10
          opacity-0 animate-[fadeUp_0.7s_0.48s_ease_forwards]">
          <div className="min-w-0">
            <p className="font-mono text-[clamp(0.78rem,1.8vw,1rem)] text-muted mb-5 h-6 overflow-hidden">
              {'<'}{displayed}<span className="animate-blink">|</span>{' />'}
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => scrollTo('projects')} className="btn-primary">{t.hero.cta1}</button>
              <button onClick={() => scrollTo('contact')} className="btn-outline">{t.hero.cta2}</button>
            </div>
          </div>

          <div className="flex gap-6 sm:gap-8 flex-shrink-0">
            {[
              [t.hero.stat1n, t.hero.stat1l],
              [t.hero.stat2n, t.hero.stat2l],
              [t.hero.stat3n, t.hero.stat3l],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display font-extrabold text-xl sm:text-2xl text-ink">{n}</div>
                <div className="section-label mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
