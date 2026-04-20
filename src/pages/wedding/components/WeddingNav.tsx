import { weddingFonts, weddingColors } from './weddingTheme'

/** Top app bar + desktop pill nav + mobile bottom nav */
export function WeddingNav() {
  return (
    <>
      {/* Fixed top app bar */}
      <header
        className="fixed w-full flex justify-between items-center px-6 py-4 z-50 backdrop-blur-xl"
        style={{ background: `${weddingColors.background}cc` }}
      >
        <button
          aria-label="Menu"
          className="p-2 rounded-full transition-colors duration-200 hover:opacity-70 active:scale-95"
          style={{ color: weddingColors.primary }}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>

        <h1
          className="text-3xl"
          style={{ fontFamily: weddingFonts.display, color: weddingColors.primary }}
        >
          Evelyn &amp; James
        </h1>

        <button
          aria-label="Favorite"
          className="p-2 rounded-full transition-colors duration-200 hover:opacity-70 active:scale-95"
          style={{ color: weddingColors.primary }}
        >
          <span className="material-symbols-outlined">favorite</span>
        </button>
      </header>

      {/* Desktop centered pill nav — floats below the app bar */}
      <div className="hidden md:flex fixed top-0 w-full justify-center items-center h-[72px] z-40 pointer-events-none">
        <nav
          className="flex gap-8 pointer-events-auto px-8 py-2 rounded-full border shadow-sm mt-4"
          style={{
            background: `${weddingColors.surfaceContainerLowest}80`,
            backdropFilter: 'blur(12px)',
            borderColor: weddingColors.surfaceContainerLow,
          }}
        >
          {[
            { label: 'Our Story', href: '#story', active: false },
            { label: 'Details', href: '#details', active: false },
            { label: 'RSVP', href: '#rsvp', active: true },
            { label: 'Registry', href: '#registry', active: false },
          ].map(({ label, href, active }) => (
            <a
              key={href}
              href={href}
              className="text-sm tracking-widest uppercase transition-colors"
              style={{
                fontFamily: weddingFonts.label,
                color: active ? weddingColors.primary : weddingColors.onSurfaceVariant,
                fontWeight: active ? 700 : undefined,
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile bottom nav — md:hidden */}
      <nav
        className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pt-2 pb-safe z-50 rounded-t-xl shadow-[0_-4px_40px_rgba(21,29,26,0.06)]"
        style={{ background: `${weddingColors.background}e6`, backdropFilter: 'blur(12px)' }}
      >
        {[
          { icon: 'auto_stories', label: 'Our Story', href: '#story', active: false },
          { icon: 'calendar_today', label: 'Details', href: '#details', active: false },
          { icon: 'mail', label: 'RSVP', href: '#rsvp', active: true },
          { icon: 'card_giftcard', label: 'Registry', href: '#registry', active: false },
        ].map(({ icon, label, href, active }) => (
          <a
            key={href}
            href={href}
            className="flex flex-col items-center justify-center p-2 transition-opacity duration-200"
            style={{
              color: active ? weddingColors.primary : weddingColors.onSurfaceVariant,
              background: active ? weddingColors.surfaceContainer : undefined,
              borderRadius: active ? '9999px' : undefined,
              padding: active ? '4px 16px' : undefined,
              opacity: active ? 1 : 0.7,
            }}
          >
            <span
              className="material-symbols-outlined mb-1"
              style={{ fontVariationSettings: `'FILL' ${active ? 1 : 0}` }}
            >
              {icon}
            </span>
            <span className="text-[11px] tracking-wider uppercase" style={{ fontFamily: weddingFonts.label }}>
              {label}
            </span>
          </a>
        ))}
      </nav>
    </>
  )
}
