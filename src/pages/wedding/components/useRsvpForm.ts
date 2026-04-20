import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from './firebaseConfig'

type RsvpFormData = {
  fullName: string
  attendance: 'attending' | 'declining' | ''
  guests: string
  meal: 'beef' | 'chicken' | 'vegetarian' | ''
  dietary: string
}

/**
 * Manages RSVP form state and submission to Firebase.
 *
 * Submissions are stored in the Firestore 'invitations' collection with
 * the form fields plus a `createdAt` ISO timestamp. The `guests` field
 * is converted from string to number before saving.
 */
export function useRsvpForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState<RsvpFormData>({
    fullName: '',
    attendance: '',
    guests: '1',
    meal: '',
    dietary: '',
  })

  /** Update a single form field by its `name` attribute */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  /** Validate required fields and submit to Firestore */
  const handleSubmit = async () => {
    if (!form.fullName || !form.attendance) return
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

  return { form, submitted, submitting, handleChange, handleSubmit }
}
