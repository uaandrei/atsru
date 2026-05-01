import type { EnvelopeRefs, EnvelopeHandlers } from './useEnvelopeInteraction'
import { weddingFonts } from './weddingTheme'
import blazonSvg from '../blazon_vector_90.svg'

type EnvelopeOverlayProps = {
  refs: EnvelopeRefs
  handlers: EnvelopeHandlers
}

/**
 * Full-screen envelope overlay with a 3D opening interaction.
 *
 * The envelope is built from layered clip-path shapes:
 * - Back face (bg)
 * - Letter preview card (slides up on open)
 * - Left & right side flaps (decorative, static)
 * - Bottom flap (decorative, static)
 * - Top flap (rotates around top edge via transform-origin: top)
 *   - Front face: visible when closed, hidden past 90deg via backface-hidden
 *   - Back face: pre-rotated 180deg so it shows when fully open
 *   - Wax seal: click/drag target to trigger the open animation
 */
export function EnvelopeOverlay({ refs, handlers }: EnvelopeOverlayProps) {
  const { overlayRef, containerRef, letterRef, topFlapRef, sealRef } = refs
  const { handleSealStart, triggerCloseSequence } = handlers

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-100 bg-[#e8fcee] flex items-center justify-center touch-none transition-all duration-1000 ease-in-out wedding-page"
    >
      {/* Title above envelope */}
      <div className="text-center absolute top-24 w-full px-6">
        <h2
          className="italic text-champagne text-3xl mb-2 opacity-80"
          style={{ fontFamily: weddingFonts.display }}
        >
        </h2>
      </div>

      {/* Envelope container — perspective enables 3D flap rotation */}
      <div
        ref={containerRef}
        className="relative w-[92vw] max-w-3xl max-h-[40vh] mx-auto transition-transform duration-1000"
        style={{ perspective: '1200px', aspectRatio: '3/2' }}
      >
        {/* Envelope back face */}
        <div className="absolute inset-0 bg-linear-to-br from-stone-300 to-stone-400 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-sm" />

        {/* Letter preview — visible through the open top flap */}
        <div
          ref={letterRef}
          className="absolute left-2 right-2 top-2 bottom-2 md:left-4 md:right-4 md:top-4 md:bottom-4 bg-stone-50 shadow-inner rounded-sm z-10 flex flex-col items-center justify-center px-4 transition-transform duration-800 ease-in-out"
        >
          <p
            className="text-base uppercase tracking-[0.2em] text-stone-500 mb-4 md:mb-6 text-center"
            style={{ fontFamily: weddingFonts.label }}
          >
            Vă invităm cu drag la nunta noastră
          </p>
          <h1
            className="text-4xl font-light text-center text-champagne"
            style={{ fontFamily: weddingFonts.display }}
          >
            Zsófi & Andrei
          </h1>
          <p
            className="mt-3 text-base text-stone-500 text-center"
            style={{ fontFamily: weddingFonts.label }}
          >
            8 august 2026 · Sighișoara
          </p>
          <div className="w-16 h-px bg-champagne mt-2" />
          <button 
            onClick={triggerCloseSequence} 
            className="mt-4 text-lg uppercase tracking-[0.2em] text-stone-500 cursor-pointer animate-[jiggle_0.5s_ease-in-out_infinite] hover:animate-none"
            style={{ animation: 'jiggle 0.5s ease-in-out infinite' }}
          >
            Apăsați pentru detalii
          </button>
        </div>

        {/* Left side flap (decorative) */}
        <div className="absolute inset-0 z-20 pointer-events-none" style={{ filter: 'drop-shadow(3px 0 5px rgba(0,0,0,0.15))' }}>
          <div className="absolute inset-0 bg-linear-to-r from-[#dfc78c] to-[#dfc994] clip-left" />
        </div>

        {/* Right side flap (decorative) */}
        <div className="absolute inset-0 z-20 pointer-events-none" style={{ filter: 'drop-shadow(-3px 0 5px rgba(0,0,0,0.15))' }}>
          <div className="absolute inset-0 bg-linear-to-l from-[#dfc78c] to-[#dfc994] clip-right" />
        </div>

        {/* Bottom flap (decorative) */}
        <div className="absolute inset-0 z-21 pointer-events-none" style={{ filter: 'drop-shadow(0 -3px 5px rgba(0,0,0,0.15))' }}>
          <div className="absolute inset-0 bg-linear-to-t from-[#dfc78c] to-[#dfc994] clip-bottom" />
        </div>

        {/* Top flap — rotates around top edge; preserve-3d enables front/back faces */}
        <div ref={topFlapRef} className="absolute top-0 left-0 w-full h-full origin-top z-25 preserve-3d">
          {/* Front face — visible when closed (0deg), hidden past 90deg */}
          <div className="absolute inset-0 backface-hidden" style={{ filter: 'drop-shadow(0 5px 8px rgba(0,0,0,0.2))' }}>
            <div className="absolute inset-0 bg-linear-to-b from-[#dfc78c] to-[#dfc994] clip-top" />
          </div>

          {/* Back face — pre-rotated 180deg so it faces the viewer when flap is fully open */}
          <div className="absolute inset-0 bg-linear-to-t from-stone-300 to-stone-400 clip-top backface-hidden" style={{ transform: 'rotateX(180deg)' }} />

          {/* Wax seal — click or drag upward to open */}
          <div
            ref={sealRef}
            className="select-none absolute left-1/2 -translate-x-1/2 top-[55%] -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-linear-to-br from-champagne-light to-champagne rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.2)] flex items-center justify-center text-white cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 backface-hidden z-30 group"
            style={{ transform: 'translateZ(1px)' }}
            onMouseDown={handleSealStart}
            onTouchStart={handleSealStart}
          >
            <div className="absolute inset-1 border border-white/30 rounded-full shadow-inner" />
            <img
              src={blazonSvg}
              alt="Zsófi & Andrei monogram"
              draggable={false}
              className="w-10 h-10 md:w-12 md:h-12 drop-shadow-md pointer-events-none select-none"
              style={{ mixBlendMode: 'multiply' }}
            />
            {/* Pulsing ring to draw attention */}
            <div className="absolute inset-0 rounded-full bg-champagne animate-ping opacity-20 group-hover:hidden" />
          </div>
        </div>
      </div>
    </div>
  )
}
