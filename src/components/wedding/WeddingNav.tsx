import { weddingFonts } from './weddingTheme'

/** Fixed top navigation bar with section links and RSVP button */
export function WeddingNav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        {/* Logo / Monogram */}
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-stone-800">favorite</span>
          <span
            className="text-2xl font-light italic text-stone-900 tracking-widest"
            style={{ fontFamily: weddingFonts.display }}
          >
            S &amp; J
          </span>
        </div>

        {/* Desktop nav links */}
        <div
          className="hidden md:flex gap-8 items-center text-xs uppercase tracking-widest text-stone-500"
          style={{ fontFamily: weddingFonts.body }}
        >
          <a className="hover:text-stone-900 transition-colors" href="#story">Our Story</a>
          <a className="hover:text-stone-900 transition-colors" href="#details">Events</a>
          <a className="px-6 py-2 bg-stone-900 text-white hover:bg-champagne transition-colors" href="#rsvp">RSVP</a>
        </div>

        {/* Mobile RSVP link */}
        <a
          className="md:hidden text-stone-900 font-medium border-b border-stone-900 tracking-widest"
          style={{ fontFamily: weddingFonts.display }}
          href="#rsvp"
        >
          RSVP
        </a>
      </div>
    </nav>
  )
}
