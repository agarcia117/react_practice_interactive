import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './DataDriven-React/Props/index.css'
import App from './DataDriven-React/Props/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
