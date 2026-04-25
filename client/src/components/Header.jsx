import { Search, Bell, User } from "lucide-react"


function Header({ activePage }) {
    return (
        <div className="h-16 border-b border-[#1F2A44] flex items-center justify-between px-6 bg-[#0D1320]">

            <div className="text-lg font-semibold">
                {activePage}
            </div>

            <div className="flex items-center gap-4">

                <div className="flex items-center gap-4">

                    {/* SEARCH */}
                    <div className="flex items-center bg-[#111A2E] border border-[#263554] rounded-lg px-3 py-1">
                        <Search size={16} className="text-slate-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent text-sm text-white placeholder:text-slate-500 outline-none"
                        />
                    </div>

                    {/* NOTIFICATION */}
                    <button className="relative text-slate-400 hover:text-white transition">
                        <Bell size={18} />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    {/* PROFILE */}
                    <button className="w-8 h-8 rounded-full bg-[#111A2E] border border-[#263554] flex items-center justify-center hover:bg-[#1A2338] transition">
                        <User size={16} className="text-slate-300" />
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Header