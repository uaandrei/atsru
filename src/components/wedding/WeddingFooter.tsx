import { weddingFonts } from './weddingTheme'

/** Simple footer with section links and credit line */
export function WeddingFooter() {
  return (
    <footer className="w-full py-12 bg-stone-50 border-t border-stone-200">
      <div className="flex flex-col items-center gap-6 px-4 text-center">
        <div className="text-lg italic text-stone-900" style={{ fontFamily: weddingFonts.display }}>
          S &amp; J
        </div>
        <div
          className="flex gap-8 text-sm uppercase tracking-tighter text-stone-500"
          style={{ fontFamily: weddingFonts.body }}
        >
          <a className="hover:underline decoration-stone-300 opacity-80 hover:opacity-100" href="#story">Our Story</a>
          <a className="hover:underline decoration-stone-300 opacity-80 hover:opacity-100" href="#details">Events</a>
          <a className="hover:underline decoration-stone-300 opacity-80 hover:opacity-100" href="#rsvp">RSVP</a>
          <a className="hover:underline decoration-stone-300 opacity-80 hover:opacity-100" href="#">Registry</a>
        </div>
        <p
          className="text-stone-600 text-[10px] uppercase tracking-widest"
          style={{ fontFamily: weddingFonts.body }}
        >
          Made with love for Eleanor &amp; James &bull; 2024
        </p>
      </div>
    </footer>
  )
}
