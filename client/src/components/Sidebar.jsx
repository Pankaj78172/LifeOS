function Sidebar(){
    const menuItems = ["Dashboard", "Expenses", "Tasks", "Habits"]
    return(
        <>
        <aside className="w-64 min-h-screen bg-zinc-900 text-white p-6 border-r border-zinc-800">

         <h1 className="text-2xl font-bold mb-10">LifeOS</h1>

        <nav className="space-y-3">
            {
                menuItems.map((item) => (
                                        <p
                                            key={item}
                                            className="px-4 py-2 rounded-lg text-zinc-400 hover:bg-zinc-800 hover:text-white cursor-pointer"
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