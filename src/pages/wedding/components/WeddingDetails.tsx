import { weddingFonts, weddingColors } from './weddingTheme'

/** Event schedule and accommodation info */
export function WeddingDetails() {
  return (
    <section
      className="py-32 px-6"
      id="details"
      style={{ background: weddingColors.background }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-24">
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: weddingFonts.display, color: weddingColors.primary }}
          >
            The Details
          </h2>
          <div className="w-24 h-px mx-auto" style={{ background: weddingColors.primaryContainer }} />
        </div>

        {/* Three-column event grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-32">
          <EventCard
            image="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80"
            imageAlt="Welcome cocktails"
            title="Welcome Drinks"
            when="Friday · 7:00 PM"
            where={<>The Terrace at Willow Brook<br />122 Old Forge Rd, Hudson, NY</>}
          />

          {/* Ceremony card — elevated */}
          <div
            className="flex flex-col gap-6 z-10 p-8 rounded border shadow-sm scale-105"
            style={{
              background: weddingColors.surfaceContainerLowest,
              borderColor: weddingColors.surfaceContainerLow,
            }}
          >
            <div className="aspect-4/5 overflow-hidden rounded">
              <img
                alt="Wedding greenhouse"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80"
              />
            </div>
            <h3 className="text-2xl" style={{ fontFamily: weddingFonts.display, color: weddingColors.onSurface }}>
              Ceremony &amp; Reception
            </h3>
            <p className="text-sm uppercase tracking-widest" style={{ fontFamily: weddingFonts.label, color: weddingColors.onSurfaceVariant }}>
              Saturday · 4:30 PM
            </p>
            <p style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurfaceVariant }}>
              The Glass House<br />45 Sky Top Lane, Hudson, NY
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest transition-opacity hover:opacity-70"
              style={{ fontFamily: weddingFonts.label, color: weddingColors.primary }}
            >
              <span className="material-symbols-outlined text-sm">map</span> View Map
            </a>
          </div>

          <EventCard
            image="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
            imageAlt="Brunch table"
            title="Farewell Brunch"
            when="Sunday · 10:00 AM"
            where={<>The Garden Cafe<br />12 Main Street, Hudson, NY</>}
          />
        </div>

        {/* Accommodations */}
        <div
          className="p-12 rounded border"
          style={{
            background: weddingColors.surfaceContainerLowest,
            borderColor: weddingColors.surfaceContainerLow,
          }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3
              className="text-4xl mb-8 italic"
              style={{ fontFamily: weddingFonts.display, color: weddingColors.primary }}
            >
              Accommodations
            </h3>
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <HotelCard
                name="The Maker Hotel"
                description="A boutique experience in the heart of downtown Hudson. Mention the E&J wedding for a preferred rate."
              />
              <HotelCard
                name="Rivertown Lodge"
                description="A restored motor lodge with modern amenities. Perfect for groups and families."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Sub-components (private to this file)                             */
/* ------------------------------------------------------------------ */

type EventCardProps = {
  image: string
  imageAlt: string
  title: string
  when: string
  where: React.ReactNode
}

function EventCard({ image, imageAlt, title, when, where }: EventCardProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="aspect-square overflow-hidden rounded">
        <img alt={imageAlt} className="w-full h-full object-cover opacity-80" src={image} />
      </div>
      <h3 className="text-2xl" style={{ fontFamily: weddingFonts.display, color: weddingColors.onSurface }}>{title}</h3>
      <p className="text-sm uppercase tracking-widest" style={{ fontFamily: weddingFonts.label, color: weddingColors.onSurfaceVariant }}>
        {when}
      </p>
      <p style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurfaceVariant }}>{where}</p>
      <a
        href="#"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest transition-opacity hover:opacity-70"
        style={{ fontFamily: weddingFonts.label, color: weddingColors.primary }}
      >
        <span className="material-symbols-outlined text-sm">map</span> View Map
      </a>
    </div>
  )
}

type HotelCardProps = {
  name: string
  description: string
}

function HotelCard({ name, description }: HotelCardProps) {
  return (
    <div>
      <h4
        className="text-xs uppercase tracking-widest font-semibold mb-2"
        style={{ fontFamily: weddingFonts.label, color: weddingColors.onSurface }}
      >
        {name}
      </h4>
      <p className="text-sm mb-4" style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurfaceVariant }}>
        {description}
      </p>
      <a
        href="#"
        className="text-xs uppercase tracking-widest border-b pb-1 transition-colors hover:opacity-70"
        style={{ fontFamily: weddingFonts.label, color: weddingColors.primary, borderColor: weddingColors.outlineVariant }}
      >
        Book Room
      </a>
    </div>
  )
}
