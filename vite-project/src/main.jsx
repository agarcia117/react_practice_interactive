import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './DataDriven-React/TravelJournal/index.css'
import App from './DataDriven-React/TravelJournal/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
