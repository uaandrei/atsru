import { weddingFonts, weddingColors } from './weddingTheme'

const schedule = [
  { time: '14:00', title: 'Cununia religioasă', icon: 'church' },
  { time: '15:30', title: 'Sosirea la locație', icon: 'directions_car' },
  { time: '16:00', title: 'Petrecerea', icon: 'celebration' },
]

/** Program — compact vertical timeline */
export function WeddingDetails() {
  return (
    <section
      className="py-8 px-6"
      id="program"
      style={{ background: weddingColors.background }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: weddingFonts.display, color: weddingColors.primary }}
          >
            Programul
          </h2>
          <div className="w-24 h-px mx-auto" style={{ background: weddingColors.primaryContainer }} />
        </div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12">
          {/* Vertical line */}
          <div
            className="absolute left-3 md:left-5 top-1 bottom-1 w-px"
            style={{ background: weddingColors.outlineVariant }}
          />

          {schedule.map(({ time, title, icon }, i) => (
            <div key={time} className={`relative flex items-center gap-4 md:gap-6 ${i < schedule.length - 1 ? 'pb-8' : ''}`}>
              {/* Dot on the timeline */}
              <div
                className="absolute -left-8 md:-left-12 flex items-center justify-center w-7 h-7 md:w-11 md:h-11 rounded-full shrink-0"
                style={{ background: weddingColors.surfaceContainerLow }}
              >
                <span
                  className="material-symbols-outlined text-base md:text-xl"
                  style={{ color: weddingColors.primary }}
                >
                  {icon}
                </span>
              </div>

              {/* Time + title */}
              <span
                className="text-sm md:text-base font-semibold tracking-widest shrink-0 w-14 md:w-16"
                style={{ fontFamily: weddingFonts.label, color: weddingColors.primary }}
              >
                {time}
              </span>
              <span
                className="text-lg md:text-xl"
                style={{ fontFamily: weddingFonts.headline, color: weddingColors.onSurface }}
              >
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
