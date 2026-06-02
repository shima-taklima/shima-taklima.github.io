import { createContext, useContext, useState, useCallback } from 'react'
import en from './en'
import ja from './ja'

const translations = { en, ja }

const LangContext = createContext(null)

export function LangProvider({ children }) {
  // Detect browser language on first load — default to 'ja' if browser is Japanese
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('portfolio-lang')
    if (saved === 'en' || saved === 'ja') return saved
    const browser = navigator.language || 'en'
    return browser.startsWith('ja') ? 'ja' : 'en'
  })

  const toggle = useCallback(() => {
    setLang(l => {
      const next = l === 'en' ? 'ja' : 'en'
      localStorage.setItem('portfolio-lang', next)
      // Switch <html lang> for accessibility
      document.documentElement.lang = next
      return next
    })
  }, [])

  const t = translations[lang]

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  )
}

// Hook — use anywhere: const { t, lang, toggle } = useLang()
export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>')
  return ctx
}
