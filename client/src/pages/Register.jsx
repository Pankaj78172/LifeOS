import { useState } from "react"
import { registerUser } from "../services/api"

function Register({ setAuthPage, setVerifyEmail }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })

    async function handleSubmit(e) {
        e.preventDefault()

        const data = await registerUser(form)

        if (data.message) {
            alert(data.message)

            if (data.message.includes("verify")) {
                setVerifyEmail(form.email)
                setAuthPage("verify")
            }
        } else {
            alert("Registration failed")
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#070B14] text-white">
            <form
                onSubmit={handleSubmit}
                className="bg-[#0D1320] p-6 rounded-xl border border-[#1F2A44] w-80"
            >
                <h2 className="text-xl font-bold mb-4">Register</h2>

                <input
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full mb-3 px-3 py-2 bg-[#111A2E] border border-[#263554] rounded"
                />

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
                    Create Account
                </button>

                <p className="text-slate-400 text-sm mt-5 text-center">
                    Already have an account?{" "}
                    <button
                        type="button"
                        onClick={() => setAuthPage("login")}
                        className="text-violet-400 hover:underline"
                    >
                        Login
                    </button>
                </p>
            </form>
        </div>
    )
}

export default Register