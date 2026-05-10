import { useState } from "react";
import { weddingFonts, weddingColors } from "./weddingTheme";
import dallasImg from "../dallasbarn.png";
import dallasLakeImg from "../dallasbarn2.png";
import dallasCar from "../dallasbarn3.png";
import dallasTable from "../dallasbarn4.png";
import type { WeddingTranslation } from "../weddingTranslations";

const venueImageSources = [dallasImg, dallasLakeImg, dallasCar, dallasTable];

/** Locație — description of the venue with practical info */
export function WeddingStory({ t }: { t: WeddingTranslation["location"] }) {
  const [venueImageIndex, setVenueImageIndex] = useState(0);
  const currentVenueImage = {
    src: venueImageSources[venueImageIndex],
    alt: t.imageAlts[venueImageIndex] ?? t.venueName,
  };

  const showPreviousImage = () => {
    setVenueImageIndex((currentIndex) =>
      currentIndex === 0 ? venueImageSources.length - 1 : currentIndex - 1,
    );
  };

  const showNextImage = () => {
    setVenueImageIndex(
      (currentIndex) => (currentIndex + 1) % venueImageSources.length,
    );
  };

  return (
    <section
      className="py-8 px-6 border-y"
      id="location"
      style={{
        background: weddingColors.background,
        borderColor: weddingColors.surfaceContainerLow,
      }}
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
                background: "rgba(255, 252, 248, 0.88)",
                color: weddingColors.primary,
                boxShadow: "0 8px 24px rgba(54, 42, 31, 0.18)",
              }}
              onClick={showPreviousImage}
              aria-label={t.previousImage}
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full transition hover:scale-105 focus:outline-none focus:ring-2"
              style={{
                background: "rgba(255, 252, 248, 0.88)",
                color: weddingColors.primary,
                boxShadow: "0 8px 24px rgba(54, 42, 31, 0.18)",
              }}
              onClick={showNextImage}
              aria-label={t.nextImage}
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {venueImageSources.map((src, index) => (
              <span
                key={src}
                className="size-2 rounded-full"
                style={{
                  background:
                    index === venueImageIndex
                      ? weddingColors.primary
                      : "rgba(255, 252, 248, 0.75)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Venue description */}
        <div className="flex flex-col gap-8">
          <h2
            className="mx-auto text-6xl italic"
            style={{
              fontFamily: weddingFonts.caveat,
              color: weddingColors.primary,
            }}
          >
            {t.title}
          </h2>
          <div
            className="w-24 h-px mx-auto"
            style={{ background: weddingColors.primaryContainer }}
          />
          <p
            className="text-2xl md:text-3xl"
            style={{
              fontFamily: weddingFonts.headline,
              color: weddingColors.primary,
            }}
          >
            {t.venueName}
          </p>
          <div
            className="space-y-5 leading-relaxed text-xl"
            style={{
              fontFamily: weddingFonts.body,
              color: weddingColors.onSurfaceVariant,
            }}
          >
            <p>{t.intro}</p>
            <p>{t.description}</p>
          </div>

          {/* Practical tips */}
          <div
            className="space-y-3 p-6 rounded border"
            style={{
              background: weddingColors.surfaceContainerLow,
              borderColor: weddingColors.surfaceContainer,
            }}
          >
            <h3
              className="text-base uppercase tracking-widest mb-4"
              style={{
                fontFamily: weddingFonts.label,
                color: weddingColors.primary,
              }}
            >
              {t.tipsTitle}
            </h3>
            {t.tips.map(({ icon, text }) => (
              <div key={icon} className="flex items-start gap-3">
                <span
                  className="material-symbols-outlined text-xl mt-0.5 shrink-0"
                  style={{ color: weddingColors.primaryContainer }}
                >
                  {icon}
                </span>
                <p
                  style={{
                    fontFamily: weddingFonts.body,
                    color: weddingColors.onSurfaceVariant,
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Map */}
        <div className="md:col-span-2">
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
            <span className="material-symbols-outlined text-base">
              directions
            </span>
            {t.mapCta}
          </a>
        </div>
      </div>
    </section>
  );
}
