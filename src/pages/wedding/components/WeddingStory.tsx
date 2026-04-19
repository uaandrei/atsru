import { weddingFonts } from './weddingTheme'

/** "Our Story" section with a photo and narrative text */
export function WeddingStory() {
  return (
    <section className="py-32 px-6 bg-white border-y border-stone-100" id="story">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Photo with inset border overlay */}
        <div className="relative aspect-4/5 overflow-hidden">
          <img
            alt="Elegant couple"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
          />
          <div className="absolute inset-0 border-16 border-white/20 pointer-events-none" />
        </div>

        {/* Story text */}
        <div className="flex flex-col gap-8">
          <h2
            className="text-4xl md:text-5xl italic text-champagne"
            style={{ fontFamily: weddingFonts.display }}
          >
            The Story
          </h2>
          <div
            className="space-y-6 text-stone-600 leading-relaxed text-lg font-light"
            style={{ fontFamily: weddingFonts.body }}
          >
            <p>
              It began in the quiet corner of a rainy London cafe, where a shared umbrella
              and a misplaced sketchbook turned into a conversation that lasted until the
              sun went down. Eleanor, an architectural restorer, and James, a landscape
              designer, found common ground in their love for preserving beauty.
            </p>
            <p>
              Over the past five years, they have built a life defined by quiet mornings,
              adventurous travels, and a deep respect for the art of living. This October,
              they invite you to celebrate the beginning of their next chapter in a place
              that reflects their shared passion for light and structure.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
