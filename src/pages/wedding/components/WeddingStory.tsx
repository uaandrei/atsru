import { weddingFonts, weddingColors } from './weddingTheme'
import dallasImg from "../dallasbarn.png"

/** Locație — description of the venue with practical info */
export function WeddingStory() {
  return (
    <section
      className="py-32 px-6 border-y"
      id="location"
      style={{ background: weddingColors.surfaceContainerLowest, borderColor: weddingColors.surfaceContainerLow }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <div className="relative aspect-4/5 overflow-hidden rounded">
          <img
            alt="Locație pe malul lacului"
            className="w-full h-full object-cover"
            src={dallasImg}
          />
        </div>

        {/* Venue description */}
        <div className="flex flex-col gap-8">
          <h2
            className="text-5xl md:text-6xl italic"
            style={{ fontFamily: weddingFonts.display, color: weddingColors.primary }}
          >
            Locația
          </h2>
          <div
            className="space-y-5 leading-relaxed text-lg"
            style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurfaceVariant }}
          >
            <p>
              Iubim natura, dansul, buna dispoziție și momentele petrecute împreună cu voi.
            </p>
            <p>
              De aceea, pentru a ne sărbători nunta, am ales un loc relaxant, aproape de natură,
              pe malul unui lac. Nu ne-am imaginat o nuntă clasică, ci o petrecere pe cinste,
              cu muzica noastră preferată și cu oamenii care ne sunt cei mai dragi.
            </p>
          </div>

          {/* Practical tips */}
          <div
            className="space-y-3 p-6 rounded border"
            style={{ background: weddingColors.surfaceContainerLow, borderColor: weddingColors.surfaceContainer }}
          >
            <h3
              className="text-sm uppercase tracking-widest mb-4"
              style={{ fontFamily: weddingFonts.label, color: weddingColors.primary }}
            >
              De reținut
            </h3>
            {[
              { icon: 'hiking', text: 'Din cauza terenului și ca să puteți dansa până dimineața, încălțămintea comodă va fi cea mai bună alegere.' },
              { icon: 'directions_car', text: 'Dacă se poate, lăsați mașina la cazare. Deși există suficiente locuri de parcare, vă recomandăm să nu planificați să conduceți.' },
              { icon: 'directions_bus', text: 'De transportul pe ruta Sighișoara–locație ne ocupăm noi.' },
            ].map(({ icon, text }) => (
              <div key={icon} className="flex items-start gap-3">
                <span
                  className="material-symbols-outlined text-xl mt-0.5 shrink-0"
                  style={{ color: weddingColors.primaryContainer }}
                >
                  {icon}
                </span>
                <p style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurfaceVariant }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
