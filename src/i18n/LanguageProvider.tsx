import { useEffect, useState, type PropsWithChildren } from 'react'
import { LanguageContext } from './LanguageContext'
import { translations } from './translations'
import type { Locale } from './types'

const DEFAULT_LOCALE: Locale = 'en'
const STORAGE_KEY = 'atsru-locale'

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE
  }

  const storedLocale = window.localStorage.getItem(STORAGE_KEY)
  if (storedLocale === 'en' || storedLocale === 'ro') {
    return storedLocale
  }

  return window.navigator.language.toLowerCase().startsWith('ro') ? 'ro' : 'en'
}

export function LanguageProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)
  const t = translations[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = t.meta.title
    window.localStorage.setItem(STORAGE_KEY, locale)

    const description = document.querySelector('meta[name="description"]')
    if (description instanceof HTMLMetaElement) {
      description.content = t.meta.description
    }
  }, [locale, t.meta.description, t.meta.title])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
