import { weddingFonts } from './weddingTheme'

/** Full-screen hero section styled as a formal wedding invitation */
export function WeddingHero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 text-center bg-stone-50">
      <div className="max-w-3xl mx-auto">
        <p
          className="text-xs uppercase tracking-[0.3em] mb-12 text-stone-500"
          style={{ fontFamily: weddingFonts.body }}
        >
          Together with their families
        </p>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl mb-8 font-light"
          style={{ fontFamily: weddingFonts.display }}
        >
          Eleanor <span className="serif-italic">&amp;</span> James
        </h1>

        {/* Vertical divider — date — vertical divider */}
        <div className="flex flex-col items-center gap-8">
          <div className="w-px h-24 bg-champagne" />
          <div
            className="text-2xl md:text-3xl tracking-wide"
            style={{ fontFamily: weddingFonts.display }}
          >
            <p>Saturday, the Twelfth of October</p>
            <p className="mt-2 italic">Two Thousand Twenty Four</p>
          </div>
          <div className="w-px h-24 bg-champagne" />
        </div>

        <p
          className="mt-12 text-xs uppercase tracking-[0.2em] text-stone-500"
          style={{ fontFamily: weddingFonts.body }}
        >
          The Glass House &bull; Hudson Valley, NY
        </p>
      </div>
    </section>
  )
}
