import { useEffect, useState } from 'react'
import type { ChangeEvent, FormEvent, ReactNode } from 'react'

const weddingDate = new Date('2026-09-27T16:30:00+03:00')
const weddingTimestamp = weddingDate.getTime()

const timeline = [
  {
    time: '16:30',
    title: 'Ceremonia în grădina de iarnă',
    description:
      'Începem cu jurămintele sub tavanul de sticlă, printre trandafiri cățărători, lumânări și toți oamenii care ne-au adus până aici.',
  },
  {
    time: '17:30',
    title: 'Șampanie și gustări',
    description:
      'După ceremonie, curtea se deschide pentru aperitive, gustări de sezon, cvartet live și îmbrățișări fără grabă.',
  },
  {
    time: '19:00',
    title: 'Cină la masa lungă',
    description:
      'Ne așteaptă un festin servit la comun, fețe de masă moi, vinuri de sfârșit de vară și toasturi suficient de scurte încât să rămână loc pentru desert.',
  },
  {
    time: '22:00',
    title: 'Dans și petrecere până târziu',
    description:
      'Încheiem seara cu disco, piese preferate și genul acela de ring de dans care apare abia după ce dispare orice urmă de timiditate.',
  },
] as const

const detailCards = [
  {
    kicker: '01',
    title: 'Unde ne vedem',
    accent: 'A',
    body: 'The Glass Atrium, București. Accesul începe la 16:00, iar ceremonia pornește fix la 16:30.',
  },
  {
    kicker: '02',
    title: 'Cum ne îmbrăcăm',
    accent: 'S',
    body: 'Elegant de grădină. Ținute rafinate, stofe lejere, pantofi comozi și un strat în plus pentru seara răcoroasă.',
  },
  {
    kicker: '03',
    title: 'Weekendul nostru',
    accent: '26',
    body: 'Sâmbătă seara avem welcome drinks, duminică petrecem nunta, iar luni încheiem cu un brunch târziu.',
  },
  {
    kicker: '04',
    title: 'Cadouri',
    accent: '27',
    body: 'Prezența voastră contează cel mai mult. Dacă vreți totuși să ne oferiți ceva, strângem pentru luna de miere și pentru casa noastră.',
  },
] as const

const hostingNotes = [
  {
    title: 'Călătorie',
    body: 'Dacă veniți cu avionul, Otopeni este cea mai ușoară variantă. Vă recomandăm cazare în centrul Bucureștiului și transferul nostru din Piața Victoriei.',
  },
  {
    title: 'Copii',
    body: 'Ne sunt foarte dragi cei mici, dar această seară este gândită pentru adulți, astfel încât toată lumea să se poată bucura în voie de cină și de dans.',
  },
  {
    title: 'Muzică',
    body: 'La ceremonie vom avea un cvartet live, iar după cină un DJ. Dacă vreți să ne testați gusturile, lăsați o melodie în formularul RSVP.',
  },
] as const

const faqs = [
  {
    question: 'Pot veni cu partenerul sau partenera?',
    answer:
      'Dacă invitația voastră include un plus unu, ne bucurăm să îl sau să o avem alături. Formularul RSVP ne ajută să închidem lista finală fără confuzii.',
  },
  {
    question: 'Există parcare la locație?',
    answer:
      'Da. Vor exista atât valet, cât și locuri de parcare obișnuite, iar semnalizarea vă va ghida de la intrarea principală.',
  },
  {
    question: 'Ce se întâmplă dacă ratez termenul de RSVP?',
    answer:
      'Scrieți-ne cât mai repede. Vom încerca să vă includem, dar după închiderea listei finale devine mult mai greu să ajustăm meniurile și așezarea la mese.',
  },
] as const

const initialFormState = {
  guestNames: '',
  email: '',
  phone: '',
  attendance: 'confirm-cu-drag',
  partySize: '2',
  meal: 'meniul-chefului',
  song: '',
  notes: '',
}

type FormState = typeof initialFormState

type SubmissionState = FormState & {
  savedAt: string
}

function getCountdownUnits(now = Date.now()) {
  const difference = Math.max(weddingTimestamp - now, 0)
  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((difference / (1000 * 60)) % 60)

  return [
    { label: 'Zile', value: String(days).padStart(2, '0') },
    { label: 'Ore', value: String(hours).padStart(2, '0') },
    { label: 'Minute', value: String(minutes).padStart(2, '0') },
  ]
}

