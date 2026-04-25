import { weddingFonts, weddingColors } from './weddingTheme'
import churchImg from '../church.png'

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

        <div className="overflow-hidden rounded border" style={{ borderColor: weddingColors.surfaceContainerLow }}>
          <img
            alt="Biserica pentru cununia religioasă"
            className="w-full h-64 md:h-80 object-cover"
            src={churchImg}
          />
          <div
            className="p-6"
            style={{ background: weddingColors.surfaceContainerLowest }}
          >
            <p
              className="leading-relaxed text-xl"
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
          
          <a
            href="https://maps.app.goo.gl/Jd9L9hh3vQpcduYm6"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded px-5 py-3 text-sm uppercase tracking-widest transition hover:opacity-90"
            style={{
              background: weddingColors.primary,
              color: weddingColors.onPrimary,
              fontFamily: weddingFonts.label,
            }}
          >
            <span className="material-symbols-outlined text-base">directions</span>
            Cum ajungeți?
          </a>
          </div>
        </div>
      </div>
    </section>
  )
}
