import { useState } from "react"
import { loginUser } from "../services/api"

function Login({ setUser }) {
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  async function handleSubmit(e) {
    e.preventDefault()

    const data = await loginUser(form)

    if (data.token) {
      localStorage.setItem("token", data.token)
      setUser(data.user)
    } else {
      alert(data.message)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#070B14] text-white">
      <form onSubmit={handleSubmit} className="bg-[#0D1320] p-6 rounded-xl border border-[#1F2A44] w-80">

        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full mb-3 px-3 py-2 bg-[#111A2E] border border-[#263554] rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full mb-4 px-3 py-2 bg-[#111A2E] border border-[#263554] rounded"
        />

        <button className="w-full bg-violet-600 py-2 rounded">
          Login
        </button>

      </form>
    </div>
  )
}

export default Login