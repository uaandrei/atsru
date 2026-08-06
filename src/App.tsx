import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageProvider'
import { HomePage } from './pages/HomePage'
import { WeddingPage } from './pages/wedding'
import { WeddingPicturesPage } from './pages/wedding-pictures'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LanguageProvider>
              <HomePage />
            </LanguageProvider>
          }
        />
        <Route path="/wedding" element={<WeddingPage />} />
        <Route path="/wedding-pictures" element={<WeddingPicturesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
