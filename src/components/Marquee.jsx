import { useLang } from '../i18n/LangContext'

export default function Marquee() {
  const { t } = useLang()
  const items = t.marquee.items

  return (
    <div className="w-full bg-ink py-3.5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`font-display font-bold text-[0.75rem] tracking-[0.08em] uppercase mx-4 flex-shrink-0
              ${item === '✦' ? 'text-accent' : 'text-paper'}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
