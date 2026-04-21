import { weddingFonts, weddingColors } from './weddingTheme'

type RsvpForm = {
  attendance: 'attending' | 'declining' | ''
  names: string
  accommodation: 'sat-sun' | 'fri-sun' | 'none' | ''
  dietary: string
  message: string
}

type WeddingRsvpProps = {
  form: RsvpForm
  submitted: boolean
  submitting: boolean
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
  handleSubmit: () => void
}

/** RSVP section — card-based form or thank-you message after submission */
export function WeddingRsvp({ form, submitted, submitting, handleChange, handleSubmit }: WeddingRsvpProps) {
  return (
    <section
      className="py-8 px-4 md:px-8 relative"
      id="rsvp"
      style={{ background: weddingColors.background }}
    >
      {/* Botanical background texture */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <img
          alt=""
          className="w-full h-full object-cover"
          style={{ mixBlendMode: 'multiply', filter: 'grayscale(1) sepia(0.3)' }}
          src="https://images.unsplash.com/photo-1490750967868-88df5691cc02?auto=format&fit=crop&q=80"
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div
          className="rounded p-8 md:p-16 flex flex-col items-center gap-12 border"
          style={{
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(12px)',
            borderColor: weddingColors.surfaceContainerLow,
            boxShadow: '0 10px 40px -5px rgba(21,29,26,0.06)',
          }}
        >
          {/* Heading */}
          <div className="text-center space-y-4 w-full">
            <h2
              className="text-6xl md:text-7xl -ml-4"
              style={{ fontFamily: weddingFonts.display, color: weddingColors.primary }}
            >
              Confirmați participarea
            </h2>
            <p
              className="text-base md:text-lg max-w-md mx-auto"
              style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurfaceVariant }}
            >
              Vă rugăm să ne confirmați participarea cel târziu până la{' '}
              <span style={{ color: weddingColors.primary, fontWeight: 600 }}>13 iulie 2026</span>.
            </p>
          </div>

          {submitted ? <ThankYouMessage /> : (
            <RsvpForm
              form={form}
              submitting={submitting}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function ThankYouMessage() {
  return (
    <div className="text-center py-12 w-full">
      <span className="material-symbols-outlined text-6xl mb-6 block" style={{ color: weddingColors.primaryContainer }}>
        favorite
      </span>
      <h3 className="text-4xl mb-4" style={{ fontFamily: weddingFonts.display, color: weddingColors.primary }}>
        Mulțumim!
      </h3>
      <p className="text-lg" style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurfaceVariant }}>
        Răspunsul vostru a fost înregistrat. Abia așteptăm să sărbătorim împreună!
      </p>
    </div>
  )
}

type RsvpFormProps = {
  form: RsvpForm
  submitting: boolean
  handleChange: WeddingRsvpProps['handleChange']
  handleSubmit: WeddingRsvpProps['handleSubmit']
}

function RsvpForm({ form, submitting, handleChange, handleSubmit }: RsvpFormProps) {
  const isAttending = form.attendance === 'attending'

  return (
    <div className="w-full space-y-10">

      {/* Attendance */}
      <div className="flex flex-col gap-4">
        <p
          className="text-sm tracking-wide uppercase"
          style={{ fontFamily: weddingFonts.label, color: weddingColors.onSurfaceVariant }}
        >
          Veți sărbători alături de noi?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { value: 'attending', label: 'Da' },
            { value: 'declining', label: 'Din păcate nu putem fi prezenți' },
          ].map(({ value, label }) => (
            <label
              key={value}
              className="relative flex cursor-pointer items-center justify-center rounded p-4 border transition-colors"
              style={{
                borderColor: form.attendance === value ? weddingColors.primary : weddingColors.surfaceContainer,
                background: form.attendance === value ? weddingColors.surfaceContainer : undefined,
              }}
            >
              <input
                className="sr-only"
                name="attendance"
                type="radio"
                value={value}
                required
                checked={form.attendance === value}
                onChange={handleChange}
              />
              <span
                className="text-lg text-center"
                style={{
                  fontFamily: weddingFonts.body,
                  color: form.attendance === value ? weddingColors.primary : weddingColors.onSurface,
                }}
              >
                {label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Names — shown only when attending */}
      {isAttending && (
        <>
          <div className="flex flex-col gap-2">
            <label
              className="text-sm tracking-wide uppercase"
              htmlFor="names"
              style={{ fontFamily: weddingFonts.label, color: weddingColors.onSurfaceVariant }}
            >
              Câte persoane veniți?
            </label>
            <p
              className="text-sm mb-1"
              style={{ fontFamily: weddingFonts.body, color: weddingColors.outline }}
            >
              Vă rugăm să ne comunicați numele voastre, iar dacă veniți cu copil/copii, și vârsta acestuia/acestora.
            </p>
            <textarea
              id="names"
              name="names"
              required
              rows={3}
              placeholder="Ex: Ion Ionescu, Maria Ionescu, Sofia (5 ani)"
              value={form.names}
              onChange={handleChange}
              className="ghost-border-input w-full py-2 text-lg placeholder:opacity-40 resize-none"
              style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurface }}
            />
          </div>

          {/* Accommodation */}
          <div className="flex flex-col gap-4">
            <p
              className="text-sm tracking-wide uppercase"
              style={{ fontFamily: weddingFonts.label, color: weddingColors.onSurfaceVariant }}
            >
              Doriți să vă rezervăm cazare în Sighișoara?
            </p>
            <div
              className="text-sm p-4 rounded border flex items-start gap-2"
              style={{
                fontFamily: weddingFonts.body,
                color: weddingColors.onSurfaceVariant,
                background: weddingColors.surfaceContainerLow,
                borderColor: weddingColors.surfaceContainer,
              }}
            >
              <span className="material-symbols-outlined text-base shrink-0 mt-0.5" style={{ color: weddingColors.primaryContainer }}>
                info
              </span>
              Sighișoara este o destinație turistică populară și, fiind un oraș mic, locurile de cazare se ocupă rapid. Este recomandat să faceți rezervarea din timp.
            </div>
            <div className="space-y-3">
              {[
                { value: 'sat-sun', label: 'Da — 8–9 august (o noapte, sâmbătă–duminică)' },
                { value: 'fri-sun', label: 'Da — 7–9 august (două nopți, vineri–duminică)' },
                { value: 'none', label: 'Nu este necesar, ne ocupăm noi.' },
              ].map(({ value, label }) => (
                <label
                  key={value}
                  className="flex cursor-pointer items-center rounded p-4 border transition-colors"
                  style={{
                    borderColor: form.accommodation === value ? weddingColors.primary : weddingColors.surfaceContainer,
                    background: form.accommodation === value ? weddingColors.surfaceContainer : undefined,
                  }}
                >
                  <input
                    className="sr-only"
                    name="accommodation"
                    type="radio"
                    value={value}
                    checked={form.accommodation === value}
                    onChange={handleChange}
                  />
                  <span
                    className="text-base"
                    style={{
                      fontFamily: weddingFonts.body,
                      color: form.accommodation === value ? weddingColors.primary : weddingColors.onSurface,
                    }}
                  >
                    {label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Dietary */}
          <div className="flex flex-col gap-2">
            <label
              className="text-sm tracking-wide uppercase"
              htmlFor="dietary"
              style={{ fontFamily: weddingFonts.label, color: weddingColors.onSurfaceVariant }}
            >
              Alergii alimentare sau regim special?
            </label>
            <input
              id="dietary"
              name="dietary"
              type="text"
              placeholder="ex: fără gluten, vegetarian..."
              value={form.dietary}
              onChange={handleChange}
              className="ghost-border-input w-full py-2 text-lg placeholder:opacity-40"
              style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurface }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-sm tracking-wide uppercase"
              htmlFor="message"
              style={{ fontFamily: weddingFonts.label, color: weddingColors.onSurfaceVariant }}
            >
              Doriți să ne mai transmiteți ceva?
            </label>
            <textarea
              id="message"
              name="message"
              rows={2}
              placeholder="Mesajul vostru..."
              value={form.message}
              onChange={handleChange}
              className="ghost-border-input w-full py-2 text-lg placeholder:opacity-40 resize-none"
              style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurface }}
            />
          </div>
        </>
      )}

      {/* Submit */}
      <div className="pt-4 flex justify-center w-full">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          className="w-full md:w-auto py-4 px-12 rounded text-sm tracking-widest uppercase transition-opacity hover:opacity-90 disabled:opacity-50"
          style={{
            fontFamily: weddingFonts.label,
            background: `linear-gradient(135deg, ${weddingColors.primary}, ${weddingColors.primaryContainer})`,
            color: weddingColors.onPrimary,
            boxShadow: '0 4px 20px -5px rgba(122,88,47,0.3)',
          }}
        >
          {submitting ? 'Se trimite...' : 'Trimite răspunsul'}
        </button>
      </div>
    </div>
  )
}
