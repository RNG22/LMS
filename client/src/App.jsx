import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { LoginPage } from './pages/LoginPage'
import { Navbar } from './components/ui/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <LoginPage/>
      
    </>
  )
}

export default App
