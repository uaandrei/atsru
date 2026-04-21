import { weddingFonts, weddingColors } from './weddingTheme'

/** Program — church info and event schedule */
export function WeddingDetails() {
  return (
    <section
      className="py-32 px-6"
      id="program"
      style={{ background: weddingColors.background }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: weddingFonts.display, color: weddingColors.primary }}
          >
            Programul
          </h2>
          <div className="w-24 h-px mx-auto" style={{ background: weddingColors.primaryContainer }} />
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          <ProgramItem
            time="13:00"
            title="Cununia religioasă"
            description="Vă așteptăm la biserică pentru slujba de cununie. Vă rugăm să rețineți că accesul la biserică se face pe piatră cubică — vă recomandăm să lăsați mașina mai jos și să urcați pe jos."
            icon="church"
            note="Fără mașini pe piatră cubică"
          />
          <ProgramItem
            time="16:00"
            title="Petrecerea"
            description="Ne mutăm la locație, pe malul lacului, unde începe petrecerea pe cinste! Muzica noastră preferată, oamenii dragi și dans până dimineața."
            icon="celebration"
          />
        </div>

        {/* Section header */}
        <div className="text-center my-20">
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: weddingFonts.display, color: weddingColors.primary }}
          >
            Contact
          </h2>
          <div className="w-24 h-px mx-auto" style={{ background: weddingColors.primaryContainer }} />
        </div>

        {/* Contact info */}
        <div
          className="mt-20 p-8 rounded border text-center"
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
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:0743197946"
              className="flex items-center gap-2 justify-center transition-opacity hover:opacity-70"
              style={{ fontFamily: weddingFonts.label, color: weddingColors.primary }}
            >
              <span className="material-symbols-outlined text-base">call</span>
              Zsófi · 0743 197 946
            </a>
            <a
              href="tel:0743215090"
              className="flex items-center gap-2 justify-center transition-opacity hover:opacity-70"
              style={{ fontFamily: weddingFonts.label, color: weddingColors.primary }}
            >
              <span className="material-symbols-outlined text-base">call</span>
              Andrei · 0743 215 090
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

type ProgramItemProps = {
  time: string
  title: string
  description: string
  icon: string
  note?: string
}

function ProgramItem({ time, title, description, icon, note }: ProgramItemProps) {
  return (
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
          {icon}
        </span>
        <span
          className="text-xs tracking-widest font-semibold"
          style={{ fontFamily: weddingFonts.label, color: weddingColors.primary }}
        >
          {time}
        </span>
      </div>
      <div className="flex-1">
        <h3
          className="text-2xl mb-2"
          style={{ fontFamily: weddingFonts.display, color: weddingColors.onSurface }}
        >
          {title}
        </h3>
        <p
          className="leading-relaxed"
          style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurfaceVariant }}
        >
          {description}
        </p>
        {note && (
          <p
            className="mt-3 text-sm flex items-center gap-1"
            style={{ fontFamily: weddingFonts.label, color: weddingColors.primary }}
          >
            <span className="material-symbols-outlined text-sm">info</span>
            {note}
          </p>
        )}
      </div>
    </div>
  )
}
