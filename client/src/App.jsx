import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard"
import Expenses from "./pages/Expenses"
import Tasks from "./pages/Tasks"

function App() {
  const [activePage, setActivePage] = useState("Dashboard")

  return (
    <div className="flex min-h-screen bg-[#070B14] text-white">
      
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <div className="flex-1 flex flex-col">
        
        <Header activePage={activePage} />

        <div className="flex-1">
          {activePage === "Dashboard" && <Dashboard />}
          {activePage === "Expenses" && <Expenses />}
          {activePage === "Tasks" && <Tasks/>}
        </div>

      </div>

    </div>
  )
}

export default App