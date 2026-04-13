import { useRef } from 'react'
import { weddingFonts } from '../components/wedding/weddingTheme'
import { useEnvelopeInteraction } from '../components/wedding/useEnvelopeInteraction'
import { useRsvpForm } from '../components/wedding/useRsvpForm'
import { EnvelopeOverlay } from '../components/wedding/EnvelopeOverlay'
import { WeddingNav } from '../components/wedding/WeddingNav'
import { WeddingHero } from '../components/wedding/WeddingHero'
import { WeddingStory } from '../components/wedding/WeddingStory'
import { WeddingDetails } from '../components/wedding/WeddingDetails'
import { WeddingRsvp } from '../components/wedding/WeddingRsvp'
import { WeddingFooter } from '../components/wedding/WeddingFooter'

/**
 * Wedding RSVP page with an interactive envelope intro animation.
 *
 * Flow:
 * 1. Page loads with a full-screen envelope overlay (body scroll locked)
 * 2. User clicks or drags the wax seal upward to open the envelope
 * 3. Letter rises out, envelope fades away
 * 4. Full wedding website is revealed (hero, story, events, RSVP form)
 * 5. RSVP submissions are stored in Firebase Firestore
 */
const Wedding = () => {
  const mainRef = useRef<HTMLDivElement>(null)
  const { envelopeRemoved, refs, handlers } = useEnvelopeInteraction(mainRef)
  const rsvp = useRsvpForm()

  return (
    <div
      className="bg-stone-50 text-stone-800 selection:bg-champagne/20"
      style={{ fontFamily: weddingFonts.base }}
    >
      {/* Scoped styles: override global lowercase, define clip-paths for envelope flaps */}
      <style>{`
        .wedding-page * { text-transform: none; }
        .serif-italic { font-family: 'Bodoni Moda', serif; font-style: italic; }
        .clip-top { clip-path: polygon(0 0, 100% 0, 50% 55%); }
        .clip-bottom { clip-path: polygon(0 100%, 100% 100%, 50% 45%); }
        .clip-left { clip-path: polygon(0 0, 60% 50%, 0 100%); }
        .clip-right { clip-path: polygon(100% 0, 40% 50%, 100% 100%); }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>

      {/* Interactive envelope intro — removed from DOM after animation completes */}
      {!envelopeRemoved && <EnvelopeOverlay refs={refs} handlers={handlers} />}

      {/* Main wedding website — hidden until envelope opens, then fades in */}
      <div
        ref={mainRef}
        className="wedding-page opacity-0 translate-y-12 scale-95 pointer-events-none transition-all duration-1000 ease-out origin-top"
      >
        <WeddingNav />
        <main>
          <WeddingHero />
          <WeddingStory />
          <WeddingDetails />
          <WeddingRsvp {...rsvp} />
        </main>
        <WeddingFooter />
      </div>
    </div>
  )
}

export default Wedding
