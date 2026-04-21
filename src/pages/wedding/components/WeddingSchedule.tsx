import { weddingFonts, weddingColors } from './weddingTheme'

/** Program — church info and event schedule */
export function WeddingDetails() {
  return (
    <section
      className="py-8 px-6"
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
            time="16:00"
            title="Petrecerea"
            icon="celebration"
          />
          <ProgramItem
            time="14:00"
            title="Cununia religioasă"
            icon="church"
          />
        </div>

      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

type ProgramItemProps = {
  time: string
  title: string
  icon: string
  note?: string
}

function ProgramItem({ time, title, icon, note }: ProgramItemProps) {
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
