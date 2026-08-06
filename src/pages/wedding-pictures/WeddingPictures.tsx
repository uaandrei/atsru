import { useSearchParams } from 'react-router-dom'
import { weddingColors } from '../wedding/components/weddingTheme'
import { getWeddingLocale } from '../wedding/weddingTranslations'
import { picturesTranslations } from './picturesTranslations'
import { PictureUpload } from './components/PictureUpload'
import { useGuestUpload } from './components/useGuestUpload'

/**
 * Guest photo page — a single icon button, no copy at all.
 *
 * Tapping it picks one image, which is uploaded to the `wedding-pictures/`
 * folder of the atsru-8d879.firebasestorage.app bucket; a red heart confirms
 * it arrived. Nothing is ever read back, so there is no gallery. The `?lang`
 * param only selects the language of the accessible labels.
 */
const WeddingPictures = () => {
  const [searchParams] = useSearchParams()
  const locale = getWeddingLocale(searchParams)
  const t = picturesTranslations[locale]
  const upload = useGuestUpload()

  return (
    <div
      className="wedding-pictures-page min-h-screen flex items-center justify-center p-6"
      lang={locale}
      style={{ background: weddingColors.background, color: weddingColors.onBackground }}
    >
      <PictureUpload state={upload.state} upload={upload.upload} reset={upload.reset} t={t} />
    </div>
  )
}

export default WeddingPictures
