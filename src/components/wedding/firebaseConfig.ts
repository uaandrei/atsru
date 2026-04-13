import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAJuHuhEo9LQcy-4K5Bdsap-Is8EAjilCg",
  authDomain: "atsru-8d879.firebaseapp.com",
  projectId: "atsru-8d879",
  storageBucket: "atsru-8d879.firebasestorage.app",
  messagingSenderId: "649323196164",
  appId: "1:649323196164:web:e4e74c6efa9fb3fb106a51",
  measurementId: "G-MMKE6KKX10",
}

const app = initializeApp(firebaseConfig)

/** Firestore database instance for the wedding RSVP collection */
export const db = getFirestore(app)
