const express = require('express')
const cors = require('cors')
const authRoutes = require("./routes/authRoutes")

const expnseRouter = require('./routes/expenseRoutes')
const taskRoutes = require("./routes/taskRoutes")

const app = express()

const cors = require("cors")

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://your-frontend-url.vercel.app"
  ],
  credentials: true
}))

app.use(express.json())

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









