import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Expenses from './pages/Expenses'

function App() {
  return (
    <div className='flex min-h-screen bg-zinc-900 text-white'>
      <Sidebar/>
      {/* <Dashboard/> */}
      <Expenses/>
    </div>
  )
}

export default App