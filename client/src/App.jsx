import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { LoginPage } from './pages/LoginPage'
import { Navbar } from './components/ui/Navbar'
import { HeroSection } from './pages/student/HeroSection'
import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import { RouterProvider } from 'react-router-dom'
import { Courses } from './pages/student/Courses'
import { Profile } from './pages/student/Profile'
import { MyLearning } from './pages/student/MyLearning'
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {path:"/",
        element:<>
        <HeroSection/>
        <Courses/>
        {/* courses */}
        </>},
        {
          path:"/login",
          element:<LoginPage/>
        },
        {
          path:"/profile",
          element:<Profile/>
        },
        {
          path:"/my-learning",
          element:<MyLearning/>
        }
    ]
  }
])
function App() {

  return (
    <main>
    <RouterProvider router={appRouter}/>
      
    </main>
  )
}

export default App
