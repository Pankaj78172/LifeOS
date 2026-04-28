const express = require('express')
const cors = require('cors')
const authRoutes = require("./routes/authRoutes")

const expnseRouter = require('./routes/expenseRoutes')
const taskRoutes = require("./routes/taskRoutes")

const app = express()


app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://your-frontend-url.vercel.app"
  ],
  credentials: true
}))

app.use(express.json())

app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err)

  res.status(500).json({
    message: "Server error",
    error: err.message
  })
})

app.use("/api/expenses", expnseRouter)
app.use("/api/tasks", taskRoutes)
app.use("/api/auth", authRoutes)

app.get("/", (req, res)=>{
    res.send("Server is running")
})

app.get("/api/test", (req, res) => {
  res.json({ message: "API test works" })
})




module.exports = app









