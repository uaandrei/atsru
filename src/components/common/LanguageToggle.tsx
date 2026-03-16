import type { Locale } from '../../i18n/types'

type LanguageToggleProps = {
  locale: Locale
  onChange: (locale: Locale) => void
  label: string
}

export function LanguageToggle({
  locale,
  onChange,
  label,
}: LanguageToggleProps) {
  const options: { code: Locale; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ro', label: 'RO' },
  ]

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-[#2D3436]/10 bg-white p-1"
      aria-label={label}
      role="group"
    >
      {options.map((option) => {
        const isActive = option.code === locale

        return (
          <button
            key={option.code}
            type="button"
            onClick={() => onChange(option.code)}
            className={[
              'rounded-full px-3 py-1.5 text-xs font-bold tracking-[0.2em] transition sm:text-sm',
              isActive
                ? 'bg-[#2D3436] text-white'
                : 'text-[#2D3436]/60 hover:bg-[#E8F3F1]',
            ].join(' ')}
            aria-pressed={isActive}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
