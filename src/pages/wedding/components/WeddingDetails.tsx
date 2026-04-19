import { weddingFonts } from './weddingTheme'

/** Event schedule (Welcome Drinks, Ceremony, Brunch) and accommodation info */
export function WeddingDetails() {
  return (
    <section className="py-32 px-6 bg-stone-50" id="details">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: weddingFonts.display }}>
            The Details
          </h2>
          <div className="w-24 h-px bg-champagne mx-auto" />
        </div>

        {/* Three-column event grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-32">
          <EventCard
            image="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80"
            imageAlt="Welcome cocktails"
            title="Welcome Drinks"
            when="Friday &bull; 7:00 PM"
            where={<>The Terrace at Willow Brook<br />122 Old Forge Rd, Hudson, NY</>}
            imageClass="opacity-80"
          />

          {/* Ceremony card is slightly larger and elevated */}
          <div className="flex flex-col gap-6 scale-105 z-10 bg-white p-8 shadow-sm border border-stone-100">
            <div className="aspect-4/5 bg-stone-200 overflow-hidden">
              <img
                alt="Wedding greenhouse"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80"
              />
            </div>
            <h3 className="text-2xl" style={{ fontFamily: weddingFonts.display }}>
              Ceremony &amp; Reception
            </h3>
            <p
              className="text-sm text-stone-500 uppercase tracking-widest"
              style={{ fontFamily: weddingFonts.body }}
            >
              Saturday &bull; 4:30 PM
            </p>
            <p className="text-stone-600" style={{ fontFamily: weddingFonts.body }}>
              The Glass House<br />45 Sky Top Lane, Hudson, NY
            </p>
            <a
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-champagne hover:text-stone-900 transition-colors"
              href="#"
              style={{ fontFamily: weddingFonts.body }}
            >
              <span className="material-symbols-outlined text-sm">map</span> View Map
            </a>
          </div>

          <EventCard
            image="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
            imageAlt="Brunch table"
            title="Farewell Brunch"
            when="Sunday &bull; 10:00 AM"
            where={<>The Garden Cafe<br />12 Main Street, Hudson, NY</>}
            imageClass="opacity-80"
          />
        </div>

        {/* Accommodations */}
        <div className="bg-white p-12 border border-stone-100">
          <div className="max-w-3xl mx-auto text-center">
            <h3
              className="text-3xl mb-8 italic"
              style={{ fontFamily: weddingFonts.display }}
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
  imageClass?: string
}

/** Reusable card for a single event (Welcome Drinks, Brunch, etc.) */
function EventCard({ image, imageAlt, title, when, where, imageClass }: EventCardProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="aspect-square bg-stone-200 overflow-hidden">
        <img alt={imageAlt} className={`w-full h-full object-cover ${imageClass ?? ''}`} src={image} />
      </div>
      <h3 className="text-2xl" style={{ fontFamily: weddingFonts.display }}>{title}</h3>
      <p
        className="text-sm text-stone-500 uppercase tracking-widest"
        style={{ fontFamily: weddingFonts.body }}
        dangerouslySetInnerHTML={{ __html: when }}
      />
      <p className="text-stone-600" style={{ fontFamily: weddingFonts.body }}>{where}</p>
      <a
        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-champagne hover:text-stone-900 transition-colors"
        href="#"
        style={{ fontFamily: weddingFonts.body }}
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

/** Accommodation recommendation card */
function HotelCard({ name, description }: HotelCardProps) {
  return (
    <div>
      <h4
        className="text-xs uppercase tracking-widest font-semibold mb-2"
        style={{ fontFamily: weddingFonts.body }}
      >
        {name}
      </h4>
      <p
        className="text-sm text-stone-600 mb-4"
        style={{ fontFamily: weddingFonts.body }}
      >
        {description}
      </p>
      <a
        className="text-xs uppercase tracking-widest border-b border-stone-200 hover:border-champagne pb-1"
        href="#"
        style={{ fontFamily: weddingFonts.body }}
      >
        Book Room
      </a>
    </div>
  )
}
