const express = require("express")
const cors = require("cors")
const authRoutes = require("./routes/authRoutes")
const expnseRouter = require("./routes/expenseRoutes")
const taskRoutes = require("./routes/taskRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Server is running")
})

app.get("/api/test", (req, res) => {
  res.json({ message: "API test works" })
})

app.use("/api/expenses", expnseRouter)
app.use("/api/tasks", taskRoutes)
app.use("/api/auth", authRoutes)

// keep this LAST
app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err)

  res.status(500).json({
    message: "Server error",
    error: err.message
  })
})

module.exports = app