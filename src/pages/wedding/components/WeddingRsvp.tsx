import { weddingFonts, weddingColors } from './weddingTheme'

type WeddingRsvpProps = {
  form: {
    fullName: string
    attendance: 'attending' | 'declining' | ''
    guests: string
    meal: 'beef' | 'chicken' | 'vegetarian' | ''
    dietary: string
  }
  submitted: boolean
  submitting: boolean
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
  handleSubmit: () => void
}

/** RSVP section — card-based form or thank-you message after submission */
export function WeddingRsvp({ form, submitted, submitting, handleChange, handleSubmit }: WeddingRsvpProps) {
  return (
    <section
      className="py-32 px-4 md:px-8 relative"
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
        {/* RSVP card */}
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
              Kindly Respond
            </h2>
            <p
              className="text-lg md:text-xl max-w-md mx-auto"
              style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurfaceVariant }}
            >
              We look forward to celebrating with you. Please let us know your plans by September 15th.
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
/*  Sub-components (private to this file)                             */
/* ------------------------------------------------------------------ */

function ThankYouMessage() {
  return (
    <div className="text-center py-16 w-full">
      <span className="material-symbols-outlined text-6xl mb-6 block" style={{ color: weddingColors.primaryContainer }}>
        favorite
      </span>
      <h3 className="text-4xl mb-4" style={{ fontFamily: weddingFonts.display, color: weddingColors.primary }}>
        Thank You!
      </h3>
      <p className="text-lg" style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurfaceVariant }}>
        Your response has been recorded. We can't wait to celebrate with you!
      </p>
    </div>
  )
}

type RsvpFormProps = {
  form: WeddingRsvpProps['form']
  submitting: boolean
  handleChange: WeddingRsvpProps['handleChange']
  handleSubmit: WeddingRsvpProps['handleSubmit']
}

function RsvpForm({ form, submitting, handleChange, handleSubmit }: RsvpFormProps) {
  return (
    <div className="w-full space-y-10">
      {/* Full Name */}
      <div className="flex flex-col gap-2">
        <label
          className="text-sm tracking-wide uppercase"
          htmlFor="fullName"
          style={{ fontFamily: weddingFonts.label, color: weddingColors.onSurfaceVariant }}
        >
          M(s).
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          placeholder="Enter your full name(s)"
          value={form.fullName}
          onChange={handleChange}
          className="ghost-border-input w-full py-2 text-xl placeholder:opacity-40"
          style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurface }}
        />
      </div>

      {/* Attendance */}
      <div className="flex flex-col gap-4">
        <p
          className="text-sm tracking-wide uppercase"
          style={{ fontFamily: weddingFonts.label, color: weddingColors.onSurfaceVariant }}
        >
          Will you be attending?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { value: 'attending', label: 'Joyfully Accepts' },
            { value: 'declining', label: 'Regretfully Declines' },
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
                className="text-lg"
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

      {/* Number of Guests */}
      <div className="flex flex-col gap-2 relative">
        <label
          className="text-sm tracking-wide uppercase"
          htmlFor="guests"
          style={{ fontFamily: weddingFonts.label, color: weddingColors.onSurfaceVariant }}
        >
          Number of Guests
        </label>
        <select
          id="guests"
          name="guests"
          value={form.guests}
          onChange={handleChange}
          className="ghost-border-input w-full py-2 text-xl appearance-none bg-transparent"
          style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurface }}
        >
          {['1', '2', '3', '4'].map(n => <option key={n} value={n}>{n}</option>)}
        </select>
        <div className="absolute right-0 top-8 pointer-events-none" style={{ color: weddingColors.outline }}>
          <span className="material-symbols-outlined text-sm">expand_more</span>
        </div>
      </div>

      {/* Meal Preference */}
      <div className="flex flex-col gap-4">
        <p
          className="text-sm tracking-wide uppercase"
          style={{ fontFamily: weddingFonts.label, color: weddingColors.onSurfaceVariant }}
        >
          Meal Preference (if applicable)
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { value: 'beef', label: 'Beef', icon: 'restaurant' },
            { value: 'chicken', label: 'Chicken', icon: 'set_meal' },
            { value: 'vegetarian', label: 'Vegetarian', icon: 'eco' },
          ].map(({ value, label, icon }) => (
            <label
              key={value}
              className="relative flex flex-col cursor-pointer items-center justify-center rounded p-3 border transition-colors"
              style={{
                borderColor: form.meal === value ? weddingColors.primary : weddingColors.surfaceContainer,
                background: form.meal === value ? weddingColors.surfaceContainer : undefined,
              }}
            >
              <input
                className="sr-only"
                name="meal"
                type="radio"
                value={value}
                checked={form.meal === value}
                onChange={handleChange}
              />
              <span
                className="material-symbols-outlined mb-1"
                style={{ color: form.meal === value ? weddingColors.primary : weddingColors.outline }}
              >
                {icon}
              </span>
              <span
                className="text-base"
                style={{
                  fontFamily: weddingFonts.body,
                  color: form.meal === value ? weddingColors.primary : weddingColors.onSurface,
                }}
              >
                {label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Dietary Restrictions */}
      <div className="flex flex-col gap-2">
        <label
          className="text-sm tracking-wide uppercase"
          htmlFor="dietary"
          style={{ fontFamily: weddingFonts.label, color: weddingColors.onSurfaceVariant }}
        >
          Dietary Restrictions
        </label>
        <input
          id="dietary"
          name="dietary"
          type="text"
          placeholder="e.g., Gluten-free, nut allergy"
          value={form.dietary}
          onChange={handleChange}
          className="ghost-border-input w-full py-2 text-lg placeholder:opacity-40"
          style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurface }}
        />
      </div>

      {/* Submit */}
      <div className="pt-8 flex justify-center w-full">
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
          {submitting ? 'Sending...' : 'Send Reply'}
        </button>
      </div>
    </div>
  )
}
