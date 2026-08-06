import { useState } from 'react'
import { ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../../wedding/components/firebaseConfig'

/** Storage folder holding guest uploads, in the atsru-8d879.firebasestorage.app bucket */
const FOLDER = 'wedding-pictures'
/** Keep in sync with the create rule in cloud-storage.rules */
export const MAX_UPLOAD_BYTES = 25 * 1024 * 1024

export type UploadState =
  | { status: 'idle' }
  /** progress is 0–1 */
  | { status: 'uploading'; progress: number }
  | { status: 'done' }
  | { status: 'error' }

/**
 * Uploads a single guest photo to Cloud Storage.
 *
 * One image at a time: while an upload is in flight further files are
 * ignored. Nothing is ever read back — the bucket stays write-only for
 * guests, and the page has no gallery.
 */
export function useGuestUpload() {
  const [state, setState] = useState<UploadState>({ status: 'idle' })

  const upload = (file: File) => {
    if (state.status === 'uploading') return

    // Non-images and oversized files are rejected the same way the storage
    // rules reject them — the UI only ever shows a single error state
    if (!file.type.startsWith('image/') || file.size > MAX_UPLOAD_BYTES) {
      setState({ status: 'error' })
      return
    }

    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
    const dot = file.name.lastIndexOf('.')
    const extension = dot > 0 ? file.name.slice(dot).toLowerCase() : ''
    const task = uploadBytesResumable(ref(storage, `${FOLDER}/${id}${extension}`), file, {
      contentType: file.type,
    })

    setState({ status: 'uploading', progress: 0 })

    task.on(
      'state_changed',
      snapshot => {
        const progress = snapshot.totalBytes > 0 ? snapshot.bytesTransferred / snapshot.totalBytes : 0
        setState({ status: 'uploading', progress })
      },
      err => {
        console.error('Failed to upload wedding picture:', err)
        setState({ status: 'error' })
      },
      () => setState({ status: 'done' }),
    )
  }

  return { state, upload, reset: () => setState({ status: 'idle' }) }
}
