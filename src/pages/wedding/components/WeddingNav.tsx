import type { SVGProps } from 'react'
import { weddingFonts, weddingColors } from './weddingTheme'

type IconProps = SVGProps<SVGSVGElement>

const iconBaseProps: IconProps = {
  width: 48,
  height: 48,
  viewBox: '0 -960 960 960',
  fill: 'currentColor',
  'aria-hidden': true,
  focusable: false,
}

const HomeIcon = (props: IconProps) => (
  <svg {...iconBaseProps} {...props}>
    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
  </svg>
)

const LocationIcon = (props: IconProps) => (
  <svg {...iconBaseProps} {...props}>
    <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
  </svg>
)

const CalendarIcon = (props: IconProps) => (
  <svg {...iconBaseProps} {...props}>
    <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
  </svg>
)

const MailIcon = (props: IconProps) => (
  <svg {...iconBaseProps} {...props}>
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
  </svg>
)

const CallIcon = (props: IconProps) => (
  <svg {...iconBaseProps} {...props}>
    <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
  </svg>
)

const navItems = [
  { Icon: HomeIcon, label: '', href: '#home' },
  { Icon: LocationIcon, label: 'Locație', href: '#location' },
  { Icon: CalendarIcon, label: 'Program', href: '#program' },
  { Icon: MailIcon, label: 'Confirmare', href: '#rsvp' },
  { Icon: CallIcon, label: 'Contact', href: '#contact' },
]

/** Sticky header combining navigation, contact info and branding */
export function WeddingNav() {
  return (
    <header
      className="sticky top-0 w-full z-50 backdrop-blur-xl border-b"
      style={{
        background: `${weddingColors.background}e6`,
        borderColor: weddingColors.outlineVariant,
      }}
    >
      <div className="flex items-center justify-center px-4 md:px-8 py-4 md:py-5">
        <nav className="flex items-center gap-4 sm:gap-5 md:gap-8">
          {navItems.map(({ Icon, label, href }) => (
            <a
              key={href}
              href={href}
              className="flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{
                fontFamily: weddingFonts.label,
                color: weddingColors.onSurfaceVariant,
              }}
            >
              <Icon />
              <span className="hidden md:inline font-bold text-base lg:text-lg tracking-widest uppercase">{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
