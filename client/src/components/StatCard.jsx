function StatCard({title, value}){
    return(
    <div className="bg-[#0D1320] border border-[#1F2A44] rounded-2xl p-5 shadow-lg">
      <p className="text-slate-400 text-sm">{title}</p>
      <h3 className="text-2xl font-bold mt-2">{value}</h3>
    </div>
    )
}

export default StatCard