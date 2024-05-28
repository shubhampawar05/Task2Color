import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorChnager from './ColorChanger/ColorChnager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ColorChnager/>
    </>
  )
}

export default App
