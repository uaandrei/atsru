import { useCallback, useEffect, useRef, useState } from 'react'

export type EnvelopeRefs = {
  topFlapRef: React.RefObject<HTMLDivElement | null>
  sealRef: React.RefObject<HTMLDivElement | null>
  instructionRef: React.RefObject<HTMLParagraphElement | null>
  overlayRef: React.RefObject<HTMLDivElement | null>
  containerRef: React.RefObject<HTMLDivElement | null>
  letterRef: React.RefObject<HTMLDivElement | null>
}

export type EnvelopeHandlers = {
  handleSealStart: (e: React.MouseEvent | React.TouchEvent) => void
  handleSealClick: () => void
}

/** Minimum rotation (in degrees) needed to trigger the open sequence */
const OPEN_THRESHOLD = 95

/**
 * Manages the interactive envelope opening animation.
 *
 * The envelope has a wax seal that users can either click or drag upward
 * to open. Dragging maps vertical distance to flap rotation. Once the
 * rotation passes OPEN_THRESHOLD, the full open sequence plays:
 *
 *   1. Top flap rotates open (0 -> -180deg)
 *   2. Wax seal and instruction text fade out
 *   3. Letter slides upward out of the envelope
 *   4. Envelope overlay fades away, main wedding page fades in
 *   5. Envelope is removed from the DOM
 *
 * @param mainRef - Ref to the main wedding content div (revealed after open)
 */
export function useEnvelopeInteraction(mainRef: React.RefObject<HTMLDivElement | null>) {
  const [envelopeOpen, setEnvelopeOpen] = useState(false)
  const [envelopeRemoved, setEnvelopeRemoved] = useState(false)

  // Drag gesture tracking
  const isDragging = useRef(false)
  const startY = useRef(0)
  const currentRotation = useRef(0)

  // DOM refs for animated envelope elements
  const topFlapRef = useRef<HTMLDivElement>(null)
  const sealRef = useRef<HTMLDivElement>(null)
  const instructionRef = useRef<HTMLParagraphElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const letterRef = useRef<HTMLDivElement>(null)

  /**
   * Plays the choreographed envelope-open animation:
   *
   * t=0ms:    Flap rotates to -180deg, seal fades, instruction fades
   * t=400ms:  Letter slides up (-40%), envelope scales down slightly
   * t=1200ms: Overlay fades out, main content fades in
   * t=2200ms: Envelope removed from DOM
   */
  const triggerOpenSequence = useCallback(() => {
    setEnvelopeOpen(true)

    const topFlap = topFlapRef.current
    const seal = sealRef.current
    const instruction = instructionRef.current
    const overlay = overlayRef.current
    const container = containerRef.current
    const letter = letterRef.current
    const main = mainRef.current
    if (!topFlap || !seal || !instruction || !overlay || !container || !letter || !main) return

    // Step 1: Open the flap and hide the seal
    topFlap.style.transition = 'transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)'
    topFlap.style.transform = 'rotate3d(1, 0, 0, -180deg)'
    seal.style.transition = 'opacity 0.4s ease'
    seal.style.opacity = '0'
    instruction.style.opacity = '0'

    // Step 2: Letter rises out of the envelope
    setTimeout(() => {
      letter.style.transition = 'transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)'
      letter.style.transform = 'translateY(-40%) scale(1.02)'
      letter.style.zIndex = '30'
      container.style.transition = 'transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)'
      container.style.transform = 'scale(0.95) rotateX(2deg)'

      // Step 3: Crossfade from envelope to main wedding page
      setTimeout(() => {
        overlay.style.opacity = '0'
        overlay.style.transform = 'scale(1.1)'
        main.classList.remove('opacity-0', 'translate-y-12', 'scale-95', 'pointer-events-none')
        main.classList.add('opacity-100', 'translate-y-0', 'scale-100')
        document.body.classList.remove('overflow-hidden')

        // Step 4: Clean up — remove envelope from DOM
        setTimeout(() => {
          setEnvelopeRemoved(true)
        }, 1000)
      }, 800)
    }, 400)
  }, [mainRef])

  // Lock body scroll while envelope is visible
  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    return () => document.body.classList.remove('overflow-hidden')
  }, [])

  // Global mouse/touch listeners for the drag-to-open gesture.
  // Attached to `window` so dragging works even if the cursor leaves the seal.
  useEffect(() => {
    /** Map vertical drag distance to flap rotation */
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current || envelopeOpen) return
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
      const deltaY = startY.current - clientY
      const topFlap = topFlapRef.current
      if (!topFlap) return

      if (deltaY > 0) {
        // Convert upward pixel distance to degrees (1.5x multiplier)
        currentRotation.current = Math.min(deltaY * 1.5, 180)
        
        if (currentRotation.current > 78) {
          topFlap.style.transform = `rotate3d(1, 0, 0, ${360-currentRotation.current}deg) rotateZ(180deg)`
        } else {
          topFlap.style.transform = `rotate3d(1, 0, 0, ${currentRotation.current}deg)`
        }
      } else {
        currentRotation.current = 0
        topFlap.style.transform = 'rotate3d(1, 0, 0, 0deg)'
      }
    }

    /** On release: trigger open if past threshold, otherwise snap back */
    const handleEnd = () => {
      if (!isDragging.current || envelopeOpen) return
      isDragging.current = false
      const topFlap = topFlapRef.current
      if (!topFlap) return

      topFlap.style.transition = 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'

      if (currentRotation.current >= OPEN_THRESHOLD) {
        triggerOpenSequence()
      } else {
        currentRotation.current = 0
        topFlap.style.transform = 'rotate3d(1, 0, 0, 0deg)'
      }
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('touchmove', handleMove, { passive: false })
    window.addEventListener('mouseup', handleEnd)
    window.addEventListener('touchend', handleEnd)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('touchmove', handleMove)
      window.removeEventListener('mouseup', handleEnd)
      window.removeEventListener('touchend', handleEnd)
    }
  }, [envelopeOpen, triggerOpenSequence])

  /** Begin tracking a drag gesture from the wax seal */
  const handleSealStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (envelopeOpen) return
    isDragging.current = true
    startY.current = 'touches' in e ? e.touches[0].clientY : e.clientY
    // Disable transition during drag for immediate visual feedback
    if (topFlapRef.current) topFlapRef.current.style.transition = 'none'
  }

  /** Clicking the seal (without dragging) also opens the envelope */
  const handleSealClick = () => {
    if (!envelopeOpen && currentRotation.current < OPEN_THRESHOLD) {
      if (topFlapRef.current) {
        topFlapRef.current.style.transition = 'transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)'
      }
      triggerOpenSequence()
    }
  }

  return {
    envelopeOpen,
    envelopeRemoved,
    refs: { topFlapRef, sealRef, instructionRef, overlayRef, containerRef, letterRef },
    handlers: { handleSealStart, handleSealClick },
  }
}
