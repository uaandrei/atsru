import { weddingFonts, weddingColors } from './weddingTheme'

/** Full-screen hero — invitation header with names, date and welcome text */
export function WeddingHero() {
  return (
    <section
      className="flex flex-col items-center justify-center px-6 pt-32 md:pt-40 pb-12 text-center"
      id="home"
      style={{ background: weddingColors.background }}
    >
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-6xl md:text-8xl lg:text-9xl mb-8 font-light"
          style={{ fontFamily: weddingFonts.display, color: weddingColors.primary }}
        >
          Zsófi & Andrei
        </h1>

        <div className="flex flex-col items-center gap-8">
          <div className="w-px h-20" style={{ background: weddingColors.primaryContainer }} />
          <div
            className="text-xl md:text-2xl tracking-wide"
            style={{ fontFamily: weddingFonts.headline, color: weddingColors.onSurface }}
          >
            <p>8 august 2026 (Sâmbătă)</p>
            <p className="mt-2 italic text-lg md:text-xl" style={{ color: weddingColors.onSurfaceVariant }}>
              Sighișoara
            </p>
          </div>
          <div className="w-px h-20" style={{ background: weddingColors.primaryContainer }} />
        </div>

        {/* Welcome text */}
        <div className="mt-12 max-w-xl mx-auto space-y-4">
          <p
            className="text-2xl"
            style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurface }}
          >
            Bine ați venit pe pagina noastră de nuntă!
          </p>
          <p
            className="text-xl leading-relaxed"
            style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurfaceVariant }}
          >
            Am creat această pagină pentru ca voi să găsiți într-un singur loc toate informațiile
            importante despre program, locație, opțiuni de cazare și transport. Pagina va fi
            actualizată constant cu informații noi pe măsură ce ne apropiem de ziua nunții.
          </p>
        </div>
      </div>
    </section>
  )
}