function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#6d3042]/10 bg-white/80 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-[#7d5d5f] shadow-[0_14px_32px_rgba(109,48,66,0.07)] backdrop-blur">
      <span className="h-2 w-2 rounded-full bg-[#b05d6a]" />
      {children}
    </span>
  )
}

function HighlightCard({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="rounded-[1.75rem] border border-[#6d3042]/10 bg-white/75 p-5 shadow-[0_24px_60px_rgba(109,48,66,0.08)] backdrop-blur">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#8c676e]">
        {label}
      </p>
      <p className="mt-3 text-xl font-semibold text-[#351f26] sm:text-2xl">
        {value}
      </p>
    </div>
  )
}

function DetailCard({
  kicker,
  title,
  body,
  accent,
}: {
  kicker: string
  title: string
  body: string
  accent: string
}) {
  return (
    <article className="rounded-[2rem] border border-[#6d3042]/10 bg-white/75 p-6 shadow-[0_26px_64px_rgba(109,48,66,0.08)] backdrop-blur">
      <div className="flex items-center justify-between gap-4">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#8c676e]">
          {kicker}
        </p>
        <p className="wedding-display text-4xl leading-none text-[#b05d6a]">
          {accent}
        </p>
      </div>
      <h3 className="wedding-display mt-6 text-3xl leading-none text-[#341e25]">
        {title}
      </h3>
      <p className="mt-4 text-[1.02rem] leading-8 text-[#5b474a]">{body}</p>
    </article>
  )
}

function TimelineItem({
  index,
  time,
  title,
  description,
}: {
  index: number
  time: string
  title: string
  description: string
}) {
  return (
    <article className="grid gap-4 rounded-[2rem] border border-[#6d3042]/10 bg-white/80 p-6 shadow-[0_22px_50px_rgba(109,48,66,0.07)] md:grid-cols-[auto_1fr]">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#6d3042]/10 bg-[#f6ded4] text-sm font-semibold text-[#6d3042]">
          {String(index).padStart(2, '0')}
        </div>
      </div>
      <div>
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#8c676e]">
          {time}
        </p>
        <h3 className="wedding-display mt-3 text-3xl leading-none text-[#341e25]">
          {title}
        </h3>
        <p className="mt-4 text-[1.02rem] leading-8 text-[#5b474a]">
          {description}
        </p>
      </div>
    </article>
  )
}

function Field({
  label,
  hint,
  children,
}: {
  label: string
  hint?: string
  children: ReactNode
}) {
  return (
    <label className="block space-y-2">
      <span className="block text-sm font-semibold uppercase tracking-[0.24em] text-[#6d3042]">
        {label}
      </span>
      {hint ? (
        <span className="block text-sm leading-6 text-[#7b6668]">{hint}</span>
      ) : null}
      {children}
    </label>
  )
}

