import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Vergil from './components/Vergil'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Body/>
     <Vergil/>
     </>
    
  )
}

export default App
