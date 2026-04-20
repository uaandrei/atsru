import { weddingFonts, weddingColors } from './weddingTheme'

/** Footer with section links and contact details */
export function WeddingFooter() {
  return (
    <footer
      className="w-full py-12 border-t pb-24 md:pb-12"
      style={{ background: weddingColors.background, borderColor: weddingColors.surfaceContainerHigh }}
    >
      <div className="flex flex-col items-center gap-6 px-4 text-center">
        <div
          className="text-3xl"
          style={{ fontFamily: weddingFonts.display, color: weddingColors.primary }}
        >
          Zsófi &amp; Andrei
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-widest">
          {[
            { label: 'Acasă', href: '#home' },
            { label: 'Program', href: '#program' },
            { label: 'Locație', href: '#location' },
            { label: 'RSVP', href: '#rsvp' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="opacity-70 hover:opacity-100 transition-opacity"
              style={{ fontFamily: weddingFonts.label, color: weddingColors.onSurfaceVariant }}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 text-sm">
          <a
            href="tel:0743197946"
            className="flex items-center gap-1 justify-center transition-opacity hover:opacity-70"
            style={{ fontFamily: weddingFonts.label, color: weddingColors.outline }}
          >
            <span className="material-symbols-outlined text-sm">call</span>
            Zsófi · 0743 197 946
          </a>
          <a
            href="tel:0743215090"
            className="flex items-center gap-1 justify-center transition-opacity hover:opacity-70"
            style={{ fontFamily: weddingFonts.label, color: weddingColors.outline }}
          >
            <span className="material-symbols-outlined text-sm">call</span>
            Andrei · 0743 215 090
          </a>
        </div>

        <p
          className="text-[10px] uppercase tracking-widest"
          style={{ fontFamily: weddingFonts.label, color: weddingColors.outline }}
        >
          8 august 2026 · Sighișoara
        </p>
      </div>
    </footer>
  )
}
