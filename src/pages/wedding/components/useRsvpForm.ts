import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from './firebaseConfig'

type RsvpFormData = {
  attendance: 'attending' | 'declining' | ''
  names: string
  accommodation: 'sat-sun' | 'fri-sun' | 'none' | ''
  dietary: string
  message: string
}

export type RsvpFormErrors = {
  attendance: boolean
  names: boolean
  accommodation: boolean
}

const NO_ERRORS: RsvpFormErrors = { attendance: false, names: false, accommodation: false }

const computeErrors = (form: RsvpFormData): RsvpFormErrors => ({
  attendance: !form.attendance,
  names: form.attendance === 'attending' && !form.names.trim(),
  accommodation: form.attendance === 'attending' && !form.accommodation,
})

const hasErrors = (e: RsvpFormErrors) => e.attendance || e.names || e.accommodation

/**
 * Manages RSVP form state and submission to Firebase.
 *
 * Submissions are stored in the Firestore 'invitations' collection with
 * the form fields plus a `createdAt` ISO timestamp.
 */
export function useRsvpForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [showErrors, setShowErrors] = useState(false)
  const [form, setForm] = useState<RsvpFormData>({
    attendance: '',
    names: '',
    accommodation: '',
    dietary: '',
    message: '',
  })

  const errors = showErrors ? computeErrors(form) : NO_ERRORS

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    const currentErrors = computeErrors(form)
    if (hasErrors(currentErrors)) {
      setShowErrors(true)
      return
    }
    setShowErrors(false)
    setSubmitting(true)
    try {
      await addDoc(collection(db, 'invitations'), {
        ...form,
        createdAt: new Date().toISOString(),
      })
      setSubmitted(true)
    } catch (err) {
      console.error('Failed to save invitation:', err)
    } finally {
      setSubmitting(false)
    }
  }

  return { form, submitted, submitting, errors, handleChange, handleSubmit }
}
