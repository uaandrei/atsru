import type { WeddingLocale } from '../wedding/weddingTranslations'

/**
 * The page shows no visible copy — these strings exist only as accessible
 * labels for the upload button and its states.
 */
export type PicturesTranslation = {
  chooseAria: string
  uploadingAria: string
  doneAria: string
  errorAria: string
}

export const picturesTranslations: Record<WeddingLocale, PicturesTranslation> = {
  ro: {
    chooseAria: 'Alege o poză',
    uploadingAria: 'Se încarcă poza',
    doneAria: 'Poza a fost încărcată',
    errorAria: 'Încărcarea nu a reușit, încearcă din nou',
  },
  hu: {
    chooseAria: 'Válassz egy képet',
    uploadingAria: 'Kép feltöltése folyamatban',
    doneAria: 'A kép feltöltve',
    errorAria: 'A feltöltés nem sikerült, próbáld újra',
  },
}
