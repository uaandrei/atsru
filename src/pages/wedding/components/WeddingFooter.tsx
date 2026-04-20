import { weddingFonts, weddingColors } from './weddingTheme'

/** Simple footer with section links and credit line */
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
          Evelyn &amp; James
        </div>
        <div className="flex gap-8 text-sm uppercase tracking-widest">
          {[
            { label: 'Our Story', href: '#story' },
            { label: 'Details', href: '#details' },
            { label: 'RSVP', href: '#rsvp' },
            { label: 'Registry', href: '#registry' },
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
        <p
          className="text-[10px] uppercase tracking-widest"
          style={{ fontFamily: weddingFonts.label, color: weddingColors.outline }}
        >
          Made with love for Evelyn &amp; James &bull; 2024
        </p>
      </div>
    </footer>
  )
}
