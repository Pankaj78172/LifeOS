import { useState, useEffect } from "react"
import { getTasks, createTask, deleteTask, toggleTask } from "../services/api"

function Tasks() {
    const [task, setTask] = useState({
        title: "",
        priority: "",
        dueDate: ""
    })

    useEffect(() => {
        getTasks().then(data => setTasks(data))
    }, [])



    const [tasks, setTasks] = useState([])

    async function handleSubmit(e) {
        e.preventDefault()

        const newTask = await createTask(task)

        setTasks([...tasks, newTask])

        setTask({
            title: "",
            priority: "",
            dueDate: ""
        })
    }

    async function handleDelete(id) {
        await deleteTask(id)
        setTasks(tasks.filter(t => t._id !== id))
    }

    async function handleToggle(id) {
        const updated = await toggleTask(id)

        setTasks(tasks.map(t => t._id === id ? updated : t))
    }

    return (
        <main className="flex-1 p-8">

            <div className="mb-6">
                <h2 className="text-3xl font-bold">Tasks</h2>
                <p className="text-slate-400 mt-1">
                    Manage your daily tasks and stay productive.
                </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="bg-[#0D1320] border border-[#1F2A44] rounded-xl p-5 mb-6">

                <div className="grid grid-cols-2 gap-4">

                    <input
                        placeholder="Task title"
                        value={task.title}
                        onChange={(e) => setTask({ ...task, title: e.target.value })}
                        className="bg-[#111A2E] border border-[#263554] rounded-lg px-4 py-2 text-white outline-none"
                    />

                    <select
                        value={task.priority}
                        onChange={(e) => setTask({ ...task, priority: e.target.value })}
                        className="bg-[#111A2E] border border-[#263554] rounded-lg px-4 py-2 text-white outline-none"
                    >
                        <option value="">Priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>

                    <input
                        type="date"
                        value={task.dueDate}
                        onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
                        className="bg-[#111A2E] border border-[#263554] rounded-lg px-4 py-2 text-white outline-none [color-scheme:dark]"
                    />

                </div>

                <button className="mt-4 bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded-lg font-medium">
                    Add Task
                </button>

            </form>

            {/* LIST */}
            <div className="space-y-3">

                {tasks.length === 0 ? (
                    <div className="text-slate-400 text-center py-10">
                        No tasks yet
                    </div>
                ) : (
                    tasks.map((item, index) => (
                        <div key={index} className="bg-[#0D1320] border border-[#1F2A44] rounded-lg p-4 flex justify-between">

                            <div>
                                <p className="font-medium">{item.title}</p>
                                <p className="text-sm text-slate-400">{item.priority}</p>
                            </div>

                            <div className="text-sm text-slate-400">
                                {item.dueDate}
                            </div>
                            <div className="flex items-center gap-3">

                                <input
                                    type="checkbox"
                                    checked={item.completed}
                                    onChange={() => handleToggle(item._id)}
                                />

                                <p className={`${item.completed ? "line-through text-slate-500" : ""}`}>
                                    {item.title}
                                </p>

                            </div>

                            <button
                                onClick={() => handleDelete(item._id)}
                                className="text-red-400 hover:text-red-500"
                            >
                                Delete
                            </button>

                        </div>
                    ))
                )}

            </div>

        </main>
    )
}

export default Tasks