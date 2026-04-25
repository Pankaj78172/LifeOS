function Sidebar() {
    const menuItems = ["Dashboard", "Expenses", "Tasks", "Habits"]
    return (
        <>
            <aside className="w-64 min-h-screen bg-[#0D1320] text-white p-6 border-r border-[#1F2A44]">

                <h1 className="text-2xl font-bold mb-10">
                    Life<span className="text-violet-500">OS</span>
                </h1>

                <nav className="space-y-3">
                    {
                        menuItems.map((item) => (
                            <p
                                key={item}
                                className="px-4 py-2 rounded-lg text-slate-400 hover:bg-[#172033] hover:text-white cursor-pointer"
                            >
                                {item}
                            </p>
                        ))
                    }
                </nav>

            </aside>
        </>
    );
}

export default Sidebar