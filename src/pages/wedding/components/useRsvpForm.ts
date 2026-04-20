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

/**
 * Manages RSVP form state and submission to Firebase.
 *
 * Submissions are stored in the Firestore 'invitations' collection with
 * the form fields plus a `createdAt` ISO timestamp.
 */
export function useRsvpForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState<RsvpFormData>({
    attendance: '',
    names: '',
    accommodation: '',
    dietary: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.attendance || (form.attendance === 'attending' && !form.names)) return
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

  return { form, submitted, submitting, handleChange, handleSubmit }
}
