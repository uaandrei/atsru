import { useRef, useState } from 'react'
import { weddingColors } from '../../wedding/components/weddingTheme'
import type { PicturesTranslation } from '../picturesTranslations'
import type { UploadState } from './useGuestUpload'

type PictureUploadProps = {
  state: UploadState
  upload: (file: File) => void
  reset: () => void
  t: PicturesTranslation
}

/** Red used for the heart shown after a successful upload */
const HEART_RED = '#d64545'

/** A single icon button: pick a photo, watch it upload, get a heart back */
export function PictureUpload({ state, upload, reset, t }: PictureUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)

  // Only ever the first file — one image per upload
  const handleFiles = (files: FileList | null) => {
    const file = files?.[0]
    if (file) upload(file)
  }

  const isError = state.status === 'error'
  const accent = isError ? weddingColors.error : weddingColors.primary

  if (state.status === 'uploading') {
    return (
      <Circle style={{ borderColor: weddingColors.outlineVariant }}>
        <span
          className="block h-16 w-16 rounded-full animate-spin"
          role="progressbar"
          aria-label={t.uploadingAria}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(state.progress * 100)}
          style={{
            border: `4px solid ${weddingColors.surfaceContainerHigh}`,
            borderTopColor: weddingColors.primary,
          }}
        />
      </Circle>
    )
  }

  if (state.status === 'done') {
    return (
      <button
        type="button"
        onClick={reset}
        aria-label={t.doneAria}
        className="rounded-full transition-transform hover:scale-105 active:scale-95"
      >
        <Circle style={{ borderColor: HEART_RED }}>
          <HeartIcon />
        </Circle>
      </button>
    )
  }

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={event => {
          handleFiles(event.target.files)
          event.target.value = ''
        }}
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        aria-label={isError ? t.errorAria : t.chooseAria}
        onDragOver={event => {
          event.preventDefault()
          setDragging(true)
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={event => {
          event.preventDefault()
          setDragging(false)
          handleFiles(event.dataTransfer.files)
        }}
        className="rounded-full transition-transform hover:scale-105 active:scale-95"
      >
        <Circle
          style={{
            borderColor: accent,
            background: dragging ? weddingColors.surfaceContainer : weddingColors.surfaceContainerLowest,
          }}
        >
          <CameraIcon color={accent} />
        </Circle>
      </button>
    </>
  )
}

/* ------------------------------------------------------------------ */

function Circle({ children, style }: { children: React.ReactNode; style: React.CSSProperties }) {
  return (
    <span
      className="flex h-40 w-40 md:h-48 md:w-48 items-center justify-center rounded-full border-2 transition-colors"
      style={{
        background: weddingColors.surfaceContainerLowest,
        boxShadow: '0 10px 40px -10px rgba(21,29,26,0.15)',
        ...style,
      }}
    >
      {children}
    </span>
  )
}

/** Material Symbols "add_a_photo" */
function CameraIcon({ color }: { color: string }) {
  return (
    <svg
      width={80}
      height={80}
      viewBox="0 -960 960 960"
      fill={color}
      aria-hidden
      focusable="false"
    >
      <path d="M440-440ZM120-120q-33 0-56.5-23.5T40-200v-480q0-33 23.5-56.5T120-760h126l74-80h240v80H355l-73 80H120v480h640v-360h80v360q0 33-23.5 56.5T760-120H120Zm640-560v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM440-260q75 0 127.5-52.5T620-440q0-75-52.5-127.5T440-620q-75 0-127.5 52.5T260-440q0 75 52.5 127.5T440-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Z" />
    </svg>
  )
}

/** Material Symbols "favorite", filled */
function HeartIcon() {
  return (
    <svg width={88} height={88} viewBox="0 -960 960 960" fill={HEART_RED} aria-hidden focusable="false">
      <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 24.5t81 67.5q34-43 81-67.5t99-24.5q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
    </svg>
  )
}
