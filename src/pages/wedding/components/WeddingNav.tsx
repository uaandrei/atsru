import { weddingFonts, weddingColors } from './weddingTheme'

const navItems = [
  { icon: 'home', label: 'Acasă', href: '#home' },
  { icon: 'calendar_today', label: 'Program', href: '#program' },
  { icon: 'location_on', label: 'Locație', href: '#location' },
  { icon: 'mail', label: 'Confirmare', href: '#rsvp' },
]

const contacts = [
  { name: 'Zsófi', href: 'tel:0743197946', number: '0743 197 946' },
  { name: 'Andrei', href: 'tel:0743215090', number: '0743 215 090' },
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
      <div className="flex flex-col items-center px-4 md:px-8 py-3 md:py-4 gap-2 md:gap-3">

        {/* Nav links + contacts */}
        <nav className="flex items-center gap-3 sm:gap-4 md:gap-6">
          {navItems.map(({ icon, label, href }) => (
            <a
              key={href}
              href={href}
              className="flex items-center gap-1.5 transition-opacity hover:opacity-70"
              style={{
                fontFamily: weddingFonts.label,
                color: weddingColors.onSurfaceVariant,
              }}
            >
              <span className="material-symbols-outlined text-xl md:text-2xl">{icon}</span>
              <span className="hidden md:inline text-sm tracking-widest uppercase">{label}</span>
            </a>
          ))}

          {/* Divider */}
          <div
            className="w-px h-5 md:h-6"
            style={{ background: weddingColors.outlineVariant }}
          />

          {/* Contact links */}
          {contacts.map(({ name, href, number }) => (
            <a
              key={href}
              href={href}
              className="flex items-center gap-1.5 transition-opacity hover:opacity-70"
              style={{
                fontFamily: weddingFonts.label,
                color: weddingColors.outline,
              }}
            >
              <span className="material-symbols-outlined text-xl md:text-2xl">call</span>
              <span className="text-xs md:text-sm">{name}</span>
              <span className="hidden lg:inline text-xs"> · {number}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
