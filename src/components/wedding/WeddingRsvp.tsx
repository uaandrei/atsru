import { weddingFonts } from './weddingTheme'

type WeddingRsvpProps = {
  form: { name: string; email: string; guests: string; accommodation: string; notes: string }
  submitted: boolean
  submitting: boolean
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
  handleSubmit: () => void
}

/** RSVP section — shows the form or a thank-you message after submission */
export function WeddingRsvp({ form, submitted, submitting, handleChange, handleSubmit }: WeddingRsvpProps) {
  return (
    <section className="py-32 px-6 bg-white" id="rsvp">
      <div className="max-w-2xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: weddingFonts.display }}>
            RSVP
          </h2>
          <p
            className="text-stone-500 text-sm tracking-widest uppercase"
            style={{ fontFamily: weddingFonts.body }}
          >
            Kindly respond by September 1st
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
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Sub-components (private to this file)                             */
/* ------------------------------------------------------------------ */

/** Confirmation message shown after successful RSVP */
function ThankYouMessage() {
  return (
    <div className="text-center py-16">
      <span className="material-symbols-outlined text-6xl text-champagne mb-6 block">favorite</span>
      <h3 className="text-3xl mb-4 italic" style={{ fontFamily: weddingFonts.display }}>
        Thank You!
      </h3>
      <p className="text-stone-600 text-lg" style={{ fontFamily: weddingFonts.body }}>
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

/** The actual RSVP form with name, email, guest count, accommodation, and notes */
function RsvpForm({ form, submitting, handleChange, handleSubmit }: RsvpFormProps) {
  /** Shared classes for text inputs */
  const inputClass = 'w-full bg-transparent border-0 border-b border-stone-200 focus:ring-0 focus:border-champagne py-3 px-0 text-lg placeholder:text-stone-300 transition-colors outline-none'

  return (
    <div className="space-y-8">
      {/* Name + Email row */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1" style={{ fontFamily: weddingFonts.body }}>Name</label>
          <input
            className={inputClass}
            style={{ fontFamily: weddingFonts.display }}
            placeholder="Full Name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1" style={{ fontFamily: weddingFonts.body }}>Email</label>
          <input
            className={inputClass}
            style={{ fontFamily: weddingFonts.display }}
            placeholder="Email Address"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Guest count + Accommodation row */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1" style={{ fontFamily: weddingFonts.body }}>Number of Persons</label>
          <select
            className="w-full bg-transparent border-0 border-b border-stone-200 focus:ring-0 focus:border-champagne py-3 px-0 text-lg text-stone-800 transition-colors appearance-none outline-none"
            style={{ fontFamily: weddingFonts.display }}
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
          <label className="block text-[10px] uppercase tracking-widest text-stone-400" style={{ fontFamily: weddingFonts.body }}>Help with Accommodation?</label>
          <div className="flex gap-8 py-3">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input className="w-4 h-4 border-stone-300 text-stone-900 focus:ring-0 accent-champagne" name="accommodation" type="radio" value="yes" checked={form.accommodation === 'yes'} onChange={handleChange} />
              <span className="text-sm text-stone-600 group-hover:text-stone-900" style={{ fontFamily: weddingFonts.body }}>Yes</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input className="w-4 h-4 border-stone-300 text-stone-900 focus:ring-0 accent-champagne" name="accommodation" type="radio" value="no" checked={form.accommodation === 'no'} onChange={handleChange} />
              <span className="text-sm text-stone-600 group-hover:text-stone-900" style={{ fontFamily: weddingFonts.body }}>No</span>
            </label>
          </div>
        </div>
      </div>

      {/* Special requirements */}
      <div>
        <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1" style={{ fontFamily: weddingFonts.body }}>Special Requirements</label>
        <textarea
          className="w-full bg-transparent border-0 border-b border-stone-200 focus:ring-0 focus:border-champagne py-3 px-0 text-lg placeholder:text-stone-300 transition-colors resize-none outline-none"
          style={{ fontFamily: weddingFonts.display }}
          placeholder="Dietary restrictions or notes..."
          rows={1}
          name="notes"
          value={form.notes}
          onChange={handleChange}
        />
      </div>

      {/* Submit button */}
      <button
        className="w-full py-5 bg-stone-900 text-white text-xs uppercase tracking-[0.3em] hover:bg-champagne transition-colors mt-8 disabled:opacity-50"
        style={{ fontFamily: weddingFonts.body }}
        type="button"
        onClick={handleSubmit}
        disabled={submitting}
      >
        {submitting ? 'Sending...' : 'Send Response'}
      </button>
    </div>
  )
}
