import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { LoginPage } from './pages/LoginPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoginPage/>
       {/* <Button>
      Tailwind Working
    </Button>
    <h1 className="text-3xl font-bold text-red-500">
      Tailwind Working
    </h1> */}
    </>
  )
}

export default App
