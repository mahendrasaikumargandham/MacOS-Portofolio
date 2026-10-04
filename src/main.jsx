import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './appearance.css'
import App from './App.jsx'
import { initializeAppearance } from './store/appearance'

const cleanupAppearance = initializeAppearance();
if (import.meta.hot) import.meta.hot.dispose(cleanupAppearance);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
