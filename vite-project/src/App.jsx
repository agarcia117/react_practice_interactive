import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Page from './Static Pages/Fragments/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Page/>
    </>
  )
}

export default App
