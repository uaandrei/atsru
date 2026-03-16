import { useState } from 'react'
import { siteTheme } from '../../theme/siteTheme'
import type { Locale, NavigationItem } from '../../i18n/types'
import { Container } from '../common/Container'
import { LanguageToggle } from '../common/LanguageToggle'
import { SymbolIcon } from '../common/SymbolIcon'

type HeaderProps = {
  nav: NavigationItem[]
  ctaLabel: string
  locale: Locale
  onLocaleChange: (locale: Locale) => void
  languageLabel: string
}

export function Header({
  nav,
  ctaLabel,
  locale,
  onLocaleChange,
  languageLabel,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2D3436]/10 bg-[#FCF8F3]/90 backdrop-blur-md">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-4 py-4">
          <a href="#home" className="group flex items-center gap-2">
            <SymbolIcon
              name="auto_awesome"
              className="text-4xl text-[#2D3436] transition duration-300 group-hover:rotate-12"
            />
            <span
              className={[
                siteTheme.classes.displayFont,
                'text-2xl font-bold tracking-tight text-[#2D3436]',
              ].join(' ')}
            >
              {siteTheme.brandName}
            </span>
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-semibold transition hover:underline hover:decoration-[#2D3436]/30 hover:underline-offset-4"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageToggle
              locale={locale}
              onChange={onLocaleChange}
              label={languageLabel}
            />
            <a href="#contact" className={siteTheme.classes.headerButton}>
              {ctaLabel}
            </a>
            <button
              type="button"
              className="rounded-full p-2 text-[#2D3436] transition hover:bg-white md:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <SymbolIcon name={menuOpen ? 'close' : 'menu'} className="text-3xl" />
            </button>
          </div>
        </div>
      </Container>

      {menuOpen ? (
        <div id="mobile-menu" className="border-t border-[#2D3436]/10 bg-[#FCF8F3] md:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-[#2D3436]/10 bg-white px-5 py-4 text-base font-semibold text-[#2D3436]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex justify-center rounded-full bg-[#2D3436] px-6 py-3 text-base font-bold text-white"
              onClick={() => setMenuOpen(false)}
            >
              {ctaLabel}
            </a>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
