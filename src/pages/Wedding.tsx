import { useCallback, useEffect, useRef, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAJuHuhEo9LQcy-4K5Bdsap-Is8EAjilCg",
  authDomain: "atsru-8d879.firebaseapp.com",
  projectId: "atsru-8d879",
  storageBucket: "atsru-8d879.firebasestorage.app",
  messagingSenderId: "649323196164",
  appId: "1:649323196164:web:e4e74c6efa9fb3fb106a51",
  measurementId: "G-MMKE6KKX10"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const Wedding = () => {
  const [envelopeOpen, setEnvelopeOpen] = useState(false)
  const [envelopeRemoved, setEnvelopeRemoved] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    guests: '1',
    accommodation: '',
    notes: '',
  })

  // Envelope interaction state
  const isDragging = useRef(false)
  const startY = useRef(0)
  const currentRotation = useRef(0)
  const topFlapRef = useRef<HTMLDivElement>(null)
  const sealRef = useRef<HTMLDivElement>(null)
  const instructionRef = useRef<HTMLParagraphElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const letterRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLDivElement>(null)

  const openThreshold = 95

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

    topFlap.style.transition = 'transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)'
    topFlap.style.transform = 'rotate3d(1, 0, 0, 180deg)'
    seal.style.transition = 'opacity 0.4s ease'
    seal.style.opacity = '0'
    instruction.style.opacity = '0'

    setTimeout(() => {
      letter.style.transition = 'transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)'
      letter.style.transform = 'translateY(-40%) scale(1.02)'
      letter.style.zIndex = '30'
      container.style.transition = 'transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)'
      container.style.transform = 'scale(0.95) rotateX(2deg)'

      setTimeout(() => {
        overlay.style.opacity = '0'
        overlay.style.transform = 'scale(1.1)'
        main.classList.remove('opacity-0', 'translate-y-12', 'scale-95', 'pointer-events-none')
        main.classList.add('opacity-100', 'translate-y-0', 'scale-100')
        document.body.classList.remove('overflow-hidden')

        setTimeout(() => {
          setEnvelopeRemoved(true)
        }, 1000)
      }, 800)
    }, 400)
  }, [])

  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    return () => document.body.classList.remove('overflow-hidden')
  }, [])

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current || envelopeOpen) return
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
      const deltaY = startY.current - clientY
      const topFlap = topFlapRef.current
      if (!topFlap) return

      if (deltaY > 0) {
        currentRotation.current = Math.min(deltaY * 1.5, 180)
        topFlap.style.transform = `rotate3d(1, 0, 0, ${currentRotation.current}deg)`
      } else {
        currentRotation.current = 0
        topFlap.style.transform = 'rotate3d(1, 0, 0, 0deg)'
      }
    }

    const handleEnd = () => {
      if (!isDragging.current || envelopeOpen) return
      isDragging.current = false
      const topFlap = topFlapRef.current
      if (!topFlap) return

      topFlap.style.transition = 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'

      if (currentRotation.current >= openThreshold) {
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

  const handleSealStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (envelopeOpen) return
    isDragging.current = true
    startY.current = 'touches' in e ? e.touches[0].clientY : e.clientY
    if (topFlapRef.current) topFlapRef.current.style.transition = 'none'
  }

  const handleSealClick = () => {
    if (!envelopeOpen && currentRotation.current < openThreshold) {
      if (topFlapRef.current) {
        topFlapRef.current.style.transition = 'transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)'
      }
      triggerOpenSequence()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email) return
    setSubmitting(true)
    try {
      await addDoc(collection(db, 'invitations'), {
        ...form,
        guests: Number(form.guests),
        createdAt: new Date().toISOString(),
      })
      setSubmitted(true)
    } catch (err) {
      console.error('Failed to save invitation:', err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-stone-50 text-stone-800 selection:bg-champagne/20" style={{ fontFamily: "'Public Sans', sans-serif" }}>
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

      {/* Envelope Overlay */}
      {!envelopeRemoved && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[100] bg-stone-900 flex items-center justify-center touch-none transition-all duration-1000 ease-in-out wedding-page"
        >
          <div className="text-center absolute top-24 w-full px-6">
            <h2 className="italic text-champagne text-3xl mb-2 opacity-80" style={{ fontFamily: "'Bodoni Moda', serif" }}>You're Invited</h2>
          </div>

          {/* Envelope Container */}
          <div
            ref={containerRef}
            className="relative w-[92vw] max-w-3xl max-h-[60vh] mx-auto transition-transform duration-1000"
            style={{ perspective: '1200px', aspectRatio: '3/2' }}
          >
            {/* Envelope Back */}
            <div className="absolute inset-0 bg-gradient-to-br from-stone-300 to-stone-400 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-sm" />

            {/* Letter Preview */}
            <div
              ref={letterRef}
              className="absolute left-2 right-2 top-2 bottom-2 md:left-4 md:right-4 md:top-4 md:bottom-4 bg-stone-50 shadow-inner rounded-sm z-10 flex flex-col items-center justify-center px-4 transition-transform duration-800 ease-in-out"
            >
              <p className="text-[8px] md:text-xs uppercase tracking-[0.2em] text-stone-500 mb-4 md:mb-6 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>Together with their families</p>
              <h1 className="text-3xl md:text-5xl font-light text-center" style={{ fontFamily: "'Bodoni Moda', serif" }}>Eleanor <span className="serif-italic">&amp;</span> James</h1>
              <div className="w-16 h-px bg-champagne mt-6 md:mt-8" />
            </div>

            {/* Side Flaps */}
            <div className="absolute inset-0 z-20 pointer-events-none" style={{ filter: 'drop-shadow(3px 0 5px rgba(0,0,0,0.15))' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-stone-200 to-stone-300 clip-left" />
            </div>
            <div className="absolute inset-0 z-20 pointer-events-none" style={{ filter: 'drop-shadow(-3px 0 5px rgba(0,0,0,0.15))' }}>
              <div className="absolute inset-0 bg-gradient-to-l from-stone-200 to-stone-300 clip-right" />
            </div>

            {/* Bottom Flap */}
            <div className="absolute inset-0 z-[21] pointer-events-none" style={{ filter: 'drop-shadow(0 -3px 5px rgba(0,0,0,0.15))' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-100 to-stone-200 clip-bottom" />
            </div>

            {/* Top Flap */}
            <div ref={topFlapRef} className="absolute top-0 left-0 w-full h-full origin-top z-[25] preserve-3d">
              <div className="absolute inset-0 backface-hidden" style={{ filter: 'drop-shadow(0 5px 8px rgba(0,0,0,0.2))' }}>
                <div className="absolute inset-0 bg-gradient-to-b from-stone-200 to-stone-300 clip-top" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-300 to-stone-400 clip-top backface-hidden" style={{ transform: 'rotateX(180deg)' }} />

              {/* Wax Seal */}
              <div
                ref={sealRef}
                className="absolute left-1/2 -translate-x-1/2 top-[55%] -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-champagne-light to-champagne rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.2)] flex items-center justify-center text-white cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 backface-hidden z-30 group"
                style={{ transform: 'translateZ(1px)' }}
                onMouseDown={handleSealStart}
                onTouchStart={handleSealStart}
                onClick={handleSealClick}
              >
                <div className="absolute inset-1 border border-white/30 rounded-full shadow-inner" />
                <span className="italic text-xl md:text-2xl drop-shadow-md" style={{ fontFamily: "'Bodoni Moda', serif" }}>S&J</span>
                <div className="absolute inset-0 rounded-full bg-champagne animate-ping opacity-20 group-hover:hidden" />
              </div>
            </div>
          </div>

          <p ref={instructionRef} className="absolute bottom-24 text-stone-400 text-[10px] tracking-[0.3em] uppercase transition-opacity duration-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Drag seal up to open
          </p>
        </div>
      )}

      {/* Main Website */}
      <div ref={mainRef} className="wedding-page opacity-0 translate-y-12 scale-95 pointer-events-none transition-all duration-1000 ease-out origin-top">
        {/* Navbar */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
          <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-stone-800">favorite</span>
              <span className="text-2xl font-light italic text-stone-900 tracking-widest" style={{ fontFamily: "'Bodoni Moda', serif" }}>S &amp; J</span>
            </div>
            <div className="hidden md:flex gap-8 items-center text-xs uppercase tracking-widest text-stone-500" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <a className="hover:text-stone-900 transition-colors" href="#story">Our Story</a>
              <a className="hover:text-stone-900 transition-colors" href="#details">Events</a>
              <a className="px-6 py-2 bg-stone-900 text-white hover:bg-champagne transition-colors" href="#rsvp">RSVP</a>
            </div>
            <a className="md:hidden text-stone-900 font-medium border-b border-stone-900 tracking-widest" style={{ fontFamily: "'Bodoni Moda', serif" }} href="#rsvp">RSVP</a>
          </div>
        </nav>

        <main>
          {/* Hero / Formal Invite */}
          <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 text-center bg-stone-50">
            <div className="max-w-3xl mx-auto">
              <p className="text-xs uppercase tracking-[0.3em] mb-12 text-stone-500" style={{ fontFamily: "'Montserrat', sans-serif" }}>Together with their families</p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 font-light" style={{ fontFamily: "'Bodoni Moda', serif" }}>Eleanor <span className="serif-italic">&amp;</span> James</h1>
              <div className="flex flex-col items-center gap-8">
                <div className="w-px h-24 bg-champagne" />
                <div className="text-2xl md:text-3xl tracking-wide" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                  <p>Saturday, the Twelfth of October</p>
                  <p className="mt-2 italic">Two Thousand Twenty Four</p>
                </div>
                <div className="w-px h-24 bg-champagne" />
              </div>
              <p className="mt-12 text-xs uppercase tracking-[0.2em] text-stone-500" style={{ fontFamily: "'Montserrat', sans-serif" }}>The Glass House &bull; Hudson Valley, NY</p>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-32 px-6 bg-white border-y border-stone-100" id="story">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img alt="Elegant couple" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80" />
                <div className="absolute inset-0 border-[16px] border-white/20 pointer-events-none" />
              </div>
              <div className="flex flex-col gap-8">
                <h2 className="text-4xl md:text-5xl italic text-champagne" style={{ fontFamily: "'Bodoni Moda', serif" }}>The Story</h2>
                <div className="space-y-6 text-stone-600 leading-relaxed text-lg font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <p>It began in the quiet corner of a rainy London cafe, where a shared umbrella and a misplaced sketchbook turned into a conversation that lasted until the sun went down. Eleanor, an architectural restorer, and James, a landscape designer, found common ground in their love for preserving beauty.</p>
                  <p>Over the past five years, they have built a life defined by quiet mornings, adventurous travels, and a deep respect for the art of living. This October, they invite you to celebrate the beginning of their next chapter in a place that reflects their shared passion for light and structure.</p>
                </div>
              </div>
            </div>
          </section>

          {/* The Details */}
          <section className="py-32 px-6 bg-stone-50" id="details">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-24">
                <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Bodoni Moda', serif" }}>The Details</h2>
                <div className="w-24 h-px bg-champagne mx-auto" />
              </div>

              <div className="grid md:grid-cols-3 gap-12 mb-32">
                {/* Welcome Drinks */}
                <div className="flex flex-col gap-6">
                  <div className="aspect-square bg-stone-200 overflow-hidden">
                    <img alt="Welcome cocktails" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80" />
                  </div>
                  <h3 className="text-2xl" style={{ fontFamily: "'Bodoni Moda', serif" }}>Welcome Drinks</h3>
                  <p className="text-sm text-stone-500 uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>Friday &bull; 7:00 PM</p>
                  <p className="text-stone-600" style={{ fontFamily: "'Montserrat', sans-serif" }}>The Terrace at Willow Brook<br />122 Old Forge Rd, Hudson, NY</p>
                  <a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-champagne hover:text-stone-900 transition-colors" href="#" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="material-symbols-outlined text-sm">map</span> View Map
                  </a>
                </div>

                {/* Ceremony */}
                <div className="flex flex-col gap-6 scale-105 z-10 bg-white p-8 shadow-sm border border-stone-100">
                  <div className="aspect-[4/5] bg-stone-200 overflow-hidden">
                    <img alt="Wedding greenhouse" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" />
                  </div>
                  <h3 className="text-2xl" style={{ fontFamily: "'Bodoni Moda', serif" }}>Ceremony &amp; Reception</h3>
                  <p className="text-sm text-stone-500 uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>Saturday &bull; 4:30 PM</p>
                  <p className="text-stone-600" style={{ fontFamily: "'Montserrat', sans-serif" }}>The Glass House<br />45 Sky Top Lane, Hudson, NY</p>
                  <a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-champagne hover:text-stone-900 transition-colors" href="#" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="material-symbols-outlined text-sm">map</span> View Map
                  </a>
                </div>

                {/* Farewell Brunch */}
                <div className="flex flex-col gap-6">
                  <div className="aspect-square bg-stone-200 overflow-hidden">
                    <img alt="Brunch table" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80" />
                  </div>
                  <h3 className="text-2xl" style={{ fontFamily: "'Bodoni Moda', serif" }}>Farewell Brunch</h3>
                  <p className="text-sm text-stone-500 uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>Sunday &bull; 10:00 AM</p>
                  <p className="text-stone-600" style={{ fontFamily: "'Montserrat', sans-serif" }}>The Garden Cafe<br />12 Main Street, Hudson, NY</p>
                  <a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-champagne hover:text-stone-900 transition-colors" href="#" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="material-symbols-outlined text-sm">map</span> View Map
                  </a>
                </div>
              </div>

              {/* Accommodations */}
              <div className="bg-white p-12 border border-stone-100">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-3xl mb-8 italic" style={{ fontFamily: "'Bodoni Moda', serif" }}>Accommodations</h3>
                  <div className="grid md:grid-cols-2 gap-12 text-left">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>The Maker Hotel</h4>
                      <p className="text-sm text-stone-600 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>A boutique experience in the heart of downtown Hudson. Mention the E&amp;J wedding for a preferred rate.</p>
                      <a className="text-xs uppercase tracking-widest border-b border-stone-200 hover:border-champagne pb-1" href="#" style={{ fontFamily: "'Montserrat', sans-serif" }}>Book Room</a>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Rivertown Lodge</h4>
                      <p className="text-sm text-stone-600 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>A restored motor lodge with modern amenities. Perfect for groups and families.</p>
                      <a className="text-xs uppercase tracking-widest border-b border-stone-200 hover:border-champagne pb-1" href="#" style={{ fontFamily: "'Montserrat', sans-serif" }}>Book Room</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* RSVP */}
          <section className="py-32 px-6 bg-white" id="rsvp">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Bodoni Moda', serif" }}>RSVP</h2>
                <p className="text-stone-500 text-sm tracking-widest uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Kindly respond by September 1st</p>
              </div>

              {submitted ? (
                <div className="text-center py-16">
                  <span className="material-symbols-outlined text-6xl text-champagne mb-6 block">favorite</span>
                  <h3 className="text-3xl mb-4 italic" style={{ fontFamily: "'Bodoni Moda', serif" }}>Thank You!</h3>
                  <p className="text-stone-600 text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Your response has been recorded. We can't wait to celebrate with you!</p>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Name</label>
                      <input
                        className="w-full bg-transparent border-0 border-b border-stone-200 focus:ring-0 focus:border-champagne py-3 px-0 text-lg placeholder:text-stone-300 transition-colors outline-none"
                        style={{ fontFamily: "'Bodoni Moda', serif" }}
                        placeholder="Full Name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Email</label>
                      <input
                        className="w-full bg-transparent border-0 border-b border-stone-200 focus:ring-0 focus:border-champagne py-3 px-0 text-lg placeholder:text-stone-300 transition-colors outline-none"
                        style={{ fontFamily: "'Bodoni Moda', serif" }}
                        placeholder="Email Address"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Number of Persons</label>
                      <select
                        className="w-full bg-transparent border-0 border-b border-stone-200 focus:ring-0 focus:border-champagne py-3 px-0 text-lg text-stone-800 transition-colors appearance-none outline-none"
                        style={{ fontFamily: "'Bodoni Moda', serif" }}
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="block text-[10px] uppercase tracking-widest text-stone-400" style={{ fontFamily: "'Montserrat', sans-serif" }}>Help with Accommodation?</label>
                      <div className="flex gap-8 py-3">
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <input className="w-4 h-4 border-stone-300 text-stone-900 focus:ring-0 accent-champagne" name="accommodation" type="radio" value="yes" checked={form.accommodation === 'yes'} onChange={handleChange} />
                          <span className="text-sm text-stone-600 group-hover:text-stone-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>Yes</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <input className="w-4 h-4 border-stone-300 text-stone-900 focus:ring-0 accent-champagne" name="accommodation" type="radio" value="no" checked={form.accommodation === 'no'} onChange={handleChange} />
                          <span className="text-sm text-stone-600 group-hover:text-stone-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>No</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Special Requirements</label>
                    <textarea
                      className="w-full bg-transparent border-0 border-b border-stone-200 focus:ring-0 focus:border-champagne py-3 px-0 text-lg placeholder:text-stone-300 transition-colors resize-none outline-none"
                      style={{ fontFamily: "'Bodoni Moda', serif" }}
                      placeholder="Dietary restrictions or notes..."
                      rows={1}
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    className="w-full py-5 bg-stone-900 text-white text-xs uppercase tracking-[0.3em] hover:bg-champagne transition-colors mt-8 disabled:opacity-50"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    type="button"
                    onClick={handleSubmit}
                    disabled={submitting}
                  >
                    {submitting ? 'Sending...' : 'Send Response'}
                  </button>
                </div>
              )}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full py-12 bg-stone-50 border-t border-stone-200">
          <div className="flex flex-col items-center gap-6 px-4 text-center">
            <div className="text-lg italic text-stone-900" style={{ fontFamily: "'Bodoni Moda', serif" }}>S &amp; J</div>
            <div className="flex gap-8 text-sm uppercase tracking-tighter text-stone-500" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <a className="hover:underline decoration-stone-300 opacity-80 hover:opacity-100" href="#story">Our Story</a>
              <a className="hover:underline decoration-stone-300 opacity-80 hover:opacity-100" href="#details">Events</a>
              <a className="hover:underline decoration-stone-300 opacity-80 hover:opacity-100" href="#rsvp">RSVP</a>
              <a className="hover:underline decoration-stone-300 opacity-80 hover:opacity-100" href="#">Registry</a>
            </div>
            <p className="text-stone-600 text-[10px] uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Made with love for Eleanor &amp; James &bull; 2024
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Wedding
