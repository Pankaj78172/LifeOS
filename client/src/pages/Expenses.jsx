import { useState } from "react"


function Expenses() {
    const [expense, setExpense] = useState({
        amount: "",
        category: "",
        date: "",
        note: ""
    })

    const [expenses, setExpenses] = useState([])

    function handleSubmit(e) {
        e.preventDefault()

        setExpenses([...expenses, expense])

        setExpense({
            amount: "",
            category: "",
            date: "",
            note: ""
        })
    }



    return (
        <main className="flex-1 p-8">
            <h2 className="text-3xl font-bold mb-6">Expenses</h2>
            <form className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 mb-6">
                <div className="grid grid-cols-2 gap-4">
                    <input
                        className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2"
                        placeholder="Amount"
                        value={expense.amount}
                        onChange={(e) =>
                            setExpense({ ...expense, amount: e.target.value })
                        }
                    />

                    <input className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2" placeholder="Category"
                        value={expense.category}
                        onChange={(e) => {
                            setExpense({ ...expense, category: e.target.value })
                        }} />

                    <input className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2" type="date"
                        value={expense.date}
                        onChange={(e) => {
                            setExpense({ ...expense, date: e.target.value })
                        }} />

                    <input className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2" placeholder="Note"
                        value={expense.note}
                        onChange={(e) => {
                            setExpense({ ...expense, note: e.target.note })
                        }} />
                </div>

                <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg font-medium">
                    Add Expense
                </button>
            </form>
            <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                <h3 className="text-xl font-semibold mb-4">Recent Expenses</h3>

                {expenses.length === 0 ? (
                    <p className="text-zinc-400">No expenses added yet.</p>
                ) : (
                    <div className="space-y-3">
                        {expenses.map((item, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center bg-zinc-800 rounded-lg p-4"
                            >
                                <div>
                                    <p className="font-medium">{item.category}</p>
                                    <p className="text-sm text-zinc-400">{item.note}</p>
                                </div>

                                <div className="text-right">
                                    <p className="font-bold">${item.amount}</p>
                                    <p className="text-sm text-zinc-400">{item.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </main>
    )
}

export default Expenses