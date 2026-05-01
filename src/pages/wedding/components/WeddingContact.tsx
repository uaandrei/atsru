import { weddingFonts, weddingColors } from './weddingTheme'

/** Contact section with phone numbers */
export function WeddingContact() {
  return (
    <section
      className="py-8 px-6"
      id="contact"
      style={{ background: weddingColors.background }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: weddingFonts.caveat, color: weddingColors.primary }}
          >
            Contact
          </h2>
          <div className="w-24 h-px mx-auto" style={{ background: weddingColors.primaryContainer }} />
        </div>

        <div
          className="p-8 rounded border text-center"
          style={{
            background: weddingColors.surfaceContainerLowest,
            borderColor: weddingColors.surfaceContainerLow,
          }}
        >
          <p
            className="mb-4"
            style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurfaceVariant }}
          >
            Pentru orice întrebare, nu ezitați să ne contactați!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <a
              href="tel:0743197946"
              className="flex items-center gap-2 justify-center transition-opacity hover:opacity-70"
              style={{ fontFamily: weddingFonts.label, color: weddingColors.primary }}
            >
              <span className="material-symbols-outlined">call</span>
              <div className="text-xl">Zsófi · 0743 197 946</div>
            </a>
            <a
              href="tel:0743215090"
              className="flex items-center gap-2 justify-center transition-opacity hover:opacity-70"
              style={{ fontFamily: weddingFonts.label, color: weddingColors.primary }}
            >
              <span className="material-symbols-outlined">call</span>
              <div className="text-xl">Andrei · 0743 215 090</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
