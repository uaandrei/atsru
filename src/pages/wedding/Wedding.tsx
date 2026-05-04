import { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { weddingColors } from './components/weddingTheme'
import { useEnvelopeInteraction } from './components/useEnvelopeInteraction'
import { useRsvpForm } from './components/useRsvpForm'
import { EnvelopeOverlay } from './components/EnvelopeOverlay'
import { WeddingNav } from './components/WeddingNav'
import { WeddingHero } from './components/WeddingHero'
import { WeddingStory } from './components/WeddingLocation'
import { WeddingChurch } from './components/WeddingChurch'
import { WeddingDetails } from './components/WeddingSchedule'
import { WeddingRsvp } from './components/WeddingRsvp'
import { WeddingContact } from './components/WeddingContact'
import { getWeddingLocale, weddingTranslations } from './weddingTranslations'
import weddingPreviewImage from './dallasbarn.png'

const WEDDING_META_ATTR = 'data-wedding-meta'
const WEDDING_THEME_COLOR = '#f4eee8'

function upsertMetaByName(name: string, content: string) {
  let meta = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)

  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', name)
    meta.setAttribute(WEDDING_META_ATTR, 'true')
    document.head.appendChild(meta)
  }

  meta.content = content
}

function upsertMetaByProperty(property: string, content: string) {
  let meta = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)

  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('property', property)
    meta.setAttribute(WEDDING_META_ATTR, 'true')
    document.head.appendChild(meta)
  }

  meta.content = content
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let link = document.querySelector<HTMLLinkElement>(selector)

  if (!link) {
    link = document.createElement('link')
    link.rel = rel
    link.setAttribute(WEDDING_META_ATTR, 'true')

    if (hreflang) {
      link.hreflang = hreflang
    }

    document.head.appendChild(link)
  }

  link.href = href
}

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
  const [searchParams] = useSearchParams()
  const locale = getWeddingLocale(searchParams)
  const t = weddingTranslations[locale]
  const { envelopeRemoved, refs, handlers, envelopeOpen } = useEnvelopeInteraction(mainRef)
  const rsvp = useRsvpForm()

  useEffect(() => {
    const origin = window.location.origin
    const baseUrl = `${origin}/wedding`
    const pageUrl = `${baseUrl}?lang=${locale}`
    const imageUrl = new URL(weddingPreviewImage, origin).href

    document.documentElement.lang = locale
    document.title = t.meta.title

    upsertMetaByName('description', t.meta.description)
    upsertMetaByName('theme-color', WEDDING_THEME_COLOR)
    upsertMetaByName('twitter:card', 'summary_large_image')
    upsertMetaByName('twitter:title', t.meta.title)
    upsertMetaByName('twitter:description', t.meta.description)
    upsertMetaByName('twitter:image', imageUrl)
    upsertMetaByProperty('og:type', 'website')
    upsertMetaByProperty('og:title', t.meta.title)
    upsertMetaByProperty('og:description', t.meta.description)
    upsertMetaByProperty('og:url', pageUrl)
    upsertMetaByProperty('og:image', imageUrl)
    upsertMetaByProperty('og:locale', locale === 'hu' ? 'hu_HU' : 'ro_RO')
    upsertLink('canonical', pageUrl)
    upsertLink('alternate', `${baseUrl}?lang=ro`, 'ro')
    upsertLink('alternate', `${baseUrl}?lang=hu`, 'hu')

    return () => {
      document
        .querySelectorAll(`[${WEDDING_META_ATTR}]`)
        .forEach((element) => element.remove())
    }
  }, [locale, t.meta.description, t.meta.title])

  return (
    <div
      className="min-h-screen"
      lang={locale}
      style={{ background: weddingColors.background, color: weddingColors.onBackground }}
    >
      {/* Scoped styles: override global lowercase, ghost input, clip-paths for envelope flaps */}
      <style>{`
        .wedding-page * { text-transform: none; }
        .wedding-page section[id] { scroll-margin-top: 5rem; }
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
      {!envelopeRemoved && (
        <EnvelopeOverlay refs={refs} handlers={handlers} envelopeOpen={envelopeOpen} t={t.envelope} />
      )}

      {/* Main wedding website — hidden until envelope opens, then fades in */}
      <div
        ref={mainRef}
        className="wedding-page opacity-0 translate-y-12 scale-95 pointer-events-none transition-all duration-1000 ease-out origin-top"
      >
        <WeddingNav t={t.nav} />
        <main>
          <WeddingHero t={t.hero} />
          <WeddingDetails t={t.schedule} />
          <WeddingStory t={t.location} />
          <WeddingChurch t={t.church} />
          <WeddingRsvp {...rsvp} t={t.rsvp} />
          <WeddingContact t={t.contact} />
        </main>
      </div>
    </div>
  )
}

export default Wedding
