import { weddingFonts, weddingColors } from './weddingTheme'

/** Full-screen hero section styled as a formal wedding invitation */
export function WeddingHero() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 text-center"
      style={{ background: weddingColors.background }}
    >
      <div className="max-w-3xl mx-auto">
        <p
          className="text-xs uppercase tracking-[0.3em] mb-12"
          style={{ fontFamily: weddingFonts.label, color: weddingColors.onSurfaceVariant }}
        >
          Together with their families
        </p>

        <h1
          className="text-6xl md:text-8xl lg:text-9xl mb-8 font-light"
          style={{ fontFamily: weddingFonts.display, color: weddingColors.primary }}
        >
          Evelyn &amp; James
        </h1>

        <div className="flex flex-col items-center gap-8">
          <div className="w-px h-24" style={{ background: weddingColors.primaryContainer }} />
          <div
            className="text-2xl md:text-3xl tracking-wide"
            style={{ fontFamily: weddingFonts.headline, color: weddingColors.onSurface }}
          >
            <p>Saturday, the Twelfth of October</p>
            <p className="mt-2 italic">Two Thousand Twenty Four</p>
          </div>
          <div className="w-px h-24" style={{ background: weddingColors.primaryContainer }} />
        </div>

        <p
          className="mt-12 text-xs uppercase tracking-[0.2em]"
          style={{ fontFamily: weddingFonts.label, color: weddingColors.onSurfaceVariant }}
        >
          The Glass House &bull; Hudson Valley, NY
        </p>
      </div>
    </section>
  )
}
