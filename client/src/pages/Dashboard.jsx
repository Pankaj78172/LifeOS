import StatCard from "../components/StatCard"
import { useEffect, useState } from "react"
import ExpenseChart from "../components/ExpenseChart"
import { getExpenses } from "../services/api"

function Dashboard() {
  const [expenses, setExpenses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getExpenses()
      .then(data => {
        setExpenses(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  const totalExpenses = expenses.reduce((sum, item) => {
    return sum + Number(item.amount || 0)
  }, 0)

  const totalTransactions = expenses.length

  const chartData = Object.values(
    expenses.reduce((acc, item) => {
      const category = item.category

      if (!acc[category]) {
        acc[category] = { category, amount: 0 }
      }

      acc[category].amount += Number(item.amount || 0)

      return acc
    }, {})
  )

  if (loading) {
    return (
      <main className="flex-1 flex items-center justify-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-violet-500"></div>
      </main>
    )
  }

  return (
    <main className="flex-1 p-8">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <StatCard title="Total Expenses" value={`$${totalExpenses}`} />
        <StatCard title="Transactions" value={totalTransactions} />
        <StatCard title="Habit Streak" value="0 days" />
      </section>
      <ExpenseChart data={chartData} />
    </main>
  )
}

export default Dashboard