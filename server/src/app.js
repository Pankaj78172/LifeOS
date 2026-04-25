const express = require('express')
const cors = require('cors')

const expnseRouter = require('./routes/expenseRoutes')

const app = express()

app.use(cors())

app.use(express.json())

app.use("/api/expenses", expnseRouter)

app.get("/", (req, res)=>{
    res.send("Server is running")
})





module.exports = app









