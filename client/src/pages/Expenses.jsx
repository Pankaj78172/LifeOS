import { useState, useEffect } from "react"


function Expenses() {
    const [expense, setExpense] = useState({
        amount: "",
        category: "",
        date: "",
        note: ""
    })

    useEffect(() => {
        fetch("http://localhost:5000/api/expenses")
            .then(res => res.json())
            .then(data => setExpenses(data))
            .catch(err => console.error(err))
    }, [])


    const [expenses, setExpenses] = useState([])
    const [editId, setEditId] = useState(null)

    function handleEdit(item) {
        setExpense(item)
        setEditId(item._id)
    }

    async function handleDelete(id) {
        try {
            await fetch(`http://localhost:5000/api/expenses/${id}`, {
                method: "DELETE"
            })

            setExpenses(expenses.filter((item) => item._id !== id))
        } catch (error) {
            console.error(error)
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            let response

            if (editId) {
                response = await fetch(`http://localhost:5000/api/expenses/${editId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(expense)
                })
            } else {
                response = await fetch("http://localhost:5000/api/expenses", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(expense)
                })
            }

            const data = await response.json()

            if (editId) {
                setExpenses(expenses.map(e => e._id === editId ? data : e))
                setEditId(null)
            } else {
                setExpenses([...expenses, data])
            }

            setExpense({
                amount: "",
                category: "",
                date: "",
                note: ""
            })

        } catch (error) {
            console.error(error)
        }
    }



    return (
        <main className="flex-1 p-8">
            <div className="mb-6">
                <h2 className="text-3xl font-bold">Expenses</h2>
                <p className="text-slate-400 mt-1">
                    Track your spending and manage your daily expenses.
                </p>
            </div>
            <form onSubmit={handleSubmit} className="bg-[#0D1320] border-[#1F2A44] rounded-xl p-5 mb-6">
                <div className="grid grid-cols-2 gap-4">
                    <input
                        className="bg-[#111A2E] border-[#263554] rounded-lg px-4 py-2 text-white placeholder:text-slate-500 outline-none focus:border-violet-500"
                        placeholder="Amount"
                        value={expense.amount}
                        onChange={(e) =>
                            setExpense({ ...expense, amount: e.target.value })
                        }
                    />

                    <input className="bg-[#111A2E] border-[#263554] rounded-lg px-4 py-2 text-white placeholder:text-slate-500 outline-none focus:border-violet-500" placeholder="Category"
                        value={expense.category}
                        onChange={(e) => {
                            setExpense({ ...expense, category: e.target.value })
                        }} />

                    <input className="bg-[#111A2E] border-[#263554] rounded-lg px-4 py-2 text-white placeholder:text-slate-500 outline-none focus:border-violet-500" type="date"
                        value={expense.date}
                        onChange={(e) => {
                            setExpense({ ...expense, date: e.target.value })
                        }} />

                    <input className="bg-[#111A2E] border-[#263554] rounded-lg px-4 py-2 text-white placeholder:text-slate-500 outline-none focus:border-violet-500" placeholder="Note"
                        value={expense.note}
                        onChange={(e) => {
                            setExpense({ ...expense, note: e.target.value })
                        }} />
                </div>

                <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg font-medium">
                    {editId ? "Update Expense" : "Add Expense"}
                </button>
            </form>
            <section className="bg-[#0D1320] border-[#1F2A44] rounded-xl p-5">
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
                                <button
                                    onClick={() => handleDelete(item._id)}
                                    className="text-red-400 hover:text-red-500"
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={() => handleEdit(item)}
                                    className="text-blue-400 hover:text-blue-500"
                                >
                                    Edit
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </main>
    )
}

export default Expenses