const express = require('express')

const router = express.Router()

const{
    getExpenses,
    addExpenses,
    deleteExpense  ,
    updateExpense
} = require('../controllers/expenseController')
const { route } = require('../app')


router.get('/', getExpenses)

router.post('/', addExpenses)

router.delete('/:id', deleteExpense)

router.put('/:id', updateExpense)

module.exports = router