function OrnamentalMark() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6 text-[#6d3042]"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M24 4C24 16 16 24 4 24C16 24 24 32 24 44C24 32 32 24 44 24C32 24 24 16 24 4Z"
        fill="currentColor"
        fillOpacity="0.16"
      />
      <path
        d="M24 10C24 18 18 24 10 24C18 24 24 30 24 38C24 30 30 24 38 24C30 24 24 18 24 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export function WeddingPage() {
  const [countdown, setCountdown] = useState(() => getCountdownUnits())
  const [form, setForm] = useState<FormState>(initialFormState)
  const [submission, setSubmission] = useState<SubmissionState | null>(null)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCountdown(getCountdownUnits())
    }, 1000 * 30)

    return () => window.clearInterval(intervalId)
  }, [])

  const handleFieldChange =
    (field: keyof FormState) =>
    (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      const { value } = event.target
      setForm((current) => ({
        ...current,
        [field]: value,
      }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const savedAt = new Intl.DateTimeFormat('ro-RO', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date())

    setSubmission({
      ...form,
      savedAt,
    })
  }

  const formattedLongDate = new Intl.DateTimeFormat('ro-RO', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(weddingDate)

  const formattedShortDate = new Intl.DateTimeFormat('ro-RO', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(weddingDate)

  const fieldClasses =
    'w-full rounded-[1.15rem] border border-[#6d3042]/15 bg-white/85 px-4 py-4 text-base text-[#2f2121] outline-none transition placeholder:text-[#9f8c90] focus:border-[#6d3042] focus:ring-4 focus:ring-[#6d3042]/10'

  return (
    <div className="wedding-shell min-h-screen text-[#281a1a]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap');

        .wedding-shell {
          background:
            radial-gradient(circle at 0% 0%, rgba(176, 93, 106, 0.16), transparent 28%),
            radial-gradient(circle at 92% 12%, rgba(228, 196, 160, 0.45), transparent 24%),
            linear-gradient(180deg, #fbf4ee 0%, #f8efe6 48%, #f6ebe3 100%);
        }

        .wedding-shell * {
          box-sizing: border-box;
          text-transform: none;
          font-family: 'Manrope', sans-serif;
        }

        .wedding-shell .wedding-display {
          font-family: 'Cormorant Garamond', serif;
        }

        .wedding-shell .wedding-fade {
          animation: wedding-fade 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .wedding-shell .wedding-delay-1 {
          animation-delay: 0.12s;
        }

        .wedding-shell .wedding-delay-2 {
          animation-delay: 0.22s;
        }

        .wedding-shell .wedding-delay-3 {
          animation-delay: 0.32s;
        }

        .wedding-shell .wedding-float {
          animation: wedding-float 9s ease-in-out infinite;
        }

        .wedding-shell details > summary {
          list-style: none;
        }

        .wedding-shell details > summary::-webkit-details-marker {
          display: none;
        }

        .wedding-shell details[open] .faq-plus {
          transform: rotate(45deg);
        }

        @keyframes wedding-fade {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes wedding-float {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>

      <header className="sticky top-0 z-30 border-b border-white/60 bg-[#fbf4ee]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-10">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#6d3042]/10 bg-white/75 shadow-[0_18px_34px_rgba(109,48,66,0.08)]">
              <OrnamentalMark />
            </div>
            <div className="min-w-0">
              <p className="wedding-display truncate text-2xl leading-none text-[#341e25]">
                Aurelia & Stefan
              </p>
              <p className="mt-1 truncate text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#8c676e]">
                {formattedShortDate}
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#55343d] md:flex">
            <a href="#details" className="transition hover:text-[#6d3042]">
              Detalii
            </a>
            <a href="#timeline" className="transition hover:text-[#6d3042]">
              Program
            </a>
            <a href="#notes" className="transition hover:text-[#6d3042]">
              Informații utile
            </a>
            <a href="#rsvp" className="transition hover:text-[#6d3042]">
              RSVP
            </a>
          </nav>

          <a
            href="#rsvp"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#6d3042] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(109,48,66,0.22)] transition hover:-translate-y-0.5 hover:bg-[#5b2737]"
          >
            Confirmă
          </a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-7xl px-5 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16">
          <div className="grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="wedding-fade space-y-8">
              <SectionBadge>Sărbătoare de septembrie</SectionBadge>

              <div className="space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.38em] text-[#7d5d5f]">
                  Vă invităm cu drag
                </p>
                <h1 className="wedding-display text-6xl leading-none text-[#341e25] sm:text-7xl lg:text-[6.4rem]">
                  Aurelia <span className="text-[#b05d6a]">&</span> Stefan
                </h1>
                <p className="max-w-xl text-lg leading-8 text-[#5b474a] sm:text-xl">
                  Vă așteptăm la o ceremonie în lumina lumânărilor, o cină lungă
                  sub sticlă și o seară tihnită, plină de muzică, flori și
                  oameni dragi, în București.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <HighlightCard label="Data" value={formattedLongDate} />
                <HighlightCard label="Ceremonia" value="16:30" />
                <HighlightCard label="Locația" value="The Glass Atrium" />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#timeline"
                  className="inline-flex items-center justify-center rounded-full bg-[#6d3042] px-8 py-4 text-base font-semibold text-white shadow-[0_20px_42px_rgba(109,48,66,0.22)] transition hover:-translate-y-0.5 hover:bg-[#5b2737]"
                >
                  Vezi programul
                </a>
                <a
                  href="#rsvp"
                  className="inline-flex items-center justify-center rounded-full border border-[#6d3042]/15 bg-white/75 px-8 py-4 text-base font-semibold text-[#432730] shadow-[0_18px_42px_rgba(109,48,66,0.08)] transition hover:-translate-y-0.5 hover:border-[#6d3042]/30"
                >
                  Trimite RSVP-ul
                </a>
              </div>

              <div className="rounded-[2rem] border border-[#6d3042]/10 bg-white/70 p-6 shadow-[0_24px_60px_rgba(109,48,66,0.08)] backdrop-blur">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[#8c676e]">
                  Un gând de la noi
                </p>
                <p className="mt-4 max-w-2xl text-[1.04rem] leading-8 text-[#5b474a]">
                  Ne-am dorit ca ziua asta să fie cea mai frumoasă versiune a
                  sentimentului de acasă: elegantă, relaxată, generoasă și plină
                  de conversații. Vă mulțumim că faceți parte din oamenii alături
                  de care o sărbătorim.
                </p>
              </div>
            </div>

            <div className="wedding-fade wedding-delay-1 relative">
              <div className="pointer-events-none absolute -right-3 -top-3 h-32 w-32 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.95),_rgba(176,93,106,0.2))] blur-sm" />
              <div className="pointer-events-none absolute bottom-8 left-0 h-24 w-24 rounded-full border border-white/70 bg-white/40" />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-[#fffaf6]/80 p-6 shadow-[0_34px_90px_rgba(80,39,48,0.14)] backdrop-blur md:p-8">
                <div className="overflow-hidden rounded-[2rem] border border-[#6d3042]/10 bg-[linear-gradient(135deg,_rgba(246,222,212,0.95),_rgba(255,250,246,0.88))] p-6">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[#8c676e]">
                        Invitație
                      </p>
                      <h2 className="wedding-display mt-4 text-5xl leading-none text-[#341e25]">
                        Duminică
                        <br />
                        sub sticlă
                      </h2>
                    </div>
                    <div className="wedding-float flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-white/80 bg-white/60 shadow-[0_22px_40px_rgba(109,48,66,0.12)]">
                      <OrnamentalMark />
                    </div>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {countdown.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[1.5rem] border border-white/80 bg-white/65 px-4 py-5 text-center shadow-[0_18px_36px_rgba(109,48,66,0.08)]"
                      >
                        <p className="wedding-display text-4xl leading-none text-[#341e25]">
                          {item.value}
                        </p>
                        <p className="mt-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[#8c676e]">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {timeline.slice(0, 3).map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 rounded-[1.5rem] border border-[#6d3042]/10 bg-white/70 px-4 py-4"
                    >
                      <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#b05d6a]" />
                      <div>
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#8c676e]">
                          {item.time}
                        </p>
                        <p className="mt-2 text-base font-semibold text-[#341e25]">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.75rem] bg-[#6d3042] p-5 text-white shadow-[0_20px_42px_rgba(109,48,66,0.2)]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-white/70">
                    Ținută
                  </p>
                  <p className="mt-3 text-lg leading-7">
                    Elegant de grădină, croieli fluide și pantofi în care puteți
                    dansa bine și după miezul nopții.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="details"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-16 md:px-10"
        >
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="wedding-fade wedding-delay-1 max-w-2xl space-y-4">
              <SectionBadge>Detaliile importante</SectionBadge>
              <h2 className="wedding-display text-5xl leading-none text-[#341e25] sm:text-6xl">
                Tot ce trebuie să știți
              </h2>
            </div>
            <p className="wedding-fade wedding-delay-2 max-w-2xl text-[1.02rem] leading-8 text-[#5b474a]">
              Am gândit ziua astfel încât totul să curgă firesc, de la sosire
              până la ultimul dans, așa că singura misiune reală este să veniți
              pregătiți pentru o seară lungă și frumoasă.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {detailCards.map((card) => (
              <DetailCard
                key={card.title}
                kicker={card.kicker}
                title={card.title}
                body={card.body}
                accent={card.accent}
              />
            ))}
          </div>
        </section>

        <section
          id="timeline"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-16 md:px-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="wedding-fade wedding-delay-1 space-y-6 rounded-[2.5rem] border border-[#6d3042]/10 bg-white/72 p-7 shadow-[0_28px_70px_rgba(109,48,66,0.09)] backdrop-blur md:p-8">
              <SectionBadge>Cum curge ziua</SectionBadge>
              <h2 className="wedding-display text-5xl leading-none text-[#341e25] sm:text-6xl">
                O seară care crește încet
              </h2>
              <p className="text-[1.02rem] leading-8 text-[#5b474a]">
                Programul e construit cu răgaz: timp să vă așezați, să povestiți,
                să mâncați bine și să lăsați seara să devină puțin imprevizibilă
                în cel mai bun sens.
              </p>

              <div className="rounded-[2rem] border border-[#6d3042]/10 bg-[#f6ded4]/50 p-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#8c676e]">
                  Adresa ceremoniei
                </p>
                <p className="mt-3 text-lg font-semibold text-[#341e25]">
                  The Glass Atrium
                </p>
                <p className="mt-2 leading-7 text-[#5b474a]">
                  Strada Paris 14, București
                  <br />
                  Transferul pleacă din Piața Victoriei la 15:45.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {timeline.map((item, index) => (
                <TimelineItem
                  key={item.title}
                  index={index + 1}
                  time={item.time}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="notes"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-16 md:px-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-5">
              <div className="wedding-fade wedding-delay-1 space-y-4">
                <SectionBadge>Informații utile</SectionBadge>
                <h2 className="wedding-display text-5xl leading-none text-[#341e25] sm:text-6xl">
                  Câteva lucruri practice
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {hostingNotes.map((item) => (
                  <article
                    key={item.title}
                    className="wedding-fade wedding-delay-2 rounded-[2rem] border border-[#6d3042]/10 bg-white/76 p-6 shadow-[0_24px_58px_rgba(109,48,66,0.08)] backdrop-blur"
                  >
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#8c676e]">
                      {item.title}
                    </p>
                    <p className="mt-4 text-[1.02rem] leading-8 text-[#5b474a]">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="wedding-fade wedding-delay-3 rounded-[2.5rem] border border-[#6d3042]/10 bg-white/76 p-7 shadow-[0_28px_72px_rgba(109,48,66,0.09)] backdrop-blur md:p-8">
              <SectionBadge>Întrebări frecvente</SectionBadge>
              <div className="mt-6 space-y-4">
                {faqs.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-[1.6rem] border border-[#6d3042]/10 bg-[#fffaf6] px-5 py-4"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4">
                      <span className="text-lg font-semibold text-[#341e25]">
                        {item.question}
                      </span>
                      <span className="faq-plus wedding-display text-3xl leading-none text-[#b05d6a] transition">
                        +
                      </span>
                    </summary>
                    <p className="pt-4 text-[1.02rem] leading-8 text-[#5b474a]">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="rsvp"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-20 md:px-10"
        >
          <div className="overflow-hidden rounded-[2.75rem] border border-[#6d3042]/10 bg-[linear-gradient(140deg,_rgba(255,250,246,0.94),_rgba(246,222,212,0.78))] shadow-[0_34px_90px_rgba(80,39,48,0.14)]">
            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:p-10">
              <div className="wedding-fade wedding-delay-1 space-y-6">
                <SectionBadge>RSVP</SectionBadge>
                <h2 className="wedding-display text-5xl leading-none text-[#341e25] sm:text-6xl">
                  Trimite-ne răspunsul
                </h2>
                <p className="text-[1.02rem] leading-8 text-[#5b474a]">
                  Spuneți-ne dacă puteți veni, cine participă și ce detalii ar
                  trebui să avem în vedere. În această implementare, formularul
                  salvează răspunsul doar în starea locală a paginii, fără
                  integrare externă.
                </p>

                <div className="rounded-[2rem] border border-white/80 bg-white/70 p-6 shadow-[0_22px_52px_rgba(109,48,66,0.08)]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#8c676e]">
                    Contact direct
                  </p>
                  <div className="mt-4 space-y-3 text-[1.02rem] leading-7 text-[#4f3b3f]">
                    <p>wedding@aureliaandstefan.com</p>
                    <p>+40 722 000 111</p>
                    <p>Răspundeți până la 24 august 2026</p>
                  </div>
                </div>

                {submission ? (
                  <div className="rounded-[2rem] bg-[#6d3042] p-6 text-white shadow-[0_24px_54px_rgba(109,48,66,0.22)]">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-white/70">
                      Previzualizare salvată
                    </p>
                    <h3 className="wedding-display mt-4 text-4xl leading-none">
                      Mulțumim, {submission.guestNames || 'dragilor'}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-white/85">
                      Am salvat ultima previzualizare a RSVP-ului la{' '}
                      {submission.savedAt}.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Participare:{' '}
                      {submission.attendance === 'confirm-cu-drag'
                        ? 'confirm cu drag'
                        : submission.attendance === 'vin-doar-seara'
                          ? 'vin doar seara'
                          : 'trimit dragoste de la distanță'}
                      . Număr invitați: {submission.partySize}.
                    </p>
                  </div>
                ) : null}
              </div>

              <form
                className="wedding-fade wedding-delay-2 rounded-[2.25rem] border border-white/80 bg-white/74 p-6 shadow-[0_24px_62px_rgba(109,48,66,0.08)] backdrop-blur md:p-8"
                onSubmit={handleSubmit}
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <Field
                      label="Nume invitați"
                      hint="Treceți toate persoanele incluse în răspuns."
                    >
                      <input
                        required
                        autoComplete="name"
                        className={fieldClasses}
                        placeholder="Aurelia Popescu și Stefan Ionescu"
                        value={form.guestNames}
                        onChange={handleFieldChange('guestNames')}
                      />
                    </Field>
                  </div>

                  <Field label="Email">
                    <input
                      required
                      type="email"
                      autoComplete="email"
                      className={fieldClasses}
                      placeholder="nume@exemplu.ro"
                      value={form.email}
                      onChange={handleFieldChange('email')}
                    />
                  </Field>

                  <Field label="Telefon">
                    <input
                      type="tel"
                      autoComplete="tel"
                      className={fieldClasses}
                      placeholder="+40 7xx xxx xxx"
                      value={form.phone}
                      onChange={handleFieldChange('phone')}
                    />
                  </Field>

                  <Field label="Participare">
                    <select
                      className={fieldClasses}
                      value={form.attendance}
                      onChange={handleFieldChange('attendance')}
                    >
                      <option value="confirm-cu-drag">Confirm cu drag</option>
                      <option value="vin-doar-seara">Vin doar seara</option>
                      <option value="trimit-dragoste-de-la-distanta">
                        Trimit dragoste de la distanță
                      </option>
                    </select>
                  </Field>

                  <Field label="Număr invitați">
                    <select
                      className={fieldClasses}
                      value={form.partySize}
                      onChange={handleFieldChange('partySize')}
                    >
                      <option value="1">1 invitat</option>
                      <option value="2">2 invitați</option>
                      <option value="3">3 invitați</option>
                      <option value="4">4 invitați</option>
                    </select>
                  </Field>

                  <Field label="Preferință meniu">
                    <select
                      className={fieldClasses}
                      value={form.meal}
                      onChange={handleFieldChange('meal')}
                    >
                      <option value="meniul-chefului">Meniul chef-ului</option>
                      <option value="vegetarian">Vegetarian</option>
                      <option value="vegan">Vegan</option>
                      <option value="fara-gluten">Fără gluten</option>
                    </select>
                  </Field>

                  <Field label="Piesă preferată">
                    <input
                      className={fieldClasses}
                      placeholder="O melodie pentru ringul de dans"
                      value={form.song}
                      onChange={handleFieldChange('song')}
                    />
                  </Field>

                  <div className="md:col-span-2">
                    <Field label="Note">
                      <textarea
                        rows={5}
                        className={fieldClasses}
                        placeholder="Preferințe alimentare, detalii de accesibilitate sau un mesaj pentru noi."
                        value={form.notes}
                        onChange={handleFieldChange('notes')}
                      />
                    </Field>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-sm leading-6 text-[#7b6668]">
                    Butonul salvează răspunsul în starea locală a componentei,
                    astfel încât interacțiunea să se simtă completă și fără
                    backend.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-[#6d3042] px-8 py-4 text-base font-semibold text-white shadow-[0_20px_42px_rgba(109,48,66,0.22)] transition hover:-translate-y-0.5 hover:bg-[#5b2737]"
                  >
                    Salvează RSVP-ul
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default WeddingPage
