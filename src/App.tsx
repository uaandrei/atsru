import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageProvider'
import { HomePage } from './pages/HomePage'
import WeddingPage from './pages/Wedding'

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
      </Routes>
    </BrowserRouter>
  )
}

export default App
