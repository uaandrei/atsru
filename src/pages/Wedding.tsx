import { useEffect, useRef, useState } from 'react'
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

const TOTAL_PAGES = 4

const INPUT = "w-full rounded-lg border border-primary/20 bg-white/80 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary h-14 px-4 text-lg placeholder:text-slate-400"

function flipStyle(index: number, currentPage: number): React.CSSProperties {
  return {
    position: 'absolute',
    inset: 0,
    transformOrigin: 'left center',
    transform: index < currentPage ? 'rotateY(-180deg)' : 'rotateY(0deg)',
    transition: 'transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)',
    backfaceVisibility: 'hidden',
    zIndex: TOTAL_PAGES - index,
  }
}

const Wedding = () => {
  const [page, setPage] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const [form, setForm] = useState({
    nume: '',
    numarInvitati: '',
    telefon: '',
    email: '',
    cazare: '',
  })

  const next = () => setPage(p => Math.min(p + 1, TOTAL_PAGES - 1))
  const prev = () => setPage(p => Math.max(p - 1, 0))

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === 'INPUT') return
      if (e.key === 'ArrowRight') setPage(p => Math.min(p + 1, TOTAL_PAGES - 1))
      if (e.key === 'ArrowLeft') setPage(p => Math.max(p - 1, 0))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.nume || !form.numarInvitati) return
    setSubmitting(true)
    try {
      await addDoc(collection(db, 'invitations'), {
        ...form,
        numarInvitati: Number(form.numarInvitati),
        createdAt: new Date().toISOString(),
      })
      setSubmitted(true)
    } catch (err) {
      console.error('Failed to save invitation:', err)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background-light cream-texture font-display text-slate-900 flex items-center justify-center p-4">
        <div className="text-center max-w-lg">
          <span className="material-symbols-outlined text-6xl text-primary mb-6 block">favorite</span>
          <h1 className="font-serif italic text-5xl md:text-6xl text-rustic-wood mb-4">Mulțumim!</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-slate-600 text-lg leading-relaxed">
            Detaliile au fost salvate cu succes. Abia așteptăm să sărbătorim împreună!
          </p>
        </div>
      </div>
    )
  }

  const pageBase = "rounded-r-lg shadow-xl bg-white flex flex-col overflow-y-auto"

  return (
    <div
      className="min-h-screen bg-background-light cream-texture font-display text-slate-900 flex flex-col items-center justify-center p-4 md:p-8 select-none"
      onTouchStart={e => { touchStartX.current = e.touches[0].clientX }}
      onTouchEnd={e => {
        if (touchStartX.current === null) return
        const delta = e.changedTouches[0].clientX - touchStartX.current
        if (delta > 60) prev()
        else if (delta < -60) next()
        touchStartX.current = null
      }}
    >
      {/* Book */}
      <div
        className="relative w-full max-w-xl"
        style={{ perspective: '2500px', height: 'min(82vh, 720px)' }}
      >
        {/* Spine */}
        <div className="absolute left-0 top-1 bottom-1 w-1.5 rounded-l bg-rustic-wood/25 z-50 shadow-[2px_0_8px_rgba(0,0,0,0.08)]" />

        {/* Page 0: Cover */}
        <div style={flipStyle(0, page)} className={pageBase} inert={page !== 0 || undefined}>
          <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-10">
            <div className="flex items-center gap-3 text-rustic-wood mb-8">
              <span className="material-symbols-outlined text-2xl">fluid</span>
              <span className="font-serif text-xl font-bold tracking-tight">The Registry</span>
            </div>

            <div className="w-full max-w-sm h-44 md:h-56 rounded-lg overflow-hidden mb-8 shadow-lg border-2 border-white">
              <div
                className="w-full h-full bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB57uob_Nzx8EEVwON2fHEvgibZqrI96HDbXSD1q3259lW9hHX_wIg060dvZ6JF2SK9O-hS61SUgtJ26UUKiAHo8iD9vTQbmbw0rGN0-MyfCwaUg_hyA09wkya6M54qbNoMoEjlltlrDee_cTLYhYhydouKsgzx2PbgxwyCzrYSmiU1s5L1escF7oc0Ny6pokIOki8HgFd8pebaaQmHWtRsOqrmnEptnFMKAXdqnBAz6oGH78RlveFQK5xyXgZwvHvzKGsXTnVd_uk")' }}
              />
            </div>

            <h1 className="font-serif italic text-4xl md:text-5xl text-rustic-wood mb-3 text-center">Rămânem în contact</h1>
            <div className="w-20 h-0.5 bg-primary mx-auto mb-4" />
            <p className="text-slate-600 text-base md:text-lg max-w-sm mx-auto leading-relaxed text-center mb-8">
              Ne-ar plăcea să vă ținem la curent cu călătoria noastră și viitoarele sărbători.
            </p>

            <button onClick={next} className="flex items-center gap-2 text-primary hover:text-rustic-wood transition-colors font-serif text-lg">
              Deschide invitația
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <PageNumber n={1} />
        </div>

        {/* Page 1: Name & Guests */}
        <div style={flipStyle(1, page)} className={pageBase} inert={page !== 1 || undefined}>
          <div className="flex-1 flex flex-col justify-center p-6 md:p-10">
            <PageHeading text="Detalii personale" />

            <div className="space-y-6 mt-6">
              <label className="flex flex-col gap-2">
                <span className="font-serif text-xl text-rustic-wood">Nume</span>
                <input className={INPUT} placeholder="Numele complet" type="text" name="nume" value={form.nume} onChange={handleChange} />
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-serif text-xl text-rustic-wood">Număr de invitați</span>
                <input className={INPUT} min={1} placeholder="Numărul total de persoane" type="number" name="numarInvitati" value={form.numarInvitati} onChange={handleChange} />
              </label>
            </div>

            <NavButtons onPrev={prev} onNext={next} />
          </div>
          <PageNumber n={2} />
        </div>

        {/* Page 2: Contact & Preferences & Submit */}
        <div style={flipStyle(2, page)} className={pageBase} inert={page !== 2 || undefined}>
          <div className="flex-1 flex flex-col justify-center p-6 md:p-10">
            <PageHeading text="Contact & Preferințe" />

            <div className="space-y-5 mt-6">
              <label className="flex flex-col gap-2">
                <span className="font-serif text-lg text-rustic-wood">Telefon</span>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60">call</span>
                  <input className={`${INPUT} !pl-12`} placeholder="07xx xxx xxx" type="tel" name="telefon" value={form.telefon} onChange={handleChange} />
                </div>
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-serif text-lg text-rustic-wood">Email</span>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60">mail</span>
                  <input className={`${INPUT} !pl-12`} placeholder="exemplu@email.com" type="email" name="email" value={form.email} onChange={handleChange} />
                </div>
              </label>

              <div className="space-y-3">
                <span className="font-serif text-lg text-rustic-wood block">Vă ajutăm cu cazarea?</span>
                <div className="flex gap-6">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="size-5 accent-primary" name="cazare" type="radio" value="nu" checked={form.cazare === 'nu'} onChange={handleChange} />
                    <span className="text-slate-700 group-hover:text-rustic-wood transition-colors">Nu, ne ocupăm</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="size-5 accent-primary" name="cazare" type="radio" value="da" checked={form.cazare === 'da'} onChange={handleChange} />
                    <span className="text-slate-700 group-hover:text-rustic-wood transition-colors">Da, am vrea</span>
                  </label>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="w-full h-14 bg-primary hover:bg-accent-gold text-rustic-wood font-bold text-lg rounded-lg transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 mt-2"
              >
                <span className="material-symbols-outlined">{submitting ? 'hourglass_top' : 'send'}</span>
                {submitting ? 'Se salvează...' : 'Salvează Detaliile'}
              </button>
            </div>

            <NavButtons onPrev={prev} onNext={next} />
          </div>
          <PageNumber n={3} />
        </div>

        {/* Page 3: Map & Footer */}
        <div style={flipStyle(3, page)} className={pageBase} inert={page !== 3 || undefined}>
          <div className="flex-1 flex flex-col p-6 md:p-10">
            <PageHeading text="Locație Eveniment" />

            <div className="rounded-lg overflow-hidden shadow-md flex-1 min-h-[200px] mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2759.6210001668614!2d24.725900713059996!3d46.23788117097653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474b9fd669657fe9%3A0x2477d062b435dfc0!2sThe%20Dallas%20Barn!5e0!3m2!1sen!2sro!4v1774191392440!5m2!1sen!2sro"
                className="w-full h-full min-h-[200px]"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <footer className="mt-6 text-center">
              <div className="flex justify-center gap-6 text-rustic-wood/60 mb-3">
                <span className="material-symbols-outlined cursor-pointer hover:text-primary">share</span>
                <span className="material-symbols-outlined cursor-pointer hover:text-primary">print</span>
                <span className="material-symbols-outlined cursor-pointer hover:text-primary">calendar_today</span>
              </div>
              <p className="text-sm font-medium uppercase tracking-widest text-rustic-wood/40">
                Est. 2024 • Creat cu dragoste
              </p>
            </footer>

            <div className="flex justify-start mt-4">
              <button onClick={prev} className="flex items-center gap-1 text-sm text-primary hover:text-rustic-wood transition-colors">
                <span className="material-symbols-outlined text-lg">arrow_back</span>
                Înapoi
              </button>
            </div>
          </div>
          <PageNumber n={4} />
        </div>
      </div>

      {/* Page dots */}
      <div className="mt-6 flex items-center gap-2">
        {Array.from({ length: TOTAL_PAGES }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === page ? 'bg-primary scale-125' : 'bg-primary/30 hover:bg-primary/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function PageHeading({ text }: { text: string }) {
  return (
    <div className="text-center">
      <h2 className="font-serif italic text-3xl text-rustic-wood mb-2">{text}</h2>
      <div className="w-16 h-0.5 bg-primary/40 mx-auto" />
    </div>
  )
}

function PageNumber({ n }: { n: number }) {
  return <div className="text-center pb-4 text-sm text-slate-400 font-serif">{n} / {TOTAL_PAGES}</div>
}

function NavButtons({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <div className="flex justify-between mt-auto pt-6">
      <button onClick={onPrev} className="flex items-center gap-1 text-sm text-primary hover:text-rustic-wood transition-colors">
        <span className="material-symbols-outlined text-lg">arrow_back</span>
        Înapoi
      </button>
      <button onClick={onNext} className="flex items-center gap-1 text-sm text-primary hover:text-rustic-wood transition-colors">
        Înainte
        <span className="material-symbols-outlined text-lg">arrow_forward</span>
      </button>
    </div>
  )
}

export default Wedding
