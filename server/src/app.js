const express = require('express')
const cors = require('cors')

const expnseRouter = require('./routes/expenseRoutes')
const taskRoutes = require("./routes/taskRoutes")

const app = express()

app.use(cors())

app.use(express.json())

app.use("/api/expenses", expnseRouter)
app.use("/api/tasks", taskRoutes)

app.get("/", (req, res)=>{
    res.send("Server is running")
})





module.exports = app









