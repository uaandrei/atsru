import { weddingFonts, weddingColors } from './weddingTheme'

/** "Our Story" section with a photo and narrative text */
export function WeddingStory() {
  return (
    <section
      className="py-32 px-6 border-y"
      id="story"
      style={{ background: weddingColors.surfaceContainerLowest, borderColor: weddingColors.surfaceContainerLow }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <div className="relative aspect-4/5 overflow-hidden rounded">
          <img
            alt="Elegant couple"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
          />
        </div>

        {/* Story text */}
        <div className="flex flex-col gap-8">
          <h2
            className="text-5xl md:text-6xl italic"
            style={{ fontFamily: weddingFonts.display, color: weddingColors.primary }}
          >
            The Story
          </h2>
          <div
            className="space-y-6 leading-relaxed text-lg font-light"
            style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurfaceVariant }}
          >
            <p>
              It began in the quiet corner of a rainy London cafe, where a shared umbrella
              and a misplaced sketchbook turned into a conversation that lasted until the
              sun went down. Evelyn, an architectural restorer, and James, a landscape
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
