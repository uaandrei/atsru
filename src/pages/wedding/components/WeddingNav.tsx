import { weddingFonts, weddingColors } from './weddingTheme'

const navItems = [
  { icon: 'home', label: 'Acasă', href: '#home' },
  { icon: 'location_on', label: 'Locație', href: '#location' },
  { icon: 'calendar_today', label: 'Program', href: '#program' },
  { icon: 'mail', label: 'Confirmare', href: '#rsvp' },
  { icon: 'call', label: 'Contact', href: '#contact' },
]

/** Sticky header combining navigation, contact info and branding */
export function WeddingNav() {
  return (
    <header
      className="fixed top-0 w-full z-50 backdrop-blur-xl border-b"
      style={{
        background: `${weddingColors.background}e6`,
        borderColor: weddingColors.outlineVariant,
      }}
    >
      <div className="flex items-center justify-center px-4 md:px-8 py-4 md:py-5">
        <nav className="flex items-center gap-4 sm:gap-5 md:gap-8">
          {navItems.map(({ icon, label, href }) => (
            <a
              key={href}
              href={href}
              className="flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{
                fontFamily: weddingFonts.label,
                color: weddingColors.onSurfaceVariant,
              }}
            >
              <span className="material-symbols-outlined text-2xl md:text-3xl">{icon}</span>
              <span className="hidden md:inline text-base lg:text-lg tracking-widest uppercase">{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
