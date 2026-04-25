import { LayoutDashboard, Wallet, CheckSquare, Repeat } from "lucide-react"




function Sidebar({ activePage, setActivePage }) {
    const menuItems = [
        { name: "Dashboard", icon: LayoutDashboard },
        { name: "Expenses", icon: Wallet },
        { name: "Tasks", icon: CheckSquare },
        { name: "Habits", icon: Repeat }
    ]
    return (
        <>
            <aside className="w-64 min-h-screen bg-[#0D1320] text-white p-6 border-r border-[#1F2A44]">

                <h1 className="text-2xl font-bold mb-10">
                    Life<span className="text-violet-500">OS</span>
                </h1>

                <nav className="space-y-3">
                    {menuItems.map((item) => {
                        const Icon = item.icon

                        return (
                            <p
                                key={item.name}
                                onClick={() => setActivePage(item.name)}
                                className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition ${activePage === item.name
                                        ? "bg-violet-600/20 text-violet-300 border border-violet-500/30"
                                        : "text-slate-400 hover:bg-[#172033] hover:text-white"
                                    }`}
                            >
                                <Icon size={18} />
                                {item.name}
                            </p>
                        )
                    })}
                </nav>

            </aside>
        </>
    );
}

export default Sidebar