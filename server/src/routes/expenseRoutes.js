const express = require('express')

const router = express.Router()

const{
    getExpenses,
    addExpense,
    deleteExpense  ,
    updateExpense
} = require('../controllers/expenseController')
const { route } = require('../app')

const { protect } = require("../middleware/authMiddleware")

router.get("/", protect, getExpenses)
router.post("/", protect, addExpense)
router.put("/:id", protect, updateExpense)
router.delete("/:id", protect, deleteExpense)

module.exports = router