import { useState } from 'react'
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
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

interface FormData {
  nume: string
  numarInvitati: string
  telefon: string
  email: string
  cazare: string
}

const Wedding = () => {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState<FormData>({
    nume: '',
    numarInvitati: '',
    telefon: '',
    email: '',
    cazare: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault()
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
      <div className="bg-background-light font-display text-slate-900 transition-colors duration-300">
        <div className="relative flex h-auto min-h-screen w-full flex-col cream-texture">
          <div className="flex h-full grow flex-col items-center justify-center px-4">
            <div className="text-center max-w-lg">
              <span className="material-symbols-outlined text-6xl text-primary mb-6 block">favorite</span>
              <h1 className="font-serif italic text-5xl md:text-6xl text-rustic-wood mb-4">Mulțumim!</h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6" />
              <p className="text-slate-600 text-lg leading-relaxed">
                Detaliile au fost salvate cu succes. Abia așteptăm să sărbătorim împreună!
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-background-light font-display text-slate-900 transition-colors duration-300">
      <div className="relative flex h-auto min-h-screen w-full flex-col cream-texture">
        <div className="flex h-full grow flex-col items-center">

          <header className="w-full max-w-[960px] flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 px-6 py-6 md:px-10">
            <div className="flex items-center gap-4 text-rustic-wood">
              <div className="size-8 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">fluid</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold leading-tight tracking-tight">The Registry</h2>
            </div>
            <button
              type="button"
              className="flex items-center justify-center rounded-full size-12 bg-primary/10 hover:bg-primary/20 text-primary transition-all"
            >
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </header>

          <main className="flex flex-col max-w-[800px] w-full flex-1 px-4 md:px-0 py-10">

            <div className="mb-10 text-center">
              <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8 shadow-xl border-4 border-white">
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-cover"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB57uob_Nzx8EEVwON2fHEvgibZqrI96HDbXSD1q3259lW9hHX_wIg060dvZ6JF2SK9O-hS61SUgtJ26UUKiAHo8iD9vTQbmbw0rGN0-MyfCwaUg_hyA09wkya6M54qbNoMoEjlltlrDee_cTLYhYhydouKsgzx2PbgxwyCzrYSmiU1s5L1escF7oc0Ny6pokIOki8HgFd8pebaaQmHWtRsOqrmnEptnFMKAXdqnBAz6oGH78RlveFQK5xyXgZwvHvzKGsXTnVd_uk")' }}
                />
              </div>
              <h1 className="font-serif italic text-5xl md:text-6xl text-rustic-wood mb-4">Rămânem în contact</h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6" />
              <p className="text-slate-600 text-lg max-w-lg mx-auto leading-relaxed">
                Ne-ar plăcea să vă ținem la curent cu călătoria noastră și viitoarele sărbători. Vă rugăm să ne împărtășiți detaliile dumneavoastră.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white/50 backdrop-blur-sm p-6 md:p-12 rounded-xl shadow-sm border border-primary/10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="col-span-1 md:col-span-2">
                  <label className="flex flex-col gap-2">
                    <span className="font-serif text-xl text-rustic-wood">Nume</span>
                    <input
                      className="w-full rounded-lg border border-primary/20 bg-white/80 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary h-14 px-4 text-lg placeholder:text-slate-400"
                      placeholder="Numele complet"
                      type="text"
                      name="nume"
                      value={form.nume}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label className="flex flex-col gap-2">
                    <span className="font-serif text-xl text-rustic-wood">Număr de invitați</span>
                    <input
                      className="w-full rounded-lg border border-primary/20 bg-white/80 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary h-14 px-4 text-lg placeholder:text-slate-400"
                      min={1}
                      placeholder="Numărul total de persoane"
                      type="number"
                      name="numarInvitati"
                      value={form.numarInvitati}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>

                <div>
                  <label className="flex flex-col gap-2">
                    <span className="font-serif text-xl text-rustic-wood">Telefon</span>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60">call</span>
                      <input
                        className="w-full rounded-lg border border-primary/20 bg-white/80 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary h-14 pl-12 pr-4 text-lg placeholder:text-slate-400"
                        placeholder="07xx xxx xxx"
                        type="tel"
                        name="telefon"
                        value={form.telefon}
                        onChange={handleChange}
                      />
                    </div>
                  </label>
                </div>

                <div>
                  <label className="flex flex-col gap-2">
                    <span className="font-serif text-xl text-rustic-wood">Email</span>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60">mail</span>
                      <input
                        className="w-full rounded-lg border border-primary/20 bg-white/80 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary h-14 pl-12 pr-4 text-lg placeholder:text-slate-400"
                        placeholder="exemplu@email.com"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </label>
                </div>

                <div className="col-span-1 md:col-span-2 space-y-4">
                  <span className="font-serif text-xl text-rustic-wood block">Vă ajutăm cu cazarea?</span>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="size-6 accent-primary border-primary/20 bg-white/80"
                        name="cazare"
                        type="radio"
                        value="nu"
                        checked={form.cazare === 'nu'}
                        onChange={handleChange}
                      />
                      <span className="text-lg text-slate-700 group-hover:text-rustic-wood transition-colors">Nu, ne ocupăm</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        className="size-6 accent-primary border-primary/20 bg-white/80"
                        name="cazare"
                        type="radio"
                        value="da"
                        checked={form.cazare === 'da'}
                        onChange={handleChange}
                      />
                      <span className="text-lg text-slate-700 group-hover:text-rustic-wood transition-colors">Da, am vrea</span>
                    </label>
                  </div>
                </div>

              </div>

              <div className="pt-6">
                <button
                  className="w-full h-16 bg-primary hover:bg-accent-gold text-rustic-wood font-bold text-xl rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-3 disabled:opacity-50"
                  type="submit"
                  disabled={submitting}
                >
                  <span className="material-symbols-outlined">{submitting ? 'hourglass_top' : 'send'}</span>
                  {submitting ? 'Se salvează...' : 'Salvează Detaliile'}
                </button>
              </div>
            </form>

            <section className="mt-16 w-full">
              <div className="text-center mb-8">
                <h3 className="font-serif italic text-3xl text-rustic-wood mb-2">Locație Eveniment</h3>
                <div className="w-12 h-0.5 bg-primary/40 mx-auto" />
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2759.6210001668614!2d24.725900713059996!3d46.23788117097653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474b9fd669657fe9%3A0x2477d062b435dfc0!2sThe%20Dallas%20Barn!5e0!3m2!1sen!2sro!4v1774191392440!5m2!1sen!2sro"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </section>

            <footer className="mt-20 mb-10 text-center">
              <div className="flex justify-center gap-6 text-rustic-wood/60 mb-4">
                <span className="material-symbols-outlined cursor-pointer hover:text-primary">share</span>
                <span className="material-symbols-outlined cursor-pointer hover:text-primary">print</span>
                <span className="material-symbols-outlined cursor-pointer hover:text-primary">calendar_today</span>
              </div>
              <p className="text-sm font-medium uppercase tracking-widest text-rustic-wood/40">
                Est. 2024 • Creat cu dragoste
              </p>
            </footer>

          </main>
        </div>
      </div>
    </div>
  )
}

export default Wedding
