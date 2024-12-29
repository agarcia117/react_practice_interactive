import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './ReactState/ChefClaude/index.css'
import App from './ReactState/ChefClaude/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
