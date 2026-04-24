import StatCard from "../components/StatCard";


function Dashboard(){
    return(
    <main className="flex-1 p-8">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>


        <section className="grid grid-cols-3 gap-5">
        <StatCard title="Total Expenses" value="$0" />
        <StatCard title="Pending Tasks" value="0" />
        <StatCard title="Habit Streak" value="0 days" />
        </section>
    </main>
    )

}

export default Dashboard