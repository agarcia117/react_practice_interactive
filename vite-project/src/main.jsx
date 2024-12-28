import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './ReactState/StatePractice/index.css'
import App from './ReactState/StatePractice/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
