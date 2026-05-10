import { weddingFonts, weddingColors } from './weddingTheme'
import churchImg from '../church.png'
import type { WeddingTranslation } from '../weddingTranslations'

/** Cununia religioasă — church ceremony details */
export function WeddingChurch({ t }: { t: WeddingTranslation['church'] }) {
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
            style={{ fontFamily: weddingFonts.caveat, color: weddingColors.primary }}
          >
            {t.title}
          </h2>
          <div className="w-24 h-px mx-auto" style={{ background: weddingColors.primaryContainer }} />
        </div>

        <div className="overflow-hidden rounded border" style={{ borderColor: weddingColors.surfaceContainerLow }}>
          <img
            alt={t.imageAlt}
            className="w-full h-full object-cover"
            src={churchImg}
          />
          <div
            className="p-6"
            style={{ background: weddingColors.surfaceContainerLowest }}
          >
            <div
              className="leading-relaxed text-xl"
              style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurfaceVariant }}
            >
              <p>{t.intro}</p>
              <p className="mt-3">{t.details}</p>
            </div>
            <p
              className="mt-3 text-sm flex items-center gap-1"
              style={{ fontFamily: weddingFonts.label, color: weddingColors.primary }}
            >
              <span className="material-symbols-outlined text-sm">info</span>
              {t.notice}
            </p>
          
          <a
            href="https://maps.app.goo.gl/q7PCfAySWYwEhPb1A"
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
            {t.mapCta}
          </a>
          </div>
        </div>
      </div>
    </section>
  )
}
