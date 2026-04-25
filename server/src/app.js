const express = require('express')
const cors = require('cors')
const authRoutes = require("./routes/authRoutes")

const expnseRouter = require('./routes/expenseRoutes')
const taskRoutes = require("./routes/taskRoutes")

const app = express()

app.use(cors())

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









