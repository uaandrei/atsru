import { useState } from 'react'
import { weddingFonts, weddingColors } from './weddingTheme'
import dallasImg from "../dallasbarn.png"
import dallasLakeImg from "../dallasbarn2.png"
import dallasCar from "../dallasbarn3.png"
import dallasTable from "../dallasbarn4.png"

const venueImages = [
  { src: dallasImg, alt: 'Interiorul The Dallas Barn pregătit pentru nuntă' },
  { src: dallasLakeImg, alt: 'Masă de nuntă pe terasa The Dallas Barn, pe malul lacului' },
  { src: dallasCar, alt: 'Mașină de nuntă The Dallas Barn, pe malul lacului' },
  { src: dallasTable, alt: 'Masă de nuntă The Dallas Barn, pe malul lacului' },
]

/** Locație — description of the venue with practical info */
export function WeddingStory() {
  const [venueImageIndex, setVenueImageIndex] = useState(0)
  const currentVenueImage = venueImages[venueImageIndex]

  const showPreviousImage = () => {
    setVenueImageIndex((currentIndex) => (currentIndex === 0 ? venueImages.length - 1 : currentIndex - 1))
  }

  const showNextImage = () => {
    setVenueImageIndex((currentIndex) => (currentIndex + 1) % venueImages.length)
  }

  return (
    <section
      className="py-8 px-6 border-y"
      id="location"
      style={{ background: weddingColors.surfaceContainerLowest, borderColor: weddingColors.surfaceContainerLow }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <div className="relative aspect-4/5 overflow-hidden rounded group">
          <img
            alt={currentVenueImage.alt}
            className="w-full h-full object-cover"
            src={currentVenueImage.src}
          />
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-3">
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full transition hover:scale-105 focus:outline-none focus:ring-2"
              style={{
                background: 'rgba(255, 252, 248, 0.88)',
                color: weddingColors.primary,
                boxShadow: '0 8px 24px rgba(54, 42, 31, 0.18)',
              }}
              onClick={showPreviousImage}
              aria-label="Imaginea anterioară"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full transition hover:scale-105 focus:outline-none focus:ring-2"
              style={{
                background: 'rgba(255, 252, 248, 0.88)',
                color: weddingColors.primary,
                boxShadow: '0 8px 24px rgba(54, 42, 31, 0.18)',
              }}
              onClick={showNextImage}
              aria-label="Imaginea următoare"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {venueImages.map((image, index) => (
              <span
                key={image.src}
                className="size-2 rounded-full"
                style={{
                  background: index === venueImageIndex ? weddingColors.primary : 'rgba(255, 252, 248, 0.75)',
                }}
              />
            ))}
          </div>
        </div>

        {/* Venue description */}
        <div className="flex flex-col gap-8">
          <h2
            className="mx-auto text-6xl italic"
            style={{ fontFamily: weddingFonts.caveat, color: weddingColors.primary }}
          >
            Locația
          </h2>
          <div className="w-24 h-px mx-auto" style={{ background: weddingColors.primaryContainer }} />
          <p
            className="text-2xl md:text-3xl"
            style={{ fontFamily: weddingFonts.headline, color: weddingColors.primary }}
          >
            The Dallas Barn
          </p>
          <div
            className="space-y-5 leading-relaxed text-xl"
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
              className="text-base uppercase tracking-widest mb-4"
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
        {/* Map */}
        <div className="md:col-span-2">
          <p
            className="mb-3 flex items-center gap-2"
            style={{ fontFamily: weddingFonts.label, color: weddingColors.onSurfaceVariant }}
          >
            <span className="material-symbols-outlined text-base" style={{ color: weddingColors.primaryContainer }}>pin_drop</span>
            Locația The Dallas Barn pe hartă
          </p>
          <a
            href="https://maps.app.goo.gl/oBDBPGDyoP2JpWtd9"
            target="_blank"
            rel="noreferrer"
            className="mb-5 inline-flex items-center gap-2 rounded px-5 py-3 text-sm uppercase tracking-widest transition hover:opacity-90"
            style={{
              background: weddingColors.primary,
              color: weddingColors.onPrimary,
              fontFamily: weddingFonts.label,
            }}
          >
            <span className="material-symbols-outlined text-base">directions</span>
            Cum ajungeți?
          </a>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4563.435634453744!2d24.725900713123785!3d46.23788117097673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474b9fd669657fe9%3A0x2477d062b435dfc0!2sThe%20Dallas%20Barn!5e1!3m2!1sen!2sro!4v1776789017586!5m2!1sen!2sro"
            className="w-full h-80 md:h-96 rounded"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Dallas Barn pe Google Maps"
          /> */}
        </div>
      </div>
    </section>
  )
}
