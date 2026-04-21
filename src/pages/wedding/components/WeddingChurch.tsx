import { weddingFonts, weddingColors } from './weddingTheme'

/** Cununia religioasă — church ceremony details */
export function WeddingChurch() {
  return (
    <section
      className="py-8 px-6"
      id="ceremony"
      style={{ background: weddingColors.background }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: weddingFonts.display, color: weddingColors.primary }}
          >
            Cununia religioasă
          </h2>
          <div className="w-24 h-px mx-auto" style={{ background: weddingColors.primaryContainer }} />
        </div>

        <div
          className="flex gap-6 p-6 rounded border"
          style={{
            background: weddingColors.surfaceContainerLowest,
            borderColor: weddingColors.surfaceContainerLow,
          }}
        >
          <div className="flex flex-col items-center gap-2 shrink-0">
            <span
              className="material-symbols-outlined text-2xl"
              style={{ color: weddingColors.primaryContainer }}
            >
              church
            </span>
            <span
              className="text-xs tracking-widest font-semibold"
              style={{ fontFamily: weddingFonts.label, color: weddingColors.primary }}
            >
              14:00
            </span>
          </div>
          <div className="flex-1">
            <p
              className="leading-relaxed"
              style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurfaceVariant }}
            >
              Vă așteptăm la biserică pentru slujba de cununie. Vă rugăm să rețineți că accesul la biserică se face pe piatră cubică — vă recomandăm să lăsați mașina mai jos și să urcați pe jos.
            </p>
            <p
              className="mt-3 text-sm flex items-center gap-1"
              style={{ fontFamily: weddingFonts.label, color: weddingColors.primary }}
            >
              <span className="material-symbols-outlined text-sm">info</span>
              Fără mașini pe piatră cubică
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
