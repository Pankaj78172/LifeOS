import { useState, useEffect } from "react"
import { verifyUser, resendCode } from "../services/api"

function Verify({ email, setAuthPage }) {
  const [code, setCode] = useState("")
  const [timer, setTimer] = useState(60)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [timer])

  async function handleVerify(e) {
    e.preventDefault()
    setLoading(true)

    const data = await verifyUser({ email, code })

    setLoading(false)

    if (data.message.includes("success")) {
      alert("Verified successfully")
      setAuthPage("login")
    } else {
      alert(data.message)
    }
  }

  async function handleResend() {
    const data = await resendCode({ email })

    alert(`New code: ${data.code}`) // DEV ONLY

    setTimer(60)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#070B14] text-white">
      <form
        onSubmit={handleVerify}
        className="bg-[#0D1320] p-6 rounded-xl border border-[#1F2A44] w-80"
      >
        <h2 className="text-xl font-bold mb-4">Verify Email</h2>

        <p className="text-sm mb-4 text-gray-400">
          Enter the 6-digit code
        </p>

        <input
          placeholder="Enter code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full mb-4 px-3 py-2 bg-[#111A2E] border border-[#263554] rounded"
        />

        <button
          disabled={loading}
          className="w-full bg-violet-600 py-2 rounded mb-3"
        >
          {loading ? "Verifying..." : "Verify"}
        </button>

        <div className="text-center text-sm">
          {timer > 0 ? (
            <p className="text-gray-400">
              Resend in {timer}s
            </p>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              className="text-violet-400 hover:underline"
            >
              Resend Code
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default Verify