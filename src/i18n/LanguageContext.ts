import { createContext } from 'react'
import type { Locale, Translation } from './types'

export type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translation
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
