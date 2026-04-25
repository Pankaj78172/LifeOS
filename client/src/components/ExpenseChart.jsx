import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts"

function ExpenseChart({ data }) {
  const COLORS = ["#8b5cf6", "#3b82f6", "#06b6d4", "#10b981", "#f59e0b"]

  return (
    <div className="bg-[#0D1320] border border-[#1F2A44] rounded-2xl p-5 mt-6">
      <h3 className="text-xl font-semibold mb-4">Expenses by Category</h3>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="amount"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ExpenseChart