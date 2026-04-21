import { useRef } from 'react'
import { weddingColors } from './components/weddingTheme'
import { useEnvelopeInteraction } from './components/useEnvelopeInteraction'
import { useRsvpForm } from './components/useRsvpForm'
import { EnvelopeOverlay } from './components/EnvelopeOverlay'
import { WeddingNav } from './components/WeddingNav'
import { WeddingHero } from './components/WeddingHero'
import { WeddingStory } from './components/WeddingStory'
import { WeddingDetails } from './components/WeddingDetails'
import { WeddingRsvp } from './components/WeddingRsvp'

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
      className="min-h-screen"
      style={{ background: weddingColors.background, color: weddingColors.onBackground }}
    >
      {/* Scoped styles: override global lowercase, ghost input, clip-paths for envelope flaps */}
      <style>{`
        .wedding-page * { text-transform: none; }
        .serif-italic { font-family: 'Bodoni Moda', serif; font-style: italic; }
        .clip-top { clip-path: polygon(0 0, 100% 0, 50% 55%); }
        .clip-bottom { clip-path: polygon(0 100%, 100% 100%, 50% 45%); }
        .clip-left { clip-path: polygon(0 0, 60% 50%, 0 100%); }
        .clip-right { clip-path: polygon(100% 0, 40% 50%, 100% 100%); }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .ghost-border-input {
          border: none;
          border-bottom: 1px solid rgba(211, 196, 183, 0.4);
          border-radius: 0;
          background-color: transparent;
          transition: border-color 0.3s ease;
        }
        .ghost-border-input:focus {
          outline: none;
          box-shadow: none;
          border-bottom: 1px solid #7a582f;
        }
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
      </div>
    </div>
  )
}

export default Wedding
