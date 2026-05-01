import { weddingFonts, weddingColors } from './weddingTheme'
import type { WeddingTranslation } from '../weddingTranslations'

/** Full-screen hero — invitation header with names, date and welcome text */
export function WeddingHero({ t }: { t: WeddingTranslation['hero'] }) {
  return (
    <section
      className="flex flex-col items-center justify-center px-6 pt-32 md:pt-40 pb-12 text-center"
      id="home"
      style={{ background: weddingColors.background }}
    >
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-6xl md:text-8xl lg:text-9xl mb-8 font-light"
          style={{ fontFamily: weddingFonts.caveat, color: weddingColors.primary }}
        >
          Zsófi <span
            style={{ fontFamily: weddingFonts.caveat, color: weddingColors.primary }}
          >&</span> Andrei
        </h1>

        <div className="flex flex-col items-center gap-8">
          <div className="w-px h-20" style={{ background: weddingColors.primaryContainer }} />
          <div
            className="text-xl md:text-2xl tracking-wide"
            style={{ fontFamily: weddingFonts.headline, color: weddingColors.onSurface }}
          >
            <p>{t.date}</p>
            <p className="mt-2 italic text-lg md:text-xl" style={{ color: weddingColors.onSurfaceVariant }}>
              {t.place}
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
            {t.welcomeTitle}
          </p>
          <p
            className="text-xl leading-relaxed"
            style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurfaceVariant }}
          >
            {t.welcomeBody}
          </p>
        </div>
      </div>
    </section>
  )
}
