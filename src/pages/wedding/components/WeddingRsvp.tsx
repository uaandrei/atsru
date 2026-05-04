import { weddingFonts, weddingColors } from './weddingTheme'
import type { RsvpFormErrors } from './useRsvpForm'
import type { WeddingTranslation } from '../weddingTranslations'

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
  errors: RsvpFormErrors
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
  handleSubmit: () => void
  t: WeddingTranslation['rsvp']
}

/** RSVP section — card-based form or thank-you message after submission */
export function WeddingRsvp({ form, submitted, submitting, errors, handleChange, handleSubmit, t }: WeddingRsvpProps) {
  return (
    <section
      className="py-8 px-4 md:px-8 relative"
      id="rsvp"
      style={{ background: weddingColors.background }}
    >

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
          {!submitted && (
            <div className="text-center space-y-4 w-full">
              <h2
                className="text-6xl md:text-7xl -ml-4"
                style={{ fontFamily: weddingFonts.caveat, color: weddingColors.primary }}
              >
                {t.title}
              </h2>
              <p
                className="text-xl max-w-md mx-auto"
                style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurfaceVariant }}
              >
                {t.deadlinePrefix}{' '}
                <span className='text-2xl' style={{ color: weddingColors.primary, fontWeight: 600 }}>{t.deadlineDate}</span>
                {t.deadlineSuffix}
              </p>
            </div>
          )}

          {submitted ? <ThankYouMessage t={t} /> : (
            <RsvpForm
              form={form}
              submitting={submitting}
              errors={errors}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              t={t}
            />
          )}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function ThankYouMessage({ t }: { t: WeddingTranslation['rsvp'] }) {
  return (
    <div className="text-center py-12 w-full">
      <span className="material-symbols-outlined text-6xl mb-6 block" style={{ color: weddingColors.primaryContainer }}>
        favorite
      </span>
      <h3 className="text-4xl mb-4" style={{ fontFamily: weddingFonts.caveat, color: weddingColors.primary }}>
        {t.thankYouTitle}
      </h3>
      <p className="text-lg" style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurfaceVariant }}>
        {t.thankYouBody}
      </p>
    </div>
  )
}

type RsvpFormProps = {
  form: RsvpForm
  submitting: boolean
  errors: RsvpFormErrors
  handleChange: WeddingRsvpProps['handleChange']
  handleSubmit: WeddingRsvpProps['handleSubmit']
  t: WeddingTranslation['rsvp']
}

function RsvpForm({ form, submitting, errors, handleChange, handleSubmit, t }: RsvpFormProps) {
  const isAttending = form.attendance === 'attending'

  return (
    <div className="w-full space-y-10">

      {/* Attendance */}
      <div className="flex flex-col gap-4">
        <p
          className="text-xl tracking-wide uppercase"
          style={{ fontFamily: weddingFonts.label, color: weddingColors.onSurfaceVariant }}
        >
          {t.attendanceQuestion}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
          {[
            { value: 'attending', label: t.attending },
            { value: 'declining', label: t.declining },
          ].map(({ value, label }) => (
            <label
              key={value}
              className="relative flex cursor-pointer items-center justify-center rounded p-4 border transition-colors"
              style={{
                borderColor: form.attendance === value
                  ? weddingColors.primary
                  : errors.attendance
                    ? weddingColors.error
                    : weddingColors.surfaceContainer,
                background: form.attendance === value ? weddingColors.surfaceContainer : undefined,
              }}
            >
              <input
                className="sr-only"
                name="attendance"
                type="radio"
                value={value}
                required
                aria-invalid={errors.attendance}
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
              className="text-xl tracking-wide uppercase"
              htmlFor="names"
              style={{ fontFamily: weddingFonts.label, color: weddingColors.onSurfaceVariant }}
            >
              {t.namesLabel}
            </label>
            <p
              className="text-xl mb-1"
              style={{ fontFamily: weddingFonts.body, color: weddingColors.outline }}
            >
              {t.namesHelp}
            </p>
            <textarea
              id="names"
              name="names"
              required
              aria-invalid={errors.names}
              rows={3}
              placeholder={t.namesPlaceholder}
              value={form.names}
              onChange={handleChange}
              className="ghost-border-input w-full py-2 text-lg placeholder:opacity-40 resize-none"
              style={{
                fontFamily: weddingFonts.body,
                color: weddingColors.onSurface,
                borderBottomColor: errors.names ? weddingColors.error : undefined,
              }}
            />
          </div>

          {/* Accommodation */}
          <div className="flex flex-col gap-4">
            <p
              className="text-xl tracking-wide uppercase"
              style={{ fontFamily: weddingFonts.label, color: weddingColors.onSurfaceVariant }}
            >
              {t.accommodationQuestion}
            </p>
            <div className="space-y-3">
              {t.accommodationOptions.map(({ value, label }) => (
                <label
                  key={value}
                  className="flex cursor-pointer items-center rounded p-4 border transition-colors"
                  style={{
                    borderColor: form.accommodation === value
                      ? weddingColors.primary
                      : errors.accommodation
                        ? weddingColors.error
                        : weddingColors.surfaceContainer,
                    background: form.accommodation === value ? weddingColors.surfaceContainer : undefined,
                  }}
                >
                  <input
                    className="sr-only"
                    name="accommodation"
                    type="radio"
                    value={value}
                    required
                    aria-invalid={errors.accommodation}
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

            <div
              className="text-xl p-4 rounded border flex items-start gap-2"
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
              {t.accommodationInfo}
            </div>
          </div>

          {/* Dietary */}
          <div className="flex flex-col gap-2">
            <label
              className="text-xl tracking-wide uppercase"
              htmlFor="dietary"
              style={{ fontFamily: weddingFonts.label, color: weddingColors.onSurfaceVariant }}
            >
              {t.dietaryLabel}
            </label>
            <input
              id="dietary"
              name="dietary"
              type="text"
              placeholder={t.dietaryPlaceholder}
              value={form.dietary}
              onChange={handleChange}
              className="ghost-border-input w-full py-2 text-lg placeholder:opacity-40"
              style={{ fontFamily: weddingFonts.body, color: weddingColors.onSurface }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-xl tracking-wide uppercase"
              htmlFor="message"
              style={{ fontFamily: weddingFonts.label, color: weddingColors.onSurfaceVariant }}
            >
              {t.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              rows={2}
              placeholder={t.messagePlaceholder}
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
          className="w-full md:w-auto py-4 px-12 rounded text-xl tracking-widest uppercase transition-opacity hover:opacity-90 disabled:opacity-50"
          style={{
            fontFamily: weddingFonts.label,
            background: `linear-gradient(135deg, ${weddingColors.primary}, ${weddingColors.primaryContainer})`,
            color: weddingColors.onPrimary,
            boxShadow: '0 4px 20px -5px rgba(122,88,47,0.3)',
          }}
        >
          {submitting ? t.submitting : t.submit}
        </button>
      </div>
    </div>
  )
}
