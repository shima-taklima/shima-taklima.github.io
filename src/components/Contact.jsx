import { useForm, ValidationError } from '@formspree/react'
import { useLang } from '../i18n/LangContext'

const FORMSPREE_ID = 'xjgznklw'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  const [state, handleSubmit] = useForm(FORMSPREE_ID)

  return (
    <section id="contact" className="w-full py-20">
      <div className="section-inner">
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="w-8 h-px bg-accent flex-shrink-0" />
          <span className="section-label">{c.eyebrow}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── Left: info ── */}
          <div className="reveal">
            <h2
              className="font-display font-extrabold leading-[0.95] tracking-tight text-ink mb-5"
              style={{ fontSize: 'clamp(1.9rem,4.5vw,3.5rem)' }}
            >
              {c.heading1}<br />{c.heading2}<br />
              <span className="text-accent">{c.heading3}</span>
            </h2>

            <p
              className="text-[0.93rem] text-muted leading-[1.75] max-w-sm mb-5"
              dangerouslySetInnerHTML={{ __html: c.intro }}
            />

            <div className="border-l-2 border-accent pl-4 mb-7 py-1">
              <p className="text-[0.83rem] text-muted italic leading-relaxed">{c.quote}</p>
            </div>

            {c.links.map(([label, val, href]) => (
              <div key={label} className="flex items-center gap-4 mb-3.5">
                <span className="section-label min-w-[4.5rem]">{label}</span>
                <a
                  href={href}
                  className="text-[0.86rem] text-ink hover-line hover:text-accent transition-colors"
                >
                  {val}
                </a>
              </div>
            ))}
          </div>

          {/* ── Right: form ── */}
          <div className="reveal delay-200">

            {/* ── Success ── */}
            {state.succeeded ? (
              <div className="border border-accent/25 p-8 sm:p-10 text-center">
                <div className="text-3xl text-accent mb-3">✦</div>
                <h3 className="font-display font-extrabold text-xl text-ink mb-2">
                  {c.successTitle}
                </h3>
                <p className="text-[0.86rem] text-muted">{c.successBody}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="section-label block mb-2">
                    {c.labelName}
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder={c.placeholderName}
                    required
                    className="w-full bg-transparent border border-ink/15 px-4 py-2.5
                      font-body text-[0.9rem] text-ink placeholder:text-muted/40
                      outline-none focus:border-accent transition-colors
                      aria-[invalid=true]:border-red-400"
                  />
                  <ValidationError
                    field="name"
                    prefix="Name"
                    errors={state.errors}
                    className="block mt-1.5 font-mono text-[0.68rem] text-red-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="section-label block mb-2">
                    {c.labelEmail}
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder={c.placeholderEmail}
                    required
                    className="w-full bg-transparent border border-ink/15 px-4 py-2.5
                      font-body text-[0.9rem] text-ink placeholder:text-muted/40
                      outline-none focus:border-accent transition-colors
                      aria-[invalid=true]:border-red-400"
                  />
                  <ValidationError
                    field="email"
                    prefix="Email"
                    errors={state.errors}
                    className="block mt-1.5 font-mono text-[0.68rem] text-red-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="section-label block mb-2">
                    {c.labelMessage}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder={c.placeholderMessage}
                    required
                    className="w-full bg-transparent border border-ink/15 px-4 py-2.5
                      font-body text-[0.9rem] text-ink placeholder:text-muted/40
                      outline-none focus:border-accent transition-colors resize-none
                      aria-[invalid=true]:border-red-400"
                  />
                  <ValidationError
                    field="message"
                    prefix="Message"
                    errors={state.errors}
                    className="block mt-1.5 font-mono text-[0.68rem] text-red-500"
                  />
                </div>

                {/* Form-level error (network / server) */}
                <ValidationError
                  errors={state.errors}
                  className="block font-mono text-[0.72rem] text-red-500 border border-red-200 bg-red-50 px-4 py-3"
                />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full font-display font-bold text-[0.82rem] tracking-[0.06em]
                    bg-ink text-paper py-3 hover:bg-accent transition-colors
                    disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer border-none"
                >
                  {state.submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10"
                          stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      {c.sending}
                    </span>
                  ) : c.send}
                </button>

                <p className="text-center font-mono text-[0.62rem] text-muted/50">
                  {c.spamNote}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
