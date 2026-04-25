const Expense = require('../models/Expense')


const getExpenses = async (req, res) => {
    const expenses = await Expense.find({ user: req.user.id })
    res.json(expenses)

}


const addExpense = async (req, res) => {
    const newExpense = await Expense.create({
        ...req.body,
        user: req.user.id
    })

    res.status(201).json(newExpense)

}

const deleteExpense = async (req, res) => {

    const { id } = req.params

    await Expense.findByIdAndDelete(id)

    res.json({ message: "Expense deleted" })

}

const updateExpense = async (req, res) => {
    const { id } = req.params

    const update = await Expense.findByIdAndUpdate(id, req.body, { new: true })

    res.json(update)
}


module.exports = {
    getExpenses,
    addExpense,
    deleteExpense,
    updateExpense
}

