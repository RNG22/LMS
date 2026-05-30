import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        {/* outlet used for rendering child routes */}
        <Outlet />
      </div>
    </div>
  )
}